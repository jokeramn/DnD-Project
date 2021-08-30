export default class BeerService {
  constructor() {
    this._apiBase = 'https://api.punkapi.com/v2'
  }

  getResource = async (url) => {
    const res = await fetch(`${this._apiBase}${url}`)

    if (!res.ok && res.status !== 200) {
      throw new Error(`Could not fetch ${this._apiBase}` +
        `, received ${res.status}`)
    }

    return await res.json()
  }

  getAllBeers = async () => {
    const res = await this.getResource(`/beers`)
    return res.map(this._transformBeers)
  }

  _transformBeers(beer) {
    return {
      id: beer.id,
      name: beer.name,
      tagline: beer.tagline,
      description: beer.description
    }
  }
}