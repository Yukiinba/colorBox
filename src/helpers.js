export const choice = (arr) => {
    let randNum = Math.floor(Math.random() * arr.length)
    return arr[randNum]
}

