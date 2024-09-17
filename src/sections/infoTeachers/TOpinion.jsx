import React from 'react';
import Default from "../../assets/profile-template.png";
import { Star } from "../../components/icons/Star";

const TOpinion = ({ profile_author_route, rate, author, date, comment }) => {
    return (
        <div className='w-full border-2 rounded-xl border-cach-l3 p-3'>
            <div className='flex items-center'>
                <div>
                    <img src={profile_author_route || Default} alt="profile_image" className='w-20' />
                </div>
                <div className='text-sm'>
                    <h1 className='dark:text-white'>{author}</h1>
                    <div className='flex'>
                        {Array(5).fill(0).map((_, index) => (
                            <Star key={index} bg={index < Math.round(rate)} l="11" />
                        ))}
                    </div>
                    <cite className='dark:text-white'>{date}</cite>
                </div>
            </div>
            <p className='dark:text-white'>{comment}</p>
        </div>
    );
}

export default TOpinion;