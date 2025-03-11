const Totus = require('./index');

(async () => {
    try {
        const totus = new Totus();
        console.log((await totus.Reference().GeoPOI({gh:'69y7pkxfc', distance: 1000, what: 'shop', limit: 2})).map(poi=>poi.data()));
        console.log(await totus.Reference().IP({ip4: '8.8.8.8'}));
        console.log((await totus.Validate().email('test@example.com')).data());
    } catch (error) {
        console.error('Error:', error.message);
    }
})();
