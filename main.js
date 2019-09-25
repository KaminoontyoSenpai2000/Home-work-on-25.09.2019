/*function isLucky(n) {
    var s = n.toString(); 
    var sum1 = 0;
    var sum2 = 0;
    for(var i = 0; i < s.length/2; i++){
        sum1 += parseInt(s[i]); 
        sum2 += parseInt(s[s.length-i-1]);        
    }    
    return sum1 == sum2;}*/


function checkNumber() {
  var number = document.getElementById('number').value;

    if (number === '' || number.length != 6 || isNaN(number)) document.getElementById('result').innerHTML='Неверное значение!';
      
    else {
      one = parseInt(number.substr(0, 1), 10) + parseInt(number.substr(1, 1), 10) + parseInt(number.substr(2, 1), 10);
            
      two = parseInt(number.substr(3, 1), 10) + parseInt(number.substr(4, 1), 10) + parseInt(number.substr(5, 1), 10);

      if(one == two) document.getElementById('result').innerHTML='Поздравляем! У вас счастливый билетик!';

      else document.getElementById('result').innerHTML='К сожалению, ваш билетик несчастливый...';
    }
}  