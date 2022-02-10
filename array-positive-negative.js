function arrayNumbers(number){
    let positive = [];
    for(let i = 0; i<number.length; i++){
        let numbers=number[i];
        if(numbers>=0){
            positive.push(numbers[i]);
        }
    }
}