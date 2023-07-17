const prompt = require('prompt-sync')();
let saldo=1000

function consignar(ingreso){
    if (ingreso < 10){
        return false
    }

    saldo += ingreso;
    return true;
}

function retirar(valor){
    if(valor>saldo){
        return false;
    }

    saldo-=valor;
    return true;
}

function realizarAccion(accion){
    if (accion == 1){
        let saldo= parseInt(prompt("Digite el valor a consignar"));
        return consignar(saldo);
    }

    if (accion == 2){
        let saldo = parseInt(prompt("Digite el valor a retirar"));
        return retirar(saldo);
    }

    return false;
}

function main(){
    while(true){
        let accion=prompt( "Bienvenido!\nPulse 1 para consignar\nPulse 2 para retirar\nPulse 3 para salir" );

        if(accion==3){
            console.log("Hasta pronto!");
            break;
        }

        resultado=realizarAccion(accion);

        if(resultado){
            console.log("El saldo actual es", saldo, "$");
        }else{
            console.log("La opcion no se pudo realizar");
        }
    }
}

main();