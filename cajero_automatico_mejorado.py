def validarNumero(num):
    if(isinstance(num, int) or isinstance(num, float)):
        return True

    print("Dato no numerico")
    return False

def validarExtracto(extracto, saldo):
    if(extracto>saldo):
        print("La operacion no se pudo realizar", saldo)
        print("Su saldo", saldo, "$ es menor que lo que quiso extraer", extracto)
        return False
    
    return True


def ingresar(saldo):
    ingreso=float(input("Escriba la cantidad a ingresar"))
    if validarNumero(ingreso):
        saldo=saldo+ingreso
        print("El saldo actual es", saldo, "$")
        return saldo


def sacar(saldo):
    retirar=float(input("Escriba la cantidad a extraer"))
    if validarNumero(retirar):
        if validarExtracto(retirar, saldo):
            saldo=saldo-retirar
            print("La operacion se realizo correctamente")
            print("Su saldo actual es de", saldo, "$")
            return saldo


def opcionesCajero(opcion,saldo):
    if(opcion==1):
        saldo=ingresar(saldo)
    elif(opcion==2):
        saldo=sacar(saldo)
    else:
        #error
        print("La opcion que ha marcado no existe")


def menu(saldo):
    while(True):
        print("Bienvenido! Que desea hacer?\nPulse 1 para ingresar dinero\nPulse 2 para sacar dinero\nPulse 3 para salir")
        print("Elija la opcion:")
        opcion=int(input())

        if validarNumero(opcion):
            #salimos del servicio
            if(opcion==3):
                print("Gracias por usar nuestro servicio")
                break
            
            opcionesCajero(opcion,saldo)


def cajero(saldo):
    menu(saldo)


saldo = 1000
cajero(saldo)
