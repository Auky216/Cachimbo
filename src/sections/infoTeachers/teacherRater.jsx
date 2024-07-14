import React, { useState } from 'react';
import { Star } from '../../components/icons/Star'; // Asegúrate de importar el componente Star correctamente
import { MAX_RATE } from "../../constant/opinion"; // Asegúrate de tener este archivo y constante definidos

const StarRating = ({ initialRate = 0 }) => {
    const [selectedRate, setSelectedRate] = useState(initialRate);
    const stars = Array(MAX_RATE).fill(0);

    const handleStarClick = (index) => {
        setSelectedRate(index + 1);
    };
    
    const handleStarMouseEnter = (index) => {
        setSelectedRate(index + 1);
    };
    
    const handleStarMouseLeave = () => {
        setSelectedRate(selectedRate);
    };

    return (
        <div className="flex justify-center gap-3 cursor-pointer">
        {stars.map((_, index) => (
            <Star
            key={index}
            bg={index < selectedRate}
            l="24"
            onClick={() => handleStarClick(index)}
            onMouseEnter={() => handleStarMouseEnter(index)}
            onMouseLeave={handleStarMouseLeave}
            item={index}
            />
        ))}
        </div>
    );
};

export default StarRating;
