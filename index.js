function takeANumber(deliLine, name)  {
  deliLine.push(name)
  return `Welcome, ${name}. You are number ${deliLine.length} in line.`
}

function nowServing(deliLine) {
  return deliLine.length > 0 ? deliLine.unshift() : "The line is currently empty."
}
