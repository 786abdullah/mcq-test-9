import React from 'react';
import './Quiz.css'
import Option from './../Option/Option';
const Quiz = ({ques}) => {

    const {question,options} = ques;

    return (
        <div className='quiz-component'>
            <div className="quiz">
            <h2>question:{question}</h2>
            <div className="quiz-option">
            {
               options.map( option => <Option
                key={option.idx}
                option={option}
               ></Option>)
            }
            </div>
            </div>
            
        </div>
    );
};

export default Quiz;