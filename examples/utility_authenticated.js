const Totus = require('../index');

(async () => {
    try {
        const totus = new Totus();
        const auth = await totus.authenticated();
        console.log(`Authenticated: ${auth.authenticated()}`);
        console.log(`Description: ${auth.description()}`);
        console.log(`Token (masked): ${auth.tokenSm()}`);
        console.log(auth.data());
    } catch (error) {
        console.error('Error:', error.message);
    }
})();
