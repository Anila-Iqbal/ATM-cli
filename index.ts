import inquirer from "inquirer";
let myBalance = 10000;
let myPin = 123;

let pinAns = await inquirer.prompt({
  name: "pin",
  message: "Enter your pin",
  type: "number",
});
//USE [] because multiple item
if (pinAns.pin === myPin) {
  console.log("Your pin is correct");

  let operationAns = await inquirer.prompt([
    {
      name: "operation",
      message: "Please select an option",
      type: "list",
      choices: ["withdraw", "fast cash", "check balance"],
    },
  ]);
  //if user select withdraw or is ky purple{}k ander hi kam ho
  if (operationAns.operation === "withdraw") {
    let amountAns = await inquirer.prompt([
      {
        name: "amount",
        message: " Enter your amount",
        type: "number",
      },
    ])
    if (amountAns.amount <= myBalance) {

      console.log(`The remaining balance is ${myBalance -amountAns.amount}`);
    } else {
      console.log(`You have Insufficent balance`);
    }
  }
} else {
  console.log("Your pin is wrong");
}
