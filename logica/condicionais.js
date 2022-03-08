{
    let estaSol = true

    if(estaSol) {
        console.log("Hoje tem praia")
    } else {
        console.log("Então, vamos de Netflix")
    }

    estaSol = false

    if(estaSol) {
        console.log("Hoje tem praia")
    } else {
        console.log("Então, vamos de Netflix")
    }
}

{
    let numero = 0

    if(numero = 0) {
        console.log("Numero Positivvo")
    } 

    else if (numero == 0){
        console.log("Numero é zero")
    }
    
    else {
        console.log("Numero Negativo")
    }
}

{
    let numero =  3
    let paridade = numero % 2 == 0 ? 'par' : 'ímpar'

    console.log(paridade)
}

{
    let sinal = "amarelo"

    switch(sinal)  {
        case "verde" :
            console.log("SINAL ABERTO: Pode Passar!")
            break

        case "amarelo" :
            console.log("ATENÇÃO: Prestes a fechar, cuidado...")
            break

        case "vermelho" :
            console.log("PARE: Sinal Fechado")
            break
        default :
            console.log("Sinal Inválido")
    }
}