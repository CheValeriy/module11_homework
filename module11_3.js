function getfirstFunc(a) {
    
    return function secondFunc(b) {
      return a + b;
    }
 
 };
 
 
 let resultFirstFunc = getfirstFunc(2);
 
 
 let resultFunc = resultFirstFunc(4); 
 
 console.log(resultFunc);