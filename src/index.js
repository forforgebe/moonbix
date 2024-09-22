import inquirer from "inquirer";
import game from "./controllers/game.js";

async function mainMenu() {
    console.clear();

    const choices = [
        "Manual",
        "Auto",
        new inquirer.Separator(),
        "Exit",
        new inquirer.Separator(),
    ];

    const answer = await inquirer.prompt([
        {
            type: "list",
            name: "menuOption",
            message: "Pilihan:",
            choices,
        },
    ]);

    switch (answer.menuOption) {
        case "Manual":
            await game.play();
            break;
        case "Auto":
            await game.schedule();
            break;
        case "Exit":
            process.exit(1);
    }

    await new Promise((resolve) => setTimeout(resolve, 100));
    await mainMenu();
}

mainMenu();
