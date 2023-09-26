// A poll quiz.
 
const poll={
    question:'how do you rate Jim Airport system?',
    options:['0: Genius','1: Exceed Expectation','2: optimum Expectation','3: Above Average'],
    answers: new Array(4).fill(0),
};

/*Create a method called 'registerNewAnswer' on the 'poll' object. The 
method does 2 things:
1.1. Display a prompt window for the user to input the number of the 
selected option. The prompt should look like this:
What is your favourite programming language?
0: JavaScript
1: Python
2: Rust
3: C++*/

const registerNewAnswer=