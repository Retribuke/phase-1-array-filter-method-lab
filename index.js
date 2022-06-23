const findMatching = (array, string) => {
    return array.filter(newDrivers => newDrivers.toLowerCase() === string.toLowerCase())
}

const fuzzyMatch = (array, string) => {
    return array.filter(firstLetter => firstLetter.startsWith(string));
}

const matchName = (array, string) => {
    return array.filter(arrayName => arrayName.name === string);
}