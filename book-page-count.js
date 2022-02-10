function paperRequirements(book1, book2, book3){
    let totalPaper = 100*book1 + 200*book2 + 300*book3;
    return totalPaper;
}
const result = paperRequirements(1, 3, 2);
console.log(result);