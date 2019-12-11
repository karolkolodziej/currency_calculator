export const calcSumHelper = transaction => {
  if (transaction.length !== 0) {
    return transaction.reduce(
      (acc, transaction) =>
        parseInt(acc, 10) + parseInt(transaction.amount, 10),
      0
    );
  }
};
