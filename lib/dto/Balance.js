class Balance {
    constructor(data) {
        this._data = data || {};
    }

    credits() {
        return typeof this._data.credits === 'number' ? this._data.credits : 0.0;
    }

    data() {
        return this._data;
    }

    toString() {
        return JSON.stringify(this._data, null, 2);
    }
}

module.exports = { Balance };
