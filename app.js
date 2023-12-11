// [1, 2, 3, 4]

// ref

// [[1,2,3], false]

const hasDuplicate = (arr) => {new Set(arr).size !== arr.length}

function isVowel(char){
    return "aeiou".includes(char);
  }

function vowelCount(str) {
    let newMap = new Map();
    str = str.toLowerCase();
    for (let char of str) {
        if (isVowel(char)) {
            if (newMap.has(char)) {
                newMap.set(char, newMap.get(char) + 1);
            }
            else {
                newMap.set(char, 1);
            }
        }
    }
    return newMap;
}