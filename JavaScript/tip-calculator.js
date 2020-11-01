// Write your function here:
const tipCalculator = (quality, total) => {

    switch (quality) {
      case 'bad':
      total = total * 0.05;
      return total;
  
       case 'ok':
           total = total * 0.15;
      return total;
  
   case 'good':
       total = total * 0.2;
      return total;
  
    case 'excellent':
        total = total * 0.3;
      return total;
  
     default:
         total = total * 0.18;
      return total; 
    }
  }
  
  
  
  
  
  // Uncomment the line below when you're ready to try out your function
  console.log(tipCalculator('good', 100)) //should return 20
  
  // We encourage you to add more function calls of your own to test your code!
  