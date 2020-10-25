// Write your function here:
function lifePhase (age) {
    if (age >= 0 & age <= 3) {
      return 'baby';
    } else if (age >= 4 & age <= 12) {
      return 'child';
    } else if (age >= 13 & age <= 19) {
      return 'teen';
    } else if (age >= 20 & age <= 64) {
      return 'adult';
    } else if (age >= 65 & age <= 140) {
      return 'senior citizen';
  } else {
    return 'This is not a valid age';
  }
  }
  // // Arrow functions with a single argument 
  // const checkWeight = weight => { 
  //   console.log(`Baggage weight : ${weight} kilograms.`); 
  // }; 
  // checkWeight(25); // Prints: Baggage weight : 25 kilograms.
  
  
  
  
  
  // Uncomment the line below when you're ready to try out your function
  console.log(lifePhase(20)) //should print 'child'
  
  // We encourage you to add more function calls of your own to test your code!
  // ---------------------------------------------------------------------------------------

// Write your function here:
function finalGrade (a,b,c) {
    let testResults = (a + b + c) / 3
  console.log(testResults)
  
  if ((a < 0 || a > 100) || (b < 0 || b > 100) || (c < 0 || c  > 100)) {
        return 'You have entered an invalid grade.';
  }
  
  
    if (testResults >= 0 & testResults <= 59) {
        return 'F';
      } else if (testResults >= 60 & testResults <= 69) {
        return 'D';
      } else if (testResults >= 70 & testResults <= 79) {
        return 'C';
      } else if (testResults >= 80 & testResults <= 89) {
        return 'B';
      } else if (testResults >= 90 & testResults <= 100) {
        return 'A';
    } 
    }
  
  
  
  
  
  
  // Uncomment the line below when you're ready to try out your function
  console.log(finalGrade(99, 92, 95)) // Should print 'A'
  
  // We encourage you to add more function calls of your own to test your code!
  // ---------------------------------------------------------------------------------------


  // Write your function here:
function reportingForDuty(a, b) {
    return `${a} ${b} reporting for duty!`
  }
  
  
  
  // Uncomment the line below when you're ready to try out your function
  // console.log(reportingForDuty('Private', 'Fido')) // Should return 'Private Fido reporting for duty!'
  
  // We encourage you to add more function calls of your own to test your code!

    // ---------------------------------------------------------------------------------------
// Write your function here:
function calculateWeight (earthWeight, planet) {
  

    switch (planet) {
        case "Mercury":
        weight = earthWeight * 0.378
        return weight
        break;
        case "Venus":
        weight = earthWeight * 0.907
        return weight
        case "Mars":
        weight = earthWeight * 0.377
        return weight
        case "Jupiter":
        weight = earthWeight * 2.36
            return weight
        case "Saturn":
        weight = earthWeight * 0.916
            return weight
        default:
        return 'Invalid Planet Entry. Try: Mercury, Venus, Mars, Jupiter, or Saturn.'
        }
    
    
    }
    
    
    
    // Uncomment the line below when you're ready to try out your function
    console.log(calculateWeight(100, 'Jupiter')) // Should print 236
    
    // We encourage you to add more function calls of your own to test your code!
        // ---------------------------------------------------------------------------------------


        // Write your function here:
function truthyOrFalsy(a) {
 
    if (a) {
       return true
     } else {
       return false
     }
     }
   
   
   
   
   
   
   
   // Uncomment the line below when you're ready to try out your function
   console.log(truthyOrFalsy(0)) // Should print false
   
   // We encourage you to add more function calls of your own to test your code!
   
   
   
           // ---------------------------------------------------------------------------------------

   
   
   