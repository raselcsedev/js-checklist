
function bestFriend(name){
    let biggestName= '';
    for(let i=0;i<name.length;i++){
        const element = name[i];
        if(element.length>biggestName.length){
            biggestName=element;
        }
    }
    return biggestName;
}

let friends = [ 'Tonu', 'Mehedy', 'Diganta', 'Mim'];
const word = bestFriend(friends);
console.log(word);