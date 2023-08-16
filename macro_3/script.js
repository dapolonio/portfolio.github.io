
// set up DOM queries for all the things we plan on using
const grass1 = document.getElementById('grass1');
const grass2 = document.getElementById('grass2');
const grass3 = document.getElementById('grass3');
const pokemon_caught_div = document.getElementById('pokemon_caught_div');
const pokeballs_left_div = document.getElementById('pokeballs_left_div');
const play_again_button = document.getElementById('play_again_button');
const start_over_button = document.getElementById('start_over_button');
const stats_button = document.getElementById('stats_button');
const status = document.getElementById('status');
const in_super_mode = document.getElementById('supermode');

// possible pokemon imgs
const pokemon_img = [
    'images/pikachu.png',
    'images/bulbasaur.png',
    'images/charmander.png',
    'images/eevee.png',
    'images/squirtle.png'
]
const pokemon_name = [
    'Pikachu',
    'Bulbasaur',
    'Charmander',
    'Eevee',
    'Squirtle'
]
const super_pokemon_img = [
    'images/lugia.png',
    'images/ho-oh.png',
    'images/charizard.png',
    'images/blastoise.png',
    'images/venasaur.png',
]
const super_pokemon_name = [
    'Lugia',
    'Ho-oh',
    'Charizard',
    'Blastoise',
    'Venasaur'

]
const grass = [
    'pokemon',
    'pokeball',
    'nothing'
]

// create some variables to keep track of our game state logic
let pokeballsRemaining = 5;
let pokemonCaught = 0;
let chance;
let collectedItems = [
]
let superMode;
let randNum = parseInt( Math.random() * 5 );
if (randNum == 2) {
    superMode = true;
} else {
    superMode = false;
}

let gameState = 0;

grass1.onclick = function() {
    if (gameState == 0) { 
        if (superMode == true) {
            in_super_mode.innerHTML = "You're in Super Mode!";
            let chance2 = parseInt( Math.random() * 5 ); // 0, 1, 2, 3, 4, or 5
            //super pokemon img will be in separate array as other img
            let chosen = super_pokemon_img[chance2];
            //names will also be in separate array
            let name = super_pokemon_name[chance2]
            console.log(name);
            console.log(chosen);
            grass1.src = chosen;
            numPokemon = pokemonCaught += 1;
            pokemon_caught_div.innerHTML = "Pokemon: " + numPokemon;
            status.innerHTML = "You got a " + name + "!";
            //add whatever selected pokemon is to the array, for Feature #1
            collectedItems.push(' ' + name + " found");
            superMode = false;
            gameState = 1;
        } else if (superMode == false){
                        // reduce the # of pokeballs
            pokeballsRemaining -= 1;
            
            // generate a chance variable
            let chance = parseInt( Math.random() * 3 ); // 0, 1 or 2
           
            // more pokeballs
            if (chance == 0) {
                grass1.src = 'images/pokeballs.png';
                pokeballsRemaining += 2;
                status.innerHTML = "You got 2 pokeballs!"
                //add to the number of collected pokeballs for Feature #1
                collectedItems.push(" Pokeballs found");
                
            
                console.log(gameState)
                gameState = 1;
              
            } else if (chance == 1) {
                grass1.src = '';
                status.innerHTML = "Nothing here!"
                collectedItems.push(" Nothing found");
                
                
                console.log(gameState)
                gameState = 1;
                
            } else {
                let chance1 = parseInt( Math.random() * 5 ); // 0, 1, 2, 3, 4, or 5
                let chosen =  pokemon_img[chance1];
                let name = pokemon_name[chance1]
                grass1.src = chosen;
                numPokemon = pokemonCaught += 1;
                pokemon_caught_div.innerHTML = "Pokemon: " + numPokemon;
                status.innerHTML = "You got a " + name + "!";
                //add whatever selected pokemon is to the array, for Feature #1
                collectedItems.push(' ' + name + " found");
                
              
                console.log(gameState)
                gameState = 1;
                
            }
        }  
        // round is over, update the pokeballs left indicator
        pokeballs_left_div.innerHTML = 'Pokeballs: ' + pokeballsRemaining;

        // make the play agian button visible
        play_again_button.style.display = 'block';
        start_over_button.style.display = 'block';
        stats_button.style.display = 'block';
        console.log(gameState)
        if (pokeballsRemaining < 1){
            status.innerHTML = "Game Over!";
            gameStatus = "stop";

            console.log('gameover')

            // make all the grass transition back to their original graphic
            grass1.src = 'images/grass.png';
            grass2.src = 'images/grass.png';
            grass3.src = 'images/grass.png';
            // hide the play agian button
            play_again_button.style.display = 'none';

            pokeballsRemaining = 5;
            pokeballs_left_div.innerHTML = "Pokeballs: 5"
            pokemonCaught = 0;
            pokemon_caught_div.innerHTML = "Pokemon: 0"
            gate = 0;
            collectedItems = []           
        }     
    }
}


