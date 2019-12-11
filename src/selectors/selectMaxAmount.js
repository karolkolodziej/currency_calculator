export const selectMaxAmount = transactions => {
  if (transactions.length !== 0) {
    return transactions.sort(
      (transaction1, transaction2) => transaction2.amount - transaction1.amount
    )[0].amount;
  }
  return 0;
};
