function sumTwoSmallestNumbers(numbers) {

    let f = Number.MAX_SAFE_INTEGER;
    let s = Number.MAX_SAFE_INTEGER;
    
    numbers.map(elm => {
       if (elm < f) {
         s = f;
         f = elm;
       }
       else if (elm < s) {
         s = elm;
       }
     })
    
    return f + s;
  }