import axios from 'axios';
import React, { useEffect, useState } from 'react'

export default function DOGAPI() {

  const [img, setImg] = useState("");

  const dogImage = () => {
    axios
    .get("https://dog.ceo/api/breeds/image/random")
    .then((response) => {
      console.log(response.data.message);
      setImg(response.data.message)
    } )
    .catch((err) => console.log(err));
  };

  useEffect(() => {
    dogImage();
  }, []);

  return (
    <>
      <button on onClick={dogImage}>Dog Img</button>
      <br /><br />
      <img src={img} alt="" />
    </>
  )
}
