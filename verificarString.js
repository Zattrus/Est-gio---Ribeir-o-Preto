const verificarString = (string) => {
    let quantidade = 0;
    for (let i = 0; i < string.length; i++) {
        if (string[i] === 'a' || string[i] === 'A') {
            quantidade++;
        }
    }
    console.log(`A letra 'a' aparece ${quantidade} vezes na string.`);
}

verificarString('Agora é a hora de testar a string.');
verificarString('A arara amarela atravessou a ampla avenida com graça e agilidade.');