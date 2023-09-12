// @ts-check

import { useState, useEffect } from 'react';
import BreedsSelect from './BreedsSelect';

export const DogListContainer = () => {
  const [breeds,setBreeds]=useState()
  const [selectedBreed,setSelectedBreed]=useState()
  const handleSelectChange = (e)=>{
    setSelectedBreed(e.target.value)
  }
  useEffect(()=>{
    fetch("https://dog.ceo/api/breeds/list/all")
    .then(res => res.json())
    .then(
      (result) => {
        setBreeds(result.message)
      }) 
  })
  return <BreedsSelect breeds={breeds} selectedBreed={selectedBreed} onChange={handleSelectChange}/>
  
}

export default DogListContainer
