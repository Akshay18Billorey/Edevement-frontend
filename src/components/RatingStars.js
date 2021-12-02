import React, { useState } from 'react';
import Star from './Star';
import "./demo.css";
const RatingStars = () => {
    const [gradeIndex, setGradeIndex] = useState();
    const GRADES = ['Poor', 'Fair', 'Good', 'Very good', 'Excellent'];
    const activeStar = {
        fill: 'yellow'
    };

    const changeGradeIndex = (index) => {
        setGradeIndex(index);
    }

    return (
        <div className="container">
            <h4>Your overall experience with us ?</h4>
            {/* <h2 className="result">{GRADES[gradeIndex] ? GRADES[gradeIndex] : 'You didn\'t review yet'}</h2> */}
            <div className="stars">
                {
                    GRADES.map((grade, index) => (
                        <Star
                            index={index}
                            key={grade}
                            changeGradeIndex={changeGradeIndex}
                            style={gradeIndex > index ? activeStar : {}}
                        />
                    ))
                }
            </div>
        </div>
    );
}

export default RatingStars;
