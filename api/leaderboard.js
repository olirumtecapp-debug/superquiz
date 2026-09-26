// api/leaderboard.js — Vercel Serverless Function para o Ranking Global do Quiz Master
// Integração direta com Google Cloud Firestore (Projeto: expedicao-brasil)

const API_KEY = process.env.FIREBASE_API_KEY || 'AIzaSyBUHGXoUMg0bV3EdmfpfmVAEYMLQceqkQc';
const PROJECT_ID = process.env.FIREBASE_PROJECT_ID || 'expedicao-brasil';
const COLLECTION = 'quizmaster_leaderboard';

const FIRESTORE_BASE_URL = `https://firestore.googleapis.com/v1/projects/${PROJECT_ID}/databases/(default)/documents`;

export default async function handler(req, res) {
  // Configuração de CORS para permitir requisições do app e PWA
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status(204).end();
  }

  // 1. Obter Ranking Global (GET)
  if (req.method === 'GET') {
    try {
      const mode = (req.query.mode || 'survival').toLowerCase();

      const queryUrl = `${FIRESTORE_BASE_URL}:runQuery?key=${API_KEY}`;
      const firestoreRes = await fetch(queryUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          structuredQuery: {
            from: [{ collectionId: COLLECTION }],
            orderBy: [{ field: { fieldPath: 'score' }, direction: 'DESCENDING' }],
            limit: 100
          }
        })
      });

      if (!firestoreRes.ok) {
        const errText = await firestoreRes.text();
        console.error('[Leaderboard API] Erro ao consultar Firestore:', errText);
        return res.status(500).json({ error: 'Erro ao consultar ranking.' });
      }

      const rows = await firestoreRes.json();
      
      const entries = [];
      for (const item of rows) {
        if (!item.document || !item.document.fields) continue;
        const f = item.document.fields;
        
        const itemMode = (f.mode?.stringValue || 'survival').toLowerCase();
        // Filtrar pelo modo selecionado (survival ou quick/geral)
        if (mode && itemMode !== mode) continue;

        const score = parseInt(f.score?.integerValue || f.score?.doubleValue || 0, 10);
        const name = (f.name?.stringValue || 'Jogador Anônimo').trim().slice(0, 25);
        const details = f.details?.stringValue || '';
        const date = f.date?.stringValue || new Date().toLocaleDateString('pt-BR');

        entries.push({
          id: item.document.name.split('/').pop(),
          name,
          score,
          mode: itemMode,
          details,
          date
        });
      }

      // Ordenar por pontuação (maior primeiro)
      entries.sort((a, b) => b.score - a.score);

      // Cache leve na Vercel (10 segundos para revalidação suave)
      res.setHeader('Cache-Control', 's-maxage=10, stale-while-revalidate=30');
      return res.status(200).json(entries.slice(0, 50));
    } catch (err) {
      console.error('[Leaderboard API] Exceção:', err);
      return res.status(500).json({ error: err.message });
    }
  }

  // 2. Registrar Novo Recorde (POST)
  if (req.method === 'POST') {
    try {
      const body = typeof req.body === 'string' ? JSON.parse(req.body) : (req.body || {});
      const name = (body.name || 'Jogador Anônimo').trim().slice(0, 25) || 'Jogador Anônimo';
      const score = Math.max(0, parseInt(body.score || 0, 10));
      const mode = (body.mode || 'survival').toLowerCase();
      const details = (body.details || '').slice(0, 50);
      const date = body.date || new Date().toLocaleDateString('pt-BR');

      // Validar score razoável
      if (isNaN(score) || score <= 0) {
        return res.status(400).json({ error: 'Pontuação inválida.' });
      }

      const postUrl = `${FIRESTORE_BASE_URL}/${COLLECTION}?key=${API_KEY}`;
      const firestoreRes = await fetch(postUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          fields: {
            name: { stringValue: name },
            score: { integerValue: String(score) },
            mode: { stringValue: mode },
            details: { stringValue: details },
            date: { stringValue: date },
            createdAt: { timestampValue: new Date().toISOString() }
          }
        })
      });

      if (!firestoreRes.ok) {
        const errText = await firestoreRes.text();
        console.error('[Leaderboard API] Erro ao salvar pontuação:', errText);
        return res.status(500).json({ error: 'Erro ao registrar pontuação no Firestore.' });
      }

      const createdDoc = await firestoreRes.json();
      return res.status(200).json({
        success: true,
        id: createdDoc.name?.split('/').pop(),
        entry: { name, score, mode, details, date }
      });
    } catch (err) {
      console.error('[Leaderboard API] Exceção no POST:', err);
      return res.status(500).json({ error: err.message });
    }
  }

  return res.status(405).json({ error: 'Método não permitido.' });
}
