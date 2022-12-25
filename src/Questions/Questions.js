import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Quiz from './../components/Quiz/Quiz';

const Questions = () => {
    const mcq = useLoaderData();
    const {data} = mcq;
    const {questions}=data;
    console.log(mcq);

    return (
        <div>
            <h2>questions here</h2>
            {
                questions.map(ques => <Quiz
                key={ques.id}
                ques={ques}
                ></Quiz>)
            }
        </div>
    );
};

export default Questions;