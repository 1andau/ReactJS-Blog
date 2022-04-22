import React from 'react'
import Header from '../components/Header';
function Account() {
  return (
    <div className='account'>
<Header/>
<main id="main" class="flexbox-col-start-center">

  <div class="view-width">

    <section class="profile-header">
      <div class="profile-header-inner flexbox">
        <div class="phi-info-wrapper flexbox">
          <div class="phi-info-left flexbox">
            <div class="phi-profile-picture-wrapper">
              <div class="phi-profile-picture-inner flexbox">
                <img class="phi-profile-picture" src="https://images.unsplash.com/photo-1586156719269-d2f9faf80446?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2134&q=80" alt=""/>
              </div>
            </div>
            <div class="phi-profile-username-wrapper flexbox-col-left">
              <h3 class="phi-profile-username flexbox">Username verified</h3>
            </div>
          </div>
          <div class="phi-info-right flexbox-right">
            <div>
         
            </div>
          </div>
        </div>
        <div class="profile-header-overlay"></div>
        <img class="profile-header-image" src="https://images.unsplash.com/photo-1616808943301-d80596eff29f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2010&q=80" alt=""/>
      </div>
    </section>

 

  </div>
  <form id="newQuote">
        <label for="author">Your Name</label>
        <input type="text" id="author" />
        <label for="comment">What would you like to say?</label>
        <textarea name="comment" id="comment" cols="20" rows="10"></textarea>
        <input type="submit" value="Post" id="submit"/>
    </form>

    <div class="listed-comments">

    </div>
</main>




  </div>

  )
}

export default Account;