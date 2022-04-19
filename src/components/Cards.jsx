import React from 'react';
import { Link } from 'react-router-dom';

function Cards( {   
   description,
  title,
  createdAt,
  authorName,
  authorAvatar,
  cover,
  id,}) {


  return (
    <div className='blogItem-wrap'>
      <img className='blogItem-cover' src={cover} alt='cover' />
      <h3>{title}</h3>
      <p className='blogItem-desc'>{description}</p>
      <footer>
        <div className='blogItem-author'>
          <img src={authorAvatar} alt='avatar' />
          <div>
            <h6>{authorName}</h6>
            <p>{createdAt}</p>
          </div>
        </div>


        <Link className='blogItem-link' to={'/popup'}>
          ➝
        </Link>
        

      </footer>
    </div>
  );
};

export default Cards;









// import React, { useState } from 'react';
// import Button from './Button';

// //import classNames from 'classnames';


// function Cards( {id, name, imageUrl, price,  personaСlickСomponents, addedCountFav, title, subtitle, liked = false, onFavorite}) {




// const [buttonPopup, setButtonPopup] = useState(false)

//   return (

// <div className = "recom-block">

// <div className='d-flex flex-wrap'>
 
// <img className="recom-block__image" src = {imageUrl} alt="guids"/>



//   </div>

// <div className="recom-block__price">  {name}</div>
// <h5> {title}</h5>
// <div className="recom-block__bottom">
//    <div className="guids-block__price">{price}$</div>


// <div className="modal">
//   <main>
//   <Button onClick={() => setButtonPopup(true)}>read more</Button>
//   </main>



// </div>
 

//     </div>
//     </div>
//   )
// }

// export default Cards;


// import React from 'react';
// //import classNames from 'classnames';
// import PropTypes from 'prop-types';
// import Button from './Button';



// function CartBlock( {id, name, imageUrl, price,  onClickAddGuide, addedCount}) {
//     const onAddGuide = () => {
//     const obj = {
//       id, 
//       name, 
//       imageUrl,
//       price,
   
//     }
    
//   onClickAddGuide(obj)}

//     // onClickAddGuide({id, name, imageUrl, price})

//   return (
//     <div className="guids-block">
//     <img className="guids-block__image" src = {imageUrl} alt="guids"/>
//     <h4 className="guids-block__title">{name}</h4>
//     <div className="guids-block__selector">


//     </div>
//     <div className="guids-block__bottom">
//     <div className="guids-block__price"> {price} ₽</div>
//     <Button onClick={onAddGuide}
//     className="button--add" outline>
//     <svg
//       width="12"
//       height="12"
//       viewBox="0 0 12 12"
//       fill="none"
//       xmlns="http://www.w3.org/2000/svg"
//     >
//       <path
//         d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z"
//         fill="white"
//       />
//     </svg>
    
//     <span> VISIT </span>
    
//   {addedCount && <i>{addedCount}</i>}
//     </Button>
//     </div>
//     </div>
//    )
// }



// CartBlock.propTypes = {
//     name: PropTypes.string.isRequired,
//     imageUrl: PropTypes.string.isRequired,
//     price: PropTypes.number.isRequired,

// };
// CartBlock.defaultProps ={
//   name: '---',
//   price: 0,
//   types: [],
//   sizes: [],
// }

// export default CartBlock;