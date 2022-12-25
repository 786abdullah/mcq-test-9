import React from 'react';
import './Option.css'
const Option = ({option}) => {
    // console.log(option)
    return (
        <div className=''>
            <div className="mcq-option">
               {/* <h4>{option}</h4> */}
                <input type="radio" id="javascript" name="fav_language" value="JavaScript"></input>
                <label for="javascript">{option}</label>
            </div>
        </div>
    );
};

export default Option;