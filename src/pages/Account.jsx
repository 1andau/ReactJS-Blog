import React from 'react'
import Header from '../components/Header';
import Button from '../components/Button';
function Account() {
  return (
    <div className='account'>
<Header/>
<main id="main" className="flexbox-col-start-center">

  <div className="view-width">

    <section className="profile-header">
      <div className="profile-header-inner flexbox">
        <div className="phi-info-wrapper flexbox">
          <div className="phi-info-left flexbox">
            <div className="phi-profile-picture-wrapper">
              <div className="phi-profile-picture-inner flexbox">
                <img className="phi-profile-picture" src="https://images.unsplash.com/photo-1586156719269-d2f9faf80446?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2134&q=80" alt=""/>
              </div>
            </div>
            <div className="phi-profile-username-wrapper flexbox-col-left">
              <h3 className="phi-profile-username flexbox">Username verified</h3>
            </div>
          </div>
          <div className="phi-info-right flexbox-right">
            <div>
         
            </div>
          </div>
        </div>
        <div className="profile-header-overlay"></div>
        <img className="profile-header-image" src="https://images.unsplash.com/photo-1616808943301-d80596eff29f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2010&q=80" alt=""/>
      </div>
    </section>

 

  </div>
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