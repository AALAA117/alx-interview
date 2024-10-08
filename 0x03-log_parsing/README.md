# 0x03. Log Parsing Project

This project focuses on parsing and processing data streams in real-time using Python. The goal is to read data from standard input (stdin), handle it in a specific format, and perform calculations based on the input data.

## Concepts Needed

### 1. File I/O in Python
- Understand how to read from `sys.stdin` line by line.
- Learn about Python input and output operations.

### 2. Signal Handling in Python
- Handle keyboard interruptions (CTRL + C) using signal handling in Python.
- Learn how to gracefully terminate a program upon receiving a signal.
- [Python Signal Handling](https://docs.python.org/3/library/signal.html)

### 3. Data Processing
- Parse strings to extract specific data points.
- Aggregate data to compute summaries.

### 4. Regular Expressions
- Use regular expressions to validate the format of each line.
- [Python Regular Expressions](https://docs.python.org/3/library/re.html)

### 5. Dictionaries in Python
- Use dictionaries to count occurrences of status codes and accumulate file sizes.
- [Python Dictionaries](https://docs.python.org/3/tutorial/datastructures.html#dictionaries)

### 6. Exception Handling
- Handle possible exceptions that may arise during file reading and data processing.
- [Python Exceptions](https://docs.python.org/3/tutorial/errors.html)

By mastering these concepts and using the resources provided, you will be prepared to tackle the log parsing project effectively, handling data streams, parsing log entries, and computing metrics based on the processed data.

## Additional Resources
- [Mock Technical Interview](#)

## Requirements

### General
- **Editors allowed**: `vi`, `vim`, `emacs`
- **Execution environment**: Ubuntu 20.04 LTS using `python3` (version 3.4.3)
- All your files should end with a new line.
- The first line of all your Python files should be exactly: `#!/usr/bin/python3`
- A `README.md` file at the root of the project folder is mandatory.
- Your code should adhere to the PEP 8 style guide (version 1.7.x).
- All your files must be executable.
- The length of your files will be tested using the `wc` command.
