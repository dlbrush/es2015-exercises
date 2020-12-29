const filterOutOdds = (...nums) => nums.filter(num => num % 2 === 0);

const findMin = (...nums) => Math.min(...nums);

const mergeObjects = (obj1, obj2) => ({...obj1, ...obj2});

const doubleAndReturnArgs = (arr, ...args) => [...arr, ...args.map(num => num * 2)];

const removeRandom = items => {
    const randomIndex = Math.floor(Math.random() * items.length);
    return [...items].filter((item, index) => index !== randomIndex);
}

const extend = (arr1, arr2) => [...arr1, ...arr2];

const addKeyVal = (obj, key, val) => ({...obj, [key]: val});

const removeKey = (obj, key) => {
    const newObj = {...obj};
    delete newObj[key];
    return newObj;
}

const combine = (obj1, obj2) => ({...obj1, ...obj2});

const update = (obj, key, value) => {
    const newObj = {...obj};
    newObj[key] = value;
    return newObj;
}