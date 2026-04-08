function megaSena(numeros) {
    if (numeros < 6 || numeros > 9) {
        console.log("Não é possivel usar esse número");
        return [];
    }
    let arrayNum = [];

    while (arrayNum.length < numeros) {
        let numerosGerados = Math.floor(Math.random() * 60) +1;
        if (!arrayNum.includes(numerosGerados)) {
            arrayNum.push(numerosGerados);
        }
    }
    console.log(arrayNum);
    return arrayNum;
}
megaSena(6);