# lab-02
Class, inheritance, and functional programming

## Author: Julie Erlemeier

## Part 1 Vehicles
* starter-code/classes
* The tests are pre-configured to run only the constructor variety, but will need to be altered to also test your Classes
* Time: 5 mins

## Part 2 UML and Write Docs for List Module
* starter-code/list
* Time: 

## Part 3 
* starter-code/validator
* This is a repeat of Lab 01, but using a class instead of module methods. This is essentially going to be a refactor. You will have a codebase from which to start, with the goal being to keep the functionality the same, while improving the implementation.

Write an object validation module that exports a "validate" class that can, based on the inputs, validate whether or not an entity is satisfactory.

Things we want to be able to validate

Is the entity itself the right type (array, object, function etc)
All all "required" properties present and do they have values?
For any property that specifies a type, does the value match that type?
i.e. an array of only numbers
Question: Do you want to export the class and have to make a new instance after you import it, or do you want to export an instance of that class (we call this a singleton). What are the pros and cons to each choice?

Testing
Validation Module

Test each method for proper/improper use (required params)
Validate that validation is reliable
Validate proper error conditions/returns
* Time:

Array Method JSDOC help provided by MDN: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/prototype