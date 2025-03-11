# GoTotus.com APIs' NodeJS / Javascript bindings

## Basic Usage

`TOTUS_KEY` environment variable will be used to pick the api
key ([create one here](https://gototus.com/console/apikeys))

```js

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

```

it will print:

```
[
  {
    dist: 71.6,
    gh: '69y7pkx5r3',
    id: 4675113766,
    info: {
      'addr:city': 'Ciudad Autónoma de Buenos Aires',
      'addr:country': 'AR',
      'addr:street': 'Avenida Corrientes',
      name: 'Maxikiosko',
      shop: 'kiosk'
    },
    lat: -34.60362,
    lon: -58.3824
  },
  {
    dist: 84,
    gh: '69y7ps83ms',
    id: 12179098601,
    info: {
      'addr:housenumber': '999',
      'addr:street': 'Avenida Presidente Roque Sáenz Peña',
      name: 'I Love Gifts',
      shop: 'gift'
    },
    lat: -34.60395,
    lon: -58.38076
  }
]
{
  as: '15169',
  asn: '15169',
  cc: 'US',
  city: 'Mountain View',
  country: 'United States of America',
  elevation: 0,
  gh: '9q9htvvm81jd',
  ip4: '8.8.8.8',
  is_proxy: false,
  lat: 37.38605,
  lon: -122.08385,
  postcode: '94035',
  region: 'California',
  timezone: '-08:00'
}
{
  email: 'test@example.com',
  l1: 'PASSED',
  l1_score: 100,
  l2: 'FAILED',
  l2_score: 0,
  mail_servers: null,
  requested_level: 'l4_dbs',
  result: 'FAILED',
  score: 5
}

```

## Examples

For further examples, check the `examples/` folder in this project.
Or a public copy at the [GitHub Website](https://github.com/GoTotus/jstotus/tree/main/examples).

## Manuals

For detailed manuals about Totus please check: [docs.gototus.com](https://docs.gototus.com)

## Installing

`npm i totus`
