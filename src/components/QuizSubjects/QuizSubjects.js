import React from 'react';
import { useNavigate } from 'react-router-dom';

const QuizSubjects = ({ data  }) => {
    // console.log(data)
    const { id, name, logo, total } = data;
    const navigate = useNavigate();
    const handleStartQuiz = () =>{
        navigate(`/quiz/${id}`);
          
    }

    return (
        <div>
            <br/><br/>
            <div className="">
                <img src={logo} alt="" />
                <h2>{name}</h2>
                <h3>total:{total}</h3>
                <button onClick={handleStartQuiz}>start quiz</button>
            </div>

        </div>
    );
};
export default QuizSubjects;