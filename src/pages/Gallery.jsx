import React from 'react'
import Header from '../components/Header'
import { useSelector, useDispatch } from 'react-redux';
import { fetchGallery } from '../redux/actions/gallery';
import ModalImage from "react-modal-image";

function Gallery() {
  const dispatch = useDispatch();

  const items = useSelector(({gallery})=> gallery.items); //map
console.log(items);



React.useEffect(() => {
  dispatch(fetchGallery());
   }, []);






  return (


    <div>
        <Header/>

     
        <div className='content'>

        {items.map((obj) =>{
          return(
           <div className='pics'
           key={obj.id}
           >
 
    {/* <img className='imageGallery' src={obj.imageURL} alt="gallery" /> */}



<div className="AppImage">
        <ModalImage small={obj.imageURL} large={obj.imageURL} />
      </div>
</div>
  
 

          )
        })}
    </div>
    </div>

  )
}

export default Gallery