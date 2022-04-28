import React, { useState } from 'react';
import Button from '../components/Button';
import CreatePopup from './CreatePopup';


 const AddPostButton = ({ blogPosts }) => {
const [showAddForm, setShowAddForm] = useState(false);

  return (
    <div>
        <Button onClick={() => setShowAddForm(true)} >
<span> Create a post</span>
        </Button>
        <br /><br />

      {showAddForm && (
        <CreatePopup
          blogPosts={blogPosts}
          setShowAddForm={setShowAddForm}
        />
      )}
    </div>
  );
};

export default AddPostButton ;