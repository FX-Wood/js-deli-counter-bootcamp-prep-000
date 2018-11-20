function takeANumber(deliLine, name)  {
  deliLine.push(`Welcome, ${name}. You are number ${deliLine.length + 1} in line.`)
  return deliLine
}

function nowServing(deliLine) {
  return deliline.length > 0 ? deliLine.unshift() : "The line is currently empty."
}
