// check given number is prime or not

function checkPrimeNumber(data){


    if(data === 1) return console.log("1 is neither prime or composite number");

    let isPrime = true;

    for(let i = 2; i < data; i++){
        if(data % i === 0) isPrime = false;
    }

    console.log(isPrime ? "It is prime number" : "It is not a prime number");


}

checkPrimeNumber(1);
checkPrimeNumber(2);
checkPrimeNumber(3);
checkPrimeNumber(4);
checkPrimeNumber(5);
checkPrimeNumber(6);
checkPrimeNumber(124);