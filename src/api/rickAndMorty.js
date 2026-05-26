const URL_BASE = 'https://rickandmortyapi.com/api'


export async function getCharacters(){


const url = URL_BASE + '/character'

const response = await fetch(url)


if (!response.ok) {
  throw new Error('deu ruim')
}
const data = await response.json()

    return data.results
}