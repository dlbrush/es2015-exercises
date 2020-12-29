/*
Quick questions
1. {1, 2, 3, 4}
2. "ref"
3. [ [ [1, 2, 3], true] , [ [1,2,3], false] ]
    Value of first key/value pair doesn't change because the arrays don't share a reference
*/

function hasDuplicate(arr) {
    return arr.length !== new Set(arr).size;
}

function vowelCount(str) {
    const vowels = [...'aeiou'];
    const lowerCased = str.toLowerCase();
    const count = new Map()
    for (let char of lowerCased) {
        if (vowels.includes(char)) {
            if (count.has(char)) {
                count.set(char, count.get(char) + 1);
            } else {
                count.set(char, 1);
            }
        }
    }
    return count;
}