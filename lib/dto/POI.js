class POI {
    constructor(data) {
        this._data = data || {};
    }

    data() {
        return this._data;
    }

    id() {
        return this._data.id || 0;
    }

    latitude() {
        return this._data.lat || NaN;
    }

    longitude() {
        return this._data.lon || NaN;
    }

    geohash() {
        return this._data.gh || null;
    }

    distance() {
        return this._data.dist || null;
    }

    info() {
        return this._data.info || {};
    }

    toString() {
        return JSON.stringify({
            id: this.id(),
            lat: this.latitude(),
            lon: this.longitude(),
            gh: this.geohash(),
            dist: this.distance(),
            info: this.info()
        }, null, 4);
    }
}

module.exports = { POI };