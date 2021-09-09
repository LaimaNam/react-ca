import React, { useState, useEffect, useRef } from 'react';
import { FaThumbsUp } from 'react-icons/fa';

const Like = () => {
  const [likes, setLikes] = useState(0);

  // -- side effects
  useEffect(() => {
    //fetching data (useing axios or fetch) from API with GET method
    setLikes(5);
  }, []); //dependency arr

  //Custom functions
  let liked = useRef(false);

  const clickHandler = () => {
    if (!liked.current) {
      setLikes((prevState) => prevState + 1);
      liked.current = true;

      //fetching with POST/PUT (using axios or feetch)
    }
    return;
  };

  return (
    <button onClick={clickHandler}>
      <FaThumbsUp /> {likes}
    </button>
  );
};

export default Like;
