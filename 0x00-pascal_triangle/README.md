# 0x07. Pascal's Triangle

## Description

This project focuses on generating Pascal’s Triangle, a triangular array of the binomial coefficients. Each element is the sum of the two elements directly above it in the previous row. Your task is to write a Python function that returns a list of lists representing Pascal’s Triangle up to a given number of rows.

## Concepts Covered

### 1. Lists and List Comprehensions

- Understanding how to create, access, modify, and iterate over lists is crucial.
- Use **list comprehensions** to generate rows in Pascal’s Triangle efficiently and concisely.
- [Python Lists](https://docs.python.org/3/tutorial/datastructures.html#more-on-lists)

### 2. Functions

- Know how to define and call Python functions, passing parameters, and returning values, specifically a list of lists representing the triangle.
- [Python Functions](https://docs.python.org/3/tutorial/controlflow.html#defining-functions)

### 3. Loops

- Utilize `for` and `while` loops to iterate over sequences.
- Nested loops will be necessary for calculating each row’s values in Pascal’s Triangle.
- [Loops in Python](https://docs.python.org/3/tutorial/controlflow.html#for-statements)

### 4. Conditional Statements

- Use `if`, `elif`, and `else` statements to apply logic, such as ensuring the edges of the triangle are always `1`.
- [Python Conditionals](https://docs.python.org/3/tutorial/controlflow.html#if-statements)

### 5. Recursion (Optional)

- Recursion provides an alternative approach to generating Pascal’s Triangle.
- Understand how to define base and recursive cases for generating rows of the triangle.
- [Recursion in Python](https://realpython.com/python-recursion/)

### 6. Arithmetic Operations

- Addition is the key operation for calculating the elements of Pascal’s Triangle, as each element is the sum of the two directly above it.
- [Python Operators](https://docs.python.org/3/library/operator.html)

### 7. Indexing and Slicing

- Access elements and slices of lists, which is essential for identifying and summing the correct elements when constructing each row.
- [Indexing and Slicing](https://docs.python.org/3/tutorial/introduction.html#lists)

### 8. Memory Management

- Be mindful of how lists are stored and copied, particularly when creating new rows based on previous ones.
- [Python Memory Management](https://docs.python.org/3/faq/design.html#how-does-python-manage-memory)

### 9. Error and Exception Handling (Optional)

- Handle potential errors, such as invalid input types or values, using `try-except` blocks.
- [Python Exceptions](https://docs.python.org/3/tutorial/errors.html)

### 10. Efficiency and Optimization

- Consider the time and space complexity of different approaches to generating Pascal’s Triangle.
- Evaluate optimizations to improve performance, especially for larger input values.
- [Big O Notation](https://www.geeksforgeeks.org/analysis-of-algorithms-set-1-asymptotic-analysis/)

## Requirements

### General

- Allowed editors: `vi`, `vim`, `emacs`
- All files will be interpreted/compiled on Ubuntu 20.04 LTS using Python3 (version 3.4.3)
- All files should end with a new line
- The first line of all your Python files should be exactly `#!/usr/bin/python3`
- A `README.md` file at the root of the folder is mandatory
- Your code should be documented
- Your code should follow the PEP 8 style (version 1.7.x)
- All files must be executable

## File Structure

- **0-pascal_triangle.py**: Contains the function `def pascal_triangle(n):` that returns a list of lists representing Pascal’s Triangle with `n` rows.
- **0-main.py**: A test file for testing the `pascal_triangle` function.
- **README.md**: This file.

## How to Use

1. Clone the repository:

   ```bash
   git clone https://github.com/AALAA117/alx-interview.git
   ```

2. Navigate to the project directory:

   ```bash
   cd alx-interview/0x07-pascal_triangle
   ```

3. Run the main file to test the function:

   ```bash
   ./0-main.py
   ```

## Additional Resources

- [Pascal’s Triangle - Numberphile](https://www.youtube.com/watch?v=XMriWTvPXHI)
- [What is Pascal’s Triangle](https://en.wikipedia.org/wiki/Pascal%27s_triangle)
- [Mock Technical Interview](https://interviewing.io/mock)
