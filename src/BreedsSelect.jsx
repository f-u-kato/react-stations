// @ts-check
import React from "react"
export const BreedsSelect = (props) => {

  
  const dogs=Object.keys(props.breeds).map((key)=>
    <option value={key} key={key}>{key}</option>
  )
  
  return (
    <select value={props.selectedBreed} onChange={props.onChange}>
      {dogs}
    </select>
  )
}

export default BreedsSelect