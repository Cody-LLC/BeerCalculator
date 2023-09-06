function calculate() {
    // Your calculation logic here based on user inputs
    const weight = parseFloat(document.getElementById('weight').value);
    const gender = document.getElementById('gender').value;
    const age = parseFloat(document.getElementById('age').value);
    const beerType = document.getElementById('beer').value;
    console.log(beerType)
    var beerAnswer = '1'
    if (beerType === 'light') {
        if(gender === 'female'){
            beerAnswer = (((weight/2) / 20)
        }
        else [
            beerAnswer = (((weight) / 20)
        ]
    } 
    if (beerType === 'regular') {
        if(gender === 'female'){
            beerAnswer = (((weight/2) / 20)
        }
        else [
            beerAnswer = (((weight) / 20)
        ]
    } 
    if (beerType === 'strong') {
        if(gender === 'female'){
            beerAnswer = (((weight/2) / 20)
        }
        else [
            beerAnswer = (((weight) / 20)
        ]
    } 
    // Display the result
    document.getElementById('result').textContent = `It will take atleast ${Math.round(beerAnswer)} beers to get drunk, better get going!`;
}
