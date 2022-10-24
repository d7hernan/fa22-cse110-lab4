1. We will see an output of 3. This is because vars ignore block scopes so they are techically "global" variables. The value is 3 because 'i' had to be 3 in order to exit the for loop at the intended time. 
2. We will see an output of 150. This is because vars ignore block scopes so they are techically "global" variables, so discountedPrice is not only conformed within the for loop.
3. We will see an output of 150. finalPrice is a global variable and therefore can be used in this scope. the last value in the list is 300, so finalPrice = 150 = 300*0.5. 
4. The function should return a new list of discounted pices based on the discount rate. We went through the list, multiplied each value by the discount rate, and pushed it to the list, so the values should appear in the order that that original values were in. 
5. Line 12 causes an error saying that 'i' is not a defined variable. This is because i is a 'let' type, so it only exists in the block scope it was created in (the for loop). 
6. Line 13 causes an error saying that 'discountedPrice' is not a defined variable. This is because discountedPrice is a 'let' type, so it only exists in the block scope it was created in (the for loop). 
7. We will see an output of 150. finalPrice is a global variable by default and therefore can be used in this scope. the last value in the list is 300, so finalPrice = 150 = 300*0.5
8. The function should return a new list of discounted pices based on the discount rate. We went through the list, multiplied each value by the discount rate, and pushed it to the list, so the values should appear in the order that that original values were in. There were no violations in variable scopes. 
9. Line 11 causes an error saying that 'i' is not a defined variable. This is because i is a 'let' type, so it only exists in the block scope it was created in (the for loop). 
10. We will see an output of 3. This is allowed because 'length' is within the scope of this line. The value is 3 because length = prices.length = 3 because the list has 3 values.
11. The function should return a new list of discounted pices based on the discount rate. We went through the list, multiplied each value by the discount rate, and pushed it to the list, so the values should appear in the order that that original values were in. 
12. A) student.name
    B) student["Grad Year"]
    C) student.greeting()
    D) student['Favorite Teacher'].name
    E) student.courseLoad[0]
13. A) '32', treats the 2 as a string and concatenates the values
    B) 1, treats the 3 as an int (- is exclusive only to ints hence the conversion) and performs subtraction 
    C) 3 because null is treated as a 0 to match the int 3  
    D) 3null because null is converted to string to match the '3'
    E) 4. true is converted to 1 (0 is false) in order to add with 3
    F) 0. false and null both equal 0 in a boolean and ASCII value context respectfully.
    G) '3undefined.' undefined converts to a string in order to add with the 3. 
    H) NaN. No way to reach common base between string 3 and undefined
14. A) true. converts the string 2 to an int to compare with the 1
    B) false. Interpretes them as strings and ranks them alphabetically. 2 is not less than 1
    C) True. Converts both values to int to make the comparison
    D) false. makes no conversions to determine if the values are equal. 
    E) false. True is equal to 1, which is not equal to 2
    F) true. Any non-zero number is converted to true in boolean. true = true. 
15. == does conversions and then comparies the values. === does no conversions and only outputs true if both values are exactly equivalent. 
16. FILE: part2-question16.js
17. The result will return a new list with all the values from the old list multiplied by 2. The function takes each value in the array, calls doSomething to the value, then pushes this new value to the new list. Since doSomething simply returns the double of a number, we get all the numbers doubled in the new list. 
18. FILE: part2-question18.js
19. output is 1, 4, 3, 2