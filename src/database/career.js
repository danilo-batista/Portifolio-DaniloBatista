import { toSlug } from './projects';

const careerDatabase = [
  {
    id: 1,
    company: 'Alfaflex',
    link: 'https://alfaflex.com.br/',
    period: 'set/2002 ~ dez/2005',
    title: 'Técnico em Pré-Impressão',
    description:
      'Gráfica responsável pela produção de painéis adesivos e circuitos impressos flexíveis para produtos eletrônicos, utilizando o sistema serigráfico. Obs.: No período em que eu trabalhei nesta empresa, ela era conhecida como Condugraf Produtos Eletrônicos.',
    resume: [
      'Arte-finalizei digitalmente diversos painéis adesivos, circuitos impressos e teclados de membrana a partir de amostras físicas e desenhos técnicos.',
      'Determinei o processo gráfico destes produtos em conformidade com as necessidades dos clientes.',
      'Criei documentações de processos, atualizei e diagramei diversos outros documentos internos ativos na área de Desenvolvimento de Produtos Gráficos, em conformidade com a norma ISO9001, melhorando seu entendimento e uso.',
    ],
    extraProjects: [
      'Criei uma escala física de cores "Condugraf", reduzindo custos e aumentando a produtividade, tanto na relação Vendas e Clientes quanto no processo de Produção Gráfica de toda a empresa.',
    ],
  },
  {
    id: 2,
    company: 'Grupo Multi',
    link: 'https://www.multilaser.com.br/',
    period: 'jan/2006 ~ jan/2012',
    title: 'Designer Gráfico',
    description:
      'Empresa especializada em suprimentos de informática e eletrônicos.',
    resume: [
      'Desenvolvi embalagens de acessórios de informática e cartuchos de impressora.',
      'Criei projetos de comunicação interna em parceria com a área de Recursos Humanos.',
      'Proporcionei, por meio de materiais gráficos, todo o suporte à equipe comercial.',
      'Gerenciei a equipe interna de designers.',
      'Orientei fornecedores localizados em outros países.',
      'Realizei visitas técnicas a gráficas, validando as parcerias em conjunto com a área de compras.',
      'Inspecionei embalagens importadas diretamente no centro de distribuição.',
      'Desenvolvi o design de embalagens para diversas linhas de produtos da empresa.',
      'Apoiei tecnicamente o redesign da marca principal, realizado por uma agência externa de branding, em embalagens e produtos.',
      'Criei materiais de divulgação em formato de e-mail marketing para o time de vendas.',
    ],
    extraProjects: [
      'Liderei o projeto de redesign de toda a linha de embalagens com a equipe de designers, integrando diversas áreas envolvidas, desde os fornecedores até o time de vendas',
      'Gerou aumento da visibilidade e da relevância dos produtos.',
      'Recuperou e ampliou o espaço anteriormente perdido para concorrentes nos pontos de venda.',
      'Dirigi a parte artística dos catálogos de produtos, transformando-os nas principais ferramentas de conversão de vendas.',
    ],
  },
  {
    id: 3,
    company: 'Kalunga',
    link: 'https://turmadamonica.uol.com.br/',
    period: 'ago/2012 ~ mar/2014',
    title: 'Analista de Embalagens',
    description: 'Rede especializada em comércio de papelaria e eletrônicos.',
    resume: [
      'Atualizei layouts de embalagens dos produtos de marca própria.',
      'Realizei estudos de viabilidade de materiais gráficos, como embalagens, manuais de instruções e materiais de ponto de venda.',
      'Coordenei a equipe interna de designers e produtores gráficos.',
      'Orientei fornecedores localizados em outros países.',
    ],
    extraProjects: [],
  },
  {
    id: 4,
    company: 'MSP Estúdios',
    link: 'https://turmadamonica.uol.com.br/',
    period: 'abr/2014 ~ dez/2024',
    title: 'Letrista - Designer',
    description:
      'Estúdio de quadrinhos responsável pela criação e expansão do Universo da Turma da Mônica.',
    resume: [
      'Criei balões, títulos e onomatopeias customizadas para histórias em quadrinhos e livros didáticos.',
      'Ilustrei histórias temáticas com o tema "Grandes Paródias do Cinema".',
      'Realizei a vetorização de diversas artes do papel para o meio digital.',
    ],
    extraProjects: [
      'Implementei um projeto técnico de atualização de ferramentas gráficas que otimizou o tempo de produção das histórias em quadrinhos e facilitou a expansão para mercados internacionais por meio da personalização dos diálogos em diferentes idiomas.',
    ],
  },
];

export const careerList = careerDatabase.map((career) => {
  const slug = toSlug(career.company);

  return {
    ...career,
    slug,
    brand: `/brands/${slug}.png`,
  };
});
