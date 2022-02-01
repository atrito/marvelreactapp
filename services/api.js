export const api = {
  characters: (offset) =>
    `https://gateway.marvel.com/v1/public/characters?offset=${offset}&limit=30&ts=1&apikey=${process.env.NEXT_PUBLIC_API_KEY}&hash=${process.env.NEXT_PUBLIC_HASH}`,
  character: (id) => `https://gateway.marvel.com:443/v1/public/characters/${id}?ts=1&apikey=${process.env.NEXT_PUBLIC_API_KEY}&hash=${process.env.NEXT_PUBLIC_HASH}`,
  detail: (id) => `https://gateway.marvel.com:443/v1/public/characters/${id}/comics?ts=1&limit=10&apikey=${process.env.NEXT_PUBLIC_API_KEY}&hash=${process.env.NEXT_PUBLIC_HASH}`,
};
