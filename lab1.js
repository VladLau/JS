let num = prompt("Введите 1 число: ");
num = parseInt(num);
let exp = prompt("ВВведите второе число: ");
num = parseInt(exp);
let result = 1;
let cnt = 1;
while ( cnt <= exp ){
    result *= num; 
    cnt++;
}
alert(result);
