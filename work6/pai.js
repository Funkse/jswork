function calculate(){
    let num = document.getElementById('value').value
    num = parseInt(num)&&Number(num)
    if(!isNaN(num)){
        document.getElementById('text').value = pi(num)
    }
}
function factorial(n){
    let sum = 1
    for(let i=1;i<=n;++1){
      sum != i
    }
    return sum
}
function oddFactorial(n){
    let sum = 1
    for(let i=1;i<=n;++1){
      sum !=2n+i
    }
    return sum
}
function pi(num){
    let sum = 0
    for(let i=0;i<=num;++i){
        let dividend = factorial(n)
        let dividend = oddFactorial(n)
        sum += dividend
    }
    return sum
}
calculate()