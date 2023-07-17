//Require prompt for using on node js in vscode/vscodium
const prompt=require('prompt-sync')();

//Cashier algorithm
let cash= 1000;

while ( true ){

    console.log("What do you wanna do?");
    console.log("Type 0 to check your money\nType 1 for Deposit\nType 2 to Withdraw\nType 3 to end using the AT&T");

    option= parseInt(prompt("Whose would you choose? "));
    console.log();

    if ( option === 3 ) {

        console.log("Thank you for using our services!");
        console.log("Hope to see you soon!");
        break;
    }

    // if other option selected

    if ( option === 0 ) {

        console.log("Thank you for your request, at the time of today you have", cash, "$ on your account.");
        console.log("Hope that have helped you!\n");

    } else if ( option === 1 ) {

        let deposit =1;
        deposit= parseInt(prompt("Whose amount you want to Deposit: "));
        cash+=deposit;
        console.log("Thank you for your usage!\nAfter the deposit you have", cash, "$.\n");

    } else if ( option === 2 ) {

        let withdraw = 1;

        withdraw=parseInt(prompt("Choose the amount you want to withdraw: "));
        
        if ( withdraw > cash ){
        
            console.log("Your cash amount is", cash, "$ and you intended to withdraw", withdraw, "$.");
            console.log("Cannot perform that operation.\n");
        
        } else {
        
            cash -= withdraw;
            console.log("After the withdraw of" , withdraw, "$ you have", cash, "$ left on your account.\n");
        }

    } else {

        console.log("Invalid option, please choose one of the former exposed options.\n");
    }

}