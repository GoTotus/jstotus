const assert = require('assert');
const Totus = require('../index');

(async () => {
    const totus = new Totus({ apiKey: 'test-key', endpoint: 'http://localhost' });

    // Mock _makeRequest
    totus._makeRequest = async (method, endpoint, params, data) => {
        assert.strictEqual(method, 'GET');
        assert.strictEqual(endpoint, '/balance');
        return { credits: 1234.56 };
    };

    // 1. Direct call
    const bal = await totus.balance();
    assert.strictEqual(bal.credits(), 1234.56);
    assert.strictEqual(bal.data().credits, 1234.56);
    assert.ok(bal.toString().includes('1234.56'));

    // 2. Uppercase alias
    const balUpper = await totus.Balance();
    assert.strictEqual(balUpper.credits(), 1234.56);

    // 3. Via Utility()
    const util = totus.Utility();
    assert.ok(util);
    const utilBal = await util.balance();
    assert.strictEqual(utilBal.credits(), 1234.56);

    const utilBalUpper = await util.Balance();
    assert.strictEqual(utilBalUpper.credits(), 1234.56);

    // Mock for authenticated
    totus._makeRequest = async (method, endpoint, params, data) => {
        assert.strictEqual(method, 'GET');
        assert.strictEqual(endpoint, '/authenticated');
        return {
            authenticated: true,
            description: 'your api_key is working',
            token_sm: 'TTT_123...456'
        };
    };

    const auth = await totus.Utility().authenticated();
    assert.strictEqual(auth.authenticated(), true);
    assert.strictEqual(auth.description(), 'your api_key is working');
    assert.strictEqual(auth.tokenSm(), 'TTT_123...456');
    assert.ok(auth.toString().includes('your api_key is working'));

    const authDirect = await totus.authenticated();
    assert.strictEqual(authDirect.authenticated(), true);

    console.log('jstotus balance and authenticated tests passed!');
})();
