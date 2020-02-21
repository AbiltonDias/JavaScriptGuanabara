// let nums = []
// let num = 50
// let index = 0


//     nums[index] = num   
//     index++
//     nums[index] = num + 5
    
//     console.log(nums.length)

// for (const key in nums) {
//     var i = `Você digitou ${nums[key]}`
// }

var n = [1,10,100,900]
maiorMenor(n)
function maiorMenor(n){
    var maiorRes = 0
    var menorRes = 9999
    for (const key in n) {
        if (n[key] > maiorRes) {
            maiorRes = n[key] 
            
        }
        if(n[key] < menorRes){
            menorRes = n[key]
            
        }
        
    }
    console.log('O Maior número é: '+ maiorRes) 
        console.log('O menor número é: '+ menorRes) 
}
