import React from 'react';
import './Quiz.css'
import Option from './../Option/Option';
const Quiz = ({ques, data}) => {

    const {question,options} = ques;
     console.log(ques);
    return (
        <div className='quiz-component'>
            <div className="quiz">
            <h2>question:{question}</h2>
            <div className="quiz-option">
            {
               options.map( option => <Option
                key={option.idx}
                option={option}
                data={data}
               ></Option>)
            }
            </div>
            </div>
            
        </div>
    );
};

export default Quiz;