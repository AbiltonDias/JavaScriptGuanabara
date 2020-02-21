var maior = 0
var menor = 0
var soma = 0
var media = 0
var nums = []
var cont = 0
var res = document.querySelector('.txtA')

function analisadorNumeros(){
    var num = document.getElementById('num').value
    mostrador(num);
}

//TODO: Terminado a implementação de mostrar, proxímo passo não mostrar o mesmo número!
function mostrador(num) {
    var resu = ''
    if(nums.indexOf(num)!= -1){
        alert('Número já adicionado! Por favor,coloque outro número!')
    }else{
        nums.push(num)
    }
    
    for (const key in nums) {
        resu += `Você digitou ${nums[key]} \n`
    }
    console.log(resu)
    return res.innerHTML = resu
    
}

function resultados(nums) {
    console.log("Cheguei aqui")
}

function maiorMenor(nums) {
    
    
}

function mostrarResultados(){
    
    let soma = 0
    var maior = maiorMenor(nums)
    soma = nums.length
    console.log('Você incluiu '+ soma + ' números')
}

function maiorMenor(n){
    var maiorRes = 0
    var menorRes = 9999
    for (const key in n) {
        if (n[key] > maiorRes){
            maiorRes = n[key] 
        }
        if(n[key] < menorRes){
            menorRes = n[key]
        }
        
    }
    console.log('O Maior número é: '+ maiorRes) 
    console.log('O menor número é: '+ menorRes) 
}