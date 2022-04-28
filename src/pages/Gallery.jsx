import React from 'react'
import Header from '../components/Header'
import { useSelector, useDispatch } from 'react-redux';
import { fetchGallery } from '../redux/actions/gallery';
import ModalImage from "react-modal-image";
import { useState, useEffect } from 'react';
import axios from 'axios';
import Button from '../components/Button';

function Gallery() {
  const dispatch = useDispatch();

  const items = useSelector(({gallery})=> gallery.items); //map
console.log(items);

React.useEffect(() => {
  dispatch(fetchGallery());
   }, []);



const [image, setImage] = useState('');
const clientId = '9GznlxJrijID_MOPKOJ5xnsg_hE5Ed8FXuPRD-15sbY';
const [result, setResult] = useState([]);


const handleChange = (event) => {
  setImage(event.target.value);
  };


  const handleSubmit = () => {
  const url = "https://api.unsplash.com/search/photos?page=1&query=" +
  image + "&client_id=" + clientId;
  axios.get(url).then((response) => {
  setResult(response.data.results);
  });
  };
  
  return (


    <div>


        <Header/>
  <div className="container">
  <div className="search-box">
    <input onChange={handleChange} type="text" placeholder="search images...."/>
    <Button onClick={handleSubmit} type="button"><span>Search</span></Button>
  </div>
</div>





{
  image? 

<div className="content">
  {result.map((image) => (
  <div className="pics">
   <img className='imageGallery' src={image.urls.regular}
   />
 
  </div>
  
  ))}
</div>







:



<div className='content'>
{items.map((obj) =>{
  return(
   <div className='pics'
   key={obj.id}
   >
<div className="AppImage">
<ModalImage small={obj.imageURL} large={obj.imageURL} />
</div>
</div>
)
})}
</div>



}



    </div>

  )
}

export default Gallery