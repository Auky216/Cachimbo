import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import profileTemplate from '../assets/profile-template.png';
import pdflogo from '../assets/pdf-icon.png';
import iconCurso from '../assets/icons8-cursos-96.png';
import universitylogo from '../assets/university-icon.png';
import HeartLogo from '../components/icons/HearLogo.jsx';
import { getIsLiked, sendLike } from '../store/services.js';
import { universities } from '../static/academic.js';

const LibraryItem = ({ item }) => {
  const [isFavorite, setIsFavorite] = useState(false);
  const [likeCount, setLikeCount] = useState(item.likes);

  const imgUni = universities.find((uni) => uni.sigle === item.university);

  const handleLike = () => {
    sendLike(item.id, !isFavorite ? 1 : 0);
    setIsFavorite(!isFavorite);
    setLikeCount(likeCount + (isFavorite ? -1 : 1));
  };

  useEffect(() => {
      getIsLiked(item.id).then((response) => {
        //console.log(response);
        setIsFavorite(response);
      });
      setLikeCount(item.likes);
      //console.log(response);
  }
    , []);

  return (
    <div className="mb-4 rounded-2xl border border-cach-l3 px-4 py-2 dark:border-cach-l2">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <img src={pdflogo} alt="PDF" className="h-[4rem] w-[4rem]" />
          <div>
            <h3 className="text-10 text-lg font-bold text-cach-l3">
              <Link to={`/dashboard/library/${item.university}/${item.course}/${item.id}/${item.file_name.slice(-3)}`} className="text-cach-l3 dark:text-cach-l2 hover:underline" state={item}>
                {item.title} - {item.file_name.slice(-3)}
              </Link>
            </h3>
            <div className="flex items-center space-x-2">
              <img
                src={profileTemplate}
                alt="profile"
                className="h-8 w-8 grayscale filter dark:invert"
              />
              <p className="pr-3 text-cach-l5 dark:text-cach-l3">@{item.nickname}</p>
              <img
                src={imgUni.logo}
                alt="Universidad"
                className="h-8 filter"
              />
              <p className="text-cach-l5 dark:text-cach-l3">{item.university}</p>
              <img src={iconCurso} width={40}/>
              <Link to={`/dashboard/main/course/${item.course}`}>
                <p className='text-sm text-cach-l3 dark:text-cach-l2 hover:underline'>
                  {item.course}
                </p>
              </Link>
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
