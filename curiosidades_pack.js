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
      "Radiotransmissão de voz",
      "Telégrafo elétrico",
      "Televisão em cores",
      "Telefone de disco"
    ],
    0,
    "O padre gaúcho Roberto Landell de Moura transmitiu voz por ondas de rádio em São Paulo em 1899, antes de Marconi registrar sua patente de transmissão de voz.",
    "Envolve transmissão de voz sem fios pelo ar."
  ],
  [
    "br_c05",
    1,
    3,
    "Qual ilha no litoral de SP tem a maior concentração de serpentes venenosas do mundo e é fechada ao público?",
    [
      "Ilha de São Sebastião",
      "Ilha da Queimada Grande",
      "Ilha do Cardoso",
      "Ilha de Santo Amaro"
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
      "O chimpanzé Tião",
      "O rinoceronte Cacareco",
      "O leão Dunga",
      "O papagaio Louro"
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
      "Spica",
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
      "Matas e reservas de ouro",
      "Casas de Bragança e Habsburgo",
      "Esperança e calor do sol",
      "Lavouras de cana e de trigo"
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
      "São incineradas no Dia da Bandeira",
      "São enterradas em rito solene",
      "São guardadas em cofre público"
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
      "Polaris Australis",
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
      "Ao centro do dispositivo",
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
      "Tornado que descende do Sol",
      "Vórtice de ar quente e labaredas",
      "Labareda comum em linha reta",
      "Meteoro em combustão rotativa"
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
      "Tufão repentino",
      "Redemoinho de poeira",
      "Ciclone extratropical",
      "Tromba d'água costeira"
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
      "Cachoeira em ascensão",
      "Tornado que atua sobre a água",
      "Gêiser marinho de pressão",
      "Onda gigante rotativa"
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
      "A pressão atrai relâmpagos",
      "Facilita entrada de vento e destroços",
      "O tornado dissipa em contato",
      "A fiação elétrica é desligada"
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
      "Núcleo de baixa pressão e ventos calmos",
      "Câmara com lava vulcânica",
      "Muralha de gelo comprimido",
      "Zona de gravidade invertida"
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
      "Tornado dos Três Estados",
      "Furacão Katrina",
      "Ciclone Bhola",
      "Tornado de Joplin"
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
      "Apito agudo e estridente",
      "Estrondo contínuo de trem",
      "Estalo sutil no ar",
      "Batida forte de tambor"
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
      "O vento dobra de velocidade no escuro",
      "As pessoas dormem e não veem o perigo",
      "O funil produz combustão espontânea",
      "As nuvens descem muito mais à noite"
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
      "Tornado comum em alto-mar",
      "Vórtice gerado por rajada de vento",
      "Tromba que congela água superficial",
      "Relâmpago giratório de solo"
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
      "Reflexo solar em florestas densas",
      "Luz filtrada por granizo e água",
      "Poluição química na baixa atmosfera",
      "Aurora polar em latitude atípica"
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
      "Apenas poeira e detritos leves",
      "Sim, erguem carros e animais",
      "Somente se houver água em baixo",
      "Apenas objetos soltos de metal"
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
      "São termos sinônimos",
      "Watch é potencial; Warning é iminente",
      "Warning é para chuva leve",
      "Watch indica perigo passado"
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
      "Volkswagen Sedan",
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
      "Pela cor de sua pintura inicial",
      "Pela corruptela popular de Volks",
      "Em honra ao primeiro mecânico",
      "Pelo som típico do escapamento"
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
      "Aumentar potência do motor",
      "Diferenciar giro das rodas nas curvas",
      "Acionar a tração de ré",
      "Resfriar os freios a disco"
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
      "Folhas de prata pura",
      "Folhas de ouro 24 quilates",
      "Placas de platina nobre",
      "Painéis de titânio maciço"
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
      "Sistema de freio antibloqueio",
      "Sensor automático de freio",
      "Sistema de freio com airbag",
      "Acelerador de frenagem suave"
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
      "Nürburgring Nordschleife",
      "Autódromo de Monza",
      "Circuito de Interlagos"
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
      "As rotações do motor (RPM)",
      "O nível de óleo lubrificante",
      "A temperatura do radiador"
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
      "Troféu de corrida de cavalos",
      "Caça do aviador Francesco Baracca",
      "Cavalo da fazenda do fundador",
      "Insígnia da cavalaria militar"
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
      "As quatro rodas do veículo",
      "Fusão de quatro marcas alemãs",
      "Os quatro pistões do motor",
      "Os quatro estados fundadores"
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
      "O reflexo do céu no mar",
      "As cores da bandeira da Baviera",
      "As cores dos olhos do criador",
      "O gelo e a eletricidade pura"
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
      "Disputar o mercado de luxo dos EUA",
      "Fabricar veículos populares baratos",
      "Entrar no transporte de cargas",
      "Evitar tarifas alfandegárias locais"
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
      "Hummer H1",
      "Jeep Willys",
      "Cadillac Brougham",
      "Chevrolet Fleetline"
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
      "Ponto Nemo",
      "Ilha de Páscoa",
      "Cabo Horn"
    ],
    1,
    "O Ponto Nemo (Polo Oceânico de Inacessibilidade) fica no Pacífico Sul a 2.688 km da terra firme mais próxima. Os astronautas na órbita passam mais perto do que qualquer pessoa na Terra!",
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
      "Deserto do Atacama",
      "Deserto de Gobi",
      "Deserto da Namíbia"
    ],
    1,
    "O Deserto de Atacama no Chile é bloqueado pelos Andes e pela corrente fria de Humboldt, criando uma aridez tão extrema que a NASA o usa para testar sondas de Marte.",
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
      "Depressão Challenger",
      "Fossa de Porto Rico",
      "Fossa de Java",
      "Depressão de Tonga"
    ],
    0,
    "A Depressão Challenger na Fossa das Marianas atinge quase 11.000 metros de profundidade. Se o Everest ficasse ali, seu pico ficaria a 2 km abaixo d'água!",
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
      "Salto Ángel",
      "Cataratas do Iguaçu",
      "Cataratas Vitória"
    ],
    1,
    "O Salto Ángel (Kerepakupai Merú) na Venezuela despenca de um tepui por 979 metros sem interrupções.",
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
      "Tiradentes",
      "Tomás Gonzaga",
      "Cláudio Manuel",
      "Padre Rolim"
    ],
    0,
    "Joaquim José da Silva Xavier, o Tiradentes, foi o único inconfidente condenado à morte e executado no Rio em 1792.",
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
      "Guerra do Paraguai",
      "Guerra do Pacífico",
      "Guerra Cisplatina"
    ],
    1,
    "A Guerra do Paraguai (ou da Tríplice Aliança) reuniu Brasil, Argentina e Uruguai contra as forças do presidente Francisco Solano López.",
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
      "Barão do Rio Branco",
      "Joaquim Murtinho",
      "Visconde de Mauá"
    ],
    1,
    "O Barão do Rio Branco (José Maria da Silva Paranhos Jr.) negociou o Tratado de Petrópolis em 1903, incorporando o Acre ao Brasil.",
    "Patrono da diplomacia brasileira."
  ],
  [
    "hb_c14",
    7,
    3,
    "A mais longa rebelião provincial do Brasil Imperial, que durou de 1835 a 1845 no Rio Grande do Sul, foi chamada de:",
    [
      "Cabanagem",
      "Guerra dos Farrapos",
      "Balaiada",
      "Sabinada"
    ],
    1,
    "A Guerra dos Farrapos (Revolução Farroupilha) durou 10 anos no Rio Grande do Sul, proclamando repúblicas até o acordo com o Império.",
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
      "Barão de Mauá",
      "Conde d'Eu",
      "Barão de Vassouras",
      "Visconde de Taunay"
    ],
    0,
    "Irineu Evangelista de Sousa, o Barão de Mauá, foi o pioneiro da modernização e infraestrutura no Brasil Imperial.",
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
      "Aquífero Alter do Chão",
      "Aquífero Cabeças",
      "Aquífero Bauru"
    ],
    1,
    "O Sistema Aquífero Grande Amazônia (SAGA / Alter do Chão) é totalmente nacional e possui mais de 160 trilhões de m³ de água potável.",
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
      "Diferença de salinidade pura",
      "Diferenças de densidade e vazão",
      "Presença de compostos de enxofre",
      "Diferença de pressão hidrostática"
    ],
    1,
    "O Rio Negro é mais quente e lento, enquanto o Solimões é mais frio e rápido, correndo lado a lado por quilômetros sem se misturar de imediato.",
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
      "Rio São Francisco",
      "Rio Tocantins",
      "Rio Doce"
    ],
    1,
    "O Rio São Francisco (o 'Velho Chico') nasce na Serra da Canastra em Minas Gerais e atravessa cinco estados.",
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
      "Amazonas e Rondônia"
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
      "Espalhamento Rayleigh da luz",
      "Presença de oxigênio líquido",
      "Absorção pela camada de ozônio"
    ],
    1,
    "Gases da atmosfera dispersam com mais facilidade comprimentos de onda curtos (luz azul) do que compridos, fenômeno descrito por Lord Rayleigh.",
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
      "Tardígrado",
      "Ácaro",
      "Nematódeo"
    ],
    1,
    "O tardígrado (urso-d'água) entra em estado de criptobiose e resiste a dessecação quase total, temperaturas extremas e até ao vácuo do espaço.",
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
      "Para toda ação há uma reação oposta",
      "A inércia preserva o movimento",
      "A gravidade atrai todas as massas"
    ],
    1,
    "A Terceira Lei de Newton enuncia que a toda ação corresponde uma reação de mesma intensidade e direção, com sentido oposto.",
    "A famosa lei da Ação e Reação."
  ],
  [
    "ci_c08",
    9,
    2,
    "Qual é o gás que compõe a maior parte da atmosfera que respiramos na Terra (cerca de 78%)?",
    [
      "Oxigênio",
      "Nitrogênio",
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
      "O tempo passa mais devagar",
      "O tempo para de existir",
      "O tempo corre para trás"
    ],
    1,
    "Pela Teoria da Relatividade Especial, a dilatação temporal faz com que relógios em alta velocidade passem mais devagar em relação a um referencial parado.",
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
      "-273,15 °C",
      "-500 °C",
      "-1.000 °C"
    ],
    1,
    "O Zero Absoluto corresponde a 0 Kelvin ou -273,15 °C, ponto em que o movimento térmico atômico atinge o mínimo teórico permitido.",
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
      "Pelo odor pungente do vegetal",
      "Pelo gás que reage nas lágrimas",
      "Pela presença de espinhos finos",
      "Pela liberação de vapor térmico"
    ],
    1,
    "Ao cortar a cebola, enzimas rompem compostos que formam um gás à base de enxofre, irritando os olhos e estimulando o choro protetor.",
    "Gás com enxofre que irrita as lágrimas."
  ],
  [
    "te_c01",
    10,
    2,
    "Qual foi a origem literal da palavra 'Bug' usada para descrever falhas em sistemas de computador?",
    [
      "Uma sigla militar confidencial",
      "Uma mariposa presa em um relé",
      "O codinome do programador-chefe",
      "Um erro de cálculo de trajetória"
    ],
    1,
    "Em 1947, a equipe de Grace Hopper encontrou uma mariposa de verdade presa nos contatos do computador eletromecânico Harvard Mark II.",
    "Um inseto real preso nos fios do computador."
  ],
  [
    "te_c02",
    10,
    1,
    "De qual material inusitado foi feito o primeiro mouse de computador do mundo inventado por Douglas Engelbart em 1964?",
    [
      "Plástico rígido moldado",
      "Bloco de madeira com rodas",
      "Alumínio fundido polido",
      "Cerâmica esmaltada fosca"
    ],
    1,
    "Douglas Engelbart talhou o protótipo do mouse em um bloco de madeira com um botão e duas rodas metálicas internas em 1964.",
    "Material ecológico que vem de árvores."
  ],
  [
    "te_c03",
    10,
    2,
    "Qual foi o primeiro produto comercial do mundo a ser escaneado por um leitor de código de barras a laser em 1974?",
    [
      "Pacote de chicletes",
      "Garrafa de refrigerante",
      "Livro didático escolar",
      "Lata de sopa de tomate"
    ],
    0,
    "Uma embalagem de chicletes Wrigley's de menta foi o primeiro item escaneado por código de barras a laser em 1974 em Ohio.",
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
      "Wireless Fidelity",
      "Wide Frequency Internet",
      "World Interface Fiber",
      "Web Information Format"
    ],
    0,
    "A sigla Wi-Fi foi criada comercialmente para soar atraente ao consumidor e fazer rima com a famosa expressão 'Hi-Fi'.",
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
      "Android Inc.",
      "Microsoft Corp.",
      "Samsung Group",
      "Sony Mobile"
    ],
    0,
    "Andy Rubin fundou a Android Inc. em 2003, que foi comprada pela Google em 2005 para revolucionar os sistemas móveis.",
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
      "Cerca de 4 KB de RAM",
      "Cerca de 1 MB de RAM",
      "Cerca de 512 MB de RAM",
      "Cerca de 4 GB de RAM"
    ],
    0,
    "O computador de orientação da Apollo 11 operava com apenas cerca de 4 Kilobytes de memória RAM e 72 KB de ROM!",
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
      "Por blindagem densa de chumbo",
      "Por reflexão interna total da luz",
      "Por campos magnéticos de vácuo",
      "Por absorção química das paredes"
    ],
    1,
    "O feixe de laser incide num ângulo que não refrata para fora do vidro, propagando-se por reflexão interna total ao longo do cabo.",
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
      "LOGIN (enviou 'LO')",
      "INTERNET ON",
      "SYSTEM TEST"
    ],
    1,
    "A equipe tentou digitar 'LOGIN' entre a UCLA e Stanford em 1969, mas a conexão caiu na terceira letra, enviando apenas 'LO'!",
    "Tentaram enviar LOGIN e o sistema caiu no meio."
  ],
  [
    "an_c01",
    11,
    2,
    "Qual pequeno crustáceo marinho desfere um soco tão veloz que quebra vidros de aquário e ferve a água ao redor momentaneamente?",
    [
      "Camarão-mantis",
      "Caranguejo-ermitão",
      "Lagosta-boxeadora",
      "Krill antártico"
    ],
    0,
    "O camarão-mantis (Stomatopoda) acelera suas patas com a velocidade de um tiro de calibre .22, gerando bolhas de cavitação que atingem milhares de graus!",
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
      "Pela exposição solar",
      "Pela ingestão de carotenoides",
      "Por hormônios da fase adulta",
      "Para afugentar predadores"
    ],
    1,
    "A penugem dos flamingos é cinzenta ao nascer; eles adquirem a coloração rosa pela alimentação rica em pigmentos carotenoides presentes em algas e microcrustáceos.",
    "Pigmentos carotenoides da comida."
  ],
  [
    "an_c11",
    11,
    3,
    "O sangue azul do caranguejo-ferradura (Límulo) é vital para a medicina moderna mundial porque:",
    [
      "Cura o câncer humano",
      "Coagula na presença de endotoxinas bacterianas",
      "Substitui sangue em transfusões",
      "Concentra vitaminas raras"
    ],
    1,
    "O sangue azul do límulo contém amebócitos que formam um coágulo imediato na presença de endotoxinas de bactérias, sendo o padrão ouro para testar injetáveis e vacinas.",
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
      "Ao tamanho das patas",
      "À impressão digital humana",
      "À coloração dos dentes",
      "Ao ritmo da corrida"
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
      "Cobra naja",
      "Vespa-do-mar",
      "Sapo ponta-de-flecha",
      "Aranha-armadeira"
    ],
    1,
    "A vespa-do-mar (Chironex fleckeri), uma água-viva-caixa da Austrália, possui tentáculos com toxinas cardiotóxicas capazes de matar um humano adulto em poucos minutos.",
    "Água-viva australiana com forma de caixa."
  ],
  [
    "an_c17",
    11,
    3,
    "Os golfinhos usam qual sistema sofisticado de navegação que emite cliques sonoros e escuta o eco para 'ver' objetos no escuro?",
    [
      "Magnetismo solar",
      "Ecolocalização",
      "Termovisão",
      "Olfato submarino"
    ],
    1,
    "A ecolocalização (biossonar) dos golfinhos funciona emitindo cliques de alta frequência que rebatem em obstáculos e presas, permitindo mapear o ambiente com precisão.",
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
      "Pelo assentamento do solo",
      "Pela dilatação térmica do ferro",
      "Pelo vento ascendente",
      "Pelo gelo acumulado no topo"
    ],
    1,
    "O ferro da Torre Eiffel se expande com o calor do verão europeu por dilatação térmica, aumentando a altura da estrutura em cerca de 15 centímetros.",
    "Fenômeno da física chamado dilatação térmica."
  ],
  [
    "cu_c03",
    12,
    2,
    "Por que as letras dos teclados de computador e celulares seguem a ordem 'QWERTY' em vez da ordem alfabética ABCD?",
    [
      "Para digitar com mais rapidez",
      "Para evitar o travamento de hastes mecânicas",
      "Por decreto da realeza inglesa",
      "Por sorteio aleatório das teclas"
    ],
    1,
    "O layout QWERTY foi patenteado em 1873 para separar pares de letras muito frequentes no inglês, impedindo que as hastes das máquinas de escrever emperrassem.",
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
      "Axolote",
      "Camaleão",
      "Cobra-coral"
    ],
    1,
    "O axolote (Ambystoma mexicanum) retém características larvais na vida adulta e consegue regenerar membros, tecidos cardíacos e partes do sistema nervoso sem cicatrizes.",
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
      "Monopoly",
      "Jogo da Vida",
      "Detetive"
    ],
    1,
    "Elizabeth Magie criou 'The Landlord's Game' em 1904 como um manifesto educativo contra a especulação e o monopólio da terra, dando origem posterior ao Monopoly.",
    "Comprar casas e hotéis nas ruas."
  ],
  [
    "cu_c08",
    12,
    2,
    "Por que os astronautas no espaço voltam para a Terra cerca de 3 a 5 cm mais altos do que quando partiram?",
    [
      "Pela comida liofilizada",
      "Pela descompressão das vértebras",
      "Pelo capacete pressurizado",
      "Por efeito de ilusão óptica"
    ],
    1,
    "Na ausência do peso constante da gravidade terrestre, os discos intervertebrais se expandem na microgravidade, fazendo astronautas crescerem de 3 a 5 cm temporariamente.",
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
      "1 coração único",
      "5 pares de arcos aórticos",
      "Nenhum coração",
      "3 ventrículos"
    ],
    1,
    "Minhocas possuem cinco pares de arcos aórticos (total de 10) que funcionam bombeando o sangue pelos vasos dorsal e ventral.",
    "Cinco pares de pequenos corações."
  ],
  [
    "cu_c14",
    12,
    2,
    "A 'febre da corrida do ouro' de 1849 na Califórnia fez surgir uma famosa marca de calças jeans reforçadas com rebites de cobre. Qual foi?",
    [
      "Lee",
      "Levi's",
      "Wrangler",
      "Diesel"
    ],
    1,
    "Levi Strauss e Jacob Davis criaram as calças de brim com rebites de cobre em 1873 para atender mineradores durante a corrida do ouro na Califórnia.",
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
      "Papel de parede texturizado",
      "Isolante de botas de neve",
      "Boia salva-vidas de bolso",
      "Brinquedo de estalo sonoro"
    ],
    0,
    "O plástico-bolha foi criado em 1957 para ser um papel de parede moderno; sem sucesso comercial na decoração, virou material protetor de computadores e encomendas.",
    "Criado para colar nas paredes de casa."
  ],
  [
    "cu_c17",
    12,
    1,
    "Qual animal é conhecido por ter impressões digitais na língua e não nos dedos?",
    [
      "Gato",
      "Cachorro",
      "Cavalo",
      "Elefante"
    ],
    1,
    "A impressão do focinho dos cães possui relevos e linhas tão exclusivos que serve de biometria para identificação, como a impressão digital dos humanos.",
    "O melhor amigo de quatro patas do homem."
  ],
  [
    "cu_c18",
    12,
    2,
    "Qual foi o primeiro produto vendido em lata na história que exigiu a invenção do abridor de latas quase 50 anos depois?",
    [
      "Cerveja artesanal",
      "Rações militares enlatadas",
      "Tinta para parede",
      "Leite condensado"
    ],
    1,
    "As primeiras latas de alimentos para a marinha eram feitas de ferro pesado e exigiam baionetas para abrir; abridores só surgiram quase 50 anos depois.",
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
      "Na Lua",
      "No Sol",
      "Em Vênus"
    ],
    1,
    "Os sismógrafos da Apollo detectaram 'moonquakes' (sismos lunares) provocados por forças de maré da Terra e pela violenta variação térmica na superfície lunar.",
    "O satélite natural da Terra."
  ],
  [
    "tr_c03",
    13,
    1,
    "Qual é o nome da famosa falha geológica na Califórnia que marca o atrito direto entre as placas do Pacífico e da América do Norte?",
    [
      "Falha de San Andreas",
      "Falha da Anatólia",
      "Fossa das Marianas",
      "Rifte Africano"
    ],
    0,
    "A Falha de San Andreas na Califórnia delimita o contato transcorrente entre as placas tectônicas do Pacífico e da América do Norte.",
    "Leva o nome de Santo André em inglês."
  ],
  [
    "tr_c04",
    13,
    2,
    "Qual é a diferença fundamental entre o 'hipocentro' (foco) e o 'epicentro' de um terremoto?",
    [
      "Hipocentro na superfície; epicentro no subsolo",
      "Hipocentro subterrâneo; epicentro na superfície",
      "Ambos os termos são sinônimos idênticos",
      "Hipocentro marítimo; epicentro terrestre"
    ],
    1,
    "O hipocentro (ou foco) é a origem subterrânea da ruptura da rocha; o epicentro é a projeção geográfica desse ponto na superfície terrestre.",
    "O prefixo 'epi' indica em cima na superfície."
  ],
  [
    "tr_c05",
    13,
    3,
    "O colossal terremoto de magnitude 9.1 que atingiu o Japão em 2011 foi tão intenso que alterou a massa da Terra e:",
    [
      "Encurtou o dia terrestre em microssegundos",
      "Aproximou a órbita da Lua em 10 metros",
      "Interrompeu ventos por um dia inteiro",
      "Inverteu os polos magnéticos da Terra"
    ],
    0,
    "O sismo de Tohoku em 2011 redistribuiu massa da crosta mais perto do eixo terrestre, aumentando ligeiramente a rotação e reduzindo o dia em 1,8 microssegundo.",
    "Acelerou imperceptivelmente a rotação da Terra."
  ],
  [
    "tr_c06",
    13,
    1,
    "Qual instrumento altamente sensível registra graficamente as ondas de choque causadas por abalos sísmicos?",
    [
      "Barômetro",
      "Sismógrafo",
      "Anemômetro",
      "Higrômetro"
    ],
    1,
    "O sismógrafo (ou sismômetro) utiliza sensores inerciais para medir e traçar no sismograma as oscilações das ondas sísmicas.",
    "Instrumento de medição de sismos."
  ],
  [
    "tr_c07",
    13,
    2,
    "Por que as ondas P (Primárias) são sempre as primeiras a chegar a uma estação de monitoramento sismológico?",
    [
      "Porque viajam no ar livre",
      "Porque são ondas compressivas mais velozes",
      "Porque são de natureza elétrica",
      "Porque se propagam pelo manto líquido"
    ],
    1,
    "As ondas primárias (P) são ondas longitudinais de compressão que se propagam mais rápido pelas rochas sólidas (5 a 8 km/s), chegando antes das ondas S.",
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
      "Isolamento de base sísmica",
      "Paredes de tijolo cru",
      "Torres com vidro colado",
      "Estruturas suspensas por cabos"
    ],
    0,
    "Prédios com isolamento de base usam amortecedores e mancais elastoméricos na fundação para desacoplar a oscilação do solo da superestrutura.",
    "Isolamento sísmico de base."
  ],
  [
    "tr_c11",
    13,
    3,
    "O que é o fenômeno devastador da 'liquefação do solo' durante fortes tremores sísmicos?",
    [
      "A rocha vira lava vulcânica",
      "O solo perde atrito e flui como líquido",
      "A água de superfície evapora",
      "O asfalto entra em combustão"
    ],
    1,
    "Na liquefação sísmica, a pressão da água nos poros de solos arenosos saturados sobe tanto com o tremor que o solo perde resistência e se comporta como lama viscosa.",
    "O chão sólido se transforma em lama fluida."
  ],
  [
    "tr_c12",
    13,
    1,
    "O Brasil tem terremotos? Qual é a realidade geológica do território brasileiro?",
    [
      "Não, o solo nunca treme",
      "Sim, ocorrem tremores intraplaca",
      "Apenas por impacto de meteoro",
      "Apenas por atividades vulcânicas"
    ],
    1,
    "O Brasil fica no interior da Placa Sul-Americana, mas ocorrem sismos de magnitude baixa a moderada por alívio de tensões geológicas acumuladas na crosta.",
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
      "Escala de Mercalli",
      "Escala Fujita",
      "Escala Kelvin"
    ],
    1,
    "A Escala Mercalli Modificada quantifica a intensidade pelos efeitos perceptíveis e danos estruturais nas construções (graus I a XII), e não pela energia total liberada.",
    "Leva o nome do vulcanólogo italiano Mercalli."
  ],
  [
    "tr_c15",
    13,
    1,
    "Durante um terremoto forte dentro de uma residência, a recomendação internacional de proteção pessoal é:",
    [
      "Correr para o meio da rua",
      "Abaixar, cobrir-se e segurar firme",
      "Entrar no elevador do prédio",
      "Ficar encostado nas janelas"
    ],
    1,
    "O protocolo internacional 'Drop, Cover, and Hold on' orienta abaixar-se, proteger cabeça e pescoço sob um móvel firme e segurar até o abalo cessar.",
    "Abaixar, cobrir e segurar."
  ],
  [
    "tr_c16",
    13,
    2,
    "Qual foi o terremoto mais forte já registrado no Brasil, atingindo magnitude 6.2 em 1955?",
    [
      "Sismo de Montes Claros",
      "Sismo de Porto dos Gaúchos",
      "Sismo de Sobral",
      "Sismo de São Paulo"
    ],
    1,
    "Em 1955, Porto dos Gaúchos (MT) registrou um terremoto de magnitude 6.2, o maior evento sísmico documentado por instrumentos em território brasileiro.",
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
      "Pela ausência de concreto",
      "Pelo leito de argila do antigo lago",
      "Pela proximidade do oceano",
      "Pela composição ferrosa do solo"
    ],
    1,
    "A Cidade do México foi erguida sobre sedimentos do antigo Lago de Texcoco, que ressoam e amplificam as ondas sísmicas de baixa frequência.",
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
      "Uma parede vertical de espuma",
      "Onda baixa de crista muito longa",
      "Redemoinho em espiral violenta",
      "Uma calmaria total sem maré"
    ],
    1,
    "Em mar aberto com quilômetros de profundidade, a onda de tsunami tem dezenas a centenas de quilômetros de comprimento e apenas 30 a 60 cm de altura na superfície.",
    "Onda quase imperceptível em alto mar."
  ],
  [
    "ts_c03",
    14,
    2,
    "Com qual velocidade impressionante um tsunami consegue se propagar pelo oceano em águas profundas de 4.000 metros?",
    [
      "50 km/h (velocidade urbana)",
      "200 km/h (velocidade de trem)",
      "800 km/h (velocidade de jato)",
      "À velocidade supersônica"
    ],
    2,
    "Em bacias oceânicas profundas, tsunamis se propagam a mais de 800 km/h, velocidade similar à de aviões a jato comerciais.",
    "Veloz como um avião comercial a jato."
  ],
  [
    "ts_c04",
    14,
    1,
    "Qual é o sinal clássico e assustador da natureza na praia que frequentemente antecede a chegada da primeira grande onda de um tsunami?",
    [
      "O recuo rápido da linha da praia",
      "A coloração vermelha da água",
      "O congelamento repentino do mar",
      "O surgimento de névoa escura"
    ],
    0,
    "Quando a calha da onda chega à costa antes da crista, o nível do mar recua centenas de metros bruscamente, expondo recifes e peixes pouco antes do impacto da crista.",
    "O mar recua bruscamente da praia."
  ],
  [
    "ts_c05",
    14,
    2,
    "O que significa a palavra de origem japonesa 'Tsunami' em sua tradução literal?",
    [
      "Onda destruidora",
      "Onda de porto",
      "Fúria do mar",
      "Maré de vento"
    ],
    1,
    "Em japonês, 'tsu' significa porto e 'nami' onda. Pescadores em alto mar não percebiam a passagem da onda e só viam a devastação ao retornar aos portos.",
    "Junção de porto com onda."
  ],
  [
    "ts_c06",
    14,
    3,
    "Qual foi o megatsunami do Oceano Índico em 26 de dezembro de 2004 que causou cerca de 230 mil mortes em 14 países?",
    [
      "Tsunami de Sendai",
      "Tsunami do Boxing Day",
      "Tsunami de Krakatoa",
      "Tsunami de Creta"
    ],
    1,
    "O tsunami de 26 de dezembro de 2004 (Boxing Day) foi desencadeado por um sismo de magnitude 9.1-9.3 em Sumatra-Andaman, vitimando mais de 220 mil pessoas no Índico.",
    "Ocorreu no dia seguinte ao Natal de 2004."
  ],
  [
    "ts_c07",
    14,
    1,
    "Qual é a causa mais frequente da geração de grandes tsunamis no planeta?",
    [
      "Passagem de tornados",
      "Deslocamento vertical do leito oceânico",
      "Marés astronômicas de sizígia",
      "Correntes marinhas profundas"
    ],
    1,
    "Grandes tsunamis se originam tipicamente de falhas geológicas inversas que empurram verticalmente a coluna de água sobre a placa tectônica submarina.",
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
      "Sistema DART de sensores",
      "Radar meteorológico Doppler",
      "Satélites de posicionamento GPS",
      "Rede de cabos telegráficos"
    ],
    0,
    "O sistema DART (Deep-ocean Assessment and Reporting of Tsunamis) usa medidores de pressão ancorados no leito marinho comunicando dados a boias de superfície.",
    "Conhecido pela sigla DART."
  ],
  [
    "ts_c10",
    14,
    1,
    "Um tsunami é formado por uma única onda gigante ou por uma série sucessiva de ondas?",
    [
      "Uma única onda isolada",
      "Uma série de ondas sucessivas",
      "Duas ondas e nada mais",
      "Inúmeras ondas de ressaca"
    ],
    1,
    "Tsunamis ocorrem em 'trens de ondas' espaçados por minutos ou até horas; as ondas seguintes costumam ser mais volumosas e perigosas que a primeira.",
    "Uma sequência com várias ondas espaçadas."
  ],
  [
    "ts_c11",
    14,
    2,
    "O que aconteceu com a usina nuclear de Fukushima Daiichi no Japão em março de 2011 durante o grande tsunami de Tohoku?",
    [
      "Foi atingida por magma submarino",
      "A água inundou os geradores a diesel",
      "Uma aeronave caiu sobre os reatores",
      "Os diques suportaram toda a inundação"
    ],
    1,
    "O tsunami de Tohoku ultrapassou o muro de contenção em Fukushima e alagou os geradores a diesel no subsolo, cortando a energia de refrigeração dos reatores.",
    "A onda ultrapassou a barreira e inundou os geradores."
  ],
  [
    "ts_c12",
    14,
    3,
    "Qual ilha vulcânica nas Canárias (Espanha) foi objeto de estudos científicos sobre a hipótese de um megatsunami no Atlântico por deslizamento de encosta?",
    [
      "Tenerife",
      "La Palma",
      "Gran Canária",
      "Lanzarote"
    ],
    1,
    "A hipótese de colapso da encosta do vulcão Cumbre Vieja em La Palma foi amplamente estudada em modelos de geração de megatsunamis transatlânticos.",
    "A ilha de La Palma."
  ],
  [
    "ts_c13",
    14,
    1,
    "Ao receber um alerta oficial de tsunami ou notar o recuo repentino do mar, para onde você deve se deslocar IMEDIATAMENTE?",
    [
      "Para a linha da praia",
      "Para terrenos altos e elevados",
      "Para o interior do carro na orla",
      "Para o porão da construção"
    ],
    1,
    "Diante de alerta ou recuo anômalo do mar, deve-se buscar altitude imediata a pé, em morros ou estruturas reforçadas de concreto, longe de canais e rios.",
    "Buscar terrenos altos e longe da costa."
  ],
  [
    "ts_c14",
    14,
    2,
    "Por que os rios que deságuam no mar se tornam vias perigosas de inundação durante a passagem de um tsunami?",
    [
      "Porque o rio seca de repente",
      "Porque a onda sobe o leito do rio",
      "Porque o fluxo de água estagna",
      "Porque a água perde o oxigênio"
    ],
    1,
    "A energia do tsunami avança pelo canal fluvial como uma pororoca veloz, inundando várzeas e comunidades ribeirinhas a quilômetros do litoral aberto.",
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
      "Apenas por abalos sísmicos",
      "Sim, por grandes massas em queda livre",
      "Somente em águas lacustres",
      "Apenas quando associados a ciclones"
    ],
    1,
    "Grandes deslizamentos submarinos ou colapsos de paredões rochosos e geleiras deslocam subitamente grandes volumes de água, gerando tsunamis de proporções colossais.",
    "Deslizamentos de rochas e geleiras geram tsunamis."
  ],
  [
    "ts_c17",
    14,
    2,
    "Por que a destruição provocada pela água de um tsunami na volta (refluxo para o mar) é muitas vezes pior que na chegada?",
    [
      "Porque a temperatura da água sobe",
      "Porque a correnteza arrasta escombros",
      "Porque a gravidade local varia",
      "Porque a salinidade aumenta"
    ],
    1,
    "Ao recuar de volta ao oceano, o refluxo da água transporta milhares de toneladas de concreto, postes e veículos, que atuam como aríete contra construções restantes.",
    "O refluxo carrega destroços que trituram tudo."
  ],
  [
    "ts_c18",
    14,
    2,
    "Em que país a garota britânica de 10 anos Tilly Smith salvou cerca de 100 turistas em 2004 ao reconhecer o recuo do mar aprendido na aula de geografia?",
    [
      "Austrália",
      "Tailândia",
      "Indonésia",
      "Índia"
    ],
    1,
    "Em 2004, a estudante inglesa Tilly Smith identificou o mar borbulhante e recuando na praia de Maikhao, na Tailândia, evacuando centenas de banhistas antes da onda.",
    "Na praia de Phuket, na Tailândia."
  ],
  [
    "ts_c19",
    14,
    3,
    "O litoral do Brasil já registrou algum registro histórico de tsunami de pequeno porte?",
    [
      "Nunca ocorreu no litoral",
      "Sim, com o sismo de Lisboa de 1755",
      "Ocorre semanalmente na costa",
      "Apenas na foz do Rio Amazonas"
    ],
    1,
    "O grande terremoto de Lisboa em 1755 gerou ondas que atravessaram o Oceano Atlântico e provocaram inundações costeiras no Nordeste brasileiro.",
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
      "Júpiter e Netuno",
      "Terra e Vênus",
      "Apenas na Lua"
    ],
    1,
    "Pressões e temperaturas colossais no manto de planetas como Netuno, Urano, Júpiter e Saturno comprimem o carbono atmosférico em verdadeiras chuvas de diamantes sólidos.",
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
      "Porque o Sol não brilha em Vênus",
      "Pela rotação lenta de 243 dias terrestres",
      "Pela presença de anéis densos",
      "Porque o planeta é estático"
    ],
    1,
    "Vênus tem uma rotação retrógrada tão lenta que leva 243 dias terrestres para girar sobre si mesmo, enquanto completa sua translação ao redor do Sol em 225 dias.",
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
      "Cerca de 1 segundo",
      "Cerca de 8 minutos",
      "Cerca de 1 hora",
      "Chega instantaneamente"
    ],
    1,
    "A luz viaja no vácuo a cerca de 300.000 km/s; para percorrer os 150 milhões de km até a Terra, leva aproximadamente 8 minutos e 20 segundos.",
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
      "A coroa brilhante de plasma",
      "A fronteira de onde a luz não escapa",
      "O núcleo de ferro maciço",
      "O disco exterior de asteroides"
    ],
    1,
    "O horizonte de eventos delimita a região ao redor de um buraco negro onde a velocidade de escape supera a velocidade da luz, constituindo um limite sem retorno.",
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
      "Nuvens frias de hidrogênio",
      "Remanescentes estelares ultra-densos",
      "Planetas de diamante puro",
      "Camadas de chumbo gasoso"
    ],
    1,
    "Em estrelas de nêutrons resultantes de supernovas, a matéria é tão compactada que uma colher de chá de sua substância pesaria bilhões de toneladas na Terra.",
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
      "Dissolução completa no vácuo",
      "Colisão e fusão com Andrômeda",
      "Absorção pelo campo do Sol",
      "Conversão em estrela única"
    ],
    1,
    "A Via Láctea e a galáxia de Andrômeda estão em rota de colisão a mais de 110 km/s e devem se fundir em uma grande galáxia elíptica em 4 a 5 bilhões de anos.",
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
      "Gêiseres de enxofre vulcânico",
      "Um oceano líquido sob a crosta de gelo",
      "Depósitos superficiais de magma",
      "Reações radioativas artificiais"
    ],
    1,
    "A sonda Cassini revelou que Encélado possui um oceano global de água líquida salgada sob sua casca de gelo, aquecido por forças de maré e fontes hidrotermais.",
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
      "Fogo proveniente de combustão",
      "Sublimação de gelos pelo vento solar",
      "Vazamento de combustível fóssil",
      "Fricção com partículas no vácuo"
    ],
    1,
    "À medida que o cometa se aproxima do Sol, a radiação sublima os gelos de seu núcleo; a pressão de radiação e o vento solar empurram o gás e poeira formando a cauda.",
    "Sublimação do gelo soprada pelo vento solar."
  ],
  [
    "as_c17",
    15,
    3,
    "Qual telescópio espacial lançado em 2021 opera no infravermelho a 1,5 milhão de km da Terra para observar as primeiras galáxias do Universo?",
    [
      "Telescópio Hubble",
      "Telescópio James Webb",
      "Telescópio Kepler",
      "Observatório Chandra"
    ],
    1,
    "O James Webb (JWST) observa no infravermelho no ponto de Lagrange L2 para captar a luz avermelhada desviada das primeiras estrelas e galáxias do cosmos.",
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
      "Azul celeste",
      "Avermelhada por óxidos de ferro",
      "Verde oliva",
      "Branca prateada"
    ],
    1,
    "O solo marciano contém grande concentração de minerais de óxido de ferro ('ferrugem'), dando à superfície sua marcante tonalidade avermelhada.",
    "Coloração avermelhada de ferrugem."
  ],
  [
    "ma_c01",
    16,
    2,
    "Qual é o famoso 'Paradoxo do Aniversário' na teoria das probabilidades?",
    [
      "Chance de 50% em apenas 23 pessoas",
      "Ninguém faz aniversário no mesmo dia",
      "São precisas 365 pessoas para 50%",
      "Aniversários só em anos bissextos"
    ],
    0,
    "Pelo Paradoxo do Aniversário, em uma sala com apenas 23 pessoas, existem 253 pares de comparação, fazendo a chance de ao menos duas pessoas compartilharem a mesma data superar 50,7%.",
    "Apenas 23 pessoas reunidas em uma sala."
  ],
  [
    "ma_c02",
    16,
    1,
    "Qual civilização antiga inventou o conceito e o símbolo do número ZERO como algarismo com valor posicional?",
    [
      "Civilização Romana",
      "Civilização Indiana",
      "Civilização Viking",
      "Grécia Antiga"
    ],
    1,
    "Matemáticos da Índia Antiga (como Brahmagupta) formalizaram o zero ('shunya') como número e algarismo posicional no século VII.",
    "Na Índia Antiga."
  ],
  [
    "ma_c03",
    16,
    2,
    "A sequência de Fibonacci (1, 1, 2, 3, 5, 8, 13, 21...) aparece frequentemente na natureza em qual destes exemplos?",
    [
      "Na contagem de patas de insetos",
      "Na espiral de sementes e pinhas",
      "Na velocidade das ondas sonoras",
      "Na composição mineral das rochas"
    ],
    1,
    "O arranjo das sementes no miolo do girassol e as escamas de pinhas seguem espirais logarítmicas baseadas na sequência de Fibonacci para otimizar o espaço e a luz solar.",
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
      "O quadrado da hipotenusa é a² = b² + c²",
      "A área é o dobro da altura",
      "Todos os três lados são iguais"
    ],
    1,
    "O Teorema de Pitágoras estabelece que, em qualquer triângulo retângulo, a área do quadrado da hipotenusa é igual à soma das áreas dos quadrados dos dois catetos.",
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
      "Manter a porta original escolhida",
      "Trocar de porta para ter 2/3 de chance",
      "Tanto faz, a chance final é 50%",
      "Pedir a ajuda de outra pessoa"
    ],
    1,
    "No problema de Monty Hall, mudar de porta aumenta a probabilidade de vitória de 1/3 para 2/3, pois a revelação do apresentador concentra a chance na porta restante.",
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
      "Fita métrica com elasticidade",
      "Superfície de um lado e uma borda",
      "Nó contínuo que nunca se desfaz",
      "Círculo com espessura variável"
    ],
    1,
    "A Fita de Möbius possui apenas uma face contínua e uma única linha de borda, sendo um objeto clássico de estudo na topologia.",
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
      "5.040",
      "35"
    ],
    2,
    "O cálculo de 7! (7 fatorial) é 7 × 6 × 5 × 4 × 3 × 2 × 1 = 5.040.",
    "Multiplicação regressiva de 7 até 1."
  ],
  [
    "ma_c15",
    16,
    2,
    "A Proporção Áurea (ou Número de Ouro, phi ≈ 1,618) era considerada pelos renascentistas a medida máxima da harmonia visual por estar presente:",
    [
      "No Partenon e na Mona Lisa",
      "Apenas em relógios de ouro",
      "Nos triângulos de trânsito",
      "Nos mapas viários urbanos"
    ],
    0,
    "A Proporção Áurea (phi ≈ 1,618) foi amplamente utilizada por arquitetos gregos e mestres renascentistas para compor obras harmônicas e equilibradas.",
    "Presente em obras de arte e monumentos clássicos."
  ],
  [
    "ma_c16",
    16,
    3,
    "Quantas cores diferentes são necessárias, no máximo, para colorir qualquer mapa plano de modo que dois países vizinhos nunca tenham a mesma cor?",
    [
      "3 cores",
      "4 cores",
      "5 cores",
      "7 cores"
    ],
    1,
    "O Teorema das Quatro Cores demonstra que quatro cores são suficientes para colorir qualquer mapa plano de modo que regiões vizinhas nunca compartilhem a mesma cor.",
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
      "Cerca de 1.000 batimentos",
      "Cerca de 10.000 batimentos",
      "Cerca de 100.000 batimentos",
      "Cerca de 1 milhão de batimentos"
    ],
    2,
    "Com frequência média de 70 batimentos por minuto em repouso, o coração humano pulsa aproximadamente 100.000 vezes a cada 24 horas.",
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
      "Pela fraqueza do ácido estomacal",
      "Pelo muco protetor que reveste a parede",
      "Pela rigidez óssea do estômago",
      "Pela ausência de enzimas gástricas"
    ],
    1,
    "A mucosa do estômago é protegida por uma espessa camada de muco rica em bicarbonato que neutraliza o ácido clorídrico junto às paredes e se renova continuamente.",
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
      "Por se tratar de radiação ultravioleta",
      "Pela luz ser 1.000 vezes fraca demais",
      "Por brilhar apenas no interior dos ossos",
      "Por emitir luz somente durante o sono"
    ],
    1,
    "Reações metabólicas do corpo humano emitem biofótons visíveis, porém com intensidade mil vezes menor do que o limiar perceptível pelo olho humano.",
    "Luz 1.000 vezes mais fraca que nossa visão."
  ],
  [
    "sa_c07",
    17,
    3,
    "Quantos neurônios aproximadamente existem no cérebro humano, interconectados por trilhões de sinapses?",
    [
      "1 milhão",
      "86 bilhões",
      "500 bilhões",
      "10 trilhões"
    ],
    1,
    "Pesquisas da neurocientista brasileira Suzana Herculano-Houzel quantificaram que o cérebro humano abriga em média cerca de 86 bilhões de neurônios.",
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
      "Por espasmo causado pelo medo",
      "Para queimar glicose e gerar calor",
      "Porque os nervos periféricos travam",
      "Para aumentar o oxigênio pulmonar"
    ],
    1,
    "As contrações involuntárias e rápidas do tremor muscular produzem calor metabólico por fricção e consumo de energia, auxiliando na manutenção da temperatura corporal.",
    "Mecanismo para aquecer o corpo."
  ],
  [
    "sa_c11",
    17,
    3,
    "Qual é o músculo mais forte do corpo humano em relação à força de pressão exercida por centímetro quadrado?",
    [
      "O bíceps braquial",
      "O músculo masseter",
      "O glúteo máximo",
      "O sóleo da perna"
    ],
    1,
    "Em força proporcional à área de secção transversal, o masseter (músculo que eleva a mandíbula) é capaz de aplicar dezenas de quilos de força mastigatória.",
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
      "O intestino",
      "O coração",
      "A medula"
    ],
    1,
    "O sistema nervoso entérico do intestino reúne centenas de milhões de neurônios e secreta a maior parcela da serotonina circulante no organismo.",
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
      "12 vértebras",
      "24 vértebras",
      "50 vértebras",
      "10 vértebras"
    ],
    1,
    "A coluna vertebral humana conta com 24 vértebras pré-sacrais articuladas (7 cervicais, 12 torácicas e 5 lombares), além dos segmentos fundidos do sacro e cóccix.",
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
      "Pelo inchaço da pele na água",
      "Por resposta neural para dar aderência",
      "Pela perda instantânea de gordura",
      "Pela ação química do sabonete"
    ],
    1,
    "O enrugamento aquático é mediado pelo sistema nervoso autônomo através de vasoconstrição, criando ranhuras funcionais para melhorar a pegada em superfícies molhadas.",
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
      "Fios de cobre naturais no solo",
      "Redes de fungos micorrízicos",
      "Colônias de bactérias elétricas",
      "Lençóis de água subterrânea"
    ],
    1,
    "A chamada 'Wood Wide Web' é tecida pelas micorrizas, redes subterrâneas de hifas fúngicas que conectam raízes arbóreas e transferem nutrientes e sinais bioquímicos.",
    "Rede de fungos micorrizas."
  ],
  [
    "me_c03",
    18,
    1,
    "Qual é o maior recife de corais vivos do mundo, visível até do espaço sideral, com mais de 2.300 km de extensão?",
    [
      "Recife de Belize",
      "Grande Barreira de Corais",
      "Atol das Rocas",
      "Recife das Bahamas"
    ],
    1,
    "A Grande Barreira de Corais na costa da Austrália é a maior formação biogênica contínua do planeta, com mais de 2.300 km de extensão.",
    "Fica na costa nordeste australiana."
  ],
  [
    "me_c04",
    18,
    2,
    "Qual porcentagem aproximada de todo o oxigênio atmosférico que respiramos é produzida pelos oceanos (fitoplâncton e algas marinhas)?",
    [
      "Cerca de 10%",
      "Mais de 50%",
      "Apenas 5%",
      "Cerca de 100%"
    ],
    1,
    "Microrganismos fotossintetizantes dos oceanos, como o fitoplâncton e as cianobactérias, são responsáveis por produzir mais da metade do oxigênio atmosférico do planeta.",
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
      "Camada de Ozônio",
      "Troposfera",
      "Mesosfera"
    ],
    1,
    "Localizada na estratosfera, a camada de ozônio (O₃) absorve a maior parte da radiação solar ultravioleta nociva à integridade celular.",
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
      "Praias artificiais nos centros",
      "Zonas urbanas mais aquecidas que o entorno",
      "Bolsões de magma sob as cidades",
      "Aquecedores industriais no subsolo"
    ],
    1,
    "As ilhas de calor urbanas decorrem da substituição da vegetação por superfícies escuras de asfalto e concreto, que absorvem calor diurno e o dissipam lentamente à noite.",
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
      "Araucária",
      "Pau-brasil",
      "Jacarandá"
    ],
    1,
    "A Araucaria angustifolia (pinheiro-do-paraná) caracteriza a Floresta Ombrófila Mista do Sul do Brasil e produz o pinhão.",
    "O pinheiro de pinhões do Paraná."
  ],
  [
    "me_c17",
    18,
    3,
    "A ave gralha-azul é famosa na ecologia do Sul do Brasil por qual hábito vital de preservação florestal?",
    [
      "Construir ninhos de lama na copa",
      "Enterrar pinhões e esquecer o local",
      "Caçar serpentes venenosas no solo",
      "Emitir cantos para atrair umidade"
    ],
    1,
    "A gralha-azul tem o hábito de enterrar sementes de araucária no solo como reserva de alimento; as sementes esquecidas germinam e perpetuam os pinheirais.",
    "Planta pinhões ao enterrá-los no chão."
  ],
  [
    "me_c18",
    18,
    1,
    "O que significa o termo 'biodiversidade' em ecologia?",
    [
      "A velocidade do vento nas florestas",
      "A variedade total de formas de vida",
      "O volume de água de uma bacia",
      "A quantidade de minerais do solo"
    ],
    1,
    "Biodiversidade engloba toda a variabilidade biológica, desde a diversidade genética entre indivíduos até a diversidade de espécies e ecossistemas inteiros.",
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
      "Rios com espécies de peixes alados",
      "Correntes aéreas de vapor da Amazônia",
      "Nuvens que precipitam sobre o mar",
      "Rios que correm no cume de serras"
    ],
    1,
    "Os 'rios voadores' são massas de vapor atmosférico impulsionadas pelos ventos a partir da transpiração das árvores amazônicas, transportando umidade vital para o Centro-Sul.",
    "Vapor de água amazônico que traz chuvas ao Sul."
  ],
  [
    "ca_c01",
    19,
    2,
    "A pintura da Mona Lisa de Leonardo da Vinci só se tornou o quadro mais famoso e visitado do mundo após qual evento dramático em 1911?",
    [
      "Uma menção famosa no cinema mudo",
      "O roubo da obra de dentro do Louvre",
      "A visita solene da Rainha Vitória",
      "Uma cheia histórica no Rio Sena"
    ],
    1,
    "O furto da Mona Lisa por Vincenzo Peruggia em 1911 no Museu do Louvre atraiu cobertura midiática mundial diária por dois anos, tornando o quadro um ícone global.",
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
      "Donatello di Bardi"
    ],
    0,
    "Michelangelo Buonarroti executou os afrescos monumentais da abóbada da Capela Sistina entre 1508 e 1512 a pedido do Papa Júlio II.",
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
      "Movimento Antropofágico",
      "Barroco Mineiro",
      "Realismo"
    ],
    1,
    "A pintura 'Abaporu' de Tarsila do Amaral instigou Oswald de Andrade a escrever o Manifesto Antropofágico, marco do modernismo brasileiro.",
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
      "Branca de Neve",
      "Fantasia",
      "Bambi"
    ],
    1,
    "'Branca de Neve e os Sete Anões' (1937) foi o marco pioneiro da Disney na produção de longas-metragens de animação inteiramente coloridos em celuloide.",
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
      "Aleijadinho",
      "Mestre Ataíde",
      "Padre Toledo"
    ],
    1,
    "Antônio Francisco Lisboa, o Aleijadinho, superou limitações motoras crônicas para esculpir monumentos e talhas sacras barrocas fundamentais em Minas Gerais.",
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
      "Conchas marinhas douradas",
      "Discos gigantes de pedra com furo",
      "Bicos afiados de tucano",
      "Dentes fósseis de tubarão"
    ],
    1,
    "As pedras Rai da ilha de Yap eram discos monolíticos de calcário entalhado cujo valor simbólico e posse eram reconhecidos pela comunidade mesmo sem movimentação física.",
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
      "Pintar moedas com verniz protetor",
      "Fazer ranhuras serrilhadas na borda",
      "Cunhar as moedas em formato quadrado",
      "Gravar códigos secretos no centro"
    ],
    1,
    "Como Master of the Mint, Sir Isaac Newton instituiu o serrilhado nas bordas das moedas britânicas para evidenciar a prática criminosa de raspar metais preciosos das bordas.",
    "Ranhuras serrilhadas no aro da moeda."
  ],
  [
    "ec_c05",
    20,
    1,
    "Qual é o nome do imposto incidente sobre operações de compra e venda de produtos e mercadorias no Brasil cobrado pelos estados?",
    [
      "IPTU",
      "ICMS",
      "IPVA",
      "IOF"
    ],
    1,
    "O ICMS (Imposto sobre Operações relativas à Circulação de Mercadorias e Prestação de Serviços) é o principal tributo indireto de competência dos estados brasileiros.",
    "O imposto estadual sobre mercadorias."
  ],
  [
    "ec_c06",
    20,
    2,
    "Qual físico Albert Einstein teria descrito (segundo anedota financeira) como a 'oitava maravilha do mundo' e a maior força matemática do universo?",
    [
      "A inflação acumulada",
      "Os juros compostos",
      "A taxa Selic básica",
      "O câmbio flutuante"
    ],
    1,
    "O regime de juros compostos aplica rendimentos sobre o saldo corrigido de cada período, gerando crescimento exponencial do patrimônio ao longo do tempo.",
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
      "A taxa básica de juros da economia",
      "A cotação oficial do dólar comercial",
      "O índice de desemprego nas capitais"
    ],
    1,
    "A taxa Selic é a taxa referencial de juros da economia brasileira estipulada pelo Banco Central (COPOM), orientando o custo de crédito e a remuneração de títulos soberanos.",
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
      "Comprar apenas ações de alimentação",
      "Diversificar aplicações para diluir risco",
      "Guardar valores em dinheiro vivo em casa",
      "Aplicar todo o capital na poupança"
    ],
    1,
    "A diversificação de ativos aloca recursos em múltiplos instrumentos e classes descorrelacionadas, mitigando o risco específico de perdas patrimoniais concentradas.",
    "Diversificação de riscos."
  ],
  [
    "ec_c11",
    20,
    3,
    "O famoso 'Índice Big Mac', criado pela revista britânica The Economist em 1986, é uma ferramenta divertida e prática para comparar:",
    [
      "A taxa calórica dos sanduíches",
      "A paridade do poder de compra de moedas",
      "O piso salarial dos atendentes",
      "O custo de transporte de sementes"
    ],
    1,
    "O Índice Big Mac da revista The Economist avalia a Paridade do Poder de Compra (PPC) global comparando o custo de um produto idêntico em diferentes economias.",
    "Compara o poder de compra e o valor das moedas."
  ],
  [
    "ec_c12",
    20,
    1,
    "O que é 'inflação' em termos práticos para o consumidor comum?",
    [
      "O aumento dos salários nominais",
      "A perda contínua do poder de compra",
      "A queda periódica das taxas de juros",
      "A entrada de manufaturados importados"
    ],
    1,
    "Inflação reflete o aumento generalizado e contínuo no nível de preços, acarretando a desvalorização do poder aquisitivo da moeda corrente.",
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
      "A soma de moedas metálicas em circulação",
      "A rapidez de converter um ativo em dinheiro",
      "O saldo negativo em conta corrente",
      "O fluxo de água utilizado na indústria"
    ],
    1,
    "Liquidez expressa a velocidade e a facilidade com que um ativo financeiro pode ser resgatado e convertido em moeda de troca imediata sem deságio expressivo.",
    "Facilidade de transformar ativo em dinheiro."
  ],
  [
    "ec_c15",
    20,
    1,
    "Em finanças pessoais, qual é a quantia recomendada de meses de despesas básicas que uma 'Reserva de Emergência' sólida deve cobrir?",
    [
      "Apenas 2 dias de compras",
      "Entre 3 e 6 meses de gastos",
      "50 anos de rendimento bruto",
      "Zero, não se deve poupar"
    ],
    1,
    "Especialistas em finanças pessoais recomendam manter de 3 a 6 meses de despesas vitais em ativos de baixíssima volatilidade e liquidez diária para contingências.",
    "De três a seis meses de despesas."
  ],
  [
    "ec_c16",
    20,
    2,
    "Qual é o principal índice que mede a inflação oficial no Brasil, calculado mensalmente pelo IBGE?",
    [
      "IGP-M",
      "IPCA",
      "INPC",
      "Selic"
    ],
    1,
    "O IPCA (Índice Nacional de Preços ao Consumidor Amplo), mensurado pelo IBGE, é o termômetro oficial da inflação adotado no regime de metas monetárias do Brasil.",
    "A sigla IPCA do IBGE."
  ],
  [
    "ec_c17",
    20,
    3,
    "O que diz a Lei Econômica Fundamental da 'Oferta e da Procura' sobre a formação de preços de mercado?",
    [
      "O valor fixo imposto pelo mercado",
      "Preços sobem com procura alta e caem com oferta",
      "O estado fixa todas as mercadorias",
      "Produtos encarecem nas segundas"
    ],
    1,
    "A lei da oferta e da procura regula os equilíbrios de preço: escassez com demanda aquecida eleva valores, ao passo que excesso de bens disponíveis pressiona preços para baixo.",
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
      "O Réis",
      "O Cruzado",
      "O Tostão"
    ],
    1,
    "O Réis (plural de Real no padrão arcaico) foi a unidade monetária corrente do Brasil desde o período colonial e durante todo o Império até meados do século XX.",
    "Os antigos Réis."
  ],
  [
    "ec_c20",
    20,
    2,
    "O que é o conceito de 'Custo de Oportunidade' na tomada de decisões econômicas?",
    [
      "O valor com desconto na compra",
      "O ganho da opção que você abre mão",
      "O custo de frete na entrega rápida",
      "O bônus de pontos no cartão"
    ],
    1,
    "Custo de oportunidade representa o valor do melhor benefício alternativo não usufruído ao se tomar uma decisão econômica excludente.",
    "O ganho da alternativa que você abriu mão."
  ]
];
if (typeof window !== 'undefined') {
    window.CURIOSIDADES_QUESTIONS = CURIOSIDADES_QUESTIONS;
}
