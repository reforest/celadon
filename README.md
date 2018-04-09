<h1 align="center">
Celadon
</h1>
<p align="center">
A lotionjs transaction middleware, which take a little part of the donation amount to donate to the non-profit organization you choose.
</p>

<p align="center">
    <a href="https://travis-ci.org/reforest/celadon" target='_blank'>
      <img src="https://travis-ci.org/reforest/celadon.svg?branch=master" alt="Travis Build Status"/>
    </a>
    <a href="https://github.com/reforest/celadon/blob/master/LICENSE">
      <img src="https://img.shields.io/badge/License-MIT-yellow.svg" />
    </a>
    <a href="https://github.com/reforest/celadon/pulls">
      <img src="https://camo.githubusercontent.com/d4e0f63e9613ee474a7dfdc23c240b9795712c96/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f5052732d77656c636f6d652d627269676874677265656e2e737667" />
    </a>
</p>

## Installation
```command
$ npm i --save celadon
```

## Usage it as a handler
```javascript
import lotion from 'lotion';
import { handler as CeladonHandler } from 'celadon';

let app = lotion({ 
  devMode: true,
  initialState: {
    ...data
  }
});

app.use(CeladonHandler);
app.listen(3000);
```

## Usage it in your own handler
```javascript
// app.js
import lotion from 'lotion';
import handler from './handler';

let app = lotion({ 
  devMode: true,
  initialState: {
    ...data
  }
});

app.use(handler);
app.listen(3000);

// in handler.js
import { trasactionWithCeledon, donateTo } from 'celadon';
console.log(NPOs)
// [
//   // special wallet
//   'celadon_wallet',
//   'cosmos_wallet',
//   'impacthub_wallet',
//   'andy_wallettttttt'
// ]

export default function handler(state, tx) {
  // verify the tx
  // secp256k1.verify(tx.data, tx.signature, tx.data.from)

  let senderAddress = tx.data.from.toString('hex')
  let receiverAddress = tx.data.to.toString('hex')
  trasactionWithCeledon(state, {
    from: senderAddress,
    to: receiverAddress,
    org: donateTo(NPOs),
    feePortion: tx.data.feePortion,
    amount: tx.data.amount
  })
}

<!-- customize NPOs -->
donateTo() // default to celadon_wallet
donateTo('cosmos_wallet')
donateTo(['cosmos_wallet', 'impacthub_wallet', 'andy_wallettttttt'])
```

## Walkthrough

![introduction - celadon](https://raw.githubusercontent.com/reforest/celadon/master/introduction%20-%20celadon.png)


## Join the NPOs wallet list

- send an [issue](https://github.com/reforest/celadon/issues)
- or send us [email](amazingandyyy@gmail.com)


## Author

[reforest](https://github.com/reforest)

## Resources

- [lotionjs](https://lotionjs.com/)
- [Tendermint](https://github.com/tendermint/tendermint)
- [Cosmos](https://cosmos.network/)


## Standard

[![JavaScript Style Guide](https://cdn.rawgit.com/standard/standard/master/badge.svg)](https://github.com/standard/standard)

## License
[MIT](https://github.com/reforest/celadon/blob/master/LICENSE)