import { toSlug } from './projects';

const knowledgeDatabase = [
  {
    id: 1,
    company: 'ETE Professor Camargo Aranha',
    link: 'https://eteccamargoaranha.cps.sp.gov.br/',
    period: 'jan/2002 ~ jun/2002',
    title: 'Auxiliar de Informática',
    type: 'Técnico',
    description: ['SQL', 'Lógica de Programação'],
    extraProjects: [],
  },
  {
    id: 2,
    company: 'SENAI Theobaldo de Nigris',
    link: 'https://sp.senai.br/unidade/grafica/',
    period: 'jul/2001 ~ jun/2003',
    title: 'Produtor Gráfico em Pré-Impressão',
    type: 'Técnico',
    description: ['Produção Gráfica', 'Colorimetria'],
    extraProjects: [],
  },
  {
    id: 3,
    company: 'Universidade São Judas',
    link: 'https://www.usjt.br',
    period: 'jan/2004 ~ dez/2007',
    title: 'Design Gráfico',
    type: 'Bacharelado',
    description: [
      'macOS',
      'Windows',
      'Photoshop',
      'InDesign',
      'CorelDraw',
      'Illustrator',
      'Cores',
      'Tipografia',
      'Embalagens',
      'Teorias de Design',
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
    type: 'Tecnólogo',
    description: [
      'Scrum',
      'Kanban',
      'BPMN',
      'HTML',
      'CSS',
      'Java',
      'PHP',
      'SQL',
      'Bootstrap',
      'JavaScript',
      'GIT | GITHUB',
      'Orientação a objetos',
      'Engenharia de Software',
      'Modelagem de Banco de Dados',
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
    type: 'Especialização',
    description: [
      'OmniGraffle',
      'Double Diamond',
      'Design Thinking',
      'Gráfico de Gantt',
      'Gestão de Design',
      'Sustentabilidade',
      'Planejamento de Marketing',
      'Desenvolvimento de Pesquisas',
    ],
    extraProjects: ['"Uso da ferramenta RPG para recriar histórias".'],
  },
];

export const knowledgeList = knowledgeDatabase.map((knowledge) => {
  const slug = toSlug(knowledge.company);

  return {
    ...knowledge,
    slug,
    brand: `/brands/${slug}.png`,
  };
});
