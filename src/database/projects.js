export function toSlug(string) {
  return string
    .toLowerCase() // transforma tudo em minúsculo
    .trim() // retira os espaços
    .replace(/&/g, 'e') // substitui & por "e"
    .normalize('NFD') // remove acentos
    .replace(/[\u0300-\u036f]/g, '') // remove caracteres especiais de acento
    .replace(/\s+/g, '-') // substitui espaços por hífen
    .replace(/[^a-z0-9\-]/g, ''); // remove qualquer outro caractere especial
}

export const database = [
  {
    id: 1,
    title: 'Alura Plus',
    description:
      'Plataforma fictícia desenvolvida como projeto de estudo, simulando um serviço de streaming de cursos da Alura.',
    date: '2025 02',
    client: 'danilobatista',
    highlight: false,
    category: 'landing page',
  },
  {
    id: 2,
    title: 'Alura Books',
    description:
      'Livraria fictícia com foco em tecnologia, apresentando destaques, categorias e avaliações para explorar livros da Alura.',
    date: '2025 02',
    client: 'rocketseat',
    highlight: true,
    category: ['landing page', 'e-commerce'],
  },
  {
    id: 3,
    title: 'Luz & Cena',
    description:
      'Luz & Cena é um projeto fictício que simula uma produtora audiovisual, destacando os filmes em cartaz.',
    date: '2025 02',
    client: 'alura',
    highlight: false,
    category: 'landing page',
  },
  {
    id: 4,
    title: 'UseDev',
    description:
      'Usedev é um projeto fictício de uma home de e-commerce voltado ao público dev, com temático do nerd.',
    date: '2025 03',
    client: 'alura',
    highlight: false,
    category: 'landing page',
  },
  {
    id: 5,
    title: 'PetPark',
    description:
      'Projeto fictício de landing page para um pet shop, com foco em serviços e design amigável.',
    date: '2025 03',
    client: 'alura',
    highlight: false,
    category: 'landing page',
  },
  {
    id: 6,
    title: 'Alura Start',
    description:
      'Página institucional fictícia para uma escola criativa, com foco em apresentação de cursos e depoimentos.',
    date: '2025 03',
    client: 'alura',
    highlight: false,
    category: 'landing page',
  },
  {
    id: 7,
    title: 'Serenatto',
    description:
      'Projeto fictício de uma cafeteria, com foco em destacar o cardápio, ambiente e proposta da marca.',
    date: '2025 03',
    client: 'alura',
    highlight: true,
    category: 'landing page',
    link: `https://serenatto-mocha.vercel.app/`,
  },
  {
    id: 8,
    title: 'Ignite Feed',
    description:
      'Projeto fictício de um feed que permite criar, curtir e excluir comentários.',
    date: '2025 02',
    client: 'rocketseat',
    highlight: true,
    category: 'feed',
    link: `https://ignite-feed-six-silk.vercel.app/`,
  },
];

export const projectsList = database.map((project) => {
  const slug = toSlug(project.title);
  const link = project.link
    ? project.link
    : `https://danilo-batista.github.io/${slug}`;

  return {
    ...project,
    slug,
    thumbnail: `${slug}.webp`,
    link,
  };
});
