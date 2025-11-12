let numbers=[11,41,52,62,78,112,65,98]

let even_numbers=[]
for(let num of numbers){
    if(num%2 ===0){
        even_numbers.push(num)
    }
}
console.log(numbers)
console.log(even_numbers)