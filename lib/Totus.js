const axios = require('axios');
const Reference = require('./Reference');
const Validate = require('./Validate');
const { TotusClientError } = require('./errors');

class Totus {
    constructor({ apiKey = null, endpoint = 'https://api.totus.cloud', proxy = null } = {}) {
        this.apiKey = apiKey || process.env.TOTUS_KEY;
        if (!this.apiKey) {
            throw new TotusClientError('API Key must be provided or set in TOTUS_KEY environment variable');
        }
        this.baseUrl = endpoint.replace(/\/+$/, ''); // Remove trailing slashes
        this.client = axios.create({
            baseURL: this.baseUrl,
            headers: { 'Authorization': `Bearer ${this.apiKey}` },
            proxy: proxy ? { protocol: 'https', host: proxy } : undefined
        });
    }

    async _makeRequest(method, endpoint, params = null, data = null) {
        const url = `${this.baseUrl}/${endpoint.replace(/^\/+/, '')}`;
        try {
            const response = await this.client.request({
                method,
                url,
                params,
                data
            });
            return response.data;
        } catch (error) {
            const { response } = error;
            let message = 'Unknown error';
            let status = response ? response.status : null;

            if (response && response.data) {
                message = response.data.error || message;
            } else if (response) {
                message = response.statusText || message;
            }

            if (status === 401) throw new (require('./errors').AuthenticationError)(message, status);
            if (status === 404) throw new (require('./errors').NotFoundError)(`Resource not found: ${url}`, status);
            if (status >= 400 && status < 500) throw new (require('./errors').ClientError)(`Bad request: ${message}`, status);
            if (status >= 500 && status < 600) throw new (require('./errors').ServerError)(`Server error: ${message}`, status);
            throw new TotusClientError(`Network error: ${error.message}`);
        }
    }

    Reference() {
        return new Reference(this);
    }

    Validate() {
        return new Validate(this);
    }
}

module.exports = Totus;