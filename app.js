let randomNumber0 = Math.floor(Math.random()*6)+1;
let randomDice0 = `dice${randomNumber0}.png`;
document.querySelectorAll("img")[0].setAttribute("src",`images/${randomDice0}`);

let randomNumber1 = Math.floor(Math.random()*6)+1;
let randomDice1 = `dice${randomNumber1}.png`;
document.querySelectorAll("img")[1].setAttribute("src",`images/${randomDice1}`);

if(randomNumber0>randomNumber1){
    document.querySelector("h1").innerText = 'the player1 wins'
}else if(randomNumber1>randomNumber0){

    document.querySelector("h1").innerText = 'the player2 wins'
}else{

    document.querySelector("h1").innerText = 'lets call it win win'
}