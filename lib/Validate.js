const { ValidatedEmail, CheckLevel } = require('./dto/ValidatedEmail');

class Validate {
    constructor(totus) {
        this._totus = totus;
    }

    async email(email, level = CheckLevel.L5_Smell) {
        const response = await this._totus._makeRequest('GET', '/validate/email', {
            email,
            level: level.value
        });
        return new ValidatedEmail(response);
    }
}

module.exports = Validate;
