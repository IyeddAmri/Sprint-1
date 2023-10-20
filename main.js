// Variables:

// Problem: Write a JavaScript function that declares a variable using var and returns its value.

// Problem: Create a function that takes two arguments and checks if they are equal. Return true if they are and false if they are not.

// Problem: Implement a function that declares a "constant" variable using var (even though var variables are not constant) and attempts to reassign it. Handle any resulting errors.

// Problem: Create a function that defines a variable using var within its scope. Try to access the variable outside of the function and explain the result.

// Problem: Write a function that takes a variable as an argument and returns its data type.

// Conditional Statements:

// Problem: Create a function that takes an age as an argument and returns a message based on whether the person is a child, a teenager, an adult, or a senior citizen.

// Problem: Write a function that checks if a given number is even or odd and returns an appropriate message.

// Problem: Create a function that simulates a basic login system. It takes a username and password as arguments and returns true if  "Login successful" if they match, or false if  "Login failed" if they don't.

// Problem: Write a function that calculates the grade for a given test score. The function should return "A," "B," "C," "D," or "F" based on the score.

// Problem: Create a function that takes a day of the week as an argument and returns whether it's a weekday or a weekend day.
function declareVariable (){
    var x ="hello"
    return x
}
declareVariable ()

2//
function twoArgument(str1,str2){
    if (str1===str2){
        return true
    }
    return false 
}
twoArgument(5,5)

3//
function declareConstant (name){
    var x="constant"
 x=(name+x) 
    return x
}
declareConstant("khalil")

4//
function declareConstant (name){
    var x=9
 x=(name+x) 
    return x
}
declareConstant(1)
5//
function variable_scope(){
var x=5
return x
}
//we cant access the variable x from the global scope

6//
function dataTypes (x){
    return typeof x
    }
7//
function returnAge(age){
 if (age<=10){
    return "you are a child"}
  else if(10<age&&age<=30){
    return "you are an teenager"
  }
  else  {
    return "you are an adult"
  }
 }
 8//
 function givenEvenOdd(x){
    if (x%2===0){ return "even"
    }
    else {
        return "odd"
    }
    
 }
9//
function login(username,password){
if(username==="hatem41"&&password==="hatem123"){
    return true
}
return false}
login()
10//
function grade(num){
    if (num>15&&num<=20){
        return "A"
    }
    else if (num>=10&&num<=15){
        return "B"
    }
    else {
        return "F"
    }
}
11//
function Day(day){
if(day==="monday"||day==="tuesday"||day==="friday") {
    return "weekday"
}
else{
    return "weekend day"
}

}

 