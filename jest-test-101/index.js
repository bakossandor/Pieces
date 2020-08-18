const addNumbersTogether = (numbers = []) => {
  const reducer = (acc, curr) => acc + curr;
  return numbers.reduce(reducer)
}

module.exports = {
  addNumbersTogether,
}