export const selectMaxAmount = transaction => {
  if (transaction.length !== 0) {
    return transaction.sort((a, b) => b.amount - a.amount)[0].amount;
  }
};
