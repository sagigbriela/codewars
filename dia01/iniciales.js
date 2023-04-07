function abbrevName(name){

    // code away
    var [a, b] = name.toUpperCase().split(" ");
    return a[0].concat(".", b[0])
}

console.log(abbrevName("Gabriela Pirela"))