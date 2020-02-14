let nums = []
let num = 50
let index = 0


    nums[index] = num   
    index++
    nums[index] = num + 5
    
    console.log(nums.length)

for (const key in nums) {
    var i = `Você digitou ${nums[key]}`
}
