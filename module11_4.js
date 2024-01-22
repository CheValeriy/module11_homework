function logNumbers (a, b) {  //задается интервал от a до b...
    let counter = a;
  
    let intervalId = setInterval(function() { 
  
      console.log(counter);
      counter += 1;
      if (counter === b + 1) {
        clearInterval(intervalId);
      }
    }, 1000);
  }
  logNumbers(5, 15); //задаем интервал тут