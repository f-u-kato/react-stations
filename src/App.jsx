// DO NOT DELETE

import './App.css'
import React, { useState } from 'react';

/**
 * @type {() => JSX.Element}
 */
export const App = () => {
  const [dogUrl, setDogUrl] = useState("https://images.dog.ceo/breeds/waterdog-spanish/20180714_201544.jpg")
  return (
    <div>
      <header>
        <h2>Dogアプリ</h2>
      </header>
      <h2>犬のガオウを表示するサイトです</h2>
      <img src={dogUrl} /> <br></br>
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
    </div>

  )
}
