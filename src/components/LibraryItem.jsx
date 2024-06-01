import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import profileTemplate from '../assets/profile-template.png';
import pdflogo from '../assets/pdf-icon.png';
import universitylogo from '../assets/university-icon.png';
import HeartLogo from '../components/icons/HearLogo.jsx';

const LibraryItem = ({ item, link}) => {
  const [isFavorite, setIsFavorite] = useState(false);
  const [likeCount, setLikeCount] = useState(item.likes);

  const handleLike = () => {
    setIsFavorite(!isFavorite);
    setLikeCount(likeCount + (isFavorite ? -1 : 1));
  };

  return (
    <div className="mb-4 rounded-2xl border border-cach-l3 px-4 py-2 dark:border-cach-l2">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <img src={pdflogo} alt="PDF" className="h-[4rem] w-[4rem]" />
          <div>
            <h3 className="text-10 text-lg font-bold text-cach-l3">
              <Link to={link} className="text-cach-l3 dark:text-cach-l2 hover:underline">
                {item.title}
              </Link>
            </h3>
            <div className="flex items-center space-x-2">
              <img
                src={profileTemplate}
                alt="profile"
                className="h-8 w-8 grayscale filter dark:invert"
              />
              <p className="pr-3 text-cach-l5 dark:text-cach-l3">@{item.autor}</p>
              <img
                src={universitylogo}
                alt="Universidad"
                className="h-8 w-8 grayscale filter"
              />
              <p className="text-cach-l5 dark:text-cach-l3">UTEC</p>
            </div>
          </div>
        </div>

        <button
          onClick={handleLike}
          className={`flex items-center space-x-1 px-2 py-1 duration-100 ${isFavorite ? "text-red-500" : "text-cach-l3 dark:text-cach-l2"}`}
        >
          <div>
            <HeartLogo filled={isFavorite} />
            <p>{likeCount}</p>
          </div>
        </button>
      </div>
    </div>
  );
};

export default LibraryItem;
