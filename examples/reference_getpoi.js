#!/usr/bin/env node

let Totus;
try {
    Totus = require('totus');
} catch (e) {
    console.log('npm package not found, falling back to local ../index.js');
    Totus = require('../index.js');
}

(async () => {
    try {
        const t = new Totus(); // Assumes TOTUS_KEY is set in environment variables
        const reference = t.Reference();

        console.log("Any shop nearby:");
        let result = await reference.GeoPOI({gh: '69y7pkxfc', distance: 1000, what: 'shop', limit: 2});
        console.log(result.map(poi => poi.data()));

        console.log("\nAny shop nearby, but providing lat/lon instead of geohash:");
        result = await reference.GeoPOI({lat: -34.60362, lon: -58.3824, what: 'shop', limit: 2});
        console.log(result.map(poi => poi.data()));

        console.log("\nOnly bookshops, 2km around:");
        result = await reference.GeoPOI({gh: '69y7pkxfc', distance: 2000, what: 'shop', filter: {shop: 'books'}, limit: 2});
        console.log(result.map(poi => poi.data()));

        console.log("\nOnly bookshops, 2km around, name includes the word 'libro' in any case:");
        result = await reference.GeoPOI({gh: '69y7pkxfc', distance: 2000, what: 'shop', filter: {shop: 'books', name: '~*libro*'}, limit: 2});
        console.log(result.map(poi => poi.data()));
    } catch (error) {
        console.error('Error:', error.message);
    }
})();