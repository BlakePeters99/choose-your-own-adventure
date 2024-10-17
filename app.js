const prompt = require('prompt-sync')();

if (game()) {
    console.log("You survived!")
}
else {
    console.log("You died.")
}

function game() {
    let decision, weapon = false;
    const username = prompt('What is your name? ');
    console.log(`Hello ${username}`);
    let playerRole = prompt('Pick a class, knight or mage: ');

    while (playerRole !== "knight" && playerRole !== "mage") {
        console.log("That is not a role.")
        playerRole = prompt('Pick a class, knight or mage: ');
    }

    if (playerRole === "knight") {
        console.log(`As a knight, ${username}  can tank numerous hits... just at the expense of your attack`);
    }
    else {
        console.log(`As a mage, ${username} is powerful and can annihilate almost anyone who comes your way... just at the expense of your health`);
    }

    console.log(`\n\nAs a ${playerRole} ${username} wanders into an open green field and find a angelic statue holding a sword. What do you do?`);
    console.log("1: Grab the sword.");
    console.log("2: Keep on walking.");
    console.log("3: Pray to the statue for a blessed.");

    decision = chooseFunc();

    if (decision === "1") {
        if (playerRole === "knight") {
            console.log(`As a knight ${username} takes this new shiny object and can fight the final boss!`);
            weapon = true;
        }
        else {
            console.log(`${username} is too weak to pick up this sword. Maybe workout bro and be a knight instead.`);
        }
    }
    else if (decision === "2") {
        console.log(`${username} keeps on walking.`)
    }
    else {
        if (playerRole === "mage") {
            console.log(`${username} receives the holy blessing necessary to beat the final boss!`);
            weapon = true;
        }
        else {
            console.log(`${username} pray to the gods for anything that they can spare. So the statue wakes up and spares a sword down ${username}'s throat.`);
            return false;
        }
    }

    console.log(`\n\nSuddenly ${username} hears a thunderous SLAM into the ground, gusts of wind knocking them down."`);
    console.log(`As ${username} rubs their eyes, ${username} clearly see the massive dragon in front of them. What do you do?`);
    console.log("1: Let's FIGHT.");
    console.log("2: Keep on walking.");
    console.log("3: Run for your life!");

    decision = chooseFunc();

    if (decision === "1") {
        if (weapon === true) {
            console.log(`${username} slays the final boss and declares that ${username} is the SUPREME HERO!!!`);
            return true;
        }
        else {
            console.log(`The dragon stares at ${username}... "Bruh where's your weapon?" And squishes ${username} like a bug.`);
            return false;
        }
    }
    else if (decision === "2") {
        console.log(`${username} keeps on walking...`);
        console.log(`The dragon stares at ${username}... "Eh they had a long day" And takes a nap.`);
        return true;
    }
    else {
        console.log(`The dragon watches ${username} run away and blasts fire breath that instantly cooks them. "Eh, I wanted medium rare." And then proceeds to take a nap.`);
        return false;
    }
}


function chooseFunc() {
    let choice = prompt('Make your choice. 1,2, or 3: ');

    while (choice !== "1" && choice !== "2" && choice !== "3") {
        console.log("That is not an option.");
        choice = prompt('Make your choice. 1,2, or 3: ');

    }
    return choice;
}