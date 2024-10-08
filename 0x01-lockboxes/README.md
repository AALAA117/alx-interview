# 0x06. Unlocking Boxes

## Description

This project involves determining if all boxes in a list can be opened, given that each box contains a set of keys to other boxes. The goal is to develop an efficient algorithm to solve this problem.

### Problem Statement

You are given `n` boxes, each containing some keys. The keys allow you to open other boxes. Initially, you have one key for the first box, and you need to determine if you can open all the boxes.

## Concepts Covered

### 1. Lists and List Manipulation

- Understanding how to work with Python lists, including accessing elements, iterating through lists, and modifying them dynamically, is essential.
- [Python Lists](https://docs.python.org/3/tutorial/datastructures.html#more-on-lists)

### 2. Graph Theory Basics

- While not required, thinking of the boxes as nodes and the keys as edges connecting these nodes makes this a graph traversal problem.
- Familiarity with algorithms like **Depth-First Search (DFS)** and **Breadth-First Search (BFS)** can help in exploring all available boxes.
- [Graph Theory Basics](https://www.khanacademy.org/computing/computer-science/algorithms)

### 3. Algorithmic Complexity

- Understanding time and space complexity ensures that the solution is optimized for larger datasets. You’ll want to keep track of the efficiency of your solution using **Big O Notation**.
- [Big O Notation](https://www.geeksforgeeks.org/analysis-of-algorithms-set-1-asymptotic-analysis/)

### 4. Recursion

- Some approaches to this problem might involve recursion, especially if you choose a DFS approach.
- [Recursion in Python](https://realpython.com/python-recursion/)

### 5. Queue and Stack

- **Queues** (for BFS) and **Stacks** (for DFS) can be helpful in traversing the boxes and unlocking them.
- [Python Queue and Stack](https://www.geeksforgeeks.org/stack-in-python/)

### 6. Set Operations

- Using Python sets is beneficial for tracking visited boxes and ensuring you don’t revisit boxes unnecessarily, improving time complexity.
- [Python Sets](https://docs.python.org/3/tutorial/datastructures.html#sets)

## Requirements

### General

- Allowed editors: `vi`, `vim`, `emacs`
- All files will be interpreted/compiled on Ubuntu 20.04 LTS using Python3 (version 3.4.3)
- All files should end with a new line
- The first line of all Python files should be exactly `#!/usr/bin/python3`
- A `README.md` file, at the root of the folder of the project, is mandatory
- Your code should be documented
- Your code should follow PEP 8 style (version 1.7.x)
- All files must be executable

## File Structure

- **0-lockboxes.py**: Contains the function `canUnlockAll(boxes)` that returns a boolean value indicating whether all boxes can be opened.
- **0-main.py**: Main file for testing the function.
- **README.md**: This file.

## How to Use

1. Clone the repository:

   ```bash
   git clone https://github.com/AALAA117/alx-interview.git
   ```

2. Navigate to the project directory:

   ```bash
   cd alx-interview/0x06-lockboxes
   ```

3. Run the main file to test:

   ```bash
   ./0-main.py
   ```

## Additional Resources

- [Mock Technical Interview](https://interviewing.io/mock)
- [GeeksforGeeks: Algorithmic Complexity](https://www.geeksforgeeks.org/analysis-of-algorithms-set-1-asymptotic-analysis/)
