function numberReconFigurator(input) {
    let nums = [];

    for (const element of input) {
        let num = Number(element);

        if (num < 0) {
            nums.unshift(num)
        } else {
            nums.push(num);
        }

      
    
}
for (const num of nums) {
        
    console.log(num);
}





} numberReconFigurator(['3', '-2', '0', '-1'])