const {POI} = require('./dto/POI');
const {URLSearchParams} = require('url'); // Available in Node.js >= 10

class Reference {
    constructor(totus) {
        this._totus = totus;
    }

    async GeoPOI({lat = NaN, lon = NaN, gh = null, what = null, distance = null, filter = null, limit = null} = {}) {
        const params = new URLSearchParams();
        if (!isNaN(lat) && !isNaN(lon)) {
            params.append('lat', lat);
            params.append('lon', lon);
        }
        if (gh !== null) params.append('gh', gh);
        if (what !== null) params.append('what', what);
        if (distance !== null) params.append('dist', distance);
        if (filter !== null) {
            for (const [key, value] of Object.entries(filter)) {
                params.append('filter', `${key}=${value}`);
            }
        }
        if (limit !== null) params.append('limit', limit);

        const response = await this._totus._makeRequest('GET', '/ref/geo/poi', params);
        return response.map(item => new POI(item));
    }

    async NetIP({ip4 = null, ip6 = null} = {}) {
        const params = {};
        if (ip4) params.ip4 = ip4;
        else if (ip6) params.ip6 = ip6;
        return this._totus._makeRequest('GET', '/ref/net/ip', params);
    }
}

module.exports = Reference;
