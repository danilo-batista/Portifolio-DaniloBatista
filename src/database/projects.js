export function toSlug(string) {
  return string
    .toLowerCase() // transforma tudo em minúsculo
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
      'Lorem ipsum dolor sit amet consectetur. Nunc euismod venenatis aliquam consequat nisi facilisi sed ac diam. Scelerisque nisi varius suscipit congue eget nunc neque mi. Placerat enim orci arcu habitasse morbi.',
    date: 'Jan | Jul 2024',
    client: 'danilobatista',
  },
  {
    id: 2,
    title: 'Luz & Cena',
    description:
      'Lorem ipsum dolor sit amet consectetur. Nunc euismod venenatis aliquam consequat nisi facilisi sed ac diam. Scelerisque nisi varius suscipit congue eget nunc neque mi. Placerat enim orci arcu habitasse morbi.',
    date: 'Jan | Jul 20-25',
    client: 'alura',
  },
  {
    id: 3,
    title: 'Alura Books',
    description:
      'Lorem ipsum dolor sit amet consectetur. Nunc euismod venenatis aliquam consequat nisi facilisi sed ac diam. Scelerisque nisi varius suscipit congue eget nunc neque mi. Placerat enim orci arcu habitasse morbi.',
    date: 'Jan | Jul 20-25',
    client: 'rocketseat',
  },
  {
    id: 4,
    title: 'Alura Start',
    description:
      'Lorem ipsum dolor sit amet consectetur. Nunc euismod venenatis aliquam consequat nisi facilisi sed ac diam. Scelerisque nisi varius suscipit congue eget nunc neque mi. Placerat enim orci arcu habitasse morbi.',
    date: 'Jan | Jul 20-25',
    client: 'alura',
  },
];

export const projectsList = database.map((project) => {
  const slug = toSlug(project.title);
  return {
    ...project,
    slug,
    thumbnail: `${slug}.png`,
  };
});
