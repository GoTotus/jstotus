#!/usr/bin/env node

let Totus;
try {
    Totus = require('totus');
} catch (e) {
    console.log('npm package not found, falling back to local ../index.js');
    Totus = require('../index'); // Path from examples/ to jstotus/index.js
}

(async () => {
    try {
        const t = new Totus();
        const validate = t.Validate();

        const emails = [
            "invalid@gototus.com",
            "sdfsdf@sdfsdfsdfsfs.fdfsfs.fdfsds",
            "temporary@blondmail.com",
            "info@x.com",
            "invalid.email@linkedin.com",
            "info@linkedin.com",
            "support.now@gmail.com"
        ];

        for (const email of emails) {
            const result = await validate.email(email);
            console.log(`email ${email}: good email? ${result.result() ? 'YES' : 'NO'}; with score: ${result.score()}/100`);
            console.log(result);
        }
    } catch (error) {
        console.error('Error:', error.message);
    }
})();