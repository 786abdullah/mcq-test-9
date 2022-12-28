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
            <h2>{data.name}</h2>
            {
                questions.map(ques => <Quiz
                key={ques.id}
                ques={ques}
                data={data}
                ></Quiz>)
            }
        </div>
    );
    
};

export default Questions;
