function scramble(str1, str2){
    let arrOfLetters = Array.from(str1).reduce((acc, el) => {
        acc[el] = (acc[el] ?? 0) + 1;
        return acc;
    }, {});
    let numOfLetters = Array.from(str2).reduce((acc, el) => {
        acc[el] = (acc[el] ?? 0) + 1;
        return acc;
    }, {});
    let setOfStr2 = new Set(Object.keys(numOfLetters));
    for (let key of setOfStr2){
        if (arrOfLetters[key] >= numOfLetters[key]){
        }
        else {
            return false;
        }
    }
    return true;
}