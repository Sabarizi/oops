#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
import cfonts from "cfonts";
cfonts.say("CLI Chat", {
    font: "pallet",
    align: "left",
    colors: ["yellowBright", "green"],
    background: "transparent",
    letterSpacing: 1,
    lineHeight: 1,
    space: true,
    maxLength: "0",
    gradient: false,
    independentGradient: false,
    transitionGradient: false,
    env: "node", // define the environment cfonts is being executed in
});
class Student {
    name;
    constructor(n) {
        this.name = n;
    }
}
class Person {
    students = [];
    addStudent(obj) {
        this.students.push(obj);
    }
}
const persons = new Person();
const programStart = async (persons) => {
    do {
        const ans = await inquirer.prompt({
            name: "select",
            type: "list",
            message: chalk.blueBright("who would you like to talk with ?"),
            choices: ["Yourself", "Student", "Exit"],
        });
        if (ans.select == "Exit") {
            console.log(chalk.redBright(" Exiting"));
            process.exit();
        }
        if (ans.select == "Yourself") {
            console.log(chalk.greenBright(" Hello, You're talking to Yourself!\n ❤️  If you have ability to LOVE , Love yourself First❤️"));
            console.log(chalk.italic.yellowBright("❤️   Self-love is the key to a joyful life. ❤️"));
        }
        if (ans.select == "Student") {
            const ans = await inquirer.prompt({
                name: "student",
                type: "input",
                message: chalk.bgGreenBright("Which student do you want to talk to?"),
            });
            const student = persons.students.find((val) => val.name == ans.student);
            if (!student) {
                const name = new Student(ans.student);
                persons.addStudent(name);
                console.log(chalk.greenBright(`\n Hello i am ${name.name}, Your new Class fellow how are you friends?\n it's Nice to talk to you!\n`));
                // console.log(persons.students);
            }
            if (student) {
                console.log(chalk.greenBright(`\n Hi i am ${student.name}, I Am good what about you ?\n`));
                // console.log(persons.students);
            }
        }
    } while (true);
};
programStart(persons);
