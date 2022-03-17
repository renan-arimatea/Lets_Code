{
    function escreva() {
        console.log('Olá')
    }

    escreva()
}

{   
    function escreva(texto) {

        console.log(texto)
    }

    escreva("Meu primeiro parâmetro")

    escreva("Meu segundo parâmetro")
}

{   
    const texto = "Olá mundo"

    function escreva() {

        console.log(texto)
    }

    escreva(texto)
}

{
    function somar(a, b) {

        return a + b
    }

    let resultado = somar(1,3)

    console.log(resultado)
}

{
    const somar = function(a, b){return a + b}

    console.log(somar(9,3))
}

{
    const somar = (a,b) => a + b

    console.log(somar(2,5))
}