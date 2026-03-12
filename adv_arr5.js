let transactions = [
  { id: 1, type: "credit", amount: 5000 },
  { id: 2, type: "debit", amount: 2000 },
  { id: 3, type: "credit", amount: 10000 },
  { id: 4, type: "debit", amount: 3000 }
];


   // 1. filter() all credit transactions
    const credit= transactions.filter(txn => txn.type === "credit");
console.log(credit);
   // 2. map() to extract only transaction amounts
   const Amounts = transactions.map(txn => txn.amount);
console.log(Amounts);
    //3. reduce() to calculate final account balance
    const finalBalance = transactions.reduce((balance, txn) => {
  if (txn.type === "credit") {
    return balance + txn.amount;
  } else {
    return balance - txn.amount;
  }
}, 0);
console.log(finalBalance);
    //4. find() the first debit transaction
    const firstDebit = transactions.find(txn => txn.type === "debit");
console.log(firstDebit);
    //5. findIndex() of transaction with amount 10000
    const index = transactions.findIndex(txn => txn.amount === 10000);
console.log(index);