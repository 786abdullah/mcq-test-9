import React from 'react';
import { useLoaderData } from 'react-router-dom';
import QuizSubjects from '../QuizSubjects/QuizSubjects';

import './Home.css'

const Home = () => {
   const mcqs = useLoaderData();
//    console.log(mcqs)
   const {data}= mcqs;
   
    return (
        <div className='home-container'>
            
               <div className="quiz-container">
               {
                    data.map(data => <QuizSubjects
                    key={data.id}
                    data={data}
                    ></QuizSubjects>)
                }
                {
                    
                }
        
               </div>

        </div>
    );
};

export default Home;