// Using node module "prompt"
const prompt = require('prompt-sync')();

// Main call of function to return if player lives or dies
if (game()) {
    console.log("You survived!")
}
else {
    console.log("You died.")
}

// Main function to allow the game to end using return with boolean life status
function game() {
    //Initialize Decision & weapon (required for beating final boss)
    let decision, weapon = false;

    // Prompts user for username that will be used in future  
    const username = prompt('What is your name? ');
    console.log(`Hello ${username}`);
    // Prompts user for class choice that will also be used in future  
    let playerRole = prompt('Pick a class, knight or mage: ');

    // Makes user type knight or mage and will repeated prompt until they do so
    while (playerRole !== "knight" && playerRole !== "mage") {
        console.log("That is not a role.")
        playerRole = prompt('Pick a class, knight or mage: ');
    }

    // Once class is selected, unique console starter dialog
    if (playerRole === "knight") {
        console.log(`As a knight, ${username}  can tank numerous hits... just at the expense of your attack`);
    }
    else {
        console.log(`As a mage, ${username} is powerful and can annihilate almost anyone who comes your way... just at the expense of your health`);
    }

    // First encounter and choices
    console.log(`\n\nAs a ${playerRole} ${username} wanders into an open green field and find a angelic statue holding a sword. What do you do?`);
    console.log("1: Grab the sword.");
    console.log("2: Keep on walking.");
    console.log("3: Pray to the statue for a blessed.");

    // Calling while loop for correct response
    decision = chooseFunc();

    // Make's correct reaction for their decision
    if (decision === "1") {
        // Can pick up weapon if their class is a knight
        if (playerRole === "knight") {
            console.log(`As a knight ${username} takes this new shiny object and can fight the final boss!`);
            weapon = true;
        }
        // Cannot pick up weapon if their class is a mage
        else {
            console.log(`${username} is too weak to pick up this sword. Maybe workout bro and be a knight instead.`);
        }
    }
    // Character is chilling and proceeds to next encounter
    else if (decision === "2") {
        console.log(`${username} keeps on walking.`)
    }
    else {
        // Can pick up weapon if their class is a mage
        if (playerRole === "mage") {
            console.log(`${username} receives the holy blessing necessary to beat the final boss!`);
            weapon = true;
        }
        else {
            // Cannot pick up weapon if their class is a knight
            console.log(`${username} pray to the gods for anything that they can spare. So the statue wakes up and spares a sword down ${username}'s throat.`);
            // Character dies
            return false;
        }
    }
    // Second encounter and choices
    console.log(`\n\nSuddenly ${username} hears a thunderous SLAM into the ground, gusts of wind knocking them down."`);
    console.log(`As ${username} rubs their eyes, ${username} clearly see the massive dragon in front of them. What do you do?`);
    console.log("1: Let's FIGHT.");
    console.log("2: Keep on walking.");
    console.log("3: Run for your life!");

    // Calling while loop for correct response
    decision = chooseFunc();

    // Make's correct reaction for their decision
    if (decision === "1") {
        // With the weapon, user is able to kill final boss and live
        if (weapon === true) {
            console.log(`${username} slays the final boss and declares that ${username} is the SUPREME HERO!!!`);
            return true;
        }
        // Without the weapon, user is unable to kill final boss and dies
        else {
            console.log(`The dragon stares at ${username}... "Bruh where's your weapon?" And squishes ${username} like a bug.`);
            return false;
        }
    }
    // User is still chilling and the final boss respects it and lets you live.
    else if (decision === "2") {
        console.log(`${username} keeps on walking...`);
        console.log(`The dragon stares at ${username}... "Eh they had a long day" And takes a nap.`);
        return true;
    }
    // User dies when running away
    else {
        console.log(`The dragon watches ${username} run away and blasts fire breath that instantly cooks them. "Eh, I wanted medium rare." And then proceeds to take a nap.`);
        return false;
    }
}

// function to handle repeated code of choosing options 1-3 and repeating instruction if user types something else
function chooseFunc() {
    let choice = prompt('Make your choice. 1,2, or 3: ');

    while (choice !== "1" && choice !== "2" && choice !== "3") {
        console.log("That is not an option.");
        choice = prompt('Make your choice. 1,2, or 3: ');

    }
    return choice;
}