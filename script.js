var maior = 0
var menor = 0
var soma = 0
var media = 0
var nums = []
var cont = 0
var res = document.querySelector('.txtA')

function analisadorNumeros(){
    var num = document.getElementById('num').value
    nums = num
    mostrador(num);
    
    
    
    //console.log(`O numero digitado é: ${num} `) 
}

//TODO: Começar a implementação da Lógica que não consegui ainda
function mostrador(n) {

    for (let index = 0; index < n.length; index++) {
        res.innerText = ` Você digitou ${n}`    
    }
}

function resultados(nums) {
    console.log("Cheguei aqui")
}

function maior(nums) {
    
    
}