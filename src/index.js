//Ejercicio 6
console.log('----------------');
console.log('Ejercicio 6');

function camelCase(sting) {
  const stringArray = sting.split('-')

  for (let i = 1; i < stringArray.length; i++) {
    let word = stringArray[i]
    word = `${word[0].toUpperCase()}${word.slice(1)}`
    stringArray[i] = word
  }

  return stringArray.join("")
}

console.log(camelCase('hola-necesito-ser-camel-case'));