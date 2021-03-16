export default class GoTService {

    _baseApiUrl = 'https://www.anapioficeandfire.com/api'

    getResource = async (url) => {
        const res = await fetch(`${this._baseApiUrl}${url}`);
        if (!res.ok) {
            throw new Error(`Could not fetch ${url}, status ${res.status}`)
        }
        return await res.json();
    }

    _isEmp(data) {
        if (data) {
            return data
        } else {
            return 'no data'
        }
    }

    getAllBooks = async () => {
        const res = await this.getResource('/books');
        return res.map(elem => this._transformBook(elem));
    }

    getBook = async (id) => {
        const res = await this.getResource(`/books/${id}`);
        return this._transformBook(res);
    }

    getAllChars = async () => {
        const res = await this.getResource('/characters?page=4&pageSize=10/');
        return res.map(elem => this._transformChar(elem));
    }

    getChar = async (id) => {
        const res = await this.getResource(`/characters/${id}`);
        return this._transformChar(res);
    }

    getAllHouses = async () => {
        const res = await this.getResource('/houses');
        return res.map(elem => this._transformHouse(elem));
    }

    getHouse = async (id) => {
        const res = await this.getResource(`/houses/${id}`);
        return this._transformHouse(res);
    }

    _extractId = (item) => {
        const idRegExp = /\/([0-9]*)$/;
        return item.url.match(idRegExp)[1];
    }

    _transformBook = (data) => {
        return {
            id: this._extractId(data),
            name: this._isEmp(data.name),
            numberOfPages: this._isEmp(data.numberOfPages),
            publisher: this._isEmp(data.publisher),
            released: this._isEmp(data.released)
        }
    }

    _transformChar = (data) => {
        return {
            name: this._isEmp(data.name),
            gender: this._isEmp(data.gender),
            born: this._isEmp(data.born),
            died: this._isEmp(data.died),
            culture: this._isEmp(data.culture),
            id: this._extractId(data)
        }
    }

    _transformHouse = (data) => {
        return {
            id: this._extractId(data),
            name: this._isEmp(data.name),
            region: this._isEmp(data.region),
            words: this._isEmp(data.words),
            titles: this._isEmp(data.titles),
            overlord: this._isEmp(data.overlord),
            ancestralWeapons: this._isEmp(data.ancestralWeapons)
        }
    }
}
