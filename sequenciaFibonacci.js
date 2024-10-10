console.log('Sequência de Fibonacci');
const sequenciaFibonacci = (numero) => {
    let a = 0;
    let b = 1;
    let c = 0;

    while (c < numero) {
        c = a + b;
        a = b;
        b = c;
    }

    if (c === numero) {
        console.log(`O número ${numero} pertence a sequência de Fibonacci.`);
    } else {
        console.log(`O número ${numero} não pertence a sequência de Fibonacci.`);
    }
}

sequenciaFibonacci(21);
sequenciaFibonacci(233); 
sequenciaFibonacci(1024);
sequenciaFibonacci(10); 