const resultsList = document.getElementById("results")

new URLSearchParams(location.search).forEach((value, name) => {
    resultsList.append(`${name}: ${value}`)
    resultsList.append(document.createElement('br'))
})