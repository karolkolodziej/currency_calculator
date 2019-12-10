export const CalcSumHelper = transaction => {
  if (transaction.length !== 0) {
    return transaction.reduce(
      (acc, a) => parseInt(acc, 10) + parseInt(a.amount, 10),
      0
    );
  }
};
