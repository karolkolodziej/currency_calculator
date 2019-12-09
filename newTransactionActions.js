


calculateMax = (treansaction) => {
  return transaction.sort().take(1)
}

mapStateToProps (state, props) => (
  {
    transaction: calculateMax(state.listTransaction)
  }
)(MaxTransaction)

