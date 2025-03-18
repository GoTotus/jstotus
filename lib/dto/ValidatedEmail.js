class CheckLevel {
    static L1_Syntax = new CheckLevel('l1_syntax');
    static L2_DNS = new CheckLevel('l2_dns');
    static L3_Server = new CheckLevel('l3_server');
    static L4_Dbs = new CheckLevel('l4_dbs');
    static L5_Smell = new CheckLevel('l5_smell');

    constructor(value) {
        this.value = value;
    }

    static fromString(value) {
        const levels = {
            'l1_syntax': CheckLevel.L1_Syntax,
            'l2_dns': CheckLevel.L2_DNS,
            'l3_server': CheckLevel.L3_Server,
            'l4_dbs': CheckLevel.L4_Dbs,
            'l5_smell': CheckLevel.L5_Smell,
        };
        if (!levels[value]) throw new Error(`No CheckLevel enum found for value: ${value}`);
        return levels[value];
    }
}

class ValidatedEmail {
    constructor(data) {
        this._data = data || {};
    }

    email() {
        return this._data.email;
    }

    result() {
        return this._data.result === 'PASSED';
    }

    score() {
        return this._data.score;
    }

    mailServers() {
        return this._data.mail_servers || [];
    }

    requestedLevel() {
        return CheckLevel.fromString(this._data.requested_level);
    }

    data() {
        return this._data;
    }

    toString() {
        return JSON.stringify(this._data, null, 4);
    }
}

module.exports = {ValidatedEmail, CheckLevel};