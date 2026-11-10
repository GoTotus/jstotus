class Authenticated {
    constructor(data) {
        this._data = data || {};
    }

    authenticated() {
        return Boolean(this._data.authenticated);
    }

    description() {
        return this._data.description || '';
    }

    tokenSm() {
        return this._data.token_sm || '';
    }

    data() {
        return this._data;
    }

    toString() {
        return JSON.stringify(this._data, null, 2);
    }
}

module.exports = { Authenticated };
