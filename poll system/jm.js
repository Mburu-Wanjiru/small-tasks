// A poll quiz.
 
const poll={
    question:'how do you rate Jim Airport system?',
    options:['0: Genius','1: Exceed Expectation','2: optimum Expectation','3: Above Average'],
    answers: new Array(4).fill(0),

//function for displaying a poll.
registerNewAnswer(){
    //get the answer.
    const answer=Number(prompt(`${this.question}
    \n${this.options.join('\n')}\n(write option number)`));
    

console.log(answer);
//storing the answer
typeof answer === 'number' && answer <this.answers.length
 && this.answers[answer]++;
 
this.displayResult();
this.displayResult('string');
},


displayResult(type='array'){
    if(type==='array'){
        console.log(this.answers);
    }else if(type==='string'){
        console.log(`poll results are ${this.answers.join(', ')}`);
    }
}
};

document.querySelector('.poll').addEventListener
('click',poll.registerNewAnswer.bind(poll));

//using this key word in display function outside.
//points to another method
poll.displayResult.call({answers:[45,32,56]});
poll.displayResult.call({answers:[45,32,56]},'string');
