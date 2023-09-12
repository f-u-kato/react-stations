// @ts-check
import React, { useState } from 'react';
import DogImage from './DogImage';
import DogListContainer from './DogListContainer';

export const Description = () => {
  const [dogUrl, setDogUrl] = useState("https://images.dog.ceo/breeds/waterdog-spanish/20180714_201544.jpg")
  return (
    <div>
      <h2>犬の<span className='red'>画像</span>を表示するサイトです</h2>
      <DogImage imageUrl={dogUrl} /><br></br>
      <button onClick={() => { 
        fetch("https://dog.ceo/api/breeds/image/random")
        .then(res => res.json())
        .then(
          (result) => {
            setDogUrl(result.message)
          }) 
        }}>
        
        更新
      </button>
      <DogListContainer />
    </div>

  )
}

export default Description
