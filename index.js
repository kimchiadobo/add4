module.exports = props => {
  if (!Number.isInteger(props)) {
    throw "Please enter a valid integer"
  }

  return props + 4;
}