function replaceRepeatingChart(input){

    let result = input[0];

    for (let index = 1; index < input.length; index++) {
       const current = input[index];
       const prev = input[index - 1]
       
       if(current!== prev){
            result += input[index]

        }
    
    }

console.log(result);













} replaceRepeatingChart('aaaaabbbbbcdddeeeedssaa');