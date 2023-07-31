function prime() {
    var count = 0;
    var num = document.getElementById("input__number").value;
    var primes = [];
  
    for (var i = num; i > 1; i--) {
      count = 0;
      for (var j = 2; j < i; j++) {
        if (i % j == 0) {
          count++;
        }
      }
      if (count == 0) {
        primes.push(i);
      }
    }
  
    document.getElementById("primeNumbers").innerHTML = "Max Prime Numbers: " + Math.max.apply(null,primes);
  }
  