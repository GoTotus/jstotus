#!/usr/bin/env node

let Totus;
try {
    Totus = require('totus');
} catch (e) {
    console.log('npm package not found, falling back to local ../index.js');
    Totus = require('../index');
}

(async () => {
    try {
        const t = new Totus();
        const reference = t.Reference();

        console.log("Your Public IP ...");
        console.log(await reference.IP());

        console.log("Cloudflare 1.1.1.1 ...");
        console.log(await reference.IP({ip4: '1.1.1.1'}));

        console.log("Cloudflare ip6 for previous 1.1.1.1: 2606:4700:4700::1111 ...");
        console.log(await reference.IP({ip6: '2606:4700:4700::1111'}));
    } catch (error) {
        console.error('Error:', error.message);
    }
})();