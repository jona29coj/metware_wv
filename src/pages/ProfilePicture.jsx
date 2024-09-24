import React from 'react';
import './ProfilePicture.css'; // Import CSS for styling

const ProfilePicture = () => {
  return (
    <div className="profile-picture">
      <img
        src="https://i.pravatar.cc/150?img=3" // Random avatar image URL
        alt="Profile"
      />
    </div>
  );
};

export default ProfilePicture;
