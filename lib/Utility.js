const { Balance } = require('./dto/Balance');
const { Authenticated } = require('./dto/Authenticated');

class Utility {
    constructor(totus) {
        this._totus = totus;
    }

    async balance() {
        return this._totus.balance();
    }

    async Balance() {
        return this.balance();
    }

    async authenticated() {
        const response = await this._totus._makeRequest('GET', '/authenticated');
        return new Authenticated(response);
    }

    async Authenticated() {
        return this.authenticated();
    }
}

module.exports = Utility;
