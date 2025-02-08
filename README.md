# Deep Comparison Function with Type Handling Bug

This repository demonstrates a bug in a JavaScript function designed to perform a deep comparison of two values. The function correctly handles simple data types and basic object comparisons, but fails when dealing with nested objects of varying types and comparing objects to primitives. The solution provided addresses these issues, resulting in a more robust and accurate deep comparison function.

## Bug Description
The `check` function, as implemented, does not correctly compare objects to primitives or properly handle comparisons across nested objects with varying levels of complexity. This results in incorrect boolean results under specific circumstances.  

## Solution
The provided solution enhances the `check` function by carefully implementing type checking and handling for both primitive and nested object comparisons. The solution will correctly identify the differences in any level of the objects.  