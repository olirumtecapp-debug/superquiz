// Pacote de 400 Curiosidades fascinantes (20 novas perguntas por categoria x 20 categorias = 400)
const CURIOSIDADES_QUESTIONS = [
  [
    "br_c01",
    1,
    1,
    "Qual é o único país do mundo que tem o nome originado de uma árvore?",
    [
      "Argentina",
      "Brasil",
      "Costa do Marfim",
      "Madagascar"
    ],
    1,
    "O nome do Brasil deriva do pau-brasil, árvore nativa cuja seiva avermelhada lembra a cor de brasa.",
    "Tem relação com a madeira avermelhada."
  ],
  [
    "br_c02",
    1,
    2,
    "Qual famosa sobremesa brasileira foi criada nos anos 1940 para apoiar a campanha de um militar à presidência?",
    [
      "Beijinho",
      "Quindim",
      "Brigadeiro",
      "Pé de moleque"
    ],
    2,
    "Mulheres do Rio criaram o doce de leite condensado e chocolate para arrecadar fundos para a campanha do Brigadeiro Eduardo Gomes.",
    "Leva o nome de uma alta patente da Aeronáutica."
  ],
  [
    "br_c03",
    1,
    1,
    "O Brasil é o maior produtor e exportador mundial de qual produto agrícola há mais de 150 anos consecutivos?",
    [
      "Trigo",
      "Arroz",
      "Café",
      "Cevada"
    ],
    2,
    "O Brasil lidera a produção mundial de café desde o século XIX, sendo responsável por cerca de um terço de todo o café do planeta.",
    "A bebida mais consumida nas manhãs."
  ],
  [
    "br_c04",
    1,
    2,
    "Qual invenção de um padre brasileiro em 1899 antecedeu a demonstração pública de rádio de Marconi?",
    [
      "Transmissão da voz humana por rádio",
      "O telégrafo elétrico",
      "A televisão colorida",
      "O telefone de disco"
    ],
    0,
    "O padre gaúcho Roberto Landell de Moura transmitiu voz por ondas de rádio em São Paulo antes de Marconi registrar sua patente de voz.",
    "Envolve transmissão de voz sem fios pelo ar."
  ],
  [
    "br_c05",
    1,
    3,
    "Qual ilha no litoral de SP tem a maior concentração de serpentes venenosas do mundo e é fechada ao público?",
    [
      "Ilhabela",
      "Ilha da Queimada Grande",
      "Ilha do Mel",
      "Ilha Grande"
    ],
    1,
    "A Ilha da Queimada Grande abriga milhares de jararacas-ilhoas, com veneno adaptado para paralisar aves quase instantaneamente.",
    "Conhecida como 'Ilha das Cobras'."
  ],
  [
    "br_c06",
    1,
    1,
    "Qual cidade brasileira foi inteiramente planejada no formato que muitos associam a um avião?",
    [
      "Palmas",
      "Goiânia",
      "Belo Horizonte",
      "Brasília"
    ],
    3,
    "Projetada por Lúcio Costa e Oscar Niemeyer, Brasília foi desenhada no Plano Piloto lembrando o desenho de um avião ou pássaro.",
    "É a capital federal."
  ],
  [
    "br_c07",
    1,
    2,
    "Qual é o maior felino das Américas, que tem a mordida proporcional mais forte entre todos os grandes felinos?",
    [
      "Jaguatirica",
      "Onça-pintada",
      "Puma",
      "Gato-maracajá"
    ],
    1,
    "A onça-pintada consegue perfurar o casco duro de tartarugas e o crânio de presas graças à incrível força de sua mandíbula.",
    "Pelagem amarela com rosetas pretas."
  ],
  [
    "br_c08",
    1,
    3,
    "Em 1959, qual morador do zoológico de São Paulo recebeu cerca de 100 mil votos de protesto para vereador?",
    [
      "O macaco Tião",
      "O rinoceronte Cacareco",
      "O leão Dunga",
      "A arara Loura"
    ],
    1,
    "A fêmea de rinoceronte Cacareco foi a 'candidata' mais votada para a Câmara Municipal de SP como forma de repúdio aos políticos!",
    "Animal grande com chifre no focinho."
  ],
  [
    "br_c09",
    1,
    1,
    "Qual é o maior arquipélago fluvial de ilhas de água doce do mundo, situado no Rio Negro (AM)?",
    [
      "Fernando de Noronha",
      "Abrolhos",
      "Mariuá",
      "Marajó"
    ],
    2,
    "O Arquipélago de Mariuá possui mais de 1.400 ilhas fluviais, superando em quantidade até o famoso arquipélago de Anavilhanas.",
    "Fica no Rio Negro, no Amazonas."
  ],
  [
    "br_c10",
    1,
    2,
    "Quem foi o brasileiro que decolou em Paris com o 14-Bis sem auxílio de trilhos ou catapultas em 1906?",
    [
      "Bartolomeu de Gusmão",
      "Alberto Santos Dumont",
      "Carlos Chagas",
      "Vital Brazil"
    ],
    1,
    "Santos Dumont realizou o primeiro voo público homologado de um aparelho mais pesado que o ar diante do Aeroclube da França.",
    "Famoso inventor brasileiro."
  ],
  [
    "br_c11",
    1,
    3,
    "Qual cidade catarinense realiza anualmente a maior festa da cerveja e cultura alemã das Américas?",
    [
      "Joinville",
      "Gramado",
      "Blumenau",
      "Pomerode"
    ],
    2,
    "A Oktoberfest de Blumenau reúne centenas de milhares de turistas e celebra as tradições dos colonizadores alemães no Vale do Itajaí.",
    "Cidade sede da Oktoberfest brasileira."
  ],
  [
    "br_c12",
    1,
    2,
    "O identificador de chamadas telefônicas (conhecido popularmente como BINA) foi inventado por qual brasileiro?",
    [
      "Nélio Nicolai",
      "César Lattes",
      "José Leite Lopes",
      "Oswaldo Cruz"
    ],
    0,
    "O mineiro Nélio Nicolai inventou a sigla B.I.N.A. ('B Identifica Número de A') e o sistema nos anos 1980.",
    "O inventor se chama Nélio."
  ],
  [
    "br_c13",
    1,
    1,
    "Qual fruto amazônico com aparência curiosa semelhante a olhos humanos tem alta concentração de cafeína?",
    [
      "Cupuaçu",
      "Açaí",
      "Guaraná",
      "Camu-camu"
    ],
    2,
    "As sementes de guaraná possuem de duas a quatro vezes mais cafeína que o próprio grão de café!",
    "Dá sabor ao refrigerante tradicional."
  ],
  [
    "br_c14",
    1,
    2,
    "Qual é a maior floresta urbana do planeta replantada pelas mãos humanas, situada no Rio de Janeiro?",
    [
      "Parque do Ibirapuera",
      "Floresta da Tijuca",
      "Parque das Mangabeiras",
      "Parque do Cocó"
    ],
    1,
    "A Floresta da Tijuca havia sido desmatada para plantio de café e foi recuperada no século XIX por ordem do Império para salvar as fontes de água.",
    "Fica no coração da capital fluminense."
  ],
  [
    "br_c15",
    1,
    3,
    "O cientista brasileiro que desenvolveu soros antiofídicos específicos para cada tipo de serpente venenosa foi:",
    [
      "Adolfo Lutz",
      "Vital Brazil",
      "Emílio Goeldi",
      "Manuel de Abreu"
    ],
    1,
    "Vital Brazil provou que o veneno de uma cobra exigia soro específico e fundou o renomado Instituto Butantan.",
    "Seu sobrenome é o nome do país."
  ],
  [
    "br_c16",
    1,
    1,
    "Com mais de 220 km contínuos de areia, qual é a maior praia em extensão do mundo, localizada no RS?",
    [
      "Praia de Copacabana",
      "Praia do Cassino",
      "Praia da Pipa",
      "Praia de Boa Viagem"
    ],
    1,
    "A Praia do Cassino vai do município de Rio Grande até a fronteira com o Uruguai, sendo registrada pelo Guinness Book.",
    "Fica no litoral gaúcho."
  ],
  [
    "br_c17",
    1,
    2,
    "O Brasil faz fronteira com dez países sul-americanos. Quais são os únicos dois que NÃO têm divisa com o Brasil?",
    [
      "Chile e Equador",
      "Peru e Bolívia",
      "Colômbia e融enezu",
      "Argentina e Uruguai"
    ],
    0,
    "Apenas Chile e Equador não dividem fronteiras terrestres com o imenso território do Brasil.",
    "Ficam na costa do Oceano Pacífico."
  ],
  [
    "br_c18",
    1,
    3,
    "Qual dança acrobática e vibrante de Pernambuco, que usa pequenas sombrinhas coloridas, é Patrimônio da UNESCO?",
    [
      "Axé",
      "Frevo",
      "Pagode",
      "Carimbó"
    ],
    1,
    "O frevo mistura passos de capoeira com marchas militares aceleradas e foi reconhecido pela UNESCO em 2012.",
    "Sua marca registrada são as sombrinhas coloridas."
  ],
  [
    "br_c19",
    1,
    1,
    "Qual é a bacia hidrográfica mais volumosa do planeta Terra, despejando 20% da água doce dos rios no oceano?",
    [
      "Bacia do Congo",
      "Bacia do Rio Nilo",
      "Bacia Amazônica",
      "Bacia do Mississipi"
    ],
    2,
    "O Rio Amazonas descarrega tanta água que chega a diluir a salinidade do mar a mais de 150 km da foz!",
    "Leva o nome da floresta equatorial."
  ],
  [
    "br_c20",
    1,
    2,
    "Qual é o nome do crânio fóssil de cerca de 11.500 anos considerado o vestígio humano mais antigo das Américas?",
    [
      "Luzia",
      "Maria",
      "Eva",
      "Anitta"
    ],
    0,
    "Luzia foi descoberta em 1974 na região arqueológica de Lagoa Santa, em Minas Gerais.",
    "Nome feminino inspirado no fóssil Lucy."
  ],
  [
    "bd_c01",
    2,
    1,
    "Quantas estrelas existem atualmente na bandeira oficial da República Federativa do Brasil?",
    [
      "21",
      "26",
      "27",
      "28"
    ],
    2,
    "São 27 estrelas: 26 estrelas representam os Estados e uma representa o Distrito Federal.",
    "26 estados mais o Distrito Federal."
  ],
  [
    "bd_c02",
    2,
    2,
    "Qual é a única estrela posicionada no hemisfério superior à faixa 'Ordem e Progresso'?",
    [
      "Sirius",
      "Canopus",
      "Spica (Alfa de Virgem)",
      "Antares"
    ],
    2,
    "Spica representa o estado do Pará, cujo território se estendia ao norte do Equador quando a bandeira foi desenhada.",
    "Representa o estado do Pará."
  ],
  [
    "bd_c03",
    2,
    1,
    "De qual corrente filosófica de Auguste Comte foi inspirado o lema 'Ordem e Progresso'?",
    [
      "Existencialismo",
      "Positivismo",
      "Iluminismo",
      "Racionalismo"
    ],
    1,
    "A frase positivista original dizia: 'O amor por princípio, a ordem por base e o progresso por fim'.",
    "Lema baseado no Positivismo."
  ],
  [
    "bd_c04",
    2,
    2,
    "A constelação retratada na bandeira corresponde ao céu visto a partir de qual cidade em 15 de novembro de 1889?",
    [
      "Brasília",
      "Rio de Janeiro",
      "Salvador",
      "Petrópolis"
    ],
    1,
    "A imagem reflete a posição dos astros no céu do Rio de Janeiro às 8h30 da manhã da Proclamação da República.",
    "A então capital do país na época."
  ],
  [
    "bd_c05",
    2,
    3,
    "Qual constelação inteira com 5 estrelas ocupa o centro exato da esfera celeste da bandeira?",
    [
      "Órion",
      "Cruzeiro do Sul",
      "Escorpião",
      "Centauro"
    ],
    1,
    "O Cruzeiro do Sul é a constelação-guia do hemisfério sul e está no centro da bandeira.",
    "Desenha uma cruz brilhante no céu."
  ],
  [
    "bd_c06",
    2,
    1,
    "Originalmente na bandeira imperial de 1822, o que o verde e o amarelo simbolizavam?",
    [
      "As matas e o ouro",
      "As dinastias reais de Bragança e Habsburgo",
      "A esperança e o sol",
      "A cana e o trigo"
    ],
    1,
    "O verde homenageava a Casa de Bragança (D. Pedro I) e o amarelo a Casa Real da Áustria Habsburgo-Lorena (D. Leopoldina).",
    "Eram as cores das famílias reais fundadoras."
  ],
  [
    "bd_c07",
    2,
    2,
    "Qual é a cerimônia oficial realizada com bandeiras do Brasil que se tornam rasgadas ou desgastadas?",
    [
      "São recicladas em papel",
      "São incineradas em cerimônia cívica no Dia da Bandeira",
      "São enterradas em cemitérios cívicos",
      "São guardadas em cofres"
    ],
    1,
    "A Lei 5.700 determina a incineração das bandeiras inservíveis ao meio-dia de 19 de novembro em unidades militares.",
    "Queima cerimonial com homenagens."
  ],
  [
    "bd_c08",
    2,
    2,
    "Quem foi o filósofo brasileiro responsável pelo projeto da bandeira republicana em 1889?",
    [
      "Raimundo Teixeira Mendes",
      "Joaquim Nabuco",
      "Barão do Rio Branco",
      "Machado de Assis"
    ],
    0,
    "Raimundo Teixeira Mendes idealizou a esfera celeste com a faixa letrada e os astros.",
    "Filósofo e matemático maranhense."
  ],
  [
    "bd_c09",
    2,
    3,
    "Se um novo estado for admitido na Federação Brasileira, o que acontece com a bandeira?",
    [
      "Ganha uma nova estrela",
      "Muda a cor da faixa",
      "Ganha um novo círculo",
      "Permanece com 27 estrelas para sempre"
    ],
    0,
    "A legislação federal determina que a bandeira receba uma nova estrela proporcional se um estado for criado.",
    "O número de estrelas acompanha os estados."
  ],
  [
    "bd_c10",
    2,
    1,
    "Em qual data do calendário nacional é comemorado o Dia da Bandeira?",
    [
      "7 de setembro",
      "15 de novembro",
      "19 de novembro",
      "21 de abril"
    ],
    2,
    "O Dia da Bandeira é 19 de novembro, data em que o novo pavilhão republicano foi adotado em 1889.",
    "Quatro dias após o 15 de novembro."
  ],
  [
    "bd_c11",
    2,
    2,
    "A estrela Sirius, o astro mais brilhante do céu noturno, representa qual estado brasileiro?",
    [
      "São Paulo",
      "Mato Grosso",
      "Minas Gerais",
      "Rio de Janeiro"
    ],
    1,
    "Sirius (Alfa do Cão Maior) foi designada para simbolizar o Estado de Mato Grosso.",
    "Grande estado da região Centro-Oeste."
  ],
  [
    "bd_c12",
    2,
    3,
    "Qual estrela quase invisível no céu simboliza o Distrito Federal por marcar o Polo Celeste Sul?",
    [
      "Polaris Australis (Sigma Octantis)",
      "Antares",
      "Canopus",
      "Procyon"
    ],
    0,
    "Sigma do Octante foi escolhida porque todas as outras constelações parecem girar ao redor dela no céu do Sul.",
    "Estrela polar do hemisfério sul."
  ],
  [
    "bd_c13",
    2,
    1,
    "A bandeira provisória da República, que durou apenas 4 dias, imitava as listras de qual país?",
    [
      "Estados Unidos",
      "França",
      "Alemanha",
      "Argentina"
    ],
    0,
    "Proposta por Ruy Barbosa, a bandeira de listras verdes e amarelas com cantão de estrelas foi vetada por Deodoro por parecer cópia americana.",
    "Tinha listras e estrelas lembrando os EUA."
  ],
  [
    "bd_c14",
    2,
    2,
    "A bandeira nacional pode ser mantida hasteada durante a noite em órgãos públicos?",
    [
      "Nunca, é expressamente proibido",
      "Sim, desde que esteja iluminada",
      "Apenas em caso de guerra",
      "Apenas nas sextas-feiras"
    ],
    1,
    "A Lei dos Símbolos Nacionais autoriza o hasteamento noturno se a bandeira estiver claramente iluminada por holofotes.",
    "Requer iluminação artificial dedicada."
  ],
  [
    "bd_c15",
    2,
    3,
    "A proporção oficial entre altura e comprimento da bandeira nacional brasileira é de:",
    [
      "7 por 10 (ou 14 por 20)",
      "1 por 2 (ou 10 por 20)",
      "2 por 3 (ou 14 por 21)",
      "3 por 4 (ou 15 por 20)"
    ],
    0,
    "O gabarito oficial divide a bandeira em 14 módulos de largura por 20 de comprimento.",
    "Proporção exata de 14 por 20 módulos."
  ],
  [
    "bd_c16",
    2,
    1,
    "Ao ser hasteada em conjunto com bandeiras estaduais em número ímpar, onde a bandeira do Brasil deve ficar?",
    [
      "Na extrema esquerda",
      "No centro exato do dispositivo",
      "Na extrema direita",
      "Atrás das demais"
    ],
    1,
    "A bandeira nacional tem sempre precedência de honra, ficando ao centro quando o total de mastros for ímpar.",
    "Lugar de honra no meio de todas."
  ],
  [
    "bd_c17",
    2,
    2,
    "Qual destas constelações austrais presentes na bandeira abriga a estrela vermelha Antares?",
    [
      "Escorpião",
      "Touro",
      "Centauro",
      "Cão Menor"
    ],
    0,
    "A constelação do Escorpião, com Antares e outras 7 estrelas, representa estados do Nordeste como Bahia, Paraíba e Sergipe.",
    "Signo do zodíaco com cauda venenosa."
  ],
  [
    "bd_c18",
    2,
    3,
    "A quinta estrela do Cruzeiro do Sul, menor e fora do desenho principal da cruz, é popularmente chamada de:",
    [
      "A Intrometida",
      "A Pequenina",
      "A Estrela Guia",
      "A Fugitiva"
    ],
    0,
    "Por não pertencer aos eixos maior e menor da cruz, a estrela Épsilon do Cruzeiro ganhou o apelido popular de 'Intrometida'.",
    "Apelido que sugere alguém que entrou sem ser chamada."
  ],
  [
    "bd_c19",
    2,
    1,
    "Onde fica o mastro de 100 metros com a maior bandeira nacional permanentemente desfraldada no país?",
    [
      "Praça dos Três Poderes (Brasília)",
      "Avenida Paulista (São Paulo)",
      "Forte de Copacabana (Rio)",
      "Farol da Barra (Salvador)"
    ],
    0,
    "A bandeira da Praça dos Três Poderes tem cerca de 286 m² e é trocada mensalmente em solene troca da guarda.",
    "Na capital federal, perto do Palácio do Planalto."
  ],
  [
    "bd_c20",
    2,
    2,
    "A perspectiva com que as estrelas são desenhadas na bandeira do Brasil é vista como se:",
    [
      "O observador estivesse na Terra olhando para cima",
      "O observador estivesse fora da Terra olhando para a esfera celeste",
      "Fosse uma pintura abstrata sem sentido astronômico",
      "Fosse uma fotografia de satélite"
    ],
    1,
    "As estrelas aparecem invertidas da esquerda para a direita porque foram concebidas na visão de quem está fora da abóbada celeste.",
    "Visão externa de um observador no cosmos."
  ],
  [
    "to_c01",
    3,
    2,
    "O que é um 'Tornado de Fogo' (Fire Whirl), fenômeno raro e impressionante na natureza?",
    [
      "Um tornado que desce do Sol",
      "Vórtice gerado pelo calor intenso de queimadas que suga chamas e ar quente",
      "Fogo comum em linha reta",
      "Um meteoro que explode girando"
    ],
    1,
    "Calor extremo e ventos fortes de grandes incêndios criam correntes ascendentes giratórias que sugam labaredas e gases em combustão a grande altitude.",
    "Tem origem em grandes queimadas e incêndios."
  ],
  [
    "to_c02",
    3,
    3,
    "Qual planeta do Sistema Solar registra redemoinhos de poeira gigantes ('dust devils') com quilômetros de altura?",
    [
      "Vênus",
      "Marte",
      "Mercúrio",
      "Júpiter"
    ],
    1,
    "Na atmosfera rarefeita de Marte, os redemoinhos de poeira são frequentes e chegam a limpar os painéis solares das sondas da NASA!",
    "O Planeta Vermelho."
  ],
  [
    "to_c03",
    3,
    2,
    "Qual é a velocidade dos ventos que um tornado da categoria máxima EF5 pode atingir?",
    [
      "Acima de 120 km/h",
      "Acima de 200 km/h",
      "Acima de 320 km/h",
      "Exatamente 50 km/h"
    ],
    2,
    "Ventos em tornados EF5 superam 320 km/h (podendo passar de 450 km/h), arrancando casas de suas fundações.",
    "Mais veloz que um carro de Fórmula 1."
  ],
  [
    "to_c04",
    3,
    1,
    "Qual é o nome popular do redemoinho inofensivo de poeira que se forma em dias quentes no solo seco?",
    [
      "Tufão",
      "Redemoinho de poeira (diabo de poeira)",
      "Ciclone bomba",
      "Tromba d'água"
    ],
    1,
    "Diferente de tornados, redemoinhos de poeira sobem a partir do solo aquecido pelo sol e não dependem de nuvens de tempestade.",
    "Conhecido em inglês como 'dust devil'."
  ],
  [
    "to_c05",
    3,
    3,
    "O chamado 'Beco dos Tornados' da América do Sul abrange o norte da Argentina, Uruguai, Paraguai e qual região brasileira?",
    [
      "Região Nordeste",
      "Região Norte",
      "Região Sul e parte do Sudeste",
      "Apenas o arquipélago de Noronha"
    ],
    2,
    "O choque de ar quente da Amazônia com frentes frias da Antártida faz do Sul do Brasil o segundo corredor de tornados mais ativo do planeta.",
    "Região onde ficam Paraná, Santa Catarina e RS."
  ],
  [
    "to_c06",
    3,
    1,
    "Qual é o instrumento de radar meteorológico capaz de detectar a rotação do vento dentro de uma nuvem?",
    [
      "Barômetro de mercúrio",
      "Radar Doppler",
      "Termômetro a laser",
      "Pluviômetro"
    ],
    1,
    "O Radar Doppler mede a velocidade e direção das partículas de chuva, permitindo emitir alertas antes mesmo do tornado tocar o chão.",
    "Leva o nome do físico Christian Doppler."
  ],
  [
    "to_c07",
    3,
    2,
    "O que é uma 'tromba d'água tornádica'?",
    [
      "Uma cachoeira que cai para cima",
      "Um tornado comum que se forma sobre a terra e se move para a água ou vice-versa",
      "Um gêiser submarino",
      "Uma onda gigante que gira"
    ],
    1,
    "Trombas tornádicas têm a mesma violência de tornados em terra e se conectam a nuvens supercélulas sobre rios, lagos ou mares.",
    "Um tornado clássico atuando sobre a água."
  ],
  [
    "to_c08",
    3,
    3,
    "Qual foi o tornado mais mortífero da história mundial, que matou cerca de 1.300 pessoas em 1989?",
    [
      "Tornado de Joplin (EUA)",
      "Tornado de Daulatpur-Saturia (Bangladesh)",
      "Tornado de Xanxerê (Brasil)",
      "Tornado dos Três Estados (EUA)"
    ],
    1,
    "Devido à superpopulação e falta de abrigos resistentes, o tornado em Bangladesh em abril de 1989 deixou mais de mil mortos e 80 mil desabrigados.",
    "Ocorreu em Bangladesh, na Ásia."
  ],
  [
    "to_c09",
    3,
    1,
    "Por que abrir as janelas de uma casa durante a passagem de um tornado NÃO ajuda em nada?",
    [
      "Porque a pressão atrai relâmpagos",
      "Porque permite a entrada de ventos violentos e destroços que destroem o teto",
      "Porque o tornado é feito de água",
      "Porque desliga a luz"
    ],
    1,
    "O antigo mito de que a casa explodia por pressão foi derrubado: abrir janelas só facilita que o vento arranque o telhado e arremesse destroços.",
    "Deixar janelas abertas enfraquece a estrutura."
  ],
  [
    "to_c10",
    3,
    2,
    "Qual cientista criou a escala original Fujita (escala F) para classificar os estragos dos tornados em 1971?",
    [
      "Tetsuya Fujita",
      "Charles Richter",
      "Alfred Wegener",
      "Galileu Galilei"
    ],
    0,
    "O meteorologista nipo-americano Tetsuya 'Ted' Fujita estudou danos estruturais e revolucionou a ciência meteorológica.",
    "Cientista apelidado de 'Sr. Tornado'."
  ],
  [
    "to_c11",
    3,
    2,
    "O que é o 'olho' ou centro de um tornado em comparação com a periferia de ventos?",
    [
      "Uma área de pressão extremamente baixa e ventos mais calmos no núcleo",
      "Um local cheio de lava",
      "Uma parede de gelo maciço",
      "Uma região com gravidade invertida"
    ],
    0,
    "No centro do funil do tornado a pressão do ar cai drasticamente e o ar pode até descer lentamente.",
    "Região central de baixíssima pressão atmosférica."
  ],
  [
    "to_c12",
    3,
    3,
    "Qual tornado percorreu mais de 350 km através de 3 estados norte-americanos em 1925, quebrando recordes?",
    [
      "O Tornado dos Três Estados (Tri-State Tornado)",
      "O Furacão Katrina",
      "O Ciclone Bhola",
      "O Tornado de Oklahoma City"
    ],
    0,
    "O Tri-State Tornado percorreu Missouri, Illinois e Indiana a 117 km/h por mais de 3 horas e meia, matando 695 pessoas.",
    "Cruzou três estados dos EUA."
  ],
  [
    "to_c13",
    3,
    1,
    "Qual é o som característico mais frequentemente relatado por testemunhas que sobreviveram a tornados muito próximos?",
    [
      "Um apito agudo de flauta",
      "Um estrondo contínuo parecido com um trem de carga ou jato acelerando",
      "Um estalo silencioso",
      "Música de percussão"
    ],
    1,
    "O atrito do vento veloz contra árvores, casas e o chão gera um rugido ensurdecedor idêntico ao de uma locomotiva acelerando a poucos metros.",
    "Lembra o rugido de um trem a vapor."
  ],
  [
    "to_c14",
    3,
    2,
    "Por que tornados noturnos são proporcionalmente muito mais perigosos para as pessoas?",
    [
      "Porque o vento é duas vezes mais rápido no escuro",
      "Porque as pessoas estão dormindo e não conseguem ver o funil se aproximando",
      "Porque eles geram fogo espontâneo",
      "Porque nuvens descem mais à noite"
    ],
    1,
    "A falta de visibilidade e o fato de grande parte da população estar dormindo reduzem o tempo de reação a alarmes de emergência.",
    "Dificuldade visual de notar o perigo."
  ],
  [
    "to_c15",
    3,
    3,
    "O que é um 'gustnado'?",
    [
      "Um tornado em mar aberto",
      "Um pequeno vórtice efêmero gerado pela rajada de vento frontal de uma tempestade",
      "Um tornado que congela a água",
      "Um tipo de relâmpago que gira"
    ],
    1,
    "Gustnados não estão conectados à rotação da nuvem-mãe; eles nascem no solo devido ao choque de rajadas de vento frio descendente.",
    "Mistura das palavras 'gust' (rajada) e tornado."
  ],
  [
    "to_c16",
    3,
    1,
    "Se você estiver dirigindo numa rodovia e avistar um tornado vindo em sua direção, o que NUNCA deve fazer?",
    [
      "Buscar abrigo em uma construção sólida próxima",
      "Tentar se abrigar debaixo de um viaduto ou ponte",
      "Sair do carro se encontrar uma vala funda",
      "Afastar-se em ângulo reto da trajetória do funil"
    ],
    1,
    "Viadutos agem como funis de vento (efeito Venturi), aumentando a velocidade do ar e desprotegendo contra destroços cortantes.",
    "Viadutos canalizam e aceleram o vento mortal."
  ],
  [
    "to_c17",
    3,
    2,
    "Qual é a coloração esverdeada que o céu frequentemente assume antes de supercélulas produzirem tornados severos?",
    [
      "Reflexo da luz solar nas copas das árvores",
      "Dispersão da luz avermelhada do pôr do sol através de nuvens carregadas de água e granizo",
      "Poluição química do ar",
      "Aurora boreal fora de época"
    ],
    1,
    "Gotículas densas de água e pedras de granizo na tempestade filtram as ondas de luz vermelha e deixam passar tons verdes e azulados no fim da tarde.",
    "Filtro óptico do granizo e muita água."
  ],
  [
    "to_c18",
    3,
    3,
    "Tornados podem levantar animais pesados como vacas e automóveis inteiros pelos ares?",
    [
      "Não, apenas poeira e folhas",
      "Sim, a força de sucção e ventos de mais de 300 km/h erguem facilmente carros e gado",
      "Apenas se tiver água embaixo",
      "Só se os animais pularem"
    ],
    1,
    "Ventos de tornados intensos já arremessaram trens de trilhos, caminhões a centenas de metros e animais para o topo de telhados.",
    "A força dinâmica do ar é descomunal."
  ],
  [
    "to_c19",
    3,
    1,
    "Em qual mês e época do ano o estado de Santa Catarina registrou um tornado devastador na cidade de Xanxerê?",
    [
      "Abril de 2015",
      "Janeiro de 1980",
      "Dezembro de 2022",
      "Julho de 2000"
    ],
    0,
    "Em 20 de abril de 2015, um tornado F2 atingiu Xanxerê (SC) com ventos de até 250 km/h, destruindo centenas de moradias.",
    "Ocorreu no outono de 2015."
  ],
  [
    "to_c20",
    3,
    2,
    "Qual é a diferença entre 'Alerta de Tornado' (Watch) e 'Aviso de Tornado' (Warning) nos serviços meteorológicos?",
    [
      "São sinônimos idênticos",
      "Watch indica condições favoráveis; Warning indica que um tornado já foi avistado ou detectado por radar",
      "Warning é para chuva comum",
      "Watch significa que o tornado já passou"
    ],
    1,
    "O 'Watch' avisa para ficar atento; o 'Warning' avisa para correr para o abrigo imediatamente porque o perigo é iminente.",
    "'Warning' é o alerta vermelho imediato."
  ],
  [
    "cr_c01",
    4,
    1,
    "Qual foi o primeiro automóvel movido por motor de combustão interna patenteado na história em 1886?",
    [
      "Ford Model T",
      "Benz Patent-Motorwagen",
      "Volkswagen Fusca",
      "Chevrolet Opala"
    ],
    1,
    "Karl Benz patenteou seu triciclo motorizado a gasolina em janeiro de 1886 na Alemanha, dando início à era do automóvel.",
    "Criado pelo pioneiro Karl Benz."
  ],
  [
    "cr_c02",
    4,
    2,
    "Quem realizou a primeira viagem de longa distância de carro (cerca de 104 km) sem autorização do marido para provar que a invenção funcionava?",
    [
      "Bertha Benz",
      "Marie Curie",
      "Ada Lovelace",
      "Amelia Earhart"
    ],
    0,
    "Bertha Benz pegou o carro do marido Karl com os filhos em 1888 e viajou até Pforzheim, limpando tubulações com grampo de cabelo e usando remédio de farmácia como combustível!",
    "A corajosa esposa de Karl Benz."
  ],
  [
    "cr_c03",
    4,
    1,
    "Qual inovação revolucionária Henry Ford introduziu em 1913 que barateou os carros e mudou a indústria mundial?",
    [
      "O freio a disco",
      "A linha de montagem móvel",
      "A tração nas quatro rodas",
      "O ar-condicionado digital"
    ],
    1,
    "A esteira móvel reduziu o tempo de montagem do Ford Modelo T de 12 horas para apenas 93 minutos, barateando o preço final.",
    "A esteira de produção em série."
  ],
  [
    "cr_c04",
    4,
    2,
    "A invenção do limpador de para-brisa em 1903 foi criada e patenteada por qual mulher pioneira?",
    [
      "Mary Anderson",
      "Margaret Wilcox",
      "Florence Lawrence",
      "Hedy Lamarr"
    ],
    0,
    "Mary Anderson teve a ideia em Nova York após ver motoristas de bonde precisando abrir a janela na neve para limpar o vidro com as mãos.",
    "Seu primeiro nome é Mary."
  ],
  [
    "cr_c05",
    4,
    3,
    "Qual montadora sueca inventou o cinto de segurança de três pontos em 1959 e abriu a patente de graça para salvar vidas?",
    [
      "Saab",
      "Volvo",
      "Scania",
      "Koenigsegg"
    ],
    1,
    "O engenheiro Nils Bohlin desenvolveu o cinto de 3 pontos para a Volvo, que abdicou dos direitos financeiros para que todas as marcas adotassem o item de segurança.",
    "Marca sueca famosa pela segurança veicular."
  ],
  [
    "cr_c06",
    4,
    1,
    "Qual é o modelo de carro individual mais vendido de toda a história automotiva mundial, superando 50 milhões de unidades?",
    [
      "Volkswagen Fusca",
      "Toyota Corolla",
      "Ford F-150",
      "Honda Civic"
    ],
    1,
    "Lançado em 1966 no Japão, o Toyota Corolla lidera o ranking mundial de vendas absolutas com ampla folga.",
    "Sedan japonês clássico da Toyota."
  ],
  [
    "cr_c07",
    4,
    2,
    "Qual carro de produção em série foi o primeiro a romper oficialmente a barreira dos 400 km/h em 2005?",
    [
      "Ferrari Enzo",
      "Bugatti Veyron",
      "McLaren F1",
      "Lamborghini Murciélago"
    ],
    1,
    "O Bugatti Veyron, com seu motor W16 quadriturbo de 1.001 cv, cravou impressionantes 407 km/h na pista de testes da VW.",
    "Superesportivo da Bugatti com motor W16."
  ],
  [
    "cr_c08",
    4,
    1,
    "Por que o Volkswagen Sedan é carinhosamente chamado de 'Fusca' no Brasil?",
    [
      "Pela cor de sua lataria original",
      "Pela pronúncia popular e corruptela brasileira da palavra alemã 'Volks'",
      "Em homenagem ao seu primeiro mecânico",
      "Pelo barulho do cano de descarga"
    ],
    1,
    "A pronúncia germânica 'Folks' foi sendo aportuguesada para 'Fölks' -> 'Fulca' -> até se consolidar como o icônico 'Fusca'.",
    "Vem da corruptela da pronúncia de 'Volks'."
  ],
  [
    "cr_c09",
    4,
    2,
    "Qual é a função básica do diferencial em um eixo de tração de um automóvel?",
    [
      "Aumentar o volume do som",
      "Permitir que as rodas externa e interna girem em velocidades diferentes nas curvas",
      "Ligar o ar-condicionado",
      "Resfriar a água do radiador"
    ],
    1,
    "Ao fazer uma curva, a roda de fora precisa percorrer um raio maior que a de dentro; o diferencial equilibra essa rotação sem travar as rodas.",
    "Permite rotações distintas nas curvas."
  ],
  [
    "cr_c10",
    4,
    3,
    "O McLaren F1 de 1992 tinha um detalhe lendário no cofre do motor: qual metal precioso isolava o calor?",
    [
      "Prata pura",
      "Folhas de ouro 24 quilates",
      "Platina enriquecida",
      "Titânio maciço"
    ],
    1,
    "O projetista Gordon Murray forrou o compartimento do motor com folhas de ouro autêntico por ser o melhor refletor térmico existente para proteger a fibra de carbono.",
    "O metal dourado mais cobiçado."
  ],
  [
    "cr_c11",
    4,
    1,
    "Qual foi o primeiro carro de passeio com motor flex (bicombustível álcool e gasolina) produzido no Brasil em 2003?",
    [
      "Fiat Palio",
      "VW Gol Total Flex",
      "Chevrolet Corsa",
      "Ford Fiesta"
    ],
    1,
    "Em março de 2003, a Volkswagen lançou o Gol Power 1.6 Total Flex, inaugurando a tecnologia que hoje domina as ruas do país.",
    "Versão flex do carro mais popular da VW."
  ],
  [
    "cr_c12",
    4,
    2,
    "Qual é a maior fabricante mundial de pneus em volume absoluto de unidades produzidas por ano?",
    [
      "Michelin",
      "Pirelli",
      "Bridgestone",
      "LEGO"
    ],
    3,
    "A fabricante dinamarquesa de brinquedos LEGO produz mais de 300 milhões de mini-pneus de borracha por ano para seus kits!",
    "Empresa famosa pelos blocos de montar."
  ],
  [
    "cr_c13",
    4,
    3,
    "Qual peça fundamental de suspensão do carro leva o nome do engenheiro americano Earle S. MacPherson?",
    [
      "Barra estabilizadora",
      "Suspensão tipo MacPherson",
      "Mola helicoidal",
      "Amortecedor telescópico"
    ],
    1,
    "O arranjo compacto combinando amortecedor e mola em uma única torre facilitou carros compactos com tração dianteira.",
    "Sistema de suspensão mais comum em carros modernos."
  ],
  [
    "cr_c14",
    4,
    1,
    "O que significa a sigla ABS no sistema de freios dos veículos modernos?",
    [
      "Anti-lock Braking System (Sistema Antibloqueio de Frenagem)",
      "Auto Brake Sensor",
      "Airbag Braking System",
      "Acelerador de Bordo Suave"
    ],
    0,
    "O ABS modula a pressão do fluido de freio milissegundos por vez para evitar que os pneus travem e derrapem, mantendo a direção controlável.",
    "Impede que as rodas travem."
  ],
  [
    "cr_c15",
    4,
    2,
    "Em qual famoso autódromo alemão de mais de 20 km de extensão e 73 curvas as montadoras testam o desempenho de seus carros?",
    [
      "Silverstone",
      "Nürburgring Nordschleife ('Inferno Verde')",
      "Monza",
      "Interlagos"
    ],
    1,
    "Nürburgring Nordschleife é a pista mais exigente do mundo, carinhosamente apelidada por Jackie Stewart de 'Inferno Verde'.",
    "Pista alemã chamada de 'Inferno Verde'."
  ],
  [
    "cr_c16",
    4,
    3,
    "Quem inventou as primeiras luzes de pisca-alerta mecânico e o indicador de parada traseiro (luz de freio)?",
    [
      "Bertha Benz",
      "Florence Lawrence",
      "Enzo Ferrari",
      "Ferdinand Porsche"
    ],
    1,
    "A estrela do cinema mudo Florence Lawrence inventou os primeiros indicadores de mudança de direção traseiros na década de 1910.",
    "Pioneira do cinema e dos acessórios automotivos."
  ],
  [
    "cr_c17",
    4,
    1,
    "Qual combustível alternativo popular no Brasil é produzido a partir da fermentação do caldo da cana-de-açúcar?",
    [
      "Biodiesel",
      "Etanol (Álcool hidratado)",
      "Gás Natural Veicular",
      "Querosene"
    ],
    1,
    "O etanol brasileiro é um dos biocombustíveis mais eficientes do mundo, emitindo muito menos gases do efeito estufa que a gasolina fóssil.",
    "Combustível verde feito da cana."
  ],
  [
    "cr_c18",
    4,
    2,
    "Qual piloto de Fórmula 1 brasileiro colaborou ativamente no acerto dinâmico do lendário supercarro Honda NSX nos anos 1990?",
    [
      "Nelson Piquet",
      "Emerson Fittipaldi",
      "Ayrton Senna",
      "Rubens Barrichello"
    ],
    2,
    "Senna testou protótipos do Honda NSX no circuito de Suzuka e convenceu os engenheiros a reforçarem a rigidez torcional do chassi.",
    "Tricampeão mundial de F1."
  ],
  [
    "cr_c19",
    4,
    1,
    "O que mede o instrumento chamado 'tacômetro' (ou conta-giros) no painel do carro?",
    [
      "A velocidade em km/h",
      "As rotações por minuto (RPM) do motor",
      "A quantidade de óleo",
      "A temperatura externa"
    ],
    1,
    "O tacômetro informa a velocidade de rotação do virabrequim do motor em giros por minuto (RPM).",
    "Mede as rotações por minuto (RPM)."
  ],
  [
    "cr_c20",
    4,
    2,
    "Qual foi o lendário carro esportivo da Chevrolet fabricado no Brasil entre 1968 e 1992 que marcou época com motor 6 cilindros?",
    [
      "Chevette",
      "Monza",
      "Opala",
      "Kadett"
    ],
    2,
    "O Chevrolet Opala uniu carroceria alemã do Opel Rekord com robustos motores norte-americanos de 4 e 6 cilindros em linha.",
    "Clássico 6 cilindros da Chevrolet brasileira."
  ],
  [
    "mo_c01",
    5,
    2,
    "Antes de fabricar supercarros esportivos velozes, qual tipo de maquinário a Lamborghini produzia com sucesso?",
    [
      "Aviões de caça",
      "Tratores agrícolas",
      "Barcos a motor",
      "Relógios de pulso"
    ],
    1,
    "Ferruccio Lamborghini enriqueceu fabricando tratores. Decidiu fazer seus próprios esportivos após discutir com Enzo Ferrari sobre a embreagem do seu carro!",
    "Veículos pesados para lavoura."
  ],
  [
    "mo_c02",
    5,
    2,
    "Qual é a origem do famoso 'Cavallino Rampante' (o cavalo preto empinado) do logotipo da Ferrari?",
    [
      "Um prêmio de corrida de cavalos",
      "O símbolo pintado no caça do aviador italiano Francesco Baracca na 1ª Guerra",
      "O cavalo de fazenda de Enzo Ferrari",
      "Uma homenagem à polícia montada"
    ],
    1,
    "A mãe do herói aviador Baracca sugeriu a Enzo Ferrari colocar o cavalo rampante em seus carros para lhe trazer boa sorte.",
    "Homenagem a um famoso piloto de caça."
  ],
  [
    "mo_c03",
    5,
    1,
    "O que representam os quatro anéis entrelaçados no logotipo da montadora alemã Audi?",
    [
      "As quatro rodas do carro",
      "A fusão de quatro montadoras alemãs em 1932 (Auto Union)",
      "Os quatro motores a pistão",
      "Os quatro cantos da Alemanha"
    ],
    1,
    "Os anéis simbolizam a união de Audi, DKW, Horch e Wanderer, que formaram a Auto Union.",
    "A união histórica de quatro empresas."
  ],
  [
    "mo_c04",
    5,
    3,
    "Antes de se transformar em gigante mundial dos automóveis, qual era o produto principal da Toyota no início do século XX?",
    [
      "Bicicletas",
      "Teares automáticos de tecido",
      "Moinhos de vento",
      "Instrumentos musicais"
    ],
    1,
    "Sakichi Toyoda inventou o primeiro tear mecânico automático do Japão; seu filho Kiichiro usou o capital para fundar a divisão automotiva.",
    "Máquinas de fiação e tecelagem."
  ],
  [
    "mo_c05",
    5,
    1,
    "A famosa estrela de três pontas da Mercedes-Benz simboliza o domínio de seus motores em quais três áreas?",
    [
      "Terra, mar e ar",
      "Europa, Ásia e América",
      "Passado, presente e futuro",
      "Ouro, prata e bronze"
    ],
    0,
    "Gottlieb Daimler criou a estrela para indicar que seus motores seriam líderes no transporte terrestre, marítimo e aéreo.",
    "Cobre todos os três meios de transporte."
  ],
  [
    "mo_c06",
    5,
    2,
    "Por que o logotipo da BMW tem as cores azul e branca dispostas em quatro quadrantes?",
    [
      "Simboliza o céu e o mar",
      "São as cores oficiais da bandeira do estado da Baviera",
      "Homenagem aos olhos do fundador",
      "Representa gelo e eletricidade"
    ],
    1,
    "A BMW nasceu na Baviera (Bayerische Motoren Werke); o mito de que representava uma hélice de avião foi criado em um anúncio anos depois.",
    "Cores tradicionais da Baviera alemã."
  ],
  [
    "mo_c07",
    5,
    3,
    "Qual montadora japonesa tem no nome e logotipo a constelação das Plêiades (as 'sete irmãs')?",
    [
      "Subaru",
      "Mazda",
      "Mitsubishi",
      "Suzuki"
    ],
    0,
    "'Subaru' é o nome em japonês para o aglomerado estelar das Plêiades, simbolizando a união de seis empresas em uma só corporação.",
    "Montadora famosa pelo sistema All-Wheel Drive."
  ],
  [
    "mo_c08",
    5,
    1,
    "O nome da fabricante sueca Volvo vem do latim e significa literalmente:",
    [
      "Eu corro",
      "Eu rolo (ou Eu giro)",
      "Segurança total",
      "Vento veloz"
    ],
    1,
    "A palavra 'Volvo' vem do verbo latino 'volvere' ('eu rolo'), pois a empresa era originalmente subsidiária da fabricante de rolamentos SKF!",
    "Vem de rolar ou girar."
  ],
  [
    "mo_c09",
    5,
    2,
    "Qual foi o motivo da criação da marca de luxo Lexus pela Toyota e da Acura pela Honda nos anos 1980?",
    [
      "Competir com BMW e Mercedes no mercado norte-americano com imagem premium",
      "Fazer carros mais baratos",
      "Vender caminhões",
      "Fugir de impostos no Japão"
    ],
    0,
    "As marcas japonesas criaram divisões de luxo exclusivas para atrair clientes premium ocidentais que viam as marcas originais como populares.",
    "Divisões de alto luxo para o mercado ocidental."
  ],
  [
    "mo_c10",
    5,
    2,
    "Qual animal feroz dá nome à maioria dos supercarros da Lamborghini (como Miura, Murciélago, Gallardo e Aventador)?",
    [
      "Touros de lide espanhóis",
      "Tubarões brancos",
      "Falcões peregrinos",
      "Lobos selvagens"
    ],
    0,
    "Ferruccio Lamborghini era do signo de Touro e fã de touradas espanholas, batizando quase todos os modelos com nomes de touros históricos.",
    "Animal com chifres que luta em arenas."
  ],
  [
    "mo_c11",
    5,
    1,
    "Qual montadora norte-americana produz o famoso pony car Mustang desde abril de 1964?",
    [
      "General Motors",
      "Ford",
      "Chrysler",
      "Dodge"
    ],
    1,
    "O Ford Mustang estreou na Feira Mundial de Nova York em 1964 e se tornou um dos maiores fenômenos culturais da indústria automobilística.",
    "Fabricante fundada por Henry Ford."
  ],
  [
    "mo_c12",
    5,
    3,
    "A montadora francesa Bugatti foi fundada por Ettore Bugatti em 1909 em Molsheim, cidade que na época pertencia a qual país?",
    [
      "Itália",
      "Alemanha",
      "França",
      "Suíça"
    ],
    1,
    "A região da Alsácia pertencia ao Império Alemão até o fim da Primeira Guerra Mundial, quando voltou a ser território francês.",
    "Faz fronteira no Reno com a França."
  ],
  [
    "mo_c13",
    5,
    2,
    "O que significa a sigla da marca italiana de automóveis FIAT?",
    [
      "Fábrica Italiana de Automóveis de Turim",
      "Força Industrial e Automotiva Triestina",
      "Federação Internacional de Automóveis Terrestres",
      "Fórmula Italiana de Alta Tração"
    ],
    0,
    "Fundada em 1899 por Giovanni Agnelli e sócios, a sigla significa 'Fabbrica Italiana Automobili Torino'.",
    "Sede histórica na cidade de Turim."
  ],
  [
    "mo_c14",
    5,
    1,
    "Qual montadora alemã sediada em Stuttgart fabrica o lendário esportivo 911 com motor traseiro há mais de 60 anos?",
    [
      "Porsche",
      "Opel",
      "BMW",
      "Audi"
    ],
    0,
    "Criado por 'Butzi' Porsche e lançado em 1963, o Porsche 911 manteve sua silhueta inconfundível e motor boxer traseiro.",
    "Marca do escudo com cavalo de Stuttgart."
  ],
  [
    "mo_c15",
    5,
    2,
    "Qual fabricante japonesa tem seu logotipo formado por três losangos (diamantes) vermelhos?",
    [
      "Nissan",
      "Mitsubishi",
      "Daihatsu",
      "Isuzu"
    ],
    1,
    "'Mitsu' significa três e 'bishi' significa castanha d'água / losango em japonês, combinando brasões familiares dos fundadores.",
    "Três diamantes em leque."
  ],
  [
    "mo_c16",
    5,
    3,
    "Qual é o grupo automotivo multinacional criado em 2021 pela fusão da Fiat Chrysler (FCA) com o Grupo PSA (Peugeot-Citroën)?",
    [
      "Stellantis",
      "Mobility Alliance",
      "AutoUnion Global",
      "Geely Motors"
    ],
    0,
    "A Stellantis reúne marcas como Fiat, Jeep, Ram, Peugeot, Citroën, Dodge, Alfa Romeo e Maserati sob um mesmo conglomerado.",
    "Nome derivado do latim 'stella' (estrela)."
  ],
  [
    "mo_c17",
    5,
    1,
    "Qual marca norte-americana de utilitários 4x4 se originou como veículo militar leve na Segunda Guerra Mundial em 1941?",
    [
      "Hummer",
      "Jeep (Willys-Overland)",
      "Cadillac",
      "Chevrolet"
    ],
    1,
    "O Willys MB foi tão crucial para as forças aliadas que o general Eisenhower o considerou uma das armas vitais para vencer a guerra.",
    "Famoso pela grade frontal com 7 fendas verticais."
  ],
  [
    "mo_c18",
    5,
    2,
    "Qual montadora sul-coreana tem o nome traduzido aproximadamente como 'modernidade' em coreano?",
    [
      "Hyundai",
      "Kia",
      "SsangYong",
      "Daewoo"
    ],
    0,
    "A palavra 'Hyundai' (hyeondae) significa 'tempos modernos' ou 'modernidade'.",
    "Maior fabricante automotiva da Coreia do Sul."
  ],
  [
    "mo_c19",
    5,
    3,
    "O fundador da montadora de esportivos Colin Chapman, famoso pela filosofia 'Simplifique e adicione leveza', criou qual marca inglesa?",
    [
      "Lotus",
      "Aston Martin",
      "Jaguar",
      "Bentley"
    ],
    0,
    "A Lotus Cars dominou a Fórmula 1 com inovações aerodinâmicas e carros de rua extremamente leves e ágeis.",
    "Nome de flor aquática sagrada."
  ],
  [
    "mo_c20",
    5,
    1,
    "Qual marca britânica centenária é famosa por fabricar os sedãs e cupês ultraluxuosos com a estatueta 'Spirit of Ecstasy' na grade?",
    [
      "Rolls-Royce",
      "Vauxhall",
      "Rover",
      "MG"
    ],
    0,
    "A Rolls-Royce produz cada carro sob medida artesanal e a famosa estatueta prateada retrata uma mulher inclinada com vestes ao vento.",
    "O símbolo máximo de opulência e luxo inglês."
  ],
  [
    "gg_c01",
    6,
    2,
    "Qual é o ponto mais isolado do planeta nos oceanos, tão distante de qualquer terra que os humanos mais próximos costumam ser os astronautas na Estação Espacial?",
    [
      "Fossa das Marianas",
      "Ponto Nemo (Polo Oceânico de Inacessibilidade)",
      "Ilha de Páscoa",
      "Cabo Horn"
    ],
    1,
    "O Ponto Nemo fica no Pacífico Sul a 2.688 km da terra firme mais próxima. Os astronautas na órbita a 400 km de altitude passam mais perto do que qualquer habitante terrestre!",
    "Leva o nome do célebre capitão submarino de Júlio Verne."
  ],
  [
    "gg_c02",
    6,
    3,
    "Devido à forma elipsoidal da Terra mais bojuda no Equador, qual montanha tem o cume mais distante do centro do planeta?",
    [
      "Monte Everest (Nepal)",
      "Vulcão Chimborazo (Equador)",
      "K2 (Paquistão)",
      "Aconcágua (Argentina)"
    ],
    1,
    "Embora o Everest seja mais alto em relação ao nível do mar, o pico do Chimborazo no Equador está 2 km mais próximo do espaço por causa do abaulamento equatorial da Terra.",
    "Fica no Equador, na Cordilheira dos Andes."
  ],
  [
    "gg_c03",
    6,
    1,
    "Qual é o único mar do planeta que não possui nenhuma costa litorânea terrestre, sendo cercado apenas por quatro correntes oceânicas?",
    [
      "Mar dos Sargaços",
      "Mar Cáspio",
      "Mar Vermelho",
      "Mar Negro"
    ],
    0,
    "O Mar dos Sargaços fica no Atlântico Norte delimitado pela Corrente do Golfo e outras três correntes, famoso pelo acúmulo de algas sargassum e berçário das enguias.",
    "Tem o nome da alga flutuante marrom."
  ],
  [
    "gg_c04",
    6,
    2,
    "Qual país possui o maior número de ilhas naturais do planeta Terra, com mais de 260 mil ilhas catalogadas?",
    [
      "Indonésia",
      "Filipinas",
      "Suécia",
      "Grécia"
    ],
    2,
    "A Suécia tem cerca de 267.570 ilhas, superando Finlândia, Noruega e Canadá. Menos de mil delas são habitadas!",
    "País nórdico escandinavo."
  ],
  [
    "gg_c05",
    6,
    1,
    "Qual é o menor país independente do mundo em extensão territorial e população?",
    [
      "Mônaco",
      "Nauru",
      "Vaticano",
      "Liechtenstein"
    ],
    2,
    "Com apenas 0,44 km² (cerca de 44 hectares), o Vaticano fica dentro da cidade de Roma e é o menor Estado soberano do globo.",
    "Sede papal encravada em Roma."
  ],
  [
    "gg_c06",
    6,
    2,
    "Qual deserto é o mais seco do mundo sem ser polar, onde certas estações meteorológicas nunca registraram uma gota de chuva?",
    [
      "Deserto do Saara",
      "Deserto de Atacama (Chile)",
      "Deserto de Gobi",
      "Deserto da Namíbia"
    ],
    1,
    "O Atacama é bloqueado pela Cordilheira dos Andes e pela corrente fria de Humboldt, criando uma aridez tão extrema que a NASA o usa para testar veículos para Marte.",
    "Fica no norte do Chile."
  ],
  [
    "gg_c07",
    6,
    3,
    "Qual é a cidade habitada permanentemente mais fria da Terra, onde os termômetros chegam a -71°C no inverno?",
    [
      "Yakutsk (Rússia)",
      "Oymyakon (Rússia)",
      "Nuuk (Groenlândia)",
      "Anchorage (EUA)"
    ],
    1,
    "Na aldeia russa siberiana de Oymyakon, o solo permanece congelado (permafrost) o ano todo e os motores dos carros precisam ficar ligados continuamente para não congelar o óleo.",
    "Vila siberiana na região de Sakha."
  ],
  [
    "gg_c08",
    6,
    1,
    "Qual canal marítimo artificial inaugurado em 1869 conecta o Mar Mediterrâneo diretamente ao Mar Vermelho sem contornar a África?",
    [
      "Canal do Panamá",
      "Canal de Suez",
      "Canal de Corinto",
      "Canal da Mancha"
    ],
    1,
    "Construído no Egito, o Canal de Suez encurtou a viagem marítima entre a Europa e a Ásia em milhares de quilômetros.",
    "Fica no Egito."
  ],
  [
    "gg_c09",
    6,
    2,
    "Qual é o ponto mais profundo conhecido de todos os oceanos, localizado na Fossa das Marianas?",
    [
      "Depressão Challenger (quase 11.000 m)",
      "Fossa de Porto Rico",
      "Fossa de Java",
      "Depressão de Tonga"
    ],
    0,
    "A Depressão Challenger atinge cerca de 10.994 metros de profundidade. Se colocássemos o Monte Everest ali, seu pico ainda ficaria a 2 km abaixo d'água!",
    "Tem o nome do navio HMS Challenger."
  ],
  [
    "gg_c10",
    6,
    3,
    "Qual país do mundo atravessa a maior quantidade de fusos horários diferentes em todo o seu território (incluindo ilhas ultramarinas)?",
    [
      "Rússia",
      "França",
      "Estados Unidos",
      "China"
    ],
    1,
    "Devido aos seus territórios ultramarinos espalhados pelos oceanos Pacífico, Índico, Atlântico e Caribe, a França cobre 12 fusos horários distintos (13 contando a reivindicação antártica)!",
    "País europeu com territórios ultramarinos."
  ],
  [
    "gg_c11",
    6,
    1,
    "Qual é o maior lago de água doce do mundo em volume e o mais profundo (com mais de 1.600 metros de profundidade)?",
    [
      "Lago Superior",
      "Lago Baikal (Rússia)",
      "Lago Vitória",
      "Lago Tanganica"
    ],
    1,
    "O Lago Baikal na Sibéria contém sozinho mais de 20% de toda a água doce não congelada superficial do planeta Terra!",
    "Lago na Sibéria, Rússia."
  ],
  [
    "gg_c12",
    6,
    2,
    "Qual país da América do Sul é o único do continente a ter costas litorâneas tanto no Oceano Atlântico (Caribe) quanto no Oceano Pacífico?",
    [
      "Chile",
      "Colômbia",
      "Peru",
      "Equador"
    ],
    1,
    "A Colômbia é banhada a noroeste pelo Mar do Caribe (Atlântico) e a oeste pelo vasto Oceano Pacífico.",
    "País vizinho ao noroeste do Brasil."
  ],
  [
    "gg_c13",
    6,
    3,
    "Qual é a capital nacional situada na maior altitude do mundo (a cerca de 3.640 metros acima do nível do mar)?",
    [
      "Quito (Equador)",
      "La Paz (Bolívia)",
      "Bogotá (Colômbia)",
      "Lhasa (Tibet)"
    ],
    1,
    "La Paz é a sede do governo da Bolívia a mais de 3.600 metros de altitude (com o aeroporto vizinho em El Alto ultrapassando os 4.000 m).",
    "Sede do governo boliviano."
  ],
  [
    "gg_c14",
    6,
    1,
    "A muralha da China e o Taj Mahal ficam em qual continente?",
    [
      "Europa",
      "Ásia",
      "África",
      "Oceania"
    ],
    1,
    "Tanto a China quanto a Índia (onde fica o mausoléu de mármore branco Taj Mahal) estão localizados no continente asiático.",
    "O maior continente do planeta em área e população."
  ],
  [
    "gg_c15",
    6,
    2,
    "Qual cachoeira na Venezuela é a mais alta queda d'água ininterrupta do mundo, despencando de quase 1.000 metros de altura?",
    [
      "Cataratas do Niágara",
      "Salto Ángel (Kerepakupai Merú)",
      "Cataratas do Iguaçu",
      "Cataratas Vitória"
    ],
    1,
    "O Salto Ángel despenca de um imenso platô rochoso (tepui) na Amazônia venezuelana por 979 metros sem interrupções!",
    "Batizado em homenagem ao aviador Jimmy Angel."
  ],
  [
    "gg_c16",
    6,
    2,
    "Qual país da Europa tem formato visual no mapa geográfico muito parecido com uma bota de cano alto?",
    [
      "Espanha",
      "Itália",
      "Grécia",
      "Portugal"
    ],
    1,
    "A península itálica projeta-se no Mar Mediterrâneo desenhando perfeitamente a silhueta de uma bota que parece chutar a ilha da Sicília.",
    "País de Roma, Veneza e Milão."
  ],
  [
    "gg_c17",
    6,
    3,
    "Qual estreito marítimo estratégico separa o continente europeu do continente africano por apenas 14 km de distância?",
    [
      "Estreito de Bósforo",
      "Estreito de Gibraltar",
      "Estreito de Ormuz",
      "Estreito de Magalhães"
    ],
    1,
    "O Estreito de Gibraltar separa a Espanha de Marrocos e conecta o Oceano Atlântico ao Mar Mediterrâneo.",
    "Conhecido na antiguidade como Pilares de Hércules."
  ],
  [
    "gg_c18",
    6,
    1,
    "Qual é o único continente habitado que não possui absolutamente nenhum vulcão ativo em sua massa terrestre principal?",
    [
      "Austrália (Oceania)",
      "Europa",
      "América",
      "África"
    ],
    0,
    "O continente australiano está bem no meio de sua placa tectônica (Placa Indo-Australiana), longe das bordas onde ocorrem atividades vulcânicas.",
    "O continente dos cangurus e coalas."
  ],
  [
    "gg_c19",
    6,
    2,
    "Qual rio africano cruza a linha do Equador duas vezes durante o seu curso sinuoso?",
    [
      "Rio Nilo",
      "Rio Congo (ou Zaire)",
      "Rio Níger",
      "Rio Zambeze"
    ],
    1,
    "O Rio Congo é o segundo mais volumoso do mundo e desenha um grande arco que atravessa o Equador de sul para norte e depois de norte para sul.",
    "Segundo maior rio da África."
  ],
  [
    "gg_c20",
    6,
    3,
    "A ilha de Madagascar, famosa por sua biodiversidade única com lêmures e baobás, fica no litoral de qual oceano?",
    [
      "Oceano Pacífico",
      "Oceano Índico",
      "Oceano Atlântico",
      "Oceano Ártico"
    ],
    1,
    "Separada da costa leste da África pelo Canal de Moçambique, Madagascar é a quarta maior ilha do planeta e banhada pelo Oceano Índico.",
    "O oceano que banha a Índia e a costa leste africana."
  ],
  [
    "hb_c01",
    7,
    2,
    "Qual imperador brasileiro era apaixonado por ciência e astronomia, tendo testado o telefone de Graham Bell na Exposição da Filadélfia em 1876?",
    [
      "D. Pedro I",
      "D. Pedro II",
      "D. João VI",
      "Príncipe Regente D. Miguel"
    ],
    1,
    "D. Pedro II colocou o aparelho no ouvido e exclamou: 'Meu Deus, isso fala!'. A atenção do imperador ajudou Bell a atrair os investidores que mudaram o mundo.",
    "O segundo e último monarca do Brasil."
  ],
  [
    "hb_c02",
    7,
    1,
    "Em qual famoso riacho às margens de São Paulo D. Pedro I proclamou a Independência do Brasil em 7 de setembro de 1822?",
    [
      "Riacho do Ipiranga",
      "Rio Tietê",
      "Rio Pinheiros",
      "Rio Tamanduateí"
    ],
    0,
    "D. Pedro I soltou o lendário grito 'Independência ou Morte!' na colina histórica do Ipiranga.",
    "O riacho citado na primeira estrofe do Hino Nacional."
  ],
  [
    "hb_c03",
    7,
    2,
    "Qual princesa assinou a Lei Áurea em 13 de maio de 1888 extinguindo a escravidão no território brasileiro?",
    [
      "Princesa Isabel",
      "Princesa Leopoldina",
      "Marquesa de Santos",
      "Carlota Joaquina"
    ],
    0,
    "Regente do Império durante viagem de seu pai D. Pedro II, a Princesa Isabel sancionou a lei que libertou os últimos escravizados do país.",
    "Conhecida como 'A Redentora'."
  ],
  [
    "hb_c04",
    7,
    3,
    "Qual foi o estopim militar de protesto de marinheiros negros em 1910 contra os castigos corporais na Marinha de Guerra?",
    [
      "A Guerra de Canudos",
      "A Revolta da Chibata",
      "A Coluna Prestes",
      "A Sabinada"
    ],
    1,
    "Liderados por João Cândido ('O Almirante Negro'), marinheiros tomaram os encouraçados Minas Geraes e São Paulo exigindo o fim dos açoites e chibatadas.",
    "Leva o nome do chicote de couro usado nos castigos."
  ],
  [
    "hb_c05",
    7,
    2,
    "Qual tratado assinado entre Portugal e Espanha em 1494 dividiu as terras a serem descobertas antes mesmo da chegada de Cabral ao Brasil?",
    [
      "Tratado de Madri",
      "Tratado de Tordesilhas",
      "Tratado de Utrecht",
      "Tratado de Petrópolis"
    ],
    1,
    "O Tratado de Tordesilhas traçou um meridiano a 370 léguas a oeste das ilhas de Cabo Verde, garantindo a Portugal o litoral brasileiro.",
    "Cidade espanhola onde foi assinado o acordo."
  ],
  [
    "hb_c06",
    7,
    1,
    "Quem foi o líder do maior quilombo das Américas, o Quilombo dos Palmares, assassinado em 20 de novembro de 1695?",
    [
      "Ganga Zumba",
      "Zumbi dos Palmares",
      "Aleijadinho",
      "Chico Rei"
    ],
    1,
    "Zumbi liderou a resistência guerreira de Palmares em Alagoas; a data de sua morte inspirou a celebração do Dia da Consciência Negra.",
    "Símbolo máximo da resistência negra no Brasil."
  ],
  [
    "hb_c07",
    7,
    2,
    "A vinda da Família Real portuguesa para o Rio de Janeiro em 1808 ocorreu em fuga de qual general e líder militar europeu?",
    [
      "Otto von Bismarck",
      "Napoleão Bonaparte",
      "Duque de Wellington",
      "Oliver Cromwell"
    ],
    1,
    "D. João VI transferiu toda a corte lusitana para o Brasil após Napoleão invadir Portugal por desrespeito ao Bloqueio Continental.",
    "Imperador dos franceses."
  ],
  [
    "hb_c08",
    7,
    3,
    "Qual conflito armado ocorreu em Minas Gerais entre 1707 e 1709 pela disputa do controle das jazidas de ouro recém-descobertas?",
    [
      "Guerra dos Farrapos",
      "Guerra dos Emboabas",
      "Inconfidência Mineira",
      "Revolta dos Alfaiates"
    ],
    1,
    "Paulistas pioneiros bateram de frente com forasteiros e portugueses recém-chegados, apelidados pejorativamente de 'emboabas'.",
    "Conflito entre paulistas e 'emboabas'."
  ],
  [
    "hb_c09",
    7,
    1,
    "Quem foi o líder inconfidente executado no Rio de Janeiro em 21 de abril de 1792, tornando-se mártir cívico do Brasil?",
    [
      "Tiradentes (Joaquim José da Silva Xavier)",
      "Tomás Antônio Gonzaga",
      "Cláudio Manuel da Costa",
      "Padre Rolim"
    ],
    0,
    "Alferes de cavalaria e prático de dentista, Tiradentes foi o único condenado à morte na conspiração mineira contra a Coroa portuguesa.",
    "Tinha o apelido ligado à extração de dentes."
  ],
  [
    "hb_c10",
    7,
    2,
    "Qual presidente da República foi responsável pela construção e inauguração da nova capital Brasília em 1960?",
    [
      "Getúlio Vargas",
      "Juscelino Kubitschek (JK)",
      "Jânio Quadros",
      "Eurico Gaspar Dutra"
    ],
    1,
    "JK governou com o lema 'Cinquenta anos de progresso em cinco de governo' e construiu a capital no Planalto Central em tempo recorde.",
    "Conhecido pelas iniciais JK."
  ],
  [
    "hb_c11",
    7,
    3,
    "Qual foi o maior e mais sangrento conflito armado entre nações da história da América do Sul, ocorrido entre 1864 e 1870?",
    [
      "Guerra do Chaco",
      "Guerra da Tríplice Aliança (Guerra do Paraguai)",
      "Guerra do Pacífico",
      "Guerra Cisplatina"
    ],
    1,
    "Brasil, Argentina e Uruguai formaram a Tríplice Aliança contra as forças do presidente paraguaio Francisco Solano López.",
    "Conhecida como Guerra do Paraguai."
  ],
  [
    "hb_c12",
    7,
    1,
    "Qual evento cultural de fevereiro de 1922 no Teatro Municipal de São Paulo marcou o nascimento do Modernismo no Brasil?",
    [
      "Semana de Arte Moderna",
      "Festival da Canção",
      "Bienal do Livro",
      "Tropicalismo"
    ],
    0,
    "Artistas e escritores como Oswald de Andrade, Mário de Andrade e Anita Malfatti romperam com o academicismo e valorizaram a identidade brasileira.",
    "A famosa Semana de 22."
  ],
  [
    "hb_c13",
    7,
    2,
    "A compra do território do atual estado do Acre da Bolívia pelo Brasil em 1903 foi negociada por qual diplomata ilustre?",
    [
      "Rui Barbosa",
      "Barão do Rio Branco (José Maria da Silva Paranhos Jr.)",
      "Joaquim Murtinho",
      "Visconde de Mauá"
    ],
    1,
    "O Barão do Rio Branco negociou o Tratado de Petrópolis, pagando 2 milhões de libras esterlinas e construindo a ferrovia Madeira-Mamoré.",
    "Patrono da diplomacia brasileira."
  ],
  [
    "hb_c14",
    7,
    3,
    "A mais longa rebelião provincial do Brasil Imperial, que durou de 1835 a 1845 no Rio Grande do Sul, foi chamada de:",
    [
      "Cabanagem",
      "Guerra dos Farrapos (Revolução Farroupilha)",
      "Balaiada",
      "Sabinada"
    ],
    1,
    "Farroupilhas proclamaram as repúblicas Rio-Grandense e Juliana até o acordo de paz costurado pelo futuro Duque de Caxias.",
    "Famosa revolução dos 'farroupilhas'."
  ],
  [
    "hb_c15",
    7,
    1,
    "O primeiro presidente civil eleito da República do Brasil em 1894, pondo fim à 'República da Espada', foi:",
    [
      "Deodoro da Fonseca",
      "Prudente de Morais",
      "Floriano Peixoto",
      "Campos Sales"
    ],
    1,
    "O paulista Prudente de Morais inaugurou a sequência de presidentes civis da chamada República Velha.",
    "Advogado paulista de Itu."
  ],
  [
    "hb_c16",
    7,
    2,
    "O movimento de contestação popular que eclodiu no Rio de Janeiro em 1904 contra a vacinação compulsória contra a varíola foi:",
    [
      "A Revolta da Vacina",
      "A Revolta do Vintém",
      "O Quebra-Kilos",
      "A Revolta dos Muckers"
    ],
    0,
    "Liderada pelo sanitarista Oswaldo Cruz com apoio de Rodrigues Alves, a campanha gerou conflitos armados nas ruas do Rio por falta de informação à população.",
    "Leva a palavra vacina no nome."
  ],
  [
    "hb_c17",
    7,
    3,
    "Qual pioneiro industrial e banqueiro do século XIX financiou a primeira ferrovia, iluminação a gás e cabos submarinos do Brasil?",
    [
      "Barão de Mauá (Irineu Evangelista de Sousa)",
      "Conde d'Eu",
      "Barão de Vassouras",
      "Visconde de Taunay"
    ],
    0,
    "O Barão de Mauá foi o grande visionário da industrialização no Brasil Imperial, fundando estaleiros, bancos e ferrovias.",
    "Tornou-se Visconde com Grandeza."
  ],
  [
    "hb_c18",
    7,
    1,
    "A 'Era Vargas' refere-se ao longo período em que Getúlio Vargas governou o país de forma contínua entre:",
    [
      "1914 e 1918",
      "1930 e 1945",
      "1955 e 1960",
      "1964 e 1985"
    ],
    1,
    "Getúlio chegou ao poder na Revolução de 1930, promulgou as leis trabalhistas (CLT) e permaneceu no poder por 15 anos ininterruptos.",
    "Começou em 1930 e terminou no fim da 2ª Guerra."
  ],
  [
    "hb_c19",
    7,
    2,
    "Qual foi o primeiro jornal impresso publicado em território brasileiro, fundado em setembro de 1808 no Rio de Janeiro?",
    [
      "Correio Braziliense",
      "Gazeta do Rio de Janeiro",
      "Diário de Pernambuco",
      "O Estado de S. Paulo"
    ],
    1,
    "Com a chegada da Impressão Régia trazida por D. João VI, a Gazeta do Rio foi o pioneiro a circular impresso dentro do país.",
    "Gazeta da então capital colonial."
  ],
  [
    "hb_c20",
    7,
    3,
    "Quem foi a primeira mulher a votar oficialmente no Brasil e em toda a América Latina, na cidade de Mossoró (RN) em 1927?",
    [
      "Chiquinha Gonzaga",
      "Celina Guimarães Viana",
      "Bertha Lutz",
      "Maria Quitéria"
    ],
    1,
    "A professora Celina Guimarães aproveitou a lei eleitoral do Rio Grande do Norte e conquistou na Justiça o direito de votar muito antes do Código Eleitoral de 1932.",
    "Professora potiguar pioneira."
  ],
  [
    "gb_c01",
    8,
    2,
    "Geograficamente, qual é o verdadeiro ponto extremo norte do território brasileiro?",
    [
      "Oiapoque (Amapá)",
      "Monte Caburaí (Roraima)",
      "Ponta do Seixas (Paraíba)",
      "Arroio Chuí (RS)"
    ],
    1,
    "O ponto mais setentrional do Brasil é o Monte Caburaí em Roraima, na nascente do Rio Ailã, ficando cerca de 84 km mais ao norte que o Oiapoque!",
    "Fica em Roraima, na fronteira com a Guiana."
  ],
  [
    "gb_c02",
    8,
    1,
    "Qual é o ponto mais oriental (mais a leste) de todo o continente americano continental, onde o sol nasce primeiro no Brasil?",
    [
      "Cabo Frio (RJ)",
      "Ponta do Seixas (Paraíba)",
      "Porto Seguro (BA)",
      "Farol de Olinda (PE)"
    ],
    1,
    "A Ponta do Seixas fica na cidade de João Pessoa (PB) e é o ponto mais a leste da placa continental das Américas.",
    "Fica na capital paraibana."
  ],
  [
    "gb_c03",
    8,
    2,
    "Qual é o rio subterrâneo gigantesco descoberto por cientistas que flui a 4.000 metros de profundidade sob a Bacia Amazônica?",
    [
      "Rio São Francisco",
      "Rio Hamza",
      "Rio Guaporé",
      "Rio Purus"
    ],
    1,
    "O Rio Hamza flui de oeste para leste no mesmo sentido do Amazonas, com vazão subterrânea lenta calculada em milhares de metros cúbicos por segundo.",
    "Batizado em homenagem ao geofísico Valiya Hamza."
  ],
  [
    "gb_c04",
    8,
    3,
    "Qual é a montanha mais alta de todo o Brasil, com 2.995 metros de altitude, na fronteira com a Venezuela?",
    [
      "Pico da Bandeira",
      "Pico da Neblina",
      "Pedra da Mina",
      "Pico das Agulhas Negras"
    ],
    1,
    "Localizado na Serra do Imeri (AM), o Pico da Neblina está quase sempre coberto por densas nuvens e névoa.",
    "O nome faz alusão às nuvens e neblina constantes."
  ],
  [
    "gb_c05",
    8,
    1,
    "O impressionante bioma brasileiro com vastas dunas de areia branca pontilhadas por lagoas de água doce cristalina no Maranhão chama-se:",
    [
      "Pantanal",
      "Lençóis Maranhenses",
      "Cerrado",
      "Caatinga"
    ],
    1,
    "As chuvas de primeiro semestre acumulam água sobre camadas impermeáveis sob as dunas, criando os cenários paradisíacos dos Lençóis.",
    "Lembram grandes lençóis de areia."
  ],
  [
    "gb_c06",
    8,
    2,
    "Qual é a maior reserva subterrânea de água doce do mundo totalmente confinada em território brasileiro?",
    [
      "Aquífero Guarani",
      "Sistema Aquífero Grande Amazônia (SAGA / Alter do Chão)",
      "Aquífero Cabeças",
      "Aquífero Bauru"
    ],
    1,
    "O aquífero Alter do Chão (integrante do SAGA) possui mais de 160 trilhões de metros cúbicos de água potável, superando o Guarani em volume útil.",
    "Fica sob o subsolo da Amazônia."
  ],
  [
    "gb_c07",
    8,
    1,
    "Qual é o único bioma exclusivo do Brasil, cuja vegetação e fauna se adaptaram ao clima semiárido?",
    [
      "Pampa",
      "Caatinga",
      "Mata Atlântica",
      "Pantanal"
    ],
    1,
    "A palavra Caatinga tem origem tupi ('mata branca'), devido à perda das folhas que deixa os troncos esbranquiçados na época de estiagem.",
    "O bioma da 'mata branca' no Nordeste."
  ],
  [
    "gb_c08",
    8,
    3,
    "Qual é a maior ilha fluviomarítima do planeta, cercada por rios e pelo mar, localizada no Pará?",
    [
      "Ilha do Bananal",
      "Ilha de Marajó",
      "Ilha Grande",
      "Ilha de Santa Catarina"
    ],
    1,
    "A Ilha de Marajó tem área superior à de países como Suíça ou Dinamarca e é famosa por seus búfalos e cerâmica marajoara.",
    "Fica na foz do Rio Amazonas."
  ],
  [
    "gb_c09",
    8,
    2,
    "Qual estado brasileiro possui o maior litoral costeiro contínuo, com mais de 1.100 km de praias?",
    [
      "Rio de Janeiro",
      "Bahia",
      "Maranhão",
      "Ceará"
    ],
    1,
    "A Bahia possui a mais extensa faixa litorânea de todo o Brasil, banhada pelas águas mornas do Atlântico Tropical.",
    "Onde os portugueses aportaram em 1500."
  ],
  [
    "gb_c10",
    8,
    2,
    "O impressionante encontro das águas escuras do Rio Negro com as águas barrentas do Rio Solimões em Manaus não se mistura de imediato devido a:",
    [
      "Presença de óleo mineral",
      "Diferenças de temperatura, densidade e velocidade da correnteza",
      "Magia indígena antiga",
      "Presença de sal marinho"
    ],
    1,
    "O Rio Negro é mais quente (28°C) e lento (2 km/h); o Solimões é mais frio (22°C) e rápido (4 a 6 km/h), correndo lado a lado por mais de 6 km sem se misturar.",
    "Diferenças físicas de temperatura e velocidade."
  ],
  [
    "gb_c11",
    8,
    1,
    "Qual estado brasileiro é cortado exatamente pela Linha do Equador em sua capital Macapá?",
    [
      "Amazonas",
      "Amapá",
      "Roraima",
      "Pará"
    ],
    1,
    "No estádio 'Zerão' em Macapá, cada time pode jogar um tempo da partida em um hemisfério diferente da Terra!",
    "Estado vizinho à Guiana Francesa."
  ],
  [
    "gb_c12",
    8,
    3,
    "A Serra da Canastra em Minas Gerais é célebre por abrigar a nascente histórica de qual grande rio nacional?",
    [
      "Rio Paraná",
      "Rio São Francisco ('Velho Chico')",
      "Rio Tocantins",
      "Rio Doce"
    ],
    1,
    "O Rio São Francisco nasce em São Roque de Minas na Canastra e percorre cinco estados até desaguar no Oceano Atlântico.",
    "Conhecido carinhosamente como o 'Velho Chico'."
  ],
  [
    "gb_c13",
    8,
    2,
    "Qual é o maior estado brasileiro em área territorial, superando o tamanho somado de vários países europeus?",
    [
      "Mato Grosso",
      "Amazonas",
      "Minas Gerais",
      "Bahia"
    ],
    1,
    "Com mais de 1,5 milhão de km², o Amazonas corresponde a mais de 18% de todo o território brasileiro.",
    "O estado mais extenso da Região Norte."
  ],
  [
    "gb_c14",
    8,
    1,
    "O Pantanal é considerado a maior planície de inundação contínua do mundo e se estende por quais dois estados brasileiros?",
    [
      "Goiás e Tocantins",
      "Mato Grosso e Mato Grosso do Sul",
      "Paraná e Santa Catarina",
      "Bahia e Minas Gerais"
    ],
    1,
    "O bioma pantaneiro é compartilhado entre MT e MS, além de adentrar partes da Bolívia e do Paraguai.",
    "Os dois estados do Centro-Oeste com 'Mato Grosso'."
  ],
  [
    "gb_c15",
    8,
    3,
    "Qual é o segundo ponto mais alto do Brasil, localizado na Serra do Caparaó entre Minas Gerais e Espírito Santo?",
    [
      "Pico da Neblina",
      "Pico da Bandeira",
      "Monte Roraima",
      "Pico dos Marins"
    ],
    1,
    "Com 2.891 metros, o Pico da Bandeira recebeu esse nome porque D. Pedro II determinou que uma bandeira imperial fosse fincada em seu cume.",
    "Pico que recebeu a bandeira do Império."
  ],
  [
    "gb_c16",
    8,
    1,
    "Qual é o menor estado da Federação Brasileira em área territorial?",
    [
      "Alagoas",
      "Sergipe",
      "Espírito Santo",
      "Rio de Janeiro"
    ],
    1,
    "Com cerca de 21.900 km², Sergipe é a menor unidade federativa em área do Brasil.",
    "Sua capital é Aracaju."
  ],
  [
    "gb_c17",
    8,
    2,
    "Qual cidade brasileira é a única capital estadual localizada inteiramente em uma ilha marítima?",
    [
      "Recife",
      "Florianópolis",
      "Vitória",
      "São Luís"
    ],
    3,
    "Embora Florianópolis e Vitória tenham a maior parte em ilhas, São Luís do Maranhão fica completamente na Ilha de Upaon-Açu.",
    "Capital fundada por franceses no Maranhão."
  ],
  [
    "gb_c18",
    8,
    2,
    "Qual cânion localizado no Parque Nacional de Aparados da Serra (RS/SC) tem paredões verticais de mais de 700 metros de altura?",
    [
      "Cânion do Guartelá",
      "Cânion do Itaimbezinho",
      "Cânion do Rio São Francisco",
      "Cânion das Bandeiras"
    ],
    1,
    "'Itaimbezinho' vem do tupi-guarani ('pedra cortada'), e é um dos cenários geológicos mais imponentes do Sul do Brasil.",
    "Fica em Aparados da Serra."
  ],
  [
    "gb_c19",
    8,
    3,
    "Qual arquipélago vulcânico brasileiro a 545 km de Natal é considerado Patrimônio Natural da Humanidade pela UNESCO pela sua vida marinha?",
    [
      "Abrolhos",
      "Fernando de Noronha",
      "Trindade",
      "Atol das Rocas"
    ],
    1,
    "Formado por 21 ilhas e ilhotas, Fernando de Noronha é santuário de golfinhos-rotadores, tartarugas-marinhas e aves oceânicas.",
    "O arquipélago mais famoso de Pernambuco."
  ],
  [
    "gb_c20",
    8,
    1,
    "Quantos estados compõem a Região Sul do Brasil?",
    [
      "2",
      "3",
      "4",
      "5"
    ],
    1,
    "A Região Sul é formada exatamente por três estados: Paraná, Santa Catarina e Rio Grande do Sul.",
    "Paraná, Santa Catarina e RS."
  ],
  [
    "ci_c01",
    9,
    2,
    "Qual é o nome do efeito físico contra-intuitivo em que a água morna ou quente pode congelar mais rápido do que a água fria sob certas condições?",
    [
      "Efeito Doppler",
      "Efeito Mpemba",
      "Efeito Bernoulli",
      "Efeito Joule"
    ],
    1,
    "Observado pelo estudante tanzaniano Erasto Mpemba nos anos 1960 ao fazer sorvete, envolve correntes de convecção, taxas de evaporação e gases dissolvidos.",
    "Leva o nome do estudante africano Mpemba."
  ],
  [
    "ci_c02",
    9,
    2,
    "Por que o céu diurno da Terra parece predominantemente azul aos nossos olhos?",
    [
      "Reflexo dos oceanos azuis",
      "Espalhamento de Rayleigh da luz solar de menor comprimento de onda pelos gases da atmosfera",
      "Gás oxigênio líquido no céu",
      "Presença de ozônio concentrado"
    ],
    1,
    "Moléculas de nitrogênio e oxigênio dispersam muito mais a luz azul (comprimento de onda curto) em todas as direções do que a luz vermelha.",
    "Processo óptico chamado Espalhamento de Rayleigh."
  ],
  [
    "ci_c03",
    9,
    3,
    "Qual elemento químico é o mais abundante de todo o Universo observável, compondo cerca de 75% da matéria bariônica?",
    [
      "Oxigênio",
      "Hélio",
      "Hidrogênio",
      "Carbono"
    ],
    2,
    "O hidrogênio é o átomo mais simples (1 próton e 1 elétron) e foi o primeiro a ser formado após o Big Bang.",
    "Símbolo H na tabela periódica."
  ],
  [
    "ci_c04",
    9,
    1,
    "Qual é a velocidade aproximada com que a luz viaja no vácuo cósmico?",
    [
      "30.000 km/s",
      "300.000 km/s",
      "1.000.000 km/s",
      "Velocidade do som"
    ],
    1,
    "A constante 'c' na física é de exatamente 299.792,458 km por segundo (arredondada para 300 mil km/s).",
    "Cerca de 300 mil quilômetros por segundo."
  ],
  [
    "ci_c05",
    9,
    2,
    "Qual ser microscópico com oito patas é famoso por sobreviver ao vácuo do espaço, radiação extrema, congelamento e fervura?",
    [
      "Paramécio",
      "Tardígrado (Urso-d'água)",
      "Ácaro",
      "Nematódeo"
    ],
    1,
    "Em estado de criptobiose, os tardígrados desidratam quase 99% do corpo e suportam temperaturas de -272°C a +150°C e o vácuo sideral!",
    "Também chamado de 'Urso-d'água'."
  ],
  [
    "ci_c06",
    9,
    1,
    "Qual é o único metal comum que se mantém em estado líquido na temperatura ambiente (cerca de 20°C)?",
    [
      "Chumbo",
      "Mercúrio",
      "Gálio",
      "Estanho"
    ],
    1,
    "O mercúrio (símbolo Hg) tem ponto de fusão de -38,8°C, sendo líquido à temperatura normal do ambiente.",
    "Usado antigamente em termômetros."
  ],
  [
    "ci_c07",
    9,
    3,
    "O que diz a Terceira Lei do Movimento formulada por Sir Isaac Newton?",
    [
      "Aceleração é proporcional à força",
      "Para toda ação existe uma reação de mesma intensidade, mesma direção e sentido oposto",
      "A inércia mantém corpos parados",
      "A gravidade atrai as massas"
    ],
    1,
    "A lei da Ação e Reação explica como foguetes decolam, peixes nadam e como nós conseguimos caminhar empurrando o chão para trás.",
    "A famosa lei da Ação e Reação."
  ],
  [
    "ci_c08",
    9,
    2,
    "Qual é o gás que compõe a maior parte da atmosfera que respiramos na Terra (cerca de 78%)?",
    [
      "Oxigênio",
      "Nitrogênio (ou Azoto)",
      "Gás carbônico",
      "Argônio"
    ],
    1,
    "Embora precisemos de oxigênio (21%), o nitrogênio é o gás mais abundante e impede que a atmosfera entre em combustão espontânea.",
    "Símbolo N na tabela periódica."
  ],
  [
    "ci_c09",
    9,
    2,
    "Qual cientista mulher ganhou DOIS Prêmios Nobel em áreas científicas diferentes (Física e Química)?",
    [
      "Rosalind Franklin",
      "Marie Curie",
      "Lise Meitner",
      "Dorothy Hodgkin"
    ],
    1,
    "Marie Curie descobriu o rádio e o polônio e foi pioneira no estudo da radioatividade, vencendo o Nobel de Física em 1903 e de Química em 1911.",
    "Polonesa radicada na França."
  ],
  [
    "ci_c10",
    9,
    1,
    "O DNA tem o formato geométrico de uma escada torcida chamada na biologia de:",
    [
      "Hélice tripla",
      "Dupla hélice",
      "Círculo concêntrico",
      "Fita reta"
    ],
    1,
    "O modelo da dupla hélice foi descoberto com a contribuição fundamental da cristalógrafa Rosalind Franklin em 1953.",
    "Estrutura clássica de dupla hélice."
  ],
  [
    "ci_c11",
    9,
    3,
    "Qual fenômeno quântico permite que uma partícula atravesse uma barreira física de energia que na física clássica seria intransponível?",
    [
      "Entrelaçamento quântico",
      "Tunelamento quântico",
      "Superposição",
      "Decaimento alfa"
    ],
    1,
    "O tunelamento quântico é crucial para a fusão nuclear no núcleo do Sol e permite o funcionamento de memórias flash SSD modernas!",
    "A partícula 'abre um túnel' pela barreira."
  ],
  [
    "ci_c12",
    9,
    2,
    "O que acontece com o tempo de um relógio que se desloca em velocidade próxima à da luz em relação a um relógio parado?",
    [
      "O tempo passa mais rápido",
      "O tempo passa mais devagar (dilatação temporal)",
      "O tempo para de existir",
      "O relógio anda para trás"
    ],
    1,
    "Previsto pela Teoria da Relatividade de Einstein, a dilatação do tempo faz com que viajantes ultrarrápidos envelheçam mais devagar que quem ficou para trás.",
    "O tempo se dilata e passa mais devagar."
  ],
  [
    "ci_c13",
    9,
    1,
    "Qual é o órgão humano que mais consome energia e glicose em repouso (cerca de 20% de todas as calorias do corpo)?",
    [
      "Fígado",
      "Cérebro",
      "Coração",
      "Rins"
    ],
    1,
    "Pesando apenas cerca de 1,4 kg, o cérebro humano consome uma fatia desproporcional da energia gerada pelo organismo.",
    "O centro de controle do sistema nervoso."
  ],
  [
    "ci_c14",
    9,
    2,
    "Qual substância atípica se expande (aumenta de volume) ao congelar em vez de se contrair como a maioria dos líquidos?",
    [
      "Óleo vegetal",
      "Água",
      "Álcool etílico",
      "Mercúrio"
    ],
    1,
    "As ligações de hidrogênio da água formam uma estrutura cristalina aberta quando congelada, fazendo o gelo ser menos denso e flutuar.",
    "A substância líquida da vida."
  ],
  [
    "ci_c15",
    9,
    3,
    "Qual é a temperatura teórica mais baixa possível em todo o cosmos, na qual as partículas atingem energia cinética mínima?",
    [
      "-100 °C",
      "-273,15 °C (Zero Absoluto ou 0 Kelvin)",
      "-500 °C",
      "-1.000 °C"
    ],
    1,
    "No Zero Absoluto (0 K ou -273,15 °C), o movimento térmico atômico quase cessa por completo segundo a termodinâmica.",
    "Chamado de Zero Absoluto na escala Kelvin."
  ],
  [
    "ci_c16",
    9,
    1,
    "Qual é a força invisível fundamental que mantém os planetas girando ao redor do Sol e nossos pés no chão?",
    [
      "Eletromagnetismo",
      "Força Gravitacional",
      "Força Nuclear Forte",
      "Força Centrífuga"
    ],
    1,
    "A gravidade atrai massas entre si, regendo a órbita da Lua, dos planetas e a formação de galáxias.",
    "Descoberta conceitualmente por Isaac Newton."
  ],
  [
    "ci_c17",
    9,
    2,
    "Os diamantes e o grafite do lápis são formados exatamente pelo mesmo elemento químico. Qual é ele?",
    [
      "Silício",
      "Carbono",
      "Ferro",
      "Enxofre"
    ],
    1,
    "Ambos são formas alotrópicas do carbono: o diamante tem átomos arranjados em rede tridimensional rígida e o grafite em camadas escorregadias.",
    "Elemento de base da química orgânica."
  ],
  [
    "ci_c18",
    9,
    3,
    "Qual cientista desenvolveu a Tabela Periódica dos elementos organizando-os por massa e deixando lacunas para elementos que ainda seriam descobertos?",
    [
      "Dmitri Mendeleev",
      "Niels Bohr",
      "John Dalton",
      "Ernest Rutherford"
    ],
    0,
    "Mendeleev previu com precisão espantosa as propriedades químicas e físicas de elementos como gálio e germânio antes de serem encontrados!",
    "Químico russo."
  ],
  [
    "ci_c19",
    9,
    1,
    "Qual é o maior mamífero que já viveu em toda a história do planeta Terra, superando qualquer dinossauro em peso?",
    [
      "Tiranossauro Rex",
      "Baleia-azul",
      "Megalodonte",
      "Mamute-lanoso"
    ],
    1,
    "A baleia-azul pode atingir mais de 30 metros de comprimento e pesar até 180 toneladas (seu coração sozinho tem o tamanho de um carro compacto!).",
    "O gigante dos oceanos."
  ],
  [
    "ci_c20",
    9,
    2,
    "Por que cortar cebola faz as pessoas chorarem?",
    [
      "Pelo cheiro forte apenas",
      "Porque libera um gás à base de enxofre que reage com a umidade dos olhos formando ácido suave",
      "Porque ela tem espinhos microscópicos",
      "Porque altera a pressão do ar"
    ],
    1,
    "Ao romper as células da cebola, enzimas formam o gás sulfóxido tiopropanal, que ativa as glândulas lacrimais de defesa.",
    "Gás com enxofre que irrita as lágrimas."
  ],
  [
    "te_c01",
    10,
    2,
    "Qual foi a origem literal da palavra 'Bug' usada para descrever falhas em sistemas de computador?",
    [
      "Uma sigla militar secreta",
      "Uma mariposa de verdade que entrou em um relé do computador Harvard Mark II em 1947",
      "O sobrenome de um programador",
      "Um erro de cálculo na NASA"
    ],
    1,
    "A pioneira Grace Hopper registrou no diário de bordo a remoção de uma mariposa presa nos contatos do computador mecânico com a anotação: 'Primeiro caso real de inseto (bug) encontrado'.",
    "Um inseto real preso nos fios do computador."
  ],
  [
    "te_c02",
    10,
    1,
    "De qual material inusitado foi feito o primeiro mouse de computador do mundo inventado por Douglas Engelbart em 1964?",
    [
      "Plástico rígido",
      "Bloco de madeira com rodinhas de metal",
      "Alumínio fundido",
      "Cerâmica esmaltada"
    ],
    1,
    "Engelbart esculpiu uma caixa de madeira artesanal com um botão na parte superior e duas rodas metálicas internas perpendiculares.",
    "Material ecológico que vem de árvores."
  ],
  [
    "te_c03",
    10,
    2,
    "Qual foi o primeiro produto comercial do mundo a ser escaneado por um leitor de código de barras a laser em 1974?",
    [
      "Um pacote de chicletes Wrigley's sabor menta",
      "Uma garrafa de refrigerante",
      "Um livro de matemática",
      "Uma lata de sopa"
    ],
    0,
    "O código Universal de Produto (UPC) estreou em um supermercado em Troy, Ohio, escaneando uma embalagem de chicletes de 10 unidades.",
    "Um chiclete mastigável."
  ],
  [
    "te_c04",
    10,
    3,
    "Qual matemática inglesa do século XIX é considerada a primeira programadora da história por criar o primeiro algoritmo para a Máquina Analítica?",
    [
      "Grace Hopper",
      "Ada Lovelace",
      "Margaret Hamilton",
      "Hedy Lamarr"
    ],
    1,
    "Ada Lovelace escreveu notas detalhadas e um programa para calcular números de Bernoulli na máquina idealizada por Charles Babbage.",
    "Filha do poeta Lord Byron."
  ],
  [
    "te_c05",
    10,
    1,
    "O que significa a sigla mundial 'Wi-Fi' usada para redes de internet sem fio?",
    [
      "Wireless Fidelity (Fidelidade Sem Fio - criada como nome comercial)",
      "Wide Frequency Internet",
      "World Interface Fiber",
      "Web Information Format"
    ],
    0,
    "O termo foi criado por uma agência de branding para a Wireless Ethernet Compatibility Alliance porque soava moderno e lembrava a expressão 'hi-fi'.",
    "Marca comercial associada a som e wireless."
  ],
  [
    "te_c06",
    10,
    2,
    "Qual atriz e inventora de Hollywood patenteou na Segunda Guerra a tecnologia de salto de frequência que originou a base do Wi-Fi e Bluetooth?",
    [
      "Marilyn Monroe",
      "Hedy Lamarr",
      "Audrey Hepburn",
      "Greta Garbo"
    ],
    1,
    "Hedy Lamarr e o compositor George Antheil patentearam um sistema de rádio com salto de frequência para torpedos que ninguém conseguia interceptar.",
    "Estrela do cinema clássico de Hollywood."
  ],
  [
    "te_c07",
    10,
    1,
    "O primeiro domínio registrado na história da internet comercial (.com), em 15 de março de 1985, foi:",
    [
      "apple.com",
      "symbolics.com",
      "ibm.com",
      "google.com"
    ],
    1,
    "A empresa de computadores Symbolics registrou o pioneiro 'symbolics.com', que continua ativo até hoje como marco histórico da web.",
    "Começa com a letra S."
  ],
  [
    "te_c08",
    10,
    2,
    "Qual foi o primeiro smartphone com tela capacitiva multitouch revolucionária que dispensava caneta stylus, lançado em 2007?",
    [
      "Nokia N95",
      "iPhone (1ª Geração)",
      "BlackBerry Bold",
      "Motorola Razr"
    ],
    1,
    "Steve Jobs apresentou o iPhone em janeiro de 2007 combinando iPod com tela panorâmica, telefone revolucionário e comunicador de internet em um toque de dedos.",
    "Aparelho icônico lançado pela Apple."
  ],
  [
    "te_c09",
    10,
    3,
    "Qual foi o primeiro videogame comercial operado por moedas (arcade) a fazer sucesso de massa estrondoso em 1972?",
    [
      "Space Invaders",
      "Pong (Atari)",
      "Pac-Man",
      "Donkey Kong"
    ],
    1,
    "Criado por Nolan Bushnell e Allan Alcorn na recém-nascida Atari, o jogo de ping-pong eletrônico entupiu a caixa de moedas da máquina em um bar local.",
    "Simulava tênis de mesa com duas barras."
  ],
  [
    "te_c10",
    10,
    1,
    "Qual empresa desenvolveu o sistema operacional Android antes de ser adquirida pela Google em 2005?",
    [
      "Android Inc. (fundada por Andy Rubin)",
      "Microsoft",
      "Samsung",
      "Sony"
    ],
    0,
    "Andy Rubin, Rich Miner e Nick Sears fundaram a Android Inc. originalmente para criar um sistema operacional para câmeras digitais!",
    "Fundada por Andy Rubin."
  ],
  [
    "te_c11",
    10,
    2,
    "O primeiro microprocessador comercial em chip único da história, lançado em 1971 para uma calculadora japonesa, foi o:",
    [
      "Motorola 68000",
      "Intel 4004",
      "Zilog Z80",
      "MOS 6502"
    ],
    1,
    "Projetado por Federico Faggin e Marcian Hoff na Intel, o chip de 4 bits reuniu 2.300 transistores e inaugurou a revolução dos PCs.",
    "Chip pioneiro da Intel."
  ],
  [
    "te_c12",
    10,
    3,
    "Quem inventou a World Wide Web (WWW) e o protocolo HTTP no laboratório do CERN em 1989 sem cobrar royalties para que a internet fosse livre?",
    [
      "Bill Gates",
      "Tim Berners-Lee",
      "Steve Wozniak",
      "Linus Torvalds"
    ],
    1,
    "O cientista britânico Tim Berners-Lee programou o primeiro navegador e servidor web e decidiu não patentear a ideia para mantê-la aberta à humanidade.",
    "Cientista britânico com título de Sir."
  ],
  [
    "te_c13",
    10,
    1,
    "Quantos bits formam um único Byte na computação moderna padrão?",
    [
      "4 bits",
      "8 bits",
      "16 bits",
      "32 bits"
    ],
    1,
    "Um byte é composto por um conjunto de 8 bits binários (0 ou 1), permitindo representar até 256 valores diferentes.",
    "Oito bits."
  ],
  [
    "te_c14",
    10,
    2,
    "Qual foi o lendário cientista da computação britânico que quebrou a máquina criptográfica nazista Enigma durante a Segunda Guerra Mundial?",
    [
      "Alan Turing",
      "John von Neumann",
      "Claude Shannon",
      "Norbert Wiener"
    ],
    0,
    "Alan Turing construiu as máquinas eletromecânicas 'Bombe' em Bletchley Park e é reconhecido como o pai da ciência da computação teórica.",
    "Pioneiro da computação e do teste de inteligência."
  ],
  [
    "te_c15",
    10,
    2,
    "Qual mascote simpático é o símbolo oficial do sistema operacional livre Linux?",
    [
      "Uma raposa de fogo",
      "Um pinguim chamado Tux",
      "Um robô verde",
      "Um camaleão"
    ],
    1,
    "Criado por Linus Torvalds, o pinguim Tux foi escolhido porque Torvalds adorava pinguins após ter sido bicado por um em um zoológico na Austrália!",
    "O famoso pinguim do Linux."
  ],
  [
    "te_c16",
    10,
    3,
    "Qual foi a capacidade de memória RAM do computador de navegação da Apollo 11 (AGC) que levou a humanidade à Lua em 1969?",
    [
      "Cerca de 4 Kilobytes de RAM",
      "1 Megabyte",
      "512 Megabytes",
      "4 Gigabytes"
    ],
    0,
    "O computador da Apollo tinha cerca de 4 KB de memória de trabalho e 72 KB de ROM tecida à mão com fios de cobre por costureiras industriais!",
    "Menos memória do que uma foto pequena de WhatsApp."
  ],
  [
    "te_c17",
    10,
    1,
    "Qual é o nome do criador da rede de mensagens e fotos com desaparecimento temporário (Snapchat)?",
    [
      "Mark Zuckerberg",
      "Evan Spiegel",
      "Jack Dorsey",
      "Jan Koum"
    ],
    1,
    "Evan Spiegel desenvolveu o aplicativo enquanto estudava na Universidade de Stanford nos EUA.",
    "Fundador do Snapchat."
  ],
  [
    "te_c18",
    10,
    2,
    "Por que os cabos de fibra óptica transmitem dados à velocidade da luz sem vazar sinal pelas paredes do cabo?",
    [
      "Por blindagem de chumbo",
      "Pelo princípio da reflexão interna total da luz no núcleo de vidro",
      "Por campos magnéticos refrigerados",
      "Porque o vidro é opaco"
    ],
    1,
    "A luz é disparada em um ângulo tão raso dentro do vidro ultra-puro que bate e reflete continuamente por reflexão interna total por dezenas de quilômetros.",
    "Reflexão interna total."
  ],
  [
    "te_c19",
    10,
    3,
    "Qual linguagem de programação foi batizada em homenagem a uma das primeiras matemáticas e pioneira da computação?",
    [
      "Lisp",
      "Ada",
      "Pascal",
      "Fortran"
    ],
    1,
    "O Departamento de Defesa dos EUA batizou a linguagem 'Ada' em homenagem a Ada Lovelace, condessa e primeira programadora da história.",
    "Nome da filha de Lord Byron."
  ],
  [
    "te_c20",
    10,
    1,
    "Qual foi a primeira mensagem enviada entre dois computadores na rede precursora da internet (ARPANET) em 1969?",
    [
      "HELLO WORLD",
      "LOGIN (o sistema caiu na terceira letra, enviando apenas 'LO')",
      "INTERNET ON",
      "TEST 123"
    ],
    1,
    "A equipe tentou digitar 'LOGIN', mas após as letras L e O o sistema travou, fazendo de 'LO' a primeiríssima transmissão da história da internet!",
    "Tentaram enviar LOGIN e o sistema caiu no meio."
  ],
  [
    "an_c01",
    11,
    2,
    "Qual pequeno crustáceo marinho desfere um soco tão veloz que quebra vidros de aquário e ferve a água ao redor momentaneamente?",
    [
      "Camarão-pistola / Camarão-mantis (Stomatopoda)",
      "Caranguejo-ermitão",
      "Lagosta-boxeadora",
      "Krill"
    ],
    0,
    "O camarão-mantis acelera suas patas com a velocidade de um tiro de calibre .22, gerando bolhas de cavitação que atingem milhares de graus!",
    "Conhecido como camarão-mantis ou camarão-boxeador."
  ],
  [
    "an_c02",
    11,
    1,
    "Qual animal tem a língua tão comprida que fica enrolada na parte de trás do crânio para proteger o cérebro de impactos?",
    [
      "Camaleão",
      "Pica-pau",
      "Tamanduá-bandeira",
      "Girafa"
    ],
    1,
    "A língua do pica-pau passa por trás dos olhos e envolve o crânio agindo como um cinto de segurança contra concussões repetidas ao bicar árvores.",
    "Pássaro famoso dos desenhos animados que bica madeira."
  ],
  [
    "an_c03",
    11,
    2,
    "Qual animal marinho possui TRÊS corações, cérebro em formato de anel ao redor do esôfago e sangue de cor azul?",
    [
      "Água-viva",
      "Polvo",
      "Estrela-do-mar",
      "Tubarão"
    ],
    1,
    "Polvos usam hemocianina à base de cobre para transportar oxigênio na água fria (o que torna o sangue azul) e possuem dois terços dos neurônios nos tentáculos!",
    "Molusco inteligente com 8 tentáculos."
  ],
  [
    "an_c04",
    11,
    3,
    "Qual é o único mamífero conhecido com capacidade de voo verdadeiro e sustentado pelo bater ativo de suas asas?",
    [
      "Esquilo-voador",
      "Morcego",
      "Lêmure-voador",
      "Planador-do-açúcar"
    ],
    1,
    "Esquilos e lêmures voadores apenas planam de galho em galho; os morcegos são os únicos mamíferos que realmente batem asas e voam.",
    "Animal noturno associado ao Batman."
  ],
  [
    "an_c05",
    11,
    1,
    "Qual mamífero australiano bizarro bota ovos, tem bico semelhante ao de pato, rabo de castor e os machos produzem veneno nas patas traseiras?",
    [
      "Canguru",
      "Ornitorrinco",
      "Equidna",
      "Diabo-da-tasmânia"
    ],
    1,
    "O ornitorrinco é um monotremado tão inusitado que os cientistas europeus acharam que o primeiro exemplar empalhado recebido era uma fraude costurada à mão!",
    "Tem bico de pato e cauda de castor."
  ],
  [
    "an_c06",
    11,
    2,
    "Qual é o animal terrestre mais rápido do planeta, capaz de acelerar de 0 a 100 km/h em cerca de 3 segundos?",
    [
      "Leopardo",
      "Guepardo (Chita)",
      "Antilocapra",
      "Leão"
    ],
    1,
    "O guepardo atinge até 115 km/h em arrancadas curtas na savana, usando sua cauda pesada como leme aerodinâmico para mudar de direção em plena corrida.",
    "O felino africano também chamado de Chita."
  ],
  [
    "an_c07",
    11,
    3,
    "Qual água-viva microscópica é considerada pelos biólogos biologicamente 'imortal' por conseguir reverter seu ciclo de vida adulto para pólipo jovem?",
    [
      "Turritopsis dohrnii",
      "Vespa-do-mar",
      "Caravela-portuguesa",
      "Água-viva-da-lua"
    ],
    0,
    "Quando doente ou sob estresse, a Turritopsis dohrnii reprograma suas células maduras e renasce como um organismo jovem indefinidamente.",
    "Nome científico Turritopsis dohrnii."
  ],
  [
    "an_c08",
    11,
    1,
    "Qual ave gigante não voadora bota o maior ovo do reino animal vivo hoje?",
    [
      "Emu",
      "Avestruz",
      "Casuar",
      "Kiwi"
    ],
    1,
    "Um único ovo de avestruz pesa cerca de 1,4 kg, o equivalente a cerca de duas dúzias de ovos de galinha comuns.",
    "A maior ave viva da Terra."
  ],
  [
    "an_c09",
    11,
    2,
    "Qual réptil é famoso pela capacidade de mudar de cor para se comunicar e regular a temperatura, além de mover os dois olhos independentemente?",
    [
      "Iguana",
      "Camaleão",
      "Lagartixa",
      "Dragão-de-komodo"
    ],
    1,
    "A mudança de cor do camaleão deve-se a cristais de guanina em sua pele que alteram a reflexão da luz de acordo com humor e calor.",
    "Mestre do disfarce com olhos giratórios."
  ],
  [
    "an_c10",
    11,
    2,
    "Por que os flamingos têm penas cor-de-rosa se eles nascem com penugem cinzenta?",
    [
      "Pelo sol escaldante",
      "Pela alimentação rica em carotenoides presentes em algas e pequenos camarões",
      "Por hormônios da idade adulta",
      "Para assustar predadores"
    ],
    1,
    "Se criados em cativeiro sem alimentos ricos em betacaroteno e cantaxantina, os flamingos perdem a cor rosada e ficam brancos.",
    "Pigmentos carotenoides da comida."
  ],
  [
    "an_c11",
    11,
    3,
    "O sangue azul do caranguejo-ferradura (Límulo) é vital para a medicina moderna mundial porque:",
    [
      "Cura o câncer",
      "Contém amebócitos que coagulam instantaneamente na presença de endotoxinas bacterianas perigosas",
      "Substitui o sangue humano em transfusões",
      "É rico em vitaminas raras"
    ],
    1,
    "O reagente LAL extraído do seu sangue azul é usado para testar a esterilidade de todas as vacinas e medicamentos injetáveis do planeta.",
    "Detecta bactérias em vacinas e remédios."
  ],
  [
    "an_c12",
    11,
    1,
    "Qual é o único pássaro capaz de voar de costas (em marcha à ré) e parar no ar como um helicóptero?",
    [
      "Beija-flor (Colibri)",
      "Gavião",
      "Pardal",
      "Andorinha"
    ],
    0,
    "As articulações das asas do beija-flor giram em padrão de oito (oito deitado), permitindo pairar no ar, subir na vertical e voar para trás.",
    "Bate as asas dezenas de vezes por segundo."
  ],
  [
    "an_c13",
    11,
    2,
    "As listras pretas e brancas de cada zebra são tão únicas quanto:",
    [
      "O tamanho das patas",
      "A impressão digital dos seres humanos",
      "A cor dos dentes",
      "A velocidade da corrida"
    ],
    1,
    "Não existem duas zebras com o mesmo padrão de listras no mundo; o padrão ajuda no reconhecimento individual e confunde moscas e predadores.",
    "Equivalem a uma impressão digital da pele."
  ],
  [
    "an_c14",
    11,
    3,
    "Qual mamífero possui impressões digitais tão parecidas com as dos humanos que podem enganar peritos criminais em cenas de crime?",
    [
      "Chimpanzé",
      "Coala",
      "Gorila",
      "Lontra"
    ],
    1,
    "As impressões papilares dos dedos do coala australiano são praticamente indistinguíveis das humanas até mesmo sob microscópio eletrônico!",
    "Marsupial que come folhas de eucalipto."
  ],
  [
    "an_c15",
    11,
    1,
    "Qual animal é conhecido por dormir boiando de costas na água segurando a pata de outro para a correnteza não os separar?",
    [
      "Lontra-marinha",
      "Foca",
      "Pinguim",
      "Castor"
    ],
    0,
    "Lontras-marinhas dormem em grupos ('rafts') enroladas em algas gigantes e de mãos dadas com seus parceiros e filhotes.",
    "Mamífero aquático fofo com bigodes."
  ],
  [
    "an_c16",
    11,
    2,
    "Qual animal produz o veneno mais letal do reino animal, capaz de matar 60 humanos adultos com uma única dose em minutos?",
    [
      "Cobra Naja",
      "Vespa-do-mar (Água-viva Chironex fleckeri)",
      "Sapo ponta-de-flecha",
      "Aranha-armadeira"
    ],
    1,
    "Nativa do norte da Austrália, seus tentáculos transparentes de até 3 metros causam paralisia cardíaca fulminante em quem esbarra neles.",
    "Água-viva australiana com forma de caixa."
  ],
  [
    "an_c17",
    11,
    3,
    "Os golfinhos usam qual sistema sofisticado de navegação que emite cliques sonoros e escuta o eco para 'ver' objetos no escuro?",
    [
      "Magnetismo solar",
      "Ecolocalização (Biossonar)",
      "Termovisão",
      "Olfato submarino"
    ],
    1,
    "O biossonar dos golfinhos permite identificar a densidade, tamanho e forma de peixes a centenas de metros sob a água turva.",
    "Emite som e lê o eco de volta."
  ],
  [
    "an_c18",
    11,
    1,
    "Qual animal tem a maior gestação entre todos os mamíferos terrestres, durando cerca de 22 meses (quase 2 anos)?",
    [
      "Rinoceronte",
      "Elefante",
      "Hipopótamo",
      "Baleia"
    ],
    1,
    "A gestação do elefante-africano dura quase dois anos completos para que o cérebro altamente complexo do filhote se desenvolva.",
    "O maior animal terrestre com tromba."
  ],
  [
    "an_c19",
    11,
    2,
    "Qual pequeno animal é conhecido por seu apetite voraz por folhas de eucalipto e passa até 20 horas por dia dormindo para digeri-las?",
    [
      "Bicho-preguiça",
      "Coala",
      "Panda-gigante",
      "Lêmure"
    ],
    1,
    "As folhas de eucalipto são fibrosas e tóxicas para a maioria dos animais; o coala precisa de muita energia metabólica e sono para metabolizá-las.",
    "Vive nas árvores da Austrália."
  ],
  [
    "an_c20",
    11,
    2,
    "Qual animal tem pupilas retangulares horizontais que proporcionam visão panorâmica de quase 340 graus para detectar predadores?",
    [
      "Gato",
      "Cabra (e ovelha)",
      "Águia",
      "Tubarão"
    ],
    1,
    "As pupilas horizontais das cabras permanecem niveladas com o solo mesmo quando elas abaixam a cabeça para pastar!",
    "Animal que dá leite e sobe em penhascos."
  ],
  [
    "cu_c01",
    12,
    1,
    "Qual alimento natural praticamente NUNCA estraga, tendo sido encontrado perfeitamente comestível em tumbas egípcias de mais de 3.000 anos?",
    [
      "Azeite de oliva",
      "Mel de abelha",
      "Vinho tinto",
      "Grão-de-bico seco"
    ],
    1,
    "O mel tem baixíssima umidade e alta acidez natural (pH baixo), impedindo qualquer bactéria ou fungo de proliferar.",
    "Produzido pelas abelhas a partir do néctar."
  ],
  [
    "cu_c02",
    12,
    2,
    "Por que a Torre Eiffel de metal em Paris cresce cerca de 15 cm de altura durante os meses quentes do verão europeu?",
    [
      "Pelo crescimento das fundações",
      "Pela dilatação térmica do ferro com o calor solar",
      "Pelo vento que sopra para cima",
      "Pelo peso dos turistas no inverno"
    ],
    1,
    "O calor faz as moléculas do ferro vibrarem com mais intensidade e ocuparem mais espaço, expandindo a estrutura metálica de 300 metros.",
    "Fenômeno da física chamado dilatação térmica."
  ],
  [
    "cu_c03",
    12,
    2,
    "Por que as letras dos teclados de computador e celulares seguem a ordem 'QWERTY' em vez da ordem alfabética ABCD?",
    [
      "Para escrever mais rápido",
      "Para evitar que as hastes mecânicas das antigas máquinas de escrever travassem ao digitar letras frequentes juntas",
      "Por exigência da corte inglesa",
      "Por sorteio aleatório"
    ],
    1,
    "Christopher Sholes projetou o layout em 1873 separando pares de letras comuns na língua inglesa para diminuir o emperramento mecânico das teclas.",
    "Desenhado para antigas máquinas de escrever."
  ],
  [
    "cu_c04",
    12,
    3,
    "Qual é o único planeta do Sistema Solar onde o Sol nasce no oeste e se põe no leste devido à sua rotação retrógrada (ao contrário)?",
    [
      "Marte",
      "Vênus",
      "Saturno",
      "Netuno"
    ],
    1,
    "Vênus gira de cabeça para baixo ou no sentido horário (retrógrado), além de levar 243 dias terrestres para dar uma única volta sobre o próprio eixo!",
    "O planeta mais brilhante no céu poente."
  ],
  [
    "cu_c05",
    12,
    1,
    "Qual animal tem a capacidade de regenerar membros inteiros, cauda, olhos e até partes do coração e cérebro quando ferido?",
    [
      "Sapo-cururu",
      "Axolote (Salamandra mexicana)",
      "Camaleão",
      "Cobra-coral"
    ],
    1,
    "O axolote (Ambystoma mexicanum) retém características larvais na vida adulta e consegue reconstruir tecidos complexos sem deixar cicatrizes.",
    "Famosa salamandra aquática mexicana com brânquias externas."
  ],
  [
    "cu_c06",
    12,
    2,
    "Qual produto foi inventado acidentalmente em 1945 quando o engenheiro Percy Spencer percebeu que uma barra de chocolate no seu bolso havia derretido perto de um radar de magnetron?",
    [
      "O micro-ondas",
      "A torradeira elétrica",
      "O freezer frost-free",
      "A televisão de tubo"
    ],
    0,
    "Spencer logo fez testes com milho de pipoca e ovos, levando ao desenvolvimento do primeiro forno de micro-ondas da história.",
    "Aparelho que esquenta comida em minutos."
  ],
  [
    "cu_c07",
    12,
    1,
    "Qual jogo de tabuleiro clássico foi criado no início do século XX como uma crítica ferrenha contra os perigos dos monopólios imobiliários predatórios?",
    [
      "War",
      "Monopoly (Banco Imobiliário)",
      "Jogo da Vida",
      "Detetive"
    ],
    1,
    "Elizabeth Magie patenteou 'The Landlord's Game' em 1904 para alertar sobre como os grandes donos de terras exploravam os inquilinos.",
    "Comprar casas e hotéis nas ruas."
  ],
  [
    "cu_c08",
    12,
    2,
    "Por que os astronautas no espaço voltam para a Terra cerca de 3 a 5 cm mais altos do que quando partiram?",
    [
      "Pela comida liofilizada",
      "Porque a coluna vertebral se descomprime sem a gravidade empurrando as vértebras para baixo",
      "Pelo capacete puxando a cabeça",
      "Por ilusão de ótica"
    ],
    1,
    "Na microgravidade, os discos cartilaginosos entre as vértebras se expandem; ao retornar à gravidade da Terra, a coluna volta à altura normal em poucas semanas.",
    "A gravidade não comprime as vértebras no espaço."
  ],
  [
    "cu_c09",
    12,
    3,
    "Qual alimento doce foi usado como moeda de troca valiosa pelas civilizações maia e asteca antes da chegada dos europeus?",
    [
      "Sementes de cacau (chocolate)",
      "Cana-de-açúcar",
      "Mel de abelha silvestre",
      "Baunilha em fava"
    ],
    0,
    "Para os maias e astecas, os grãos de cacau valiam tanto que um coelho podia ser comprado por 10 sementes e um escravo por 100 sementes!",
    "A matéria-prima do chocolate."
  ],
  [
    "cu_c10",
    12,
    1,
    "Qual é o único músculo do corpo humano que se prende por apenas uma de suas extremidades?",
    [
      "O bíceps",
      "A língua",
      "O coração",
      "O diafragma"
    ],
    1,
    "A língua fica ancorada na base da boca e garganta através do osso hioide, enquanto a outra ponta fica livre para movimentação e fala.",
    "Músculo que saboreia a comida na boca."
  ],
  [
    "cu_c11",
    12,
    2,
    "Qual cor de giz de cera mais frequentemente sobrevive quase inteira nos estojos infantis por ser a menos gasta?",
    [
      "Preto",
      "Branco",
      "Vermelho",
      "Azul"
    ],
    1,
    "Como os cadernos e papéis de desenho costumam ser brancos, o giz de cera branco raramente é utilizado para colorir.",
    "A cor do próprio papel de desenho."
  ],
  [
    "cu_c12",
    12,
    3,
    "Qual famoso brinquedo infantil de mola flexível de aço (Slinky) foi inventado por um engenheiro naval ao tentar estabilizar instrumentos em navios na Segunda Guerra?",
    [
      "Pula-pula",
      "Mola maluca (Slinky)",
      "Ioiô",
      "Bambolê"
    ],
    1,
    "Richard James viu uma mola de torção cair de uma prateleira e continuar 'caminhando' de degrau em degrau pelo chão em 1943.",
    "Mola que 'desce escadas' sozinha."
  ],
  [
    "cu_c13",
    12,
    1,
    "Quantos corações tem uma minhoca comum da terra?",
    [
      "1",
      "5 pares (10 arcos aórticos)",
      "Nenhum",
      "3"
    ],
    1,
    "A minhoca não tem um coração único; ela possui cinco pares de arcos aórticos musculares que bombeiam o sangue pelo corpo anelado.",
    "Cinco pares de pequenos corações."
  ],
  [
    "cu_c14",
    12,
    2,
    "A 'febre da corrida do ouro' de 1849 na Califórnia fez surgir uma famosa marca de calças jeans reforçadas com rebites de cobre. Qual foi?",
    [
      "Lee",
      "Levi Strauss (Levi's)",
      "Wrangler",
      "Diesel"
    ],
    1,
    "O imigrante Levi Strauss e o alfaiate Jacob Davis reforçaram calças de brim com rebites metálicos nos bolsos para mineiros que carregavam pepitas pesadas.",
    "A pioneira Levi's."
  ],
  [
    "cu_c15",
    12,
    2,
    "Qual é a única letra do alfabeto latino que não aparece em nenhum dos nomes dos 50 estados dos Estados Unidos?",
    [
      "X",
      "Z",
      "Q",
      "J"
    ],
    2,
    "A letra Q é a única ausente em todos os nomes dos cinquenta estados norte-americanos.",
    "A letra antes do R no alfabeto."
  ],
  [
    "cu_c16",
    12,
    3,
    "O plástico-bolha foi originalmente inventado em 1957 com qual propósito curioso antes de virar material de embalagem?",
    [
      "Papel de parede texturizado e futurista",
      "Isolante de botas de neve",
      "Boia salva-vidas de bolso",
      "Brinquedo para estourar"
    ],
    0,
    "Al Fielding e Marc Chavannes tentaram criar um papel de parede tridimensional de plástico com bolhas de ar; como não vendeu, foi promovido para embalar computadores da IBM!",
    "Criado para colar nas paredes de casa."
  ],
  [
    "cu_c17",
    12,
    1,
    "Qual animal é conhecido por ter impressões digitais na língua e não nos dedos?",
    [
      "Gato",
      "Cachorro (impressão do focinho)",
      "Cavalo",
      "Elefante"
    ],
    1,
    "Assim como as impressões digitais humanas, a textura e ranhuras da ponta do focinho de cada cachorro são absolutamente únicas no mundo.",
    "O melhor amigo de quatro patas do homem."
  ],
  [
    "cu_c18",
    12,
    2,
    "Qual foi o primeiro produto vendido em lata na história que exigiu a invenção do abridor de latas quase 50 anos depois?",
    [
      "Cerveja artesanal",
      "Alimentos conservados para marinheiros e soldados britânicos",
      "Tinta para parede",
      "Leite condensado"
    ],
    1,
    "Peter Durand patenteou a lata de folha de flandres em 1810; as latas eram tão grossas que os soldados precisavam abri-las com martelo e baioneta até inventarem o abridor em 1858!",
    "Comida enlatada do exército."
  ],
  [
    "cu_c19",
    12,
    3,
    "Qual elemento químico foi descoberto no Sol através da análise do espectro de luz solar antes de ser descoberto na Terra?",
    [
      "Hélio",
      "Neônio",
      "Radônio",
      "Criptônio"
    ],
    0,
    "O astrônomo Jules Janssen observou uma linha amarela brilhante no eclipse de 1868 batizando o novo elemento de Hélio (do grego 'Helios', o Sol).",
    "Gás nobre dos balões que altera a voz."
  ],
  [
    "cu_c20",
    12,
    1,
    "Qual animal invertebrado consegue sobreviver até 9 dias sem a cabeça antes de morrer de sede?",
    [
      "Aranha caranguejeira",
      "Barata",
      "Formiga saúva",
      "Escorpião"
    ],
    1,
    "O sistema circulatório da barata é aberto e seus centros nervosos de respiração (espiráculos) ficam distribuídos pelo tórax e abdômen, e não na cabeça!",
    "Inseto urbano famoso pela resistência extrema."
  ],
  [
    "tr_c01",
    13,
    2,
    "Qual foi o terremoto mais poderoso já registrado por sismógrafos na história do planeta, atingindo magnitude 9.5 em 1960?",
    [
      "Grande Terremoto de Valdivia (Chile)",
      "Terremoto de Tohoku (Japão)",
      "Terremoto do Alasca",
      "Terremoto de Lisboa"
    ],
    0,
    "Em 22 de maio de 1960, o sismo no sul do Chile rompeu uma falha de 1.000 km, alterou o relevo da região e gerou tsunamis que cruzaram todo o Oceano Pacífico.",
    "Ocorreu na cidade de Valdivia, no Chile."
  ],
  [
    "tr_c02",
    13,
    3,
    "Os astronautas das missões Apollo instalaram sismógrafos que descobriram tremores em qual astro do Sistema Solar?",
    [
      "Em Marte",
      "Na Lua ('Moonquakes')",
      "No Sol",
      "Em Vênus"
    ],
    1,
    "A Lua registra sismos lunares causados pelas forças de maré da Terra e pela contração térmica quando a superfície passa do calor escaldante para o frio extremo.",
    "O satélite natural da Terra."
  ],
  [
    "tr_c03",
    13,
    1,
    "Qual é o nome da famosa falha geológica na Califórnia que marca o atrito direto entre as placas do Pacífico e da América do Norte?",
    [
      "Falha de Santo André (San Andreas)",
      "Falha da Anatólia",
      "Fossa das Marianas",
      "Rifte Africano"
    ],
    0,
    "A Falha de San Andreas tem mais de 1.200 km de extensão e foi responsável pelo devastador terremoto e incêndio de San Francisco em 1906.",
    "Leva o nome de Santo André em inglês."
  ],
  [
    "tr_c04",
    13,
    2,
    "Qual é a diferença fundamental entre o 'hipocentro' (foco) e o 'epicentro' de um terremoto?",
    [
      "Hipocentro é o ponto na superfície; epicentro é no subsolo",
      "Hipocentro é a origem subterrânea da fratura; epicentro é o ponto da superfície exatamente acima dele",
      "São termos sinônimos",
      "Hipocentro só ocorre no mar"
    ],
    1,
    "O hipocentro é onde a rocha se quebra a quilômetros de profundidade na crosta; o epicentro é o ponto geográfico na superfície verticalmente alinhado a ele.",
    "O prefixo 'epi' indica em cima na superfície."
  ],
  [
    "tr_c05",
    13,
    3,
    "O colossal terremoto de magnitude 9.1 que atingiu o Japão em 2011 foi tão intenso que alterou a massa da Terra e:",
    [
      "Encurtou o dia terrestre em cerca de 1,8 microssegundos acelerando a rotação",
      "Fez a Lua se aproximar 10 metros",
      "Parou o vento no planeta por um dia",
      "Inverteu os polos magnéticos"
    ],
    0,
    "Ao redistribuir a massa do planeta para mais perto do eixo como uma patinadora fechando os braços, a Terra passou a girar milissegundos mais rápido!",
    "Acelerou imperceptivelmente a rotação da Terra."
  ],
  [
    "tr_c06",
    13,
    1,
    "Qual instrumento altamente sensível registra graficamente as ondas de choque causadas por abalos sísmicos?",
    [
      "Barômetro",
      "Sismógrafo (Sismômetro)",
      "Anemômetro",
      "Higrômetro"
    ],
    1,
    "O sismógrafo usa uma massa suspensa com inércia para traçar as ondas sísmicas Primárias (P) e Secundárias (S) no sismograma.",
    "Instrumento de medição de sismos."
  ],
  [
    "tr_c07",
    13,
    2,
    "Por que as ondas P (Primárias) são sempre as primeiras a chegar a uma estação de monitoramento sismológico?",
    [
      "Porque viajam no ar",
      "Porque são ondas longitudinais compressivas e se propagam mais rápido pelas rochas sólidas",
      "Porque são elétricas",
      "Porque vêm do Sol"
    ],
    1,
    "Ondas P comprimem e expandem o solo na direção do movimento e viajam a cerca de 5 a 8 km por segundo pela crosta terrestre.",
    "São ondas de compressão mais velozes."
  ],
  [
    "tr_c08",
    13,
    3,
    "Qual animal doméstico costuma demonstrar comportamento de inquietação segundos antes das pessoas sentirem um tremor de terra?",
    [
      "Cachorros e gatos",
      "Tartarugas",
      "Pombos apenas",
      "Peixes de aquário"
    ],
    0,
    "Cães e gatos conseguem escutar sons de altíssima frequência e sentir as ondas P precursoras que chegam antes das violentas ondas superficiais S.",
    "Bichos de estimação de quatro patas."
  ],
  [
    "tr_c09",
    13,
    1,
    "A imensa região com formato de ferradura ao redor do Oceano Pacífico onde ocorre 80% dos grandes terremotos e erupções do mundo é chamada de:",
    [
      "Cinturão das Guianas",
      "Círculo de Fogo do Pacífico",
      "Dorsal Atlântica",
      "Fossa Abissal"
    ],
    1,
    "O Anel ou Círculo de Fogo do Pacífico concentra o encontro das placas tectônicas mais ativas e densas do globo terrestre.",
    "O famoso 'Círculo de Fogo'."
  ],
  [
    "tr_c10",
    13,
    2,
    "Qual tipo de construção moderna no Japão utiliza enormes pistões hidráulicos e blocos de borracha nas fundações para resistir a terremotos?",
    [
      "Edifícios com isolamento de base sísmica",
      "Prédios de tijolo cru",
      "Torres de vidro coladas",
      "Casas suspensas por cordas"
    ],
    0,
    "O isolamento de base desacopla o edifício do solo, permitindo que a terra trema violentamente embaixo enquanto a torre apenas oscila suavemente.",
    "Isolamento sísmico de base."
  ],
  [
    "tr_c11",
    13,
    3,
    "O que é o fenômeno devastador da 'liquefação do solo' durante fortes tremores sísmicos?",
    [
      "A rocha vira lava vulcânica",
      "Solos arenosos saturados com água perdem a sustentação e se comportam temporariamente como um líquido viscoso",
      "A água do rio evapora",
      "O asfalto pega fogo"
    ],
    1,
    "A vibração repetida expulsa a água dos poros da areia, fazendo com que prédios e carros afundem ou tombem intactos na lama fluida.",
    "O chão sólido se transforma em lama fluida."
  ],
  [
    "tr_c12",
    13,
    1,
    "O Brasil tem terremotos? Qual é a realidade geológica do território brasileiro?",
    [
      "Não, o Brasil nunca tremeu na história",
      "Sim, ocorrem tremores de baixa a média intensidade por acomodação interna de placas antigas",
      "Apenas quando caem meteoros",
      "Apenas terremotos vulcânicos"
    ],
    1,
    "Embora fique no centro estável da Placa Sul-Americana livre de choques frontais de placas, o Brasil registra centenas de pequenos sismos intraplaca todos os anos.",
    "Tremores de baixa magnitude intraplaca."
  ],
  [
    "tr_c13",
    13,
    2,
    "Qual cidade histórica portuguesa foi praticamente varrida do mapa em 1º de novembro de 1755 por um megaterremoto seguido de tsunami e incêndios?",
    [
      "Porto",
      "Lisboa",
      "Coimbra",
      "Braga"
    ],
    1,
    "O terremoto de Lisboa em 1755 destruiu 85% das construções da capital, chocou os filósofos do Iluminismo como Voltaire e marcou o nascimento da sismologia moderna.",
    "A capital de Portugal."
  ],
  [
    "tr_c14",
    13,
    3,
    "Qual escala de intensidade sísmica mede o impacto visual percebido pelas pessoas e os danos a edifícios de I a XII, em vez da energia liberada?",
    [
      "Escala Richter",
      "Escala de Mercalli Modificada",
      "Escala Fujita",
      "Escala Kelvin"
    ],
    1,
    "Criada por Giuseppe Mercalli, a escala avalia os estragos reais observados no local, variando de imperceptível (I) até destruição total (XII).",
    "Leva o nome do vulcanólogo italiano Mercalli."
  ],
  [
    "tr_c15",
    13,
    1,
    "Durante um terremoto forte dentro de uma residência, a recomendação internacional de proteção pessoal é:",
    [
      "Correr desesperadamente para a rua",
      "Abaixar, cobrir-se (sob mesa firme) e segurar firme ('Drop, Cover, and Hold on')",
      "Entrar no elevador",
      "Ficar perto das janelas de vidro"
    ],
    1,
    "A maior parte dos ferimentos graves decorre de pedaços de forro, lustres e móveis caindo; abrigar-se sob uma mesa resistente protege a cabeça e o tronco.",
    "Abaixar, cobrir e segurar."
  ],
  [
    "tr_c16",
    13,
    2,
    "Qual foi o terremoto mais forte já registrado no Brasil, atingindo magnitude 6.2 em 1955?",
    [
      "Terremoto de Montes Claros (MG)",
      "Terremoto da Serra do Tombador (Porto dos Gaúchos - MT)",
      "Terremoto de Sobral (CE)",
      "Terremoto de São Paulo"
    ],
    1,
    "O sismo na bacia do Xingu em Mato Grosso em janeiro de 1955 abriu fendas no solo e foi sentido a centenas de quilômetros na floresta.",
    "Ocorreu em Porto dos Gaúchos, no MT."
  ],
  [
    "tr_c17",
    13,
    3,
    "As placas tectônicas deslizam lentamente sobre qual camada parcialmente fundida e viscosa do manto superior terrestre?",
    [
      "Crosta continental",
      "Astenosfera",
      "Núcleo externo de ferro",
      "Atmosfera"
    ],
    1,
    "A astenosfera é uma camada quente e dúctil de rochas sob altíssima pressão onde ocorrem as correntes de convecção que movem os continentes.",
    "Camada do manto chamada astenosfera."
  ],
  [
    "tr_c18",
    13,
    2,
    "Por que a cidade do México sofre danos tão severos em terremotos mesmo quando o epicentro fica a centenas de quilômetros na costa?",
    [
      "Porque não tem regras de construção",
      "Porque foi construída sobre o leito argiloso e lamacento do antigo Lago de Texcoco, que amplifica as ondas sísmicas",
      "Porque fica no nível do mar",
      "Porque o solo é feito de ferro"
    ],
    1,
    "O sedimento macio do antigo lago ressoa como gelatina com as ondas de baixa frequência, multiplicando a amplitude dos tremores em prédios altos.",
    "Construída sobre o leito de um antigo lago."
  ],
  [
    "tr_c19",
    13,
    1,
    "Como se chamam os tremores menores que costumam ocorrer horas, dias ou semanas após o terremoto principal na mesma região?",
    [
      "Supercélulas",
      "Réplicas (Aftershocks)",
      "Maremotos secundários",
      "Ondas de maré"
    ],
    1,
    "As réplicas resultam do reajuste das tensões nas rochas da falha após a ruptura principal e podem derrubar estruturas já fragilizadas.",
    "Conhecidos como réplicas ou abalos secundários."
  ],
  [
    "tr_c20",
    13,
    2,
    "Qual país asiático registra anualmente cerca de 1.500 terremotos sentidos devido à sua posição na junção de quatro placas tectônicas?",
    [
      "Tailândia",
      "Japão",
      "Vietnã",
      "Mongólia"
    ],
    1,
    "O arquipélago japonês se situa na colisão das placas Pacífica, das Filipinas, Eurasiática e Norte-Americana, liderando o mundo em tecnologia antissísmica.",
    "Terra dos samurais e do Monte Fuji."
  ],
  [
    "ts_c01",
    14,
    2,
    "Qual foi a altura recorde da onda do maior 'megatsunami' já registrado na história, ocorrido na Baía de Lituya (Alasca) em 1958?",
    [
      "50 metros",
      "100 metros",
      "524 metros de altura",
      "1.000 metros"
    ],
    2,
    "Um terremoto provocou o desabamento de 30 milhões de metros cúbicos de rocha dentro de uma enseada estreita, gerando uma onda monstruosa que varreu árvores a 524 metros de altitude!",
    "Superou 500 metros de altura."
  ],
  [
    "ts_c02",
    14,
    1,
    "Em alto mar profundo, qual é a aparência visual surpreendente de um tsunami para quem está navegando em um barco?",
    [
      "Uma parede gigante de água com espuma",
      "Uma onda quase imperceptível de apenas 30 a 60 cm de altura com cristas muito longas",
      "Um redemoinho que afunda navios",
      "Uma calmaria total sem água"
    ],
    1,
    "Em águas profundas, a energia do tsunami viaja comprimida por toda a coluna d'água; ela só se empilha em ondas altas ao atingir águas rasas na costa!",
    "Onda quase imperceptível em alto mar."
  ],
  [
    "ts_c03",
    14,
    2,
    "Com qual velocidade impressionante um tsunami consegue se propagar pelo oceano em águas profundas de 4.000 metros?",
    [
      "50 km/h (velocidade de um carro na cidade)",
      "200 km/h (velocidade de um trem rápido)",
      "Cerca de 800 a 900 km/h (velocidade de um avião comercial a jato)",
      "À velocidade do som"
    ],
    2,
    "A velocidade de onda em águas profundas é proporcional à raiz quadrada da profundidade (v = √(g.h)), cruzando oceanos inteiros em poucas horas!",
    "Veloz como um avião comercial a jato."
  ],
  [
    "ts_c04",
    14,
    1,
    "Qual é o sinal clássico e assustador da natureza na praia que frequentemente antecede a chegada da primeira grande onda de um tsunami?",
    [
      "A água do mar recua centenas de metros rapidamente, expondo o fundo marinho e peixes",
      "A água fica vermelha",
      "O mar começa a congelar",
      "Aparecem golfinhos pulando na areia"
    ],
    0,
    "Se a calha da onda chegar à costa antes da crista, o mar se esvazia repentinamente. Quem corre para a praia olhar o fundo acaba apanhado pela onda gigante em minutos!",
    "O mar recua bruscamente da praia."
  ],
  [
    "ts_c05",
    14,
    2,
    "O que significa a palavra de origem japonesa 'Tsunami' em sua tradução literal?",
    [
      "Onda gigante que destrói",
      "Onda de porto (tsu = porto, nami = onda)",
      "Fúria do oceano profundo",
      "Vento do mar salgado"
    ],
    1,
    "Os pescadores japoneses retornavam aos seus portos e encontravam vilarejos destruídos sem terem notado nada de anormal em alto mar, batizando o fenômeno de 'onda de porto'.",
    "Junção de porto com onda."
  ],
  [
    "ts_c06",
    14,
    3,
    "Qual foi o megatsunami do Oceano Índico em 26 de dezembro de 2004 que causou cerca de 230 mil mortes em 14 países?",
    [
      "Tsunami de Sendai",
      "Tsunami do Boxing Day (provocado pelo sismo de Sumatra-Andaman)",
      "Tsunami de Krakatoa",
      "Tsunami de Creta"
    ],
    1,
    "Com magnitude 9.2 na falha submarina de Sumatra, foi um dos maiores desastres naturais da história moderna por falta de sistemas de boias de alerta no Índico na época.",
    "Ocorreu no dia seguinte ao Natal de 2004."
  ],
  [
    "ts_c07",
    14,
    1,
    "Qual é a causa mais frequente da geração de grandes tsunamis no planeta?",
    [
      "Tornados passando pelo oceano",
      "Terremotos submarinos de falha inversa que deslocam verticalmente o fundo do mar",
      "Marés altas de lua cheia",
      "Tubarões nadando em cardume"
    ],
    1,
    "O soerguimento ou rebaixamento abrupto da placa tectônica submarina empurra trilhões de litros de água verticalmente, gerando o trem de ondas.",
    "Deslocamento vertical do leito oceânico."
  ],
  [
    "ts_c08",
    14,
    2,
    "Qual foi a erupção vulcânica na Indonésia em 1883 cujo colapso da caldeira no mar gerou tsunamis de mais de 40 metros de altura?",
    [
      "Vulcão Vesúvio",
      "Vulcão Krakatoa",
      "Vulcão Monte Tambora",
      "Vulcão Kilauea"
    ],
    1,
    "A explosão do Krakatoa foi ouvida a quase 5.000 km de distância e seus tsunamis deram voltas pelo planeta, destruindo centenas de aldeias em Java e Sumatra.",
    "Vulcão indonésio lendário."
  ],
  [
    "ts_c09",
    14,
    3,
    "Qual rede de tecnologia instalada nos oceanos utiliza sensores de pressão no leito marinho comunicando com boias de superfície para alertar tsunamis?",
    [
      "Sistema DART (Deep-ocean Assessment and Reporting of Tsunamis)",
      "Sistema Doppler",
      "Sistema GPS comum",
      "Rede Starlink marinha"
    ],
    0,
    "O sistema DART mede variações de milímetros na coluna d'água a 6.000 metros de profundidade e envia sinais via satélite aos centros de alerta mundiais em minutos.",
    "Conhecido pela sigla DART."
  ],
  [
    "ts_c10",
    14,
    1,
    "Um tsunami é formado por uma única onda gigante ou por uma série sucessiva de ondas?",
    [
      "Uma única onda que atinge a costa e acaba",
      "Uma série (trem de ondas) com intervalos que podem durar de 10 minutos a mais de uma hora",
      "Duas ondas e nada mais",
      "Infinitas ondas pequenas idênticas à ressaca comum"
    ],
    1,
    "Um tsunami é um trem de ondas; frequentemente a segunda, terceira ou quarta onda é muito maior e mais devastadora do que a primeira!",
    "Uma sequência com várias ondas espaçadas."
  ],
  [
    "ts_c11",
    14,
    2,
    "O que aconteceu com a usina nuclear de Fukushima Daiichi no Japão em março de 2011 durante o grande tsunami de Tohoku?",
    [
      "Ela foi atingida por lava vulcânica",
      "A onda de 14 metros ultrapassou o dique de proteção de 5,7 metros e inundou os geradores a diesel de emergência",
      "Caiu um avião sobre ela",
      "O terremoto quebrou os reatores mas a água não chegou"
    ],
    1,
    "Sem energia para bombear água de resfriamento nos reatores após o alagamento dos geradores, ocorreu derretimento do combustível nuclear.",
    "A onda ultrapassou a barreira e inundou os geradores."
  ],
  [
    "ts_c12",
    14,
    3,
    "Qual ilha vulcânica nas Canárias (Espanha) foi objeto de estudos científicos sobre a hipótese de um megatsunami no Atlântico por deslizamento de encosta?",
    [
      "Tenerife",
      "La Palma (Cumbre Vieja)",
      "Gran Canária",
      "Lanzarote"
    ],
    1,
    "Modelos geológicos simularam o impacto de um colapso maciço da encosta do Cumbre Vieja no mar, embora estudos recentes mostrem que o risco de ruptura em bloco único é muito baixo.",
    "A ilha de La Palma."
  ],
  [
    "ts_c13",
    14,
    1,
    "Ao receber um alerta oficial de tsunami ou notar o recuo repentino do mar, para onde você deve se deslocar IMEDIATAMENTE?",
    [
      "Para a beira da praia ver o que aconteceu",
      "Para terrenos elevados ou andares superiores de prédios de concreto armado bem estruturados",
      "Para dentro do carro estacionado na orla",
      "Para o porão da casa mais próxima"
    ],
    1,
    "Cada metro de altitude conta; deve-se subir morros ou edifícios altos de concreto imediatamente, mantendo-se longe de rios e canais.",
    "Buscar terrenos altos e longe da costa."
  ],
  [
    "ts_c14",
    14,
    2,
    "Por que os rios que deságuam no mar se tornam vias perigosas de inundação durante a passagem de um tsunami?",
    [
      "Porque a água do rio para de correr",
      "Porque a onda do mar penetra pelo canal do rio em alta velocidade inundando bairros a quilômetros do litoral",
      "Porque o rio seca para sempre",
      "Porque atrai peixes elétricos"
    ],
    1,
    "A energia da onda oceânica sobe o leito do rio como uma pororoca violenta, arrastando pontes e casas no interior continental.",
    "O tsunami sobe o canal do rio continente adentro."
  ],
  [
    "ts_c15",
    14,
    3,
    "Qual asteroide colossal caiu na península de Yucatán há 66 milhões de anos gerando megatsunamis com quilômetros de altura pelo mundo?",
    [
      "Asteroide de Chicxulub",
      "Cometa Halley",
      "Asteroide Apophis",
      "Asteroide Tunguska"
    ],
    0,
    "O impacto que extinguiu os dinossauros não-avianos escavou uma cratera no oceano raso, gerando ondas de até 1.500 metros de altura que varreram continentes.",
    "Cratera de Chicxulub no México."
  ],
  [
    "ts_c16",
    14,
    1,
    "Tsunamis podem ser causados por deslizamentos submarinos massivos de terra ou gelo glacial no mar?",
    [
      "Não, apenas por terremotos",
      "Sim, grandes massas de rocha, terra ou geleiras despencando na água deslocam volumes colossais",
      "Apenas em lagos de água doce",
      "Somente se houver tempestade de chuva junto"
    ],
    1,
    "Grandes desabamentos submarinos de sedimentos ou colapso de geleiras em fiordes profundos são causas comprovadas de tsunamis locais.",
    "Deslizamentos de rochas e geleiras geram tsunamis."
  ],
  [
    "ts_c17",
    14,
    2,
    "Por que a destruição provocada pela água de um tsunami na volta (refluxo para o mar) é muitas vezes pior que na chegada?",
    [
      "Porque a água fica quente",
      "Porque a correnteza de retorno carrega toneladas de escombros, carros e estruturas agindo como aríete triturador",
      "Porque a gravidade aumenta",
      "Porque o mar fica salgado demais"
    ],
    1,
    "Ao escoar de volta, a água arrasta postes, vigas, veículos e concreto que colidem violentamente contra tudo o que permaneceu de pé.",
    "O refluxo carrega destroços que trituram tudo."
  ],
  [
    "ts_c18",
    14,
    2,
    "Em que país a garota britânica de 10 anos Tilly Smith salvou cerca de 100 turistas em 2004 ao reconhecer o recuo do mar aprendido na aula de geografia?",
    [
      "Austrália",
      "Tailândia (Praia de Maikhao, Phuket)",
      "Indonésia",
      "Índia"
    ],
    1,
    "Tilly lembrou da aula de seu professor sobre tsunamis e avisou os pais e funcionários do hotel para evacuarem a praia antes da primeira onda chegar.",
    "Na praia de Phuket, na Tailândia."
  ],
  [
    "ts_c19",
    14,
    3,
    "O litoral do Brasil já registrou algum registro histórico de tsunami de pequeno porte?",
    [
      "Nunca na história geológica",
      "Sim, ondas de até 1,8 metro atingiram o Nordeste após o grande terremoto de Lisboa de 1755",
      "Sim, toda semana há um",
      "Apenas no Rio Amazonas"
    ],
    1,
    "Registros coloniais confirmam que ondas de maré anormais do terremoto de Lisboa cruzaram o Atlântico e invadiram praias na Bahia, Paraíba e Pernambuco em 1755.",
    "Ondas do sismo de Lisboa de 1755."
  ],
  [
    "ts_c20",
    14,
    1,
    "Qual floresta litorânea nativa com raízes aéreas atua como barreira natural amortecendo a energia e o impacto das ondas de tsunamis?",
    [
      "Floresta de Pinheiros",
      "Manguezais",
      "Cerrado",
      "Campos de trigo"
    ],
    1,
    "As raízes densas e entrelaçadas dos manguezais dissipam a energia hidrodinâmica das ondas, protegendo comunidades costeiras.",
    "O ecossistema costeiro dos mangues."
  ],
  [
    "as_c01",
    15,
    2,
    "Em quais dois planetas gigantes gasosos do Sistema Solar as pressões e temperaturas extremas fazem chover literalmente DIAMANTES na atmosfera?",
    [
      "Marte e Mercúrio",
      "Júpiter e Netuno (bem como Saturno e Urano)",
      "Terra e Vênus",
      "Apenas na Lua"
    ],
    1,
    "O metano atmosférico é quebrado pela pressão em carbono puro, que cristaliza em diamantes sólidos que precipitam em direção ao núcleo!",
    "Nos gigantes gasosos e de gelo exteriores."
  ],
  [
    "as_c02",
    15,
    1,
    "Qual é o maior vulcão e a montanha mais alta de todo o Sistema Solar, com 22 km de altura (quase 3 vezes o Everest)?",
    [
      "Monte Olimpo (em Marte)",
      "Mauna Kea (no Havaí)",
      "Monte Fuji (no Japão)",
      "Monte Kilimanjaro"
    ],
    0,
    "O Olympus Mons em Marte tem uma base do tamanho do estado de São Paulo e é tão alto que seu cume ultrapassa grande parte da atmosfera marciana.",
    "Monte Olimpo no planeta Marte."
  ],
  [
    "as_c03",
    15,
    2,
    "Por que um dia inteiro em Vênus (uma rotação) é mais longo do que um ano inteiro em Vênus (uma translação ao redor do Sol)?",
    [
      "Porque o Sol para de brilhar",
      "Porque Vênus leva 243 dias terrestres para girar sobre si mesmo e apenas 225 dias para dar a volta ao Sol",
      "Por causa de seus anéis",
      "Porque Vênus não gira"
    ],
    1,
    "A rotação extremamente lenta e retrógrada de Vênus faz com que o planeta complete uma órbita solar antes de terminar uma única volta em seu eixo!",
    "Leva 243 dias para girar e 225 para orbitar."
  ],
  [
    "as_c04",
    15,
    3,
    "Qual sonda espacial humana lançada em 1977 é o objeto feito pelo homem mais distante da Terra, navegando no espaço interestelar?",
    [
      "Hubble",
      "Voyager 1",
      "Curiosity",
      "Sputnik"
    ],
    1,
    "A Voyager 1 está a mais de 24 bilhões de quilômetros da Terra e carrega o Disco de Ouro com saudações e músicas da humanidade.",
    "A lendária sonda Voyager 1."
  ],
  [
    "as_c05",
    15,
    1,
    "A luz do Sol leva aproximadamente quanto tempo para viajar pelo espaço e chegar até a superfície da Terra?",
    [
      "1 segundo",
      "Cerca de 8 minutos e 20 segundos",
      "1 hora inteira",
      "Instantaneamente"
    ],
    1,
    "Viajando a 300.000 km/s por uma distância de 150 milhões de km, os fótons solares levam cerca de 500 segundos (8m20s) na jornada.",
    "Cerca de 8 minutos."
  ],
  [
    "as_c06",
    15,
    2,
    "Qual lua de Júpiter possui mais de 400 vulcões ativos e é o corpo celeste com a maior atividade vulcânica de todo o Sistema Solar?",
    [
      "Europa",
      "Io",
      "Ganimedes",
      "Calisto"
    ],
    1,
    "As forças de maré gravitacionais exercidas pela atração colossal de Júpiter esticam e espremem o interior de Io continuamente, mantendo seu interior em fusão.",
    "Lua com nome de duas letras: Io."
  ],
  [
    "as_c07",
    15,
    3,
    "O que é o 'Horizonte de Eventos' de um buraco negro no espaço sideral?",
    [
      "O brilho das estrelas",
      "O ponto de não retorno além do qual nada, nem mesmo a luz, consegue escapar da atração gravitacional",
      "A superfície sólida de ferro",
      "O anel de gelo ao redor"
    ],
    1,
    "Uma vez cruzado o horizonte de eventos, a velocidade de escape necessária supera a velocidade da luz, tornando a fuga fisicamente impossível.",
    "O ponto de não retorno."
  ],
  [
    "as_c08",
    15,
    1,
    "Quantas luas naturais (satélites) o planeta Terra possui?",
    [
      "1",
      "2",
      "4",
      "Nenhuma"
    ],
    0,
    "A Terra possui apenas uma lua natural oficial em órbita estável.",
    "A nossa Lua."
  ],
  [
    "as_c09",
    15,
    2,
    "Qual lua de Saturno tem atmosfera densa com lagos e rios líquidos de metano e etano na superfície?",
    [
      "Encélado",
      "Titã",
      "Mimas",
      "Jápeto"
    ],
    1,
    "Titã é a segunda maior lua do Sistema Solar e possui um ciclo hidrológico completo, mas com hidrocarbonetos no lugar de água!",
    "A maior lua de Saturno: Titã."
  ],
  [
    "as_c10",
    15,
    3,
    "O que são as estrelas de nêutrons (pulsares) e quão densas elas são na física estelar?",
    [
      "Nuvens de gás frio",
      "Restos ultra-densos de supernovas onde uma colher de chá de matéria pesaria cerca de bilhões de toneladas na Terra",
      "Estrelas feitas de diamante",
      "Planetas de chumbo"
    ],
    1,
    "Prótons e elétrons são esmagados juntos formando nêutrons puros; uma esfera de apenas 20 km de diâmetro abriga mais massa que o nosso Sol inteiro!",
    "Uma colher de chá pesa bilhões de toneladas."
  ],
  [
    "as_c11",
    15,
    1,
    "Qual planeta do Sistema Solar é famoso por girar 'deitado', com seu eixo de rotação inclinado a impressionantes 98 graus?",
    [
      "Marte",
      "Urano",
      "Saturno",
      "Terra"
    ],
    1,
    "Acredita-se que uma colisão cataclísmica com um protoplaneta no início do Sistema Solar tenha virado Urano quase totalmente de lado.",
    "O gigante de gelo azul-esverdeado Urano."
  ],
  [
    "as_c12",
    15,
    2,
    "Qual é o destino futuro inevitável da nossa galáxia Via Láctea daqui a cerca de 4 a 5 bilhões de anos?",
    [
      "Ela vai se dissolver no vazio",
      "Irá colidir e se fundir com a galáxia vizinha de Andrômeda formando uma galáxia gigante",
      "Será engolida pelo Sol",
      "Vai se transformar em uma estrela"
    ],
    1,
    "As duas galáxias espirais se aproximam a 110 km/s e vão se fundir pacificamente em uma nova galáxia elíptica (apelidada de 'Lactômeda').",
    "Colisão e fusão com a galáxia de Andrômeda."
  ],
  [
    "as_c13",
    15,
    3,
    "Qual fenômeno astronômico ocorre quando a Lua passa exatamente entre a Terra e o Sol, bloqueando a luz solar durante o dia?",
    [
      "Eclipse lunar",
      "Eclipse solar total",
      "Solstício de inverno",
      "Equinócio"
    ],
    1,
    "Por uma coincidência cósmica extraordinária, o Sol é 400 vezes maior que a Lua, mas está 400 vezes mais distante, fazendo com que tenham o mesmo tamanho aparente no céu!",
    "Eclipse solar."
  ],
  [
    "as_c14",
    15,
    2,
    "A lua Encélado de Saturno ejeta jatos de vapor de água e gelo no espaço através de gêiseres porque abriga:",
    [
      "Vulcões de enxofre",
      "Um imenso oceano global de água líquida aquecido sob sua crosta de gelo",
      "Campos de lava",
      "Reatores atômicos"
    ],
    1,
    "A sonda Cassini descobriu compostos orgânicos e fontes hidrotermais no fundo do oceano de Encélado, tornando-a forte candidata à vida microbiana extraterrestre.",
    "Um oceano líquido sob a camada de gelo."
  ],
  [
    "as_c15",
    15,
    1,
    "Qual é o planeta mais próximo do Sol em distância orbital?",
    [
      "Vênus",
      "Mercúrio",
      "Terra",
      "Marte"
    ],
    1,
    "Mercúrio é o menor planeta do Sistema Solar e o mais veloz em sua órbita, completando uma volta ao Sol a cada 88 dias.",
    "O primeiro planeta a partir do Sol."
  ],
  [
    "as_c16",
    15,
    2,
    "O que causa a famosa 'cauda' brilhante que se desenvolve atrás de um cometa quando ele se aproxima do Sol?",
    [
      "Fogo da combustão",
      "A sublimação dos gelos e poeira do cometa soprada pela radiação e vento solar",
      "Rastro de gasolina espacial",
      "Atrito com o ar do vácuo"
    ],
    1,
    "O calor solar evapora os gelos do cometa; os ventos solares empurram esses gases e poeira sempre no sentido contrário ao Sol.",
    "Sublimação do gelo soprada pelo vento solar."
  ],
  [
    "as_c17",
    15,
    3,
    "Qual telescópio espacial lançado em 2021 opera no infravermelho a 1,5 milhão de km da Terra para observar as primeiras galáxias do Universo?",
    [
      "Telescópio Hubble",
      "Telescópio Espacial James Webb (JWST)",
      "Telescópio Kepler",
      "Observatório Chandra"
    ],
    1,
    "Com seu espelho hexagonal dourado de 6,5 metros e escudo térmico do tamanho de uma quadra de tênis, o James Webb revelou galáxias dos primórdios cósmicos.",
    "O telescópio James Webb."
  ],
  [
    "as_c18",
    15,
    1,
    "Qual planeta do Sistema Solar tem a densidade média mais baixa, sendo menor que a da água (se houvesse uma banheira gigante, ele flutuaria)?",
    [
      "Júpiter",
      "Saturno",
      "Urano",
      "Netuno"
    ],
    1,
    "A densidade média de Saturno é de apenas 0,687 g/cm³, sendo o único planeta do Sistema Solar menos denso que a água líquida (1,0 g/cm³).",
    "O senhor dos anéis."
  ],
  [
    "as_c19",
    15,
    2,
    "Qual é o nome da nuvem esférica e colossal de trilhões de cometas e pedaços de gelo nos limites externos mais remotos do Sistema Solar?",
    [
      "Cinturão de Kuiper",
      "Nuvem de Oort",
      "Cinturão de Asteroides",
      "Disco Protoplanetário"
    ],
    1,
    "A Nuvem de Oort estende-se até quase um quarto da distância até a estrela mais próxima e é a fonte dos cometas de longo período.",
    "Batizada em homenagem ao astrônomo Jan Oort."
  ],
  [
    "as_c20",
    15,
    1,
    "Qual é a cor predominante do planeta Marte visto no céu noturno a olho nu, que lhe rendeu o apelido de 'Planeta Vermelho'?",
    [
      "Azul",
      "Vermelha / Alaranjada (devido ao óxido de ferro na poeira)",
      "Verde esmeralda",
      "Branca prateada"
    ],
    1,
    "O solo marciano é rico em minerais de ferro que oxidaram ('enferrujaram') ao longo de bilhões de anos, espalhando uma poeira ferruginosa avermelhada.",
    "Coloração avermelhada de ferrugem."
  ],
  [
    "ma_c01",
    16,
    2,
    "Qual é o famoso 'Paradoxo do Aniversário' na teoria das probabilidades?",
    [
      "Em um grupo de apenas 23 pessoas, a chance de duas fazerem aniversário no mesmo dia já supera 50%",
      "Ninguém nasce no mesmo dia",
      "São necessárias 365 pessoas para haver 50% de chance",
      "Aniversários só ocorrem em anos bissextos"
    ],
    0,
    "Como comparamos todos os pares possíveis entre si (253 combinações com 23 pessoas), a probabilidade acumulada de coincidência ultrapassa 50,7%!",
    "Apenas 23 pessoas reunidas em uma sala."
  ],
  [
    "ma_c02",
    16,
    1,
    "Qual civilização antiga inventou o conceito e o símbolo do número ZERO como algarismo com valor posicional?",
    [
      "Civilização Romana",
      "Civilização Indiana (Índia Antiga)",
      "Vikings",
      "Gregos Antigos"
    ],
    1,
    "Matemáticos indianos como Brahmagupta definiram as regras aritméticas do zero ('shunya') no século VII, revolucionando a matemática mundial.",
    "Na Índia Antiga."
  ],
  [
    "ma_c03",
    16,
    2,
    "A sequência de Fibonacci (1, 1, 2, 3, 5, 8, 13, 21...) aparece frequentemente na natureza em qual destes exemplos?",
    [
      "Na contagem de patas de insetos",
      "Na disposição espiral das sementes de girassol e escamas de pinhas",
      "Na velocidade do som",
      "Na cor das pedras"
    ],
    1,
    "A proporção áurea de crescimento ótimo faz com que folhas, conchas de náutilo e pétalas maximizem a exposição ao sol e espaço seguindo Fibonacci.",
    "Espirais em girassóis e pinhas."
  ],
  [
    "ma_c04",
    16,
    3,
    "Qual é o número primo mais famoso que também é o ÚNICO número primo par de toda a matemática?",
    [
      "0",
      "1",
      "2",
      "4"
    ],
    2,
    "O número 2 só é divisível por 1 e por ele mesmo; qualquer outro número par é obrigatoriamente divisível por 2, perdendo a condição de primo.",
    "O número dois."
  ],
  [
    "ma_c05",
    16,
    1,
    "Qual é a constante matemática irracional π (Pi) que relaciona o perímetro de uma circunferência ao seu diâmetro?",
    [
      "Aproximadamente 3,14159...",
      "Exatamente 3,0",
      "Aproximadamente 2,718...",
      "1,618..."
    ],
    0,
    "Pi é um número irracional com infinitas casas decimais sem repetição periódica, celebrado mundialmente no dia 14 de março (3/14).",
    "Começa com 3,14."
  ],
  [
    "ma_c06",
    16,
    2,
    "O que afirma o célebre Teorema de Pitágoras para qualquer triângulo retângulo?",
    [
      "A soma dos ângulos é 100°",
      "O quadrado da hipotenusa é igual à soma dos quadrados dos catetos (a² = b² + c²)",
      "A área é base mais altura",
      "Todos os lados têm a mesma medida"
    ],
    1,
    "Em um triângulo retângulo, a área do quadrado construído sobre o maior lado (hipotenusa) equivale à soma das áreas dos quadrados dos dois outros lados.",
    "a² = b² + c²."
  ],
  [
    "ma_c07",
    16,
    3,
    "Se você dobrar uma folha de papel comum ao meio 42 vezes consecutivas (hipoteticamente), qual seria a espessura final?",
    [
      "A altura de um prédio de 10 andares",
      "A distância da Terra até a Lua",
      "A extensão da cidade de São Paulo",
      "Apenas 2 metros"
    ],
    1,
    "Devido ao crescimento exponencial (2⁴² = cerca de 4,4 trilhões de folhas), a espessura dobrada alcançaria mais de 384.000 quilômetros!",
    "Alcançaria a Lua no espaço."
  ],
  [
    "ma_c08",
    16,
    1,
    "Qual é o valor exato de qualquer número diferente de zero elevado à potência zero (x⁰)?",
    [
      "0",
      "1",
      "Infinito",
      "O próprio número"
    ],
    1,
    "Pelas propriedades da divisão de potências de mesma base (xⁿ ÷ xⁿ = xⁿ⁻ⁿ = x⁰), o resultado de um número dividido por si mesmo é sempre 1.",
    "O resultado é sempre um."
  ],
  [
    "ma_c09",
    16,
    2,
    "O 'Problema de Monty Hall' em um programa de auditório ensina que, após o apresentador abrir uma porta vazia com um bode, o competidor deve:",
    [
      "Manter a porta original",
      "Mudar de porta para dobrar suas chances de vitória para 2/3",
      "Tanto faz, a chance é 50%",
      "Pedir ajuda da plateia"
    ],
    1,
    "Como havia 2/3 de chance de o prêmio estar em uma das outras duas portas, quando Monty revela o bode, a porta restante herda essa chance de 66,7%!",
    "Mudar de porta dobra a probabilidade."
  ],
  [
    "ma_c10",
    16,
    3,
    "Qual matemático francês do século XVII escreveu na margem de um livro um teorema afirmando ter 'uma demonstração maravilhosa, mas a margem é estreita demais para conter'?",
    [
      "René Descartes",
      "Pierre de Fermat",
      "Blaise Pascal",
      "Henri Poincaré"
    ],
    1,
    "O 'Último Teorema de Fermat' (xⁿ + yⁿ = zⁿ não tem soluções inteiras para n > 2) levou mais de 350 anos para ser provado por Andrew Wiles em 1994!",
    "O matemático Pierre de Fermat."
  ],
  [
    "ma_c11",
    16,
    1,
    "Quantos graus mede a soma de todos os três ângulos internos de qualquer triângulo plano na geometria euclidiana?",
    [
      "90°",
      "180°",
      "360°",
      "270°"
    ],
    1,
    "Seja o triângulo equilátero, isósceles ou escaleno, a soma de seus três ângulos internos sempre totaliza exatamente 180 graus.",
    "Cento e oitenta graus."
  ],
  [
    "ma_c12",
    16,
    2,
    "Qual é o número gigantesco representado pelo dígito 1 seguido de cem zeros (10¹⁰⁰), que inspirou o nome de uma famosa empresa de buscas?",
    [
      "Megabyte",
      "Googol",
      "Zettabyte",
      "Giga"
    ],
    1,
    "O termo 'Googol' foi cunhado pelo garoto Milton Sirotta em 1920 a pedido de seu tio matemático Edward Kasner, inspirando os fundadores da Google.",
    "O número Googol."
  ],
  [
    "ma_c13",
    16,
    3,
    "O que é a 'Fita de Möbius' na topologia matemática?",
    [
      "Uma fita métrica elástica",
      "Uma superfície bidimensional com apenas UM lado e UMA única borda contínua",
      "Um nó que não pode ser desatado",
      "Um círculo infinito"
    ],
    1,
    "Se você colar as extremidades de uma tira de papel após dar meia-volta de 180°, formará um objeto contínuo: andando com uma caneta por ela, pintará os dois lados sem tirar a ponta do papel!",
    "Superfície que só tem uma face."
  ],
  [
    "ma_c14",
    16,
    1,
    "Qual é o resultado da operação matemática 7 fatorial (7!)?",
    [
      "49",
      "70",
      "5.040 (7 × 6 × 5 × 4 × 3 × 2 × 1)",
      "35"
    ],
    2,
    "O fatorial multiplica todos os números inteiros positivos até o número dado: 7 × 6 × 5 × 4 × 3 × 2 × 1 = 5.040.",
    "Multiplicação regressiva de 7 até 1."
  ],
  [
    "ma_c15",
    16,
    2,
    "A Proporção Áurea (ou Número de Ouro, phi ≈ 1,618) era considerada pelos renascentistas a medida máxima da harmonia visual por estar presente:",
    [
      "No Partenon, na Mona Lisa e nas espirais da natureza",
      "Apenas em relógios de ouro",
      "Nos triângulos de trânsito",
      "Nos mapas das cidades"
    ],
    0,
    "Artistas como Leonardo da Vinci e arquitetos gregos usavam a proporção áurea por considerá-la a mais esteticamente agradável ao olho humano.",
    "Presente em obras de arte e monumentos clássicos."
  ],
  [
    "ma_c16",
    16,
    3,
    "Quantas cores diferentes são necessárias, no máximo, para colorir qualquer mapa plano de modo que dois países vizinhos nunca tenham a mesma cor?",
    [
      "3 cores",
      "4 cores (Teorema das Quatro Cores)",
      "5 cores",
      "7 cores"
    ],
    1,
    "Provado com auxílio de computadores em 1976 por Appel e Haken, o Teorema das Quatro Cores resolveu um dos enigmas cartográficos mais antigos.",
    "Apenas quatro cores."
  ],
  [
    "ma_c17",
    16,
    1,
    "Qual é o nome do polígono regular com exatamente OITO lados iguais?",
    [
      "Hexágono",
      "Heptágono",
      "Octógono",
      "Decágono"
    ],
    2,
    "O octógono tem oito lados e é a forma geométrica padrão das placas vermelhas internacionais de 'PARE' no trânsito.",
    "Tem 8 lados."
  ],
  [
    "ma_c18",
    16,
    2,
    "Qual é o número primo par entre 1 e 100?",
    [
      "Não existe",
      "Apenas o número 2",
      "Todos os números pares",
      "O número 4"
    ],
    1,
    "O 2 é a única exceção de toda a matemática; qualquer outro número par tem pelo menos três divisores (1, 2 e ele mesmo).",
    "Apenas o algarismo 2."
  ],
  [
    "ma_c19",
    16,
    3,
    "Quem é considerado o 'Príncipe dos Matemáticos' por suas contribuições monumentais à álgebra, teoria dos números e magnetismo?",
    [
      "Carl Friedrich Gauss",
      "Leonhard Euler",
      "Arquimedes",
      "Gottfried Leibniz"
    ],
    0,
    "O alemão Carl Friedrich Gauss descobriu a fórmula da soma de 1 a 100 em segundos ainda quando era uma criança na escola elementar!",
    "O matemático alemão Gauss."
  ],
  [
    "ma_c20",
    16,
    2,
    "Qual é a média aritmética simples entre os números 10, 20 e 60?",
    [
      "25",
      "30",
      "40",
      "45"
    ],
    1,
    "Somando os valores (10 + 20 + 60 = 90) e dividindo pela quantidade de termos (3), obtemos a média 30.",
    "Soma 90 e divide por 3."
  ],
  [
    "sa_c01",
    17,
    2,
    "Qual é o osso mais longo, mais pesado e mais resistente de todo o corpo humano, capaz de suportar até 30 vezes o peso de um adulto?",
    [
      "Úmero",
      "Fêmur (osso da coxa)",
      "Tíbia",
      "Costela"
    ],
    1,
    "O fêmur conecta a bacia ao joelho e possui uma resistência à compressão superior à do concreto maciço!",
    "O osso da coxa."
  ],
  [
    "sa_c02",
    17,
    1,
    "Quantas vezes aproximadamente o coração humano bate em média ao longo de um único dia em repouso?",
    [
      "1.000 vezes",
      "10.000 vezes",
      "Cerca de 100.000 batimentos",
      "1 milhão de vezes"
    ],
    2,
    "Batendo entre 60 e 80 vezes por minuto, o coração bombeia cerca de 7.500 litros de sangue por dia através de 100 mil km de vasos sanguíneos!",
    "Cerca de 100 mil vezes por dia."
  ],
  [
    "sa_c03",
    17,
    2,
    "Qual órgão interno humano é o único capaz de se regenerar completamente mesmo após perder até 75% da sua massa?",
    [
      "Pâncreas",
      "Fígado",
      "Baço",
      "Rim"
    ],
    1,
    "As células do fígado (hepatócitos) têm uma incrível capacidade proliferativa, reconstruindo o tecido original em poucas semanas.",
    "O maior órgão interno do abdômen."
  ],
  [
    "sa_c04",
    17,
    3,
    "Por que o estômago humano não se digere a si mesmo com o potente ácido clorídrico que secreta?",
    [
      "Porque o ácido é fraco",
      "Porque a parede interna secreta uma densa camada de muco protetor alcalino de bicarbonato que se renova a cada poucos dias",
      "Porque o estômago é feito de osso",
      "Porque não há enzimas ali"
    ],
    1,
    "O muco rico em bicarbonato neutraliza o ácido junto à mucosa estomacal; as células da parede são completamente substituídas a cada 3 a 5 dias.",
    "Camada de muco protetor que se renova rapidamente."
  ],
  [
    "sa_c05",
    17,
    1,
    "Qual é o maior órgão do corpo humano em peso e extensão superficial?",
    [
      "O intestino delgado",
      "A pele humana",
      "O fígado",
      "Os pulmões"
    ],
    1,
    "Em um adulto médio, a pele pesa cerca de 4 a 5 kg e cobre uma superfície de quase 2 metros quadrados protegendo o organismo contra infecções.",
    "Cobre todo o exterior do nosso corpo."
  ],
  [
    "sa_c06",
    17,
    2,
    "Cientistas japoneses descobriram que o corpo humano emite bioluminescência visível no escuro. Por que não conseguimos vê-la a olho nu?",
    [
      "Porque é luz ultravioleta",
      "Porque a intensidade da luz é 1.000 vezes mais fraca do que o menor nível que o olho humano consegue enxergar",
      "Porque ela só brilha dentro dos ossos",
      "Porque brilha apenas durante o sono"
    ],
    1,
    "Câmeras ultra-sensíveis flagraram fótons emitidos por reações metabólicas oxidativas da pele, com pico de brilho no final da tarde!",
    "Luz 1.000 vezes mais fraca que nossa visão."
  ],
  [
    "sa_c07",
    17,
    3,
    "Quantos neurônios aproximadamente existem no cérebro humano, interconectados por trilhões de sinapses?",
    [
      "1 milhão",
      "86 bilhões de neurônios",
      "500 bilhões",
      "10 trilhões"
    ],
    1,
    "Pesquisa liderada pela neurocientista brasileira Suzana Herculano-Houzel demonstrou que o cérebro humano tem cerca de 86 bilhões de neurônios.",
    "Cerca de 86 bilhões."
  ],
  [
    "sa_c08",
    17,
    1,
    "Qual mineral essencial dá rigidez e dureza aos ossos e dentes do corpo humano?",
    [
      "Cálcio",
      "Potássio",
      "Zinco",
      "Iodo"
    ],
    0,
    "Cerca de 99% de todo o cálcio presente no organismo humano fica armazenado nos ossos e na dentição.",
    "Mineral encontrado no leite e derivados."
  ],
  [
    "sa_c09",
    17,
    2,
    "Qual substância natural produzida pela glândula pineal no cérebro com o escurecer da noite induz e regula o sono?",
    [
      "Adrenalina",
      "Melatonina",
      "Insulina",
      "Cortisol"
    ],
    1,
    "A melatonina é o hormônio do ciclo circadiano, avisando o corpo que é hora de desacelerar quando a luz azul do dia diminui.",
    "O hormônio do sono."
  ],
  [
    "sa_c10",
    17,
    2,
    "Por que os músculos esqueléticos tremem involuntariamente quando sentimos frio intenso?",
    [
      "Por espasmo nervoso de medo",
      "Para queimar glicose e gerar calor corporal através das contrações rápidas",
      "Porque os nervos congelam",
      "Para bombear mais oxigênio nos pulmões"
    ],
    1,
    "Os arrepios e tremores musculares aumentam a produção de calor metabólico em até 500%, ajudando a manter os órgãos vitais a 37°C.",
    "Mecanismo para aquecer o corpo."
  ],
  [
    "sa_c11",
    17,
    3,
    "Qual é o músculo mais forte do corpo humano em relação à força de pressão exercida por centímetro quadrado?",
    [
      "O bíceps",
      "O masseter (músculo da mandíbula)",
      "O glúteo máximo",
      "A panturrilha"
    ],
    1,
    "O masseter consegue exercer uma força de mordida de mais de 70 a 90 kg de pressão nos dentes molares com facilidade.",
    "Músculo que fecha a mandíbula."
  ],
  [
    "sa_c12",
    17,
    1,
    "Qual parte do corpo humano NÃO possui vasos sanguíneos e recebe seu oxigênio diretamente do ar ambiente?",
    [
      "A córnea dos olhos",
      "A ponta da orelha",
      "As unhas",
      "O queixo"
    ],
    0,
    "Para ser perfeitamente transparente e permitir a passagem da luz até a retina, a córnea não tem sangue e absorve oxigênio dissolvido nas lágrimas.",
    "A lente transparente na frente do olho."
  ],
  [
    "sa_c13",
    17,
    2,
    "Quantos litros de sangue um ser humano adulto médio possui circulando pelo sistema cardiovascular?",
    [
      "Cerca de 2 litros",
      "Entre 4,5 e 5,5 litros",
      "Cerca de 10 litros",
      "Mais de 15 litros"
    ],
    1,
    "O volume sanguíneo representa cerca de 7% a 8% do peso corporal total de um indivíduo adulto saudável.",
    "Aproximadamente 5 litros."
  ],
  [
    "sa_c14",
    17,
    3,
    "Qual órgão abriga o 'segundo cérebro' do corpo humano, contendo mais de 500 milhões de neurônios e produzindo cerca de 90% da serotonina corporal?",
    [
      "O estômago",
      "O intestino (Sistema Nervoso Entérico)",
      "O coração",
      "A medula espinhal"
    ],
    1,
    "O intestino possui uma rede neural tão rica e independente que consegue coordenar reflexos e influenciar diretamente o humor e a ansiedade.",
    "O intestino humano."
  ],
  [
    "sa_c15",
    17,
    1,
    "Qual é o tipo sanguíneo considerado o 'doador universal' de hemácias por poder doar para receptores de todos os grupos ABO?",
    [
      "Tipo A positivo",
      "Tipo O negativo (O-)",
      "Tipo AB positivo",
      "Tipo B negativo"
    ],
    1,
    "Hemácias O- não possuem os antígenos A nem B nem o fator Rh, não sofrendo ataque imunológico de anticorpos em transfusões de emergência.",
    "O negativo."
  ],
  [
    "sa_c16",
    17,
    2,
    "Quantas vértebras compõem normalmente a coluna vertebral de um ser humano adulto?",
    [
      "12",
      "24 (mais o sacro e cóccix fundidos, totalizando 33 no desenvolvimento)",
      "50",
      "10"
    ],
    1,
    "A coluna tem 7 vértebras cervicais, 12 torácicas, 5 lombares, além do sacro e cóccix articulados.",
    "São 24 vértebras articuladas."
  ],
  [
    "sa_c17",
    17,
    3,
    "Qual é o osso mais frágil e menor de todo o esqueleto humano, com apenas 3 milímetros, situado dentro do ouvido médio?",
    [
      "Martelo",
      "Estribo",
      "Bigorna",
      "Hioide"
    ],
    1,
    "O estribo transmite as vibrações sonoras da membrana timpânica para a cóclea e pesa apenas alguns miligramas!",
    "O osso estribo do ouvido."
  ],
  [
    "sa_c18",
    17,
    1,
    "Qual vitamina essencial é sintetizada naturalmente pela nossa pele quando nos expomos aos raios solares moderados?",
    [
      "Vitamina A",
      "Vitamina C",
      "Vitamina D",
      "Vitamina B12"
    ],
    2,
    "A radiação UVB solar converte o 7-desidrocolesterol na epiderme em pré-vitamina D3, essencial para a fixação de cálcio nos ossos.",
    "A vitamina D."
  ],
  [
    "sa_c19",
    17,
    2,
    "Por que os dedos das mãos e pés enrugam quando passamos muito tempo de molho na água?",
    [
      "Pela pele inchar de água",
      "Por uma resposta involuntária do sistema nervoso que melhora a aderência e a pegada em objetos molhados",
      "Porque a pele perde gordura",
      "Porque o sabonete derrete o tecido"
    ],
    1,
    "Cientistas provaram que nervos cortados impedem o enrugamento: trata-se de uma adaptação evolutiva que funciona como ranhuras de pneus na chuva!",
    "Resposta neural que melhora a pegada molhada."
  ],
  [
    "sa_c20",
    17,
    2,
    "Qual é a velocidade média que um espirro humano pode expelir partículas de ar e saliva para fora do nariz?",
    [
      "10 km/h",
      "Até 160 km/h",
      "500 km/h",
      "À velocidade do som"
    ],
    1,
    "A pressão criada pelo diafragma e músculos respiratórios expele gotas de muco a dezenas de quilômetros por hora para desobstruir as vias aéreas.",
    "Pode passar dos 100 km/h."
  ],
  [
    "me_c01",
    18,
    2,
    "Qual é a maior floresta contínua do planeta Terra em extensão geográfica, cobrindo o norte da Rússia, Escandinávia e Canadá?",
    [
      "Floresta Amazônica",
      "Floresta Boreal (Taiga)",
      "Floresta Negra",
      "Floresta do Congo"
    ],
    1,
    "A Taiga ou Floresta Boreal de coníferas e pinheiros circunda todo o hemisfério norte subártico, superando a Amazônia em área total coberta.",
    "A Taiga ou Floresta Boreal."
  ],
  [
    "me_c02",
    18,
    3,
    "As árvores de uma floresta comunicam-se, trocam nutrientes e alertam sobre pragas através de uma rede subterrânea apelidada de 'Wood Wide Web'. Quem forma essa rede?",
    [
      "Fios de cobre naturais",
      "Redes de fungos micorrízicos associados às raízes",
      "Bactérias elétricas",
      "Água subterrânea corrente"
    ],
    1,
    "Hifas de fungos microscópicos conectam as raízes de árvores vizinhas, compartilhando carbono, fósforo e sinais químicos de perigo por quilômetros de floresta!",
    "Rede de fungos micorrizas."
  ],
  [
    "me_c03",
    18,
    1,
    "Qual é o maior recife de corais vivos do mundo, visível até do espaço sideral, com mais de 2.300 km de extensão?",
    [
      "Recife de Belize",
      "Grande Barreira de Corais (Austrália)",
      "Atol de Bikini",
      "Recife das Bahamas"
    ],
    1,
    "Localizada no nordeste da Austrália, a Grande Barreira é o maior organismo e estrutura viva unificada do planeta.",
    "Fica na costa nordeste australiana."
  ],
  [
    "me_c04",
    18,
    2,
    "Qual porcentagem aproximada de todo o oxigênio atmosférico que respiramos é produzida pelos oceanos (fitoplâncton e algas marinhas)?",
    [
      "10%",
      "Mais de 50% (podendo chegar a 70%)",
      "Apenas 5%",
      "100%"
    ],
    1,
    "Embora as florestas sejam vitais, as algas microscópicas e cianobactérias marinhas como o Prochlorococcus produzem a maior parte do oxigênio global!",
    "Mais da metade de todo o oxigênio."
  ],
  [
    "me_c05",
    18,
    3,
    "Qual animal marinho extraordinário consome milhares de águas-vivas e é fundamental para o equilíbrio biológico dos oceanos?",
    [
      "Tubarão-martelo",
      "Tartaruga-de-couro",
      "Foca-leopardo",
      "Golfinho-nariz-de-garrafa"
    ],
    1,
    "A tartaruga-de-couro é imune às toxinas das águas-vivas e chega a devorar seu próprio peso em celenterados diariamente.",
    "A maior espécie de tartaruga marinha."
  ],
  [
    "me_c06",
    18,
    1,
    "Quanto tempo uma garrafa plástica comum de PET pode levar para se decompor completamente na natureza se descartada incorretamente?",
    [
      "10 anos",
      "Cerca de 400 a 500 anos",
      "1.000 dias",
      "Nunca se decompõe em nada"
    ],
    1,
    "Por ser feita de polímeros sintéticos resistentes de petróleo, a garrafa PET vai se fragmentando em microplásticos perigosos ao longo de séculos.",
    "Mais de 400 anos."
  ],
  [
    "me_c07",
    18,
    2,
    "Qual inseto laborioso é responsável pela polinização de mais de 75% das principais culturas agrícolas de alimentos consumidos pela humanidade?",
    [
      "Besouro-rola-bosta",
      "Abelhas",
      "Moscas-varejeiras",
      "Baratas"
    ],
    1,
    "Maçãs, amêndoas, café, cacau, tomates e dezenas de outros frutos dependem diretamente da polinização por abelhas para vingar colheitas saudáveis.",
    "As produtoras de mel."
  ],
  [
    "me_c08",
    18,
    3,
    "Qual fenômeno de aquecimento anômalo das águas superficiais do Oceano Pacífico equatorial altera os padrões climáticos e chuvas no mundo todo?",
    [
      "La Niña",
      "El Niño",
      "Monção de Verão",
      "Corrente do Golfo"
    ],
    1,
    "O El Niño enfraquece os ventos alísios, provocando secas no Nordeste e Norte do Brasil e enchentes torrenciais no Sul.",
    "O fenômeno do El Niño."
  ],
  [
    "me_c09",
    18,
    1,
    "Qual é a principal fonte de energia limpa e renovável gerada a partir da força dos ventos em aerogeradores?",
    [
      "Energia solar",
      "Energia eólica",
      "Energia geotérmica",
      "Energia nuclear"
    ],
    1,
    "A energia eólica converte a energia cinética do deslocamento das massas de ar em eletricidade por meio de grandes pás giratórias.",
    "Energia gerada pelo vento."
  ],
  [
    "me_c10",
    18,
    2,
    "Qual gás emitido em grande escala pelo gado bovino na fermentação entérica tem potencial de efeito estufa 28 vezes maior que o CO₂ em 100 anos?",
    [
      "Oxigênio",
      "Gás Metano (CH₄)",
      "Gás Hélio",
      "Ozônio"
    ],
    1,
    "O metano retém calor com muita potência na atmosfera e é um dos principais focos de projetos globais de mitigação agropecuária.",
    "Gás metano."
  ],
  [
    "me_c11",
    18,
    3,
    "Qual camada da estratosfera protege a vida na Terra filtrando os nocivos raios ultravioleta tipo B (UV-B) do Sol?",
    [
      "Termosfera",
      "Camada de Ozônio (O₃)",
      "Troposfera",
      "Mesosfera"
    ],
    1,
    "O Protocolo de Montreal de 1987 baniu os gases CFCs, permitindo que a camada de ozônio começasse um processo histórico de recuperação.",
    "A camada de ozônio."
  ],
  [
    "me_c12",
    18,
    1,
    "O processo natural de reciclagem de restos orgânicos como cascas de frutas e folhas secas transformando-os em adubo fértil é chamado de:",
    [
      "Incineração",
      "Compostagem",
      "Oxidação",
      "Desidratação"
    ],
    1,
    "A compostagem doméstica com minhocas e bactérias reduz o lixo enviado a aterros e gera húmus de altíssima qualidade para hortas.",
    "Compostagem de resíduos."
  ],
  [
    "me_c13",
    18,
    2,
    "O que são as chamadas 'ilhas de calor' que afetam metrópoles como São Paulo e Nova York?",
    [
      "Praias artificiais no centro",
      "Áreas urbanas que registram temperaturas bem mais altas que as zonas rurais vizinhas pelo excesso de asfalto, concreto e poucos vegetais",
      "Vulcões inativos sob cidades",
      "Aquecedores subterrâneos"
    ],
    1,
    "Materiais escuros absorvem a radiação solar ao longo do dia e a devolvem à noite, tornando o ar das cidades significativamente mais quente.",
    "Aquecimento urbano pelo asfalto e concreto."
  ],
  [
    "me_c14",
    18,
    3,
    "Qual é o animal marinho herbívoro dócil apelidado carinhosamente de 'peixe-boi' ou 'vaca-marinha' que ajuda a podar e limpar canais e rios?",
    [
      "Lontra",
      "Sirênio (Peixe-boi)",
      "Baleia-jubarte",
      "Orca"
    ],
    1,
    "O peixe-boi da Amazônia e o marinho consomem dezenas de quilos de macrófitas aquáticas por dia, mantendo a circulação de luz e oxigênio nas águas.",
    "O dócil peixe-boi."
  ],
  [
    "me_c15",
    18,
    1,
    "Qual é o oceano mais poluído por resíduos plásticos flutuantes do planeta, abrigando a Grande Mancha de Lixo do Pacífico?",
    [
      "Oceano Ártico",
      "Oceano Pacífico",
      "Oceano Atlântico",
      "Oceano Antártico"
    ],
    1,
    "A Grande Mancha de Lixo entre a Califórnia e o Havaí tem área equivalente a três vezes o tamanho da França, concentrada por correntes rotatórias.",
    "O maior oceano da Terra."
  ],
  [
    "me_c16",
    18,
    2,
    "Qual árvore brasileira de madeira nobre e sementes comestíveis (pinhão) é o símbolo vegetal clássico das florestas frias do Sul do país?",
    [
      "Ipê-amarelo",
      "Araucária (Pinheiro-do-Paraná)",
      "Pau-brasil",
      "Jacarandá"
    ],
    1,
    "A Araucaria angustifolia forma a Floresta com Araucárias e alimenta roedores, gralhas-azuis e seres humanos com o nutritivo pinhão.",
    "O pinheiro de pinhões do Paraná."
  ],
  [
    "me_c17",
    18,
    3,
    "A ave gralha-azul é famosa na ecologia do Sul do Brasil por qual hábito vital de preservação florestal?",
    [
      "Construir ninhos de lama",
      "Enterrar pinhões no solo para comer mais tarde e esquecer o local, plantando novas araucárias",
      "Caçar cobras venenosas",
      "Cantar para atrair chuva"
    ],
    1,
    "Ao armazenar pinhões enterrados na terra fofa durante o outono, a gralha-azul atua como a principal reflorestadora natural dos pinheirais!",
    "Planta pinhões ao enterrá-los no chão."
  ],
  [
    "me_c18",
    18,
    1,
    "O que significa o termo 'biodiversidade' em ecologia?",
    [
      "A velocidade do vento nas florestas",
      "A variedade total de formas de vida, espécies, genes e ecossistemas de uma região",
      "O volume de água de um rio",
      "A quantidade de pedras em uma montanha"
    ],
    1,
    "A biodiversidade engloba desde a variabilidade genética dentro de uma mesma espécie até a riqueza de habitats de um bioma inteiro.",
    "Variedade de formas de vida."
  ],
  [
    "me_c19",
    18,
    2,
    "Qual país nórdico recicla quase 99% de todo o seu lixo doméstico e chega a importar resíduos de outros países para gerar energia em usinas de incineração limpa?",
    [
      "Suécia",
      "Espanha",
      "Grécia",
      "Brasil"
    ],
    0,
    "A Suécia desenvolveu uma infraestrutura de triagem tão avançada que menos de 1% do lixo residencial termina em aterros sanitários.",
    "País da Escandinávia com bandeira azul e amarela."
  ],
  [
    "me_c20",
    18,
    2,
    "O que são 'rios voadores' na climatologia da América do Sul?",
    [
      "Rios onde nadam peixes com asas",
      "Imensas correntes de vapor de água transportadas pelos ventos a partir da evapotranspiração da Floresta Amazônica para o Centro-Sul do Brasil",
      "Nuvens que caem nos oceanos",
      "Rios no topo de montanhas"
    ],
    1,
    "Bilhões de árvores da Amazônia bombeiam água para a atmosfera; essa umidade encontra a barreira dos Andes e desce irrigando as lavouras e reservatórios do Sudeste e Sul.",
    "Vapor de água amazônico que traz chuvas ao Sul."
  ],
  [
    "ca_c01",
    19,
    2,
    "A pintura da Mona Lisa de Leonardo da Vinci só se tornou o quadro mais famoso e visitado do mundo após qual evento dramático em 1911?",
    [
      "Uma menção no cinema mudo",
      "O roubo espetacular da obra de dentro do Museu do Louvre pelo italiano Vincenzo Peruggia",
      "A visita da Rainha Vitória",
      "Uma enchente no Rio Sena"
    ],
    1,
    "O quadro ficou desaparecido por dois anos; a caçada policial internacional estampou o sorriso da Gioconda na primeira página de todos os jornais do planeta.",
    "Foi roubada do Museu do Louvre."
  ],
  [
    "ca_c02",
    19,
    1,
    "Quem pintou a obra-prima renascentista do teto da Capela Sistina no Vaticano, incluindo a icônica 'Criação de Adão'?",
    [
      "Michelangelo Buonarroti",
      "Leonardo da Vinci",
      "Rafael Sanzio",
      "Donatello"
    ],
    0,
    "Michelangelo passou quatro anos deitado sobre andaimes de madeira pintando o forro de gesso fresco sob a encomenda do Papa Júlio II.",
    "O gênio escultor de David e da Pietà."
  ],
  [
    "ca_c03",
    19,
    2,
    "Qual famosa obra-prima expressionista de Edvard Munch de 1893 retrata uma figura andrógina em desespero sob um céu avermelhado?",
    [
      "A Noite Estrelada",
      "O Grito",
      "Guernica",
      "O Beijo"
    ],
    1,
    "Munch descreveu que caminhava com amigos quando o céu ficou vermelho-sangue e ele sentiu 'um grito infinito que passava pela natureza'.",
    "Mostra uma pessoa segurando a cabeça aos berros."
  ],
  [
    "ca_c04",
    19,
    3,
    "Qual célebre pintor holandês pós-impressionista cortou parte de sua própria orelha esquerda após uma discussão com Paul Gauguin em 1888?",
    [
      "Rembrandt",
      "Vincent van Gogh",
      "Johannes Vermeer",
      "Piet Mondrian"
    ],
    1,
    "Van Gogh sofreu com graves crises de saúde mental e pintou quadros eternos como 'Girassóis' e 'A Noite Estrelada', vendendo apenas uma pintura em vida.",
    "Vincent van Gogh."
  ],
  [
    "ca_c05",
    19,
    1,
    "Qual pintor espanhol cubista criou o colossal painel em preto e branco 'Guernica' denunciando o bombardeio nazista a uma cidade basca em 1937?",
    [
      "Salvador Dalí",
      "Pablo Picasso",
      "Joan Miró",
      "Francisco de Goya"
    ],
    1,
    "Picasso expôs o horror da guerra e o sofrimento de civis inocentes com figuras despedaçadas na Exposição Internacional de Paris de 1937.",
    "O mestre do cubismo Pablo Picasso."
  ],
  [
    "ca_c06",
    19,
    2,
    "Qual instrumento musical de cordas friccionadas criado por mestres italianos como Antonio Stradivari (Stradivarius) atinge valores de milhões de dólares em leilões?",
    [
      "O violão clássico",
      "O violino",
      "O piano de cauda",
      "A harpa celta"
    ],
    1,
    "Os violinos Stradivarius dos séculos XVII e XVIII possuem uma ressonância e timbre acústico inigualáveis devido ao tratamento e densidade da madeira alpina usada.",
    "Instrumento de arco e cordas."
  ],
  [
    "ca_c07",
    19,
    1,
    "Qual é o maior museu de arte do mundo em número de visitantes anuais e área de exposição, instalado em um antigo palácio real em Paris?",
    [
      "Museu do Prado (Madri)",
      "Museu do Louvre (Paris)",
      "Galeria Uffizi (Florença)",
      "MET (Nova York)"
    ],
    1,
    "Com sua famosa pirâmide de vidro no pátio, o Louvre exibe mais de 35.000 obras de arte, incluindo a Vênus de Milo e a Vitória de Samotrácia.",
    "O Museu do Louvre."
  ],
  [
    "ca_c08",
    19,
    2,
    "Qual dramaturgo inglês escreveu clássicos imortais da literatura mundial como 'Romeu e Julieta', 'Hamlet', 'Macbeth' e 'Rei Lear'?",
    [
      "Charles Dickens",
      "William Shakespeare",
      "Oscar Wilde",
      "George Orwell"
    ],
    1,
    "Shakespeare viveu na Inglaterra elisabetana e fundou o Globe Theatre, sendo considerado o maior escritor da língua inglesa de todos os tempos.",
    "O bardo William Shakespeare."
  ],
  [
    "ca_c09",
    19,
    3,
    "A escultura clássica grega 'Vênus de Milo' (Afrodite), exposta no Louvre, é famosa no mundo inteiro por ter qual característica marcante?",
    [
      "Não tem pernas",
      "Não tem os dois braços",
      "Não tem cabeça",
      "É feita de ouro maciço"
    ],
    1,
    "Desenterrada na ilha grega de Milos em 1820 por um camponês, os braços originais da estátua de mármore de Paros foram perdidos durante a escavação.",
    "Falta os dois braços na estátua."
  ],
  [
    "ca_c10",
    19,
    1,
    "Qual movimento artístico de vanguarda no Brasil teve como tela inaugural o famoso quadro 'Abaporu' pintado por Tarsila do Amaral em 1928?",
    [
      "Romantismo",
      "Movimento Antropofágico (Antropofagia)",
      "Barroco Mineiro",
      "Realismo"
    ],
    1,
    "Tarsila deu a tela com o homem de pé gigante e sol a Oswald de Andrade, que se inspirou para criar o Manifesto Antropofágico: 'deglutir a cultura estrangeira e recriá-la brasileira'.",
    "Inspirou o Manifesto Antropófago."
  ],
  [
    "ca_c11",
    19,
    2,
    "Qual compositor clássico alemão continuou escrevendo obras-primas monumentais, incluindo a Nona Sinfonia com a 'Ode à Alegria', mesmo estando completamente surdo?",
    [
      "Johann Sebastian Bach",
      "Ludwig van Beethoven",
      "Wolfgang Amadeus Mozart",
      "Johannes Brahms"
    ],
    1,
    "Beethoven perdeu a audição gradualmente a partir dos 28 anos; na estreia de sua 9ª Sinfonia em Viena em 1824, teve que ser virado para ver a plateia em pé ovacionando!",
    "Beethoven."
  ],
  [
    "ca_c12",
    19,
    3,
    "Qual técnica de pintura consiste em aplicar minúsculos pontinhos de cores puras na tela que se misturam na retina do observador?",
    [
      "Pontilhismo",
      "Afresco",
      "Aquarela",
      "Cubismo"
    ],
    0,
    "Desenvolvido pelos mestres Georges Seurat e Paul Signac no fim do século XIX, o pontilhismo revolucionou o uso da óptica na arte pictórica.",
    "Pintar com pequenos pontos."
  ],
  [
    "ca_c13",
    19,
    1,
    "Qual artista surrealista espanhol ficou mundialmente famoso por seus relógios derretidos na pintura 'A Persistência da Memória' e seu bigode excêntrico?",
    [
      "Pablo Picasso",
      "Salvador Dalí",
      "Diego Velázquez",
      "El Greco"
    ],
    1,
    "Dalí pintou os relógios amolecidos após contemplar queijo camembert derretendo ao sol, explorando o tempo relativo dos sonhos.",
    "Salvador Dalí."
  ],
  [
    "ca_c14",
    19,
    2,
    "Qual fotógrafo brasileiro ganhou renome planetário por suas imagens épicas e comoventes em preto e branco retratando trabalhadores em Serra Pelada e a natureza no projeto 'Gênesis'?",
    [
      "Sebastião Salgado",
      "Vik Muniz",
      "Marc Ferrez",
      "Pierre Verger"
    ],
    0,
    "O economista e fotógrafo Sebastião Salgado viajou por mais de 100 países documentando a condição humana e plantou milhões de mudas no Instituto Terra.",
    "Sebastião Salgado."
  ],
  [
    "ca_c15",
    19,
    3,
    "Qual escritor brasileiro fundou a Academia Brasileira de Letras em 1897 e escreveu obras-primas como 'Dom Casmurro' e 'Memórias Póstumas de Brás Cubas'?",
    [
      "José de Alencar",
      "Machado de Assis",
      "Lima Barreto",
      "Olavo Bilac"
    ],
    1,
    "Nascido no Morro do Livramento, Machado de Assis foi o maior romancista das letras brasileiras e o primeiro presidente perpétuo da ABL.",
    "O 'Bruxo do Cosme Velho'."
  ],
  [
    "ca_c16",
    19,
    1,
    "Qual foi o primeiro longa-metragem de animação tradicional colorido da história do cinema, lançado em 1937 pela Disney?",
    [
      "Pinóquio",
      "Branca de Neve e os Sete Anões",
      "Fantasia",
      "Bambi"
    ],
    1,
    "Chamado de 'a loucura de Disney' pelos céticos na época, o filme foi um estrondoso triunfo de bilheteria e faturou um Oscar especial com 7 mini-estatuetas!",
    "A história da maçã envenenada e dos anões."
  ],
  [
    "ca_c17",
    19,
    2,
    "Qual famosa canção brasileira de Tom Jobim e Vinícius de Moraes é considerada a segunda música mais regravada e tocada de toda a história mundial?",
    [
      "Aquarela do Brasil",
      "Garota de Ipanema",
      "Águas de Março",
      "Mas que Nada"
    ],
    1,
    "Composta em 1962 num bar da zona sul carioca, 'The Girl from Ipanema' perde em regravações mundiais apenas para 'Yesterday' dos Beatles!",
    "Inspirada em Helô Pinheiro na praia carioca."
  ],
  [
    "ca_c18",
    19,
    2,
    "Qual genial escultor e arquiteto barroco do século XVIII em Minas Gerais criava obras-primas em pedra-sabão e madeira mesmo sofrendo de doença degenerativa nas mãos?",
    [
      "Mestre Valentim",
      "Aleijadinho (Antônio Francisco Lisboa)",
      "Ataíde",
      "Padre Toledo"
    ],
    1,
    "Aleijadinho amarrava cinzéis e martelos nos pulsos com tiras de couro e esculpiu os célebres doze profetas no santuário de Congonhas.",
    "Antônio Francisco Lisboa."
  ],
  [
    "ca_c19",
    19,
    3,
    "Qual romance de cavalaria espanhol escrito por Miguel de Cervantes em 1605 é considerado o primeiro romance moderno do Ocidente?",
    [
      "Cem Anos de Solidão",
      "Dom Quixote de la Mancha",
      "A Divina Comédia",
      "Os Lusíadas"
    ],
    1,
    "Acompanhado de seu fiel escudeiro Sancho Pança e do cavalo Rocinante, o fidalgo sonhador Dom Quixote batalha contra moinhos de vento achando que são gigantes.",
    "O fidalgo que lutava contra moinhos de vento."
  ],
  [
    "ca_c20",
    19,
    1,
    "Qual monumento esculpido em pedra e cartão-postal do Brasil foi eleito em 2007 uma das Sete Novas Maravilhas do Mundo Moderno?",
    [
      "Pão de Açúcar",
      "Cristo Redentor",
      "Congresso Nacional",
      "Teatro Amazonas"
    ],
    1,
    "Localizado no topo do Morro do Corcovado no Rio de Janeiro a 710 metros de altitude, o monumento de braços abertos recebeu mais de 100 milhões de votos pelo mundo.",
    "Monumento com vista para a Baía de Guanabara."
  ],
  [
    "ec_c01",
    20,
    2,
    "Na remota ilha de Yap na Micronésia, qual item bizarro serviu como moeda de troca oficial por séculos e algumas pesam toneladas?",
    [
      "Conchas douradas",
      "Discos gigantes de pedra calcária com furo no meio (Pedras Rai)",
      "Bico de tucano",
      "Dentes de tubarão"
    ],
    1,
    "As 'Pedras Rai' eram tão pesadas que ficavam paradas no chão da aldeia; mesmo quando uma caiu e afundou no mar em uma tempestade, todos concordaram que ela continuava valendo!",
    "Imensas pedras circulares de calcário com furo."
  ],
  [
    "ec_c02",
    20,
    1,
    "A palavra moderna 'Salário' tem sua origem etimológica direta em qual mercadoria vital do Império Romano?",
    [
      "Ouro puro",
      "Sal marinho",
      "Trigo",
      "Vinho"
    ],
    1,
    "Soldados e legionários romanos recebiam uma cota especial de sal ('salarium') para conservar alimentos e trocar por produtos.",
    "O condimento branco usado na comida."
  ],
  [
    "ec_c03",
    20,
    2,
    "Qual foi a primeira grande bolha financeira especulativa registrada na história da humanidade, ocorrida na Holanda em 1637?",
    [
      "A Bolha das Ações da Ferrovia",
      "A Bolha das Tulipas (Tulipamania)",
      "A Crise da Seda",
      "A Bolha dos Cravos"
    ],
    1,
    "O preço de um único bulbo de tulipa rara ('Semper Augustus') chegou a valer o equivalente a mansões inteiras em Amsterdã antes do mercado colapsar da noite para o dia!",
    "A famosa 'Mania das Tulipas'."
  ],
  [
    "ec_c04",
    20,
    3,
    "O físico Sir Isaac Newton foi diretor da Casa da Moeda da Inglaterra por 30 anos e introduziu uma engenhosa inovação nas moedas de metal para evitar roubos. Qual foi?",
    [
      "Pintar as moedas com verniz",
      "Fazer pequenas ranhuras e ranhuras serrilhadas na borda das moedas",
      "Fazer as moedas quadradas",
      "Gravar números secretos no centro"
    ],
    1,
    "Antigamente, as pessoas raspavam as bordas de ouro e prata das moedas redondas; com a borda serrilhada, qualquer raspagem ficava evidente na hora!",
    "Ranhuras serrilhadas no aro da moeda."
  ],
  [
    "ec_c05",
    20,
    1,
    "Qual é o nome do imposto incidente sobre operações de compra e venda de produtos e mercadorias no Brasil cobrado pelos estados?",
    [
      "IPTU",
      "ICMS (Imposto sobre Circulação de Mercadorias e Serviços)",
      "IPVA",
      "IOF"
    ],
    1,
    "O ICMS é um tributo de competência estadual embutido no preço final de quase todos os produtos e serviços de transporte e energia.",
    "O imposto estadual sobre mercadorias."
  ],
  [
    "ec_c06",
    20,
    2,
    "Qual físico Albert Einstein teria descrito (segundo anedota financeira) como a 'oitava maravilha do mundo' e a maior força matemática do universo?",
    [
      "A inflação acumulada",
      "Os juros compostos ('juros sobre juros')",
      "A taxa Selic",
      "O câmbio flutuante"
    ],
    1,
    "Nos juros compostos, o rendimento de cada período soma-se ao capital anterior, multiplicando os valores de forma exponencial ao longo do tempo.",
    "A mágica dos juros sobre juros."
  ],
  [
    "ec_c07",
    20,
    2,
    "Qual foi o país africano que imprimiu em 2008 a famosa cédula de 'Cem Trilhões de Dólares' devido a uma hiperinflação descontrolada?",
    [
      "Nigéria",
      "Zimbábue",
      "Angola",
      "Quênia"
    ],
    1,
    "A inflação no Zimbábue atingiu 79 bilhões por cento ao mês, obrigando o governo a lançar notas de 100.000.000.000.000 que mal compravam um pão!",
    "País do sul da África cuja capital é Harare."
  ],
  [
    "ec_c08",
    20,
    3,
    "O que representa a 'Taxa Selic' na economia brasileira?",
    [
      "O imposto de renda sobre salários",
      "A taxa básica de juros da economia definida pelo Comitê de Política Monetária (COPOM)",
      "A cotação do dólar comercial",
      "O índice de desemprego"
    ],
    1,
    "A Selic (Sistema Especial de Liquidação e de Custódia) baliza todas as outras taxas de empréstimos, financiamentos e rendimentos da renda fixa no país.",
    "A taxa básica de juros oficial do Banco Central."
  ],
  [
    "ec_c09",
    20,
    1,
    "Qual método de pagamento instantâneo brasileiro gratuito criado pelo Banco Central entrou em vigor em novembro de 2020 e se tornou sucesso mundial?",
    [
      "Boleto bancário",
      "PIX",
      "TED",
      "Cheque nominal"
    ],
    1,
    "O PIX funciona 24 horas por dia, 7 dias por semana, liquidando transferências em menos de 10 segundos sem custo para pessoas físicas.",
    "O PIX."
  ],
  [
    "ec_c10",
    20,
    2,
    "O que significa dizer que um investidor está aplicando a regra de 'não colocar todos os ovos na mesma cesta'?",
    [
      "Que ele compra apenas empresas de alimentos",
      "Que ele está diversificando seus investimentos para diluir riscos",
      "Que ele guarda dinheiro em casa",
      "Que ele só aposta na poupança"
    ],
    1,
    "Distribuir o capital entre diferentes classes (renda fixa, ações, moedas, imóveis) impede que uma crise em um único setor destrua todo o patrimônio.",
    "Diversificação de riscos."
  ],
  [
    "ec_c11",
    20,
    3,
    "O famoso 'Índice Big Mac', criado pela revista britânica The Economist em 1986, é uma ferramenta divertida e prática para comparar:",
    [
      "A quantidade de gordura dos lanches",
      "A Paridade do Poder de Compra (PPC) e se as moedas de diferentes países estão subvalorizadas ou sobrevalorizadas frente ao dólar",
      "O salário dos cozinheiros",
      "A inflação de sementes de gergelim"
    ],
    1,
    "Como os ingredientes do Big Mac são padronizados no mundo inteiro, comparar seu preço em moeda local converte uma teoria econômica complexa em número tangível.",
    "Compara o poder de compra e o valor das moedas."
  ],
  [
    "ec_c12",
    20,
    1,
    "O que é 'inflação' em termos práticos para o consumidor comum?",
    [
      "O aumento de salário",
      "A perda generalizada e contínua do poder de compra do dinheiro com o aumento dos preços",
      "A queda dos juros",
      "A chegada de produtos importados"
    ],
    1,
    "Com inflação alta, as mesmas notas de dinheiro compram uma cesta cada vez menor de mantimentos no supermercado.",
    "Quando os preços sobem e o dinheiro rende menos."
  ],
  [
    "ec_c13",
    20,
    2,
    "Qual foi o plano econômico brasileiro lançado em 1994 que criou a URV e pôs fim definitivo à hiperinflação crônica de décadas?",
    [
      "Plano Cruzado",
      "Plano Real",
      "Plano Bresser",
      "Plano Collor"
    ],
    1,
    "Liderado pelo ministro Fernando Henrique Cardoso e equipe de economistas, o Plano Real introduziu a nova moeda em 1º de julho de 1994 com paridade de 1 para 1 com o dólar.",
    "O Plano Real."
  ],
  [
    "ec_c14",
    20,
    3,
    "Qual é o significado do termo financeiro 'Liquidez'?",
    [
      "A quantidade de moedas de metal",
      "A facilidade e rapidez com que um bem ou investimento pode ser convertido em dinheiro disponível sem perda relevante de valor",
      "O saldo negativo da conta",
      "A água usada pelas fábricas"
    ],
    1,
    "O dinheiro na conta corrente tem liquidez imediata; já um imóvel residencial tem baixa liquidez, pois pode levar meses para ser vendido.",
    "Facilidade de transformar ativo em dinheiro."
  ],
  [
    "ec_c15",
    20,
    1,
    "Em finanças pessoais, qual é a quantia recomendada de meses de despesas básicas que uma 'Reserva de Emergência' sólida deve cobrir?",
    [
      "Apenas 2 dias",
      "Entre 3 e 6 meses de gastos essenciais",
      "50 anos de salário",
      "Zero, não precisa guardar"
    ],
    1,
    "Guardar o equivalente a 3 a 6 meses de custo fixo em investimentos seguros e de resgate diário protege contra demissões inesperadas ou emergências médicas.",
    "De três a seis meses de despesas."
  ],
  [
    "ec_c16",
    20,
    2,
    "Qual é o principal índice que mede a inflação oficial no Brasil, calculado mensalmente pelo IBGE?",
    [
      "IGP-M",
      "IPCA (Índice Nacional de Preços ao Consumidor Amplo)",
      "INPC",
      "Selic"
    ],
    1,
    "O IPCA afere a variação de custo de vida para famílias com rendimento de 1 a 40 salários mínimos e baliza as metas de inflação do governo.",
    "A sigla IPCA do IBGE."
  ],
  [
    "ec_c17",
    20,
    3,
    "O que diz a Lei Econômica Fundamental da 'Oferta e da Procura' sobre a formação de preços de mercado?",
    [
      "O preço nunca muda",
      "Quando a demanda por um item supera a oferta disponível, o preço tende a subir; se há excesso de oferta e pouca procura, o preço cai",
      "O governo define todos os valores",
      "Tudo fica mais caro nas segundas-feiras"
    ],
    1,
    "É o mecanismo espontâneo do mercado que equilibra o interesse dos compradores com o volume produzido pelos vendedores.",
    "Equilíbrio entre compradores e mercadorias disponíveis."
  ],
  [
    "ec_c18",
    20,
    1,
    "Qual é a modalidade de crédito mais perigosa para o consumidor pelo risco de juros astronômicos se não for quitada integralmente na fatura?",
    [
      "Financiamento habitacional imobiliário",
      "Crédito rotativo do cartão de crédito",
      "Consórcio de carros",
      "Crédito consignado"
    ],
    1,
    "O rotativo do cartão tem as taxas de juros anuais mais elevadas do sistema financeiro, fazendo uma dívida pequena dobrar em poucos meses se não for paga.",
    "O rotativo do cartão."
  ],
  [
    "ec_c19",
    20,
    2,
    "Qual foi a primeira moeda oficial de circulação nacional cunhada no Brasil pelo Império em 1833?",
    [
      "O Cruzeiro",
      "O Réis (Real colonial/imperial)",
      "O Cruzado",
      "O Tostão"
    ],
    1,
    "O Réis (plural arcaico de Real) foi a moeda do Brasil colonial e imperial e durou até 1942, quando foi substituído pelo Cruzeiro.",
    "Os antigos Réis."
  ],
  [
    "ec_c20",
    20,
    2,
    "O que é o conceito de 'Custo de Oportunidade' na tomada de decisões econômicas?",
    [
      "O preço de uma promoção na loja",
      "O valor do benefício que você deixa de ganhar ao escolher uma alternativa em detrimento de outra",
      "A taxa de entrega de um produto",
      "O valor de um cupom de desconto"
    ],
    1,
    "Ao gastar R$ 5.000 em uma viagem de férias, o custo de oportunidade é o que esse dinheiro renderia investido ou os outros objetivos que foram adiados.",
    "O ganho da alternativa que você abriu mão."
  ]
];
if (typeof window !== 'undefined') {
    window.CURIOSIDADES_QUESTIONS = CURIOSIDADES_QUESTIONS;
}
