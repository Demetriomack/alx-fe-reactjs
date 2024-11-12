// src/components/UserProfile.jsx
import React from 'react';

    const UserProfile = () => {
        return (
            <div className="App">
                <h1>Wellcome to my App </h1>
                <h2>props.name="Alice"</h2>
                <p>Age: {props.age="25"}</p>
                <p>Bio:{props.bio="Loves hiking and photography"}</p>
              </div>  
  );
};

export default UserProfile;

<div style={{ border: '1px solid gray', padding: '10px', margin: '10px' }}>
<h2 style={{ color: 'blue' }}>{props.name}</h2>
<p>Age: <span style={{ fontWeight: 'bold' }}>{props.age}</span></p>
<p>Bio: {props.bio}</p>
</div>