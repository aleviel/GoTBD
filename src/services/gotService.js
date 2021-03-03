export default class GoTService {

	_baseApiUrl = 'https://www.anapioficeandfire.com/api'

	async getResource(url) {
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

	async getAllBooks() {
		const res = await this.getResource('/books');
		return res.map(elem => this._transformBook(elem));
	}

	async getBook(id) {
		const res = await this.getResource(`/books/${id}`);
		return this._transformBook(res);
	}

	async getAllChars() {
		const res = await this.getResource('/characters');
		return res.map(elem => this._transformChar(elem));
	}

	async getChar(id) {
		const res = await this.getResource(`/characters/${id}`);
		return this._transformChar(res);
	}

	async getAllHouses() {
		const res = await this.getResource('/houses');
		return res.map(elem => this._transformHouse(elem));
	}

	async getHouse(id) {
		const res = await this.getResource(`/houses/${id}`);
		return this._transformHouse(res);
	}

	_transformBook(data) {
		return {
			name: this._isEmp(data.name),
			numberOfPages: this._isEmp(data.numberOfPages),
			publisher: this._isEmp(data.publisher),
			released: this._isEmp(data.released)
		}
	}

	_transformChar(data) {
		return {
			name: this._isEmp(data.name),
			gender: this._isEmp(data.gender),
			born: this._isEmp(data.born),
			died: this._isEmp(data.died),
			culture: this._isEmp(data.culture)
		}
	}

	_transformHouse(data) {
		return {
			name: this._isEmp(data.name),
			region: this._isEmp(data.region),
			words: this._isEmp(data.words),
			titles: this._isEmp(data.titles),
			overlord: this._isEmp(data.overlord),
			ancestralWeapons: this._isEmp(data.ancestralWeapons)
		}
	}
}
