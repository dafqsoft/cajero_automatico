//Require prompt for using on node js in vscode/vscodium
const prompt=require('prompt-sync')();

//Cashier algorithm
let cash= 1000;
let using = true;
var option ;

while (using){
    console.log("What do you wanna do?");
    console.log("Choose 0 to check your money")
    console.log("Choose 1 for Deposit");
    console.log("Choose 2 to Withdraw"); 
    console.log("Choose 3 to end using the AT&T");

    option= parseInt(prompt("Whose would be the desired option? "));
    console.log();

    switch(option){
        case 0:
            console.log("Thank you for your request, at the time of today you have", cash, "$ on your account.");
            console.log("Hope that have helped you!\n");
            break;
        case 1:
            // console.log("At the time of today you have", cash, "$ on your account.");
            let deposit =1;
            deposit= parseInt(prompt("Whose amount you want to Deposit: "));
            cash+=deposit;
            console.log("Thank you for your usage!\nAfter the deposit you have", cash, "$.\n");
            break;
        case 2:
            let withdraw = 1;
            withdraw=parseInt(prompt("Choose the amount you want to withdraw: "));
            if (withdraw > cash){
                console.log("Your cash amount is", cash, "$ and you intended to withdraw", withdraw, "$.");
                console.log("Cannot perform that operation.\n");
            }else{
                cash -= withdraw;
                console.log("After the withdraw of" , withdraw, "$ you have", cash, "$ left on your account.\n");
            }
            break;
        case 3:
            console.log("Thank you for using our services!");
            console.log("Hope to see you soon!");
            using=false;
            break;
        default:
            console.log("Invalid option, please choose one of the former exposed options.\n");
            break;
    }
}