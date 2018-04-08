function trasactionWithCeledon(state, opts){
  console.log(opts.org)
    // opts: {
    //   from:,
    //   to: ,
    //   amount: ,
    //   feePortion,
    //   org
    // }
    const { from, to, feePortion, org } = opts;
    const addressLength = 66;
    if(from.length < addressLength || to.length < addressLength) {
      return {...state}
    }
    let userOneBalance = state.balances[from] || amount+10;
    let userTwoBalance = state.balances[to] || 0;
    let orgTwoBalance = state.balances[org];
    if((userOneBalance<=10)||userTwoBalance<=10) {
      return {...state}
    }

    let amount = opts.amount || Math.random()*((Math.min(userOneBalance, userTwoBalance))/2.4);
    let fee = feePortion || 0.01;
    amount-=amount*fee;
    if(amount>userOneBalance) {
      return {...state}
    }
    let donations = amount*fee;
    amount -= donations;

    userOneBalance-=amount;
    userTwoBalance+=amount;
    orgTwoBalance+=donations

  state.balances = {
    ...state.balances,
    [from]: userOneBalance,
    [to]: userTwoBalance,
    [org]: orgTwoBalance
  }

  state.transactions = [
    ...state.transactions,
    {
      timestamp: Date.now() - (Math.floor(Math.random()*300)+100),
      from,
      to: {
        address: to,
        amount
      },
      donations: {
        address: org,
        amount: donations
      }
    }
  ]
}


let NPOs = [
  // special wallet
  'celadon_wallet',
  'cosmos_walet',
  'impacthub_wallet',
  'andy_wallettttttt'
]

function donateTo(name) {
  const fallback = NPOs[Math.floor(Math.random()*(NPOs.length))];
  if (!name) {
    return fallback;
  }
  if(typeof name === 'string') return name;
  if(name.length===1) return name[0];
  if(name.length>1) return name[Math.floor(Math.random()*name.length)];
  return fallback;
}
export {trasactionWithCeledon, NPOs, donateTo};