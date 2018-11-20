function takeANumber(deliLine, name)  {
  deliLine.push(name)
  return `Welcome, ${name}. You are number ${deliLine.length} in line.`
}

function nowServing(deliLine) {
  return deliLine.length > 0 ? deliLine.unshift() : "There is nobody waiting to be served!"
}
