function goldbach(odd){
    odd = document.getElementById("odd").value
    odd = parseInt(odd);
    let temp = ''
    for(var x=2;x<odd-2;x++){
        var i = odd-x;
        if(fun(x)&&fun(i)&&x<=i){
            temp += (odd + "可以拆分为两个质数" + x +"与"+ i +"的和"+'<br>');
        }
    }
    document.getElementById("goldbach").innerHTML = temp;
}
function fun(aer){
    var sum = 0;
    for(var y = 1;y<=aer;y++){
        if(aer % y == 0){
            sum++;
        }
    }
    if(sum == 2){
        return true;
    }else{
        return false;
    }
}