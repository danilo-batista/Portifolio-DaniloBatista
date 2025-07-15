import { toSlug } from './projects';

const knowledgeDatabase = [
  {
    id: 1,
    company: 'ETE Professor Camargo Aranha',
    link: 'https://eteccamargoaranha.cps.sp.gov.br/',
    period: 'jan/2002 ~ jun/2002',
    title: 'Técnico em Auxiliar de Informática',
    description: ['Técnico', 'SQL', 'Lógica de Programação'],
    extraProjects: [],
  },
  {
    id: 2,
    company: 'SENAI Theobaldo de Nigris',
    link: 'https://sp.senai.br/unidade/grafica/',
    period: 'jul/2001 ~ jun/2003',
    title: 'Técnico Gráfico em Pré-Impressão',
    description: ['Técnico', 'Produção Gráfica', 'Colorimetria'],
    extraProjects: [],
  },
  {
    id: 3,
    company: 'Universidade São Judas',
    link: 'https://www.usjt.br',
    period: 'jan/2004 ~ dez/2007',
    title: 'Design Gráfico',
    description: [
      'Bacharel',
      'Teorias de Design',
      'Tipografia',
      'Cores',
      'Embalagens',
      'macOS',
      'Windows',
      'Photoshop',
      'InDesign',
      'Illustrator',
      'CorelDraw',
    ],
    extraProjects: [
      '"O design de embalagem para a criação e o desenvolvimento de marcas próprias direcionadas ao segmento de autosserviço".',
    ],
  },
  {
    id: 4,
    company: 'Instituto Federal São Paulo',
    link: 'http://gru.ifsp.edu.br',
    period: 'jan/2014 ~ jun/2020',
    title: 'Análise e Desenvolvimento de Sistemas',
    description: [
      'Orientação a objetos',
      'Scrum',
      'Kanban',
      'BPMN',
      'Engenharia de Software',
      'Modelagem de Banco de Dados',
      'GIT | GITHUB',
      'HTML',
      'CSS',
      'Bootstrap',
      'JavaScript',
      'Java',
      'PHP',
      'SQL',
    ],
    extraProjects: [
      '"Acessibilização do Instituto Federal São Paulo - Câmpus Guarulhos para usuários com surdez por meio da sinalização física".',
    ],
  },
  {
    id: 5,
    company: 'Instituto Europeo di Design',
    link: 'https://ied.edu.br',
    period: 'jul/2009 ~ jun/2011',
    title: 'Design Estratégico e Inovação',
    description: [
      'Design Thinking',
      'Double Diamond',
      'Sustentabilidade',
      'Pesquisas',
      'Planejamento de Marketing',
      'Gestão de Design',
      'OmniGraffle',
      'Gantt',
    ],
    extraProjects: ['"Uso da ferramenta RPG para recriar histórias".'],
  },
];

export const knowledgeList = knowledgeDatabase.map((knowledge) => {
  const slug = toSlug(knowledge.company);

  return {
    ...knowledge,
    slug,
    brand: `/images/brand-${slug}_logo.png`,
  };
});
