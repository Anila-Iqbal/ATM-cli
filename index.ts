#! /usr/bin/env node

import inquirer from "inquirer";
import chalk from "chalk";

//Pinting a Welcome message
console.log(chalk.magentaBright.bold("\n\t Wellcom to Anila-Iqbal ATM machine"));

let myBalance = 10000;
let myPin = 123;

let pinAns = await inquirer.prompt({
  name: "pin",
  message: chalk.blueBright.bold("Enter your pin"),
  type: "number",
});
//USE [] because multiple item
if (pinAns.pin === myPin) {
  console.log(chalk.green.bold("Your pin is correct\n"));

  let operationAns = await inquirer.prompt([
    {
      name: "operation",
      message: chalk.green.bold("Please select an option"),
      type: "list",
      choices: ["withdraw", "fast cash", "check balance"],
    },
  ]);
  //if user select withdraw or is ky purple{}k ander hi kam ho
  if (operationAns.operation === "withdraw") {
    let amountAns = await inquirer.prompt([
      {
        name: "amount",
        message: chalk.yellowBright.bold("Enter your amount"),
        type: "number",
      },
    ]);
    if (amountAns.amount <= myBalance) {
      console.log(chalk.green.bold(`The remaining balance is ${myBalance - amountAns.amount}`));
    } else {
      console.log(chalk.redBright.bold(`You have Insufficent balance\n`));
    }
    }
    else if(operationAns.operation === "check balance"){
      console.log(chalk.magenta.bold(`Your balance is ${myBalance}`));
      
    }
  // if user select fast cash
  else if (operationAns.operation === "fast cash") {
    let fastcashAns = await inquirer.prompt([
      {
        name: "amount",
        type: "list",
        choices: [1000, 2000, 5000, 10000],
        message: chalk.bgGray.bold("Select one"),
      },
    ]);
    if (fastcashAns.amount <= myBalance) {
      console.log(chalk.magentaBright.bold(`The remaining balance is ${myBalance - fastcashAns.amount}`));
    }
  } else {
    console.log (chalk.redBright.bold(`You have Insufficent amount`));
  }
} 

else {
  console.log(chalk.redBright.bold("Your pin is wrong"));
}
