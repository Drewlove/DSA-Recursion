/*
1. Counting Sheep
Q: What is the input to the program?
A: The argument passed into countingSheep. In this case, the number 3

Q: What is the output of the program?
A: 
    3: Another sheep jumped over the fence 
    2: Another sheep jumped over the fence 
    1: Another sheep jumped over the fence 
    All sheep jumped over the fence

Q: What is the input to each recursive call?
A: The input, in order, is 3, 2, 1, 0

Q: What is the output of each recursive call?
A: The output of the first recursive call is:      
    3: Another sheep jumped over the fence 
    
    The output of the second recursive call is:
        3: Another sheep jumped over the fence 
        2: Another sheep jumped over the fence 
        
    The output of the third recursive call is: 
        3: Another sheep jumped over the fence 
        2: Another sheep jumped over the fence 
        1: Another sheep jumped over the fence 
        
    The output of the fourth recursive is: 
        3: Another sheep jumped over the fence 
        2: Another sheep jumped over the fence 
        1: Another sheep jumped over the fence 
        All sheep jumped over the fence
*/ 

function countingSheep(num){
  if(num === 0){
   return `All sheep jumped over the fence`
  }
  
  return `${num}: Another sheep jumped over the fence ${countingSheep(num-1)}`

}

const sheepCount = countingSheep(3)
console.log(sheepCount)



/*
2. Power Calculator
Q: What is the input to the program?
A: The input is base and the exponent that is passed into the powerCalculator function. 

Q: What is the output of the program?
A: The output is the final answer. In the case of powerCalculator(10, 2) the ouput is 100

Q: What is the input to each recursive call?
A: the input for each recursive call is the base, which remains unchanged, and the exponent minus 1

Q: What is the output of each recursive call?
A: The output is the base multiplied previous number derived from the powerCalculator function call 
*/ 

const powerCalculator = function(base, exponent){
  if(exponent < 0){
    return 'exponent should be >= 0'
  }
  
  if(exponent === 1){
    return base
  }
  
  return base*powerCalculator(base, exponent-1)
}

const result = powerCalculator(10, -2)


/*
3. Reverse String
Q: What is the input to the program?
A:  The string that is originally passed into reverseString when the function is first invoked. 

Q: What is the output of the program?
A: The final answer that reverses the string

Q: What is the input to each recursive call?
A: A version of the string that has had its final letter removed with the slice method

Q: What is the output of each recursive call?
A: The last letter of the string 
*/ 

const reverseString = function(str){
//  return str[str.length-1]
  if(str.length === 1){
    return str[0]
  }
  
  return `${str[str.length-1]}${reverseString(str.slice(0, str.length-1))}`
}

const answer = reverseString('hello')





/*
4. Triangular Number
Q: What is the input to the program?
A: The number passed into the triangularNumber function when it is first invoked

Q: What is the output of the program?
A: The final sum, in this case 45

Q: What is the input to each recursive call?
A: The number that was passed into the previous recursive call minus 1

Q: What is the output of each recursive call?
A: The sum of the current number plus the current number minus 1
*/ 

const triangularNumber = function(num){
  if(num === 1){
    return num
  }
  
  return num+triangularNumber(num-1)
  
}

const answer = triangularNumber(9)



