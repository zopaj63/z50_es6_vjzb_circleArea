/*
Vježba: ES6
Trajanje: cca 15min (18:55)
1. Definirajte konstantu PI koja sadrži vrijednost pi (broj decimala proizvoljan). Definirajte konstantu sa nizom polumjera (barem 3).
2. Definirajte funkciju za površinu kruga. Funkcija prima proizvoljan broj parametara za koje se očekuje da će biti brojevi (polumjeri, mjerna jedinica nije bitna). Za svaki parametar izračuna i ispisuje površinu. Za dohvaćanje parametara koristiti rest operator.
3. Pozovite funkciju za površinu kruga sa nizom vrijednosti polumjera koristeći spread operator.
*/

const PI = Math.PI;
const radiusArray = [10, 20, 30, 40, 60];

function circleArea(...radiusArguments) {
    for (let i = 0; i < radiusArguments.length; i++) {
        const radius = radiusArguments[i];
        const area = PI * radius * radius;
        console.log(`r = ${radius}, A = ${area}`);
    }
}

circleArea(...radiusArray);