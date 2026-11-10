const Totus = require('../index');

(async () => {
    try {
        const totus = new Totus();
        const bal = await totus.balance();
        console.log(`Account Balance: ${bal.credits().toFixed(2)} Credits`);
        console.log(bal.data());
    } catch (error) {
        console.error('Error:', error.message);
    }
})();