grass2.onclick = function() {
    if (gameState == 0) {
        if (superMode == true) {
            in_super_mode.innerHTML = "You're in Super Mode!";
            let chance2 = parseInt( Math.random() * 5 ); // 0, 1, 2, 3, 4, or 5
            //super pokemon img will be in separate array as other img
            let chosen = super_pokemon_img[chance2];
            //names will also be in separate array
            let name = super_pokemon_name[chance2]
            console.log(name);
            console.log(chosen);
            grass2.src = chosen;
            numPokemon = pokemonCaught += 1;
            pokemon_caught_div.innerHTML = "Pokemon: " + numPokemon;
            status.innerHTML = "You got a " + name + "!";
            //add whatever selected pokemon is to the array, for Feature #1
            collectedItems.push(' ' + name + " found");
            superMode = false;
            gameState = 1;
    } else if (superMode == false) { 
            // reduce the # of pokeballs
            pokeballsRemaining -= 1;

            // generate a chance variable
            let chance = parseInt( Math.random() * 3 ); // 0, 1 or 2

            // more pokeballs
            if (chance == 0) {
                grass2.src = 'images/pokeballs.png';
                pokeballsRemaining += 2;
                status.innerHTML = "You got 2 pokeballs!"
                //add to the number of collected pokeballs for Feature #1
                collectedItems.push(" Nothing found");
                gameState = 1;
            }
            // nothing happens
            else if (chance == 1) {
                grass2.src = '';
                status.innerHTML = "Nothing here!"
         
                collectedItems.push(" Nothing found");
                gameState = 1;
            }
            // it's a pokemon
            else {
                let chance1 = parseInt( Math.random() * 5 ); // 0, 1, 2, 3, 4, or 5
                let chosen =  pokemon_img[chance1];
                let name = pokemon_name[chance1]
                grass2.src = chosen;
                numPokemon = pokemonCaught += 1;
                pokemon_caught_div.innerHTML = "Pokemon: " + numPokemon;
                status.innerHTML = "You got a " + name + "!";
                //add whatever selected pokemon is to the array, for Feature #1
                collectedItems.push(' ' + name + " found");
                gameState = 1;
            }
        }
        // round is over, update the pokeballs left indicator
        pokeballs_left_div.innerHTML = 'Pokeballs: ' + pokeballsRemaining;

        // make the play agian button visible
        play_again_button.style.display = 'block';
        // make the start over button visible
        start_over_button.style.display = 'block';
        stats_button.style.display = 'block';
        if (pokeballsRemaining < 1){
            status.innerHTML = "Game Over!";
            gameStatus = "stop";
            let pokeballsRemaining = 5;
            let pokemonCaught = 0;
            console.log('gameover')
            // make all the grass transition back to their original graphic
            grass1.src = 'images/grass.png';
            grass2.src = 'images/grass.png';
            grass3.src = 'images/grass.png';
            // hide the play agian button
            play_again_button.style.display = 'none';

            pokeballsRemaining = 5;
            pokeballs_left_div.innerHTML = "Pokeballs: 5"
            pokemonCaught = 0;
            pokemon_caught_div.innerHTML = "Pokemon: 0"
            gate = 0;
            collectedItems = []
            gameState = 1;
        }      
    }
}

grass3.onclick = function() {
    if (gameState == 0) {
        if (superMode == true) {
            in_super_mode.innerHTML = "You're in Super Mode!";
            let chance2 = parseInt( Math.random() * 5 ); // 0, 1, 2, 3, 4, or 5
            //super pokemon img will be in separate array as other img
            let chosen = super_pokemon_img[chance2];
            //names will also be in separate array
            let name = super_pokemon_name[chance2]
            console.log(name);
            console.log(chosen);
            grass3.src = chosen;
            numPokemon = pokemonCaught += 1;
            pokemon_caught_div.innerHTML = "Pokemon: " + numPokemon;
            status.innerHTML = "You got a " + name + "!";
            //add whatever selected pokemon is to the array, for Feature #1
            collectedItems.push(' ' + name + " found");
            superMode = false;
            gameState = 1;
    } else if (superMode == false) { 
            // reduce the # of pokeballs
            pokeballsRemaining -= 1;

            // generate a chance variable
            let chance = parseInt( Math.random() * 3 ); // 0, 1 or 2

            // more pokeballs
            if (chance == 0) {
                grass3.src = 'images/pokeballs.png';
                pokeballsRemaining += 2;
                status.innerHTML = "You got 2 pokeballs!"
                //add to the number of collected pokeballs for Feature #1
                collectedItems.push(" Nothing found");
                gameState = 1;
            }
            // nothing happens
            else if (chance == 1) {
                grass3.src = '';
                status.innerHTML = "Nothing here!"
         
                collectedItems.push(" Nothing found");
                gameState = 1;
            }
            // it's a pokemon
            else {
                let chance1 = parseInt( Math.random() * 5 ); // 0, 1, 2, 3, 4, or 5
                let chosen =  pokemon_img[chance1];
                let name = pokemon_name[chance1]
                grass3.src = chosen;
                numPokemon = pokemonCaught += 1;
                pokemon_caught_div.innerHTML = "Pokemon: " + numPokemon;
                status.innerHTML = "You got a " + name + "!";
                //add whatever selected pokemon is to the array, for Feature #1
                collectedItems.push(' ' + name + " found");
                gameState = 1;
            }
        }
        // round is over, update the pokeballs left indicator
        pokeballs_left_div.innerHTML = 'Pokeballs: ' + pokeballsRemaining;

        // make the play agian button visible
        play_again_button.style.display = 'block';
        // make the start over button visible
        start_over_button.style.display = 'block';
        stats_button.style.display = 'block';
        if (pokeballsRemaining < 1){
            status.innerHTML = "Game Over!";
            gameStatus = "stop";
            let pokeballsRemaining = 5;
            let pokemonCaught = 0;
            console.log('gameover')
            // make all the grass transition back to their original graphic
            grass1.src = 'images/grass.png';
            grass2.src = 'images/grass.png';
            grass3.src = 'images/grass.png';
            // hide the play agian button
            play_again_button.style.display = 'none';

            pokeballsRemaining = 5;
            pokeballs_left_div.innerHTML = "Pokeballs: 5"
            pokemonCaught = 0;
            pokemon_caught_div.innerHTML = "Pokemon: 0"
            gate = 0;
            collectedItems = []
            gameState = 1;
        }      
    }
}



// when the user clicks on the play again button
play_again_button.onclick = function() {
    // make all the grass transition back to their original graphic
    grass1.src = 'images/grass.png';
    grass2.src = 'images/grass.png';
    grass3.src = 'images/grass.png';
    // hide the play again button
    play_again_button.style.display = 'none';
    stats_button.style.display = 'none';
    amtPokemon.innerHTML = " ";
    in_super_mode.innerHTML = " ";
    // let randNum = parseInt( Math.random() * 5 );
    // if (randNum == 2) {
    //     superMode = true;

    // } else {
    //     superMode = false;
    // }
    gameState = 0;
    let randNum = parseInt( Math.random() * 5 );
    if (randNum == 2) {
        superMode = true;
    } else {
        superMode = false;
    }
    
}
start_over_button.onclick = function() {
    // make all the grass transition back to their original graphic
    grass1.src = 'images/grass.png';
    grass2.src = 'images/grass.png';
    grass3.src = 'images/grass.png';
    // hide the play again button
    start_over_button.style.display = 'none';
    stats_button.style.display = 'none';
    //reset game stats
    pokeballsRemaining = 5;
    pokeballs_left_div.innerHTML = "Pokeballs: 5"
    pokemonCaught = 0;
    pokemon_caught_div.innerHTML = "Pokemon: 0"
    
    collectedItems = []
    amtPokemon.innerHTML = " ";
    superMode = false;
    in_super_mode.innerHTML = " ";
    gameState = 0;
    let randNum = parseInt( Math.random() * 5 );
    if (randNum == 2) {
        superMode = true;
    } else {
        superMode = false;
    }
}

stats_button.onclick = function() {
    amtPokemon.innerHTML = "Results of the game: " + collectedItems.reverse();
}