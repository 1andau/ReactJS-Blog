import React from 'react'
import Header from '../components/Header';
import Button from '../components/Button';
function Account() {
  return (
    <div className='account'>
<Header/>



<main id="main" className="flexbox-col-start-center">
<section class="profile">
  <header class="header">
    <div class="details">
      <img src="https://images.unsplash.com/photo-1517365830460-955ce3ccd263?ixlib=rb-0.3.5&q=85&fm=jpg&crop=entropy&cs=srgb&ixid=eyJhcHBfaWQiOjE0NTg5fQ&s=b38c22a46932485790a3f52c61fcbe5a" alt="John Doe" class="profile-pic"/>
      <h1 class="heading">Claire Doe</h1>
      <div class="location">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
  <path d="M12,11.5A2.5,2.5 0 0,1 9.5,9A2.5,2.5 0 0,1 12,6.5A2.5,2.5 0 0,1 14.5,9A2.5,2.5 0 0,1 12,11.5M12,2A7,7 0 0,0 5,9C5,14.25 12,22 12,22C12,22 19,14.25 19,9A7,7 0 0,0 12 ,2Z"></path>
</svg>
        <p>Kochi, India</p>
      </div>
      <div class="stats">
      
      
     
      </div>
    </div>
  </header>
</section>
  {/* ===========================comment========================================= */}

  <form id="newQuote">
        <label for="author">Your Name</label>
        <input type="text" id="author" />
        <label for="comment">What would you like to say?</label>
        <textarea name="comment" id="comment" cols="20" rows="10"></textarea>
        {/* <input type="submit" value="Post" id="submit"/> */}
        <Button><span>Send</span></Button>
    </form>

    <div className="listed-comments">

    </div>
</main>




  </div>

  )
}

export default Account;