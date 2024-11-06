import React from 'react';

interface UserInfoProps {
  username: string;
  age: number;
  email: string;
}

const UserInfo: React.FC<UserInfoProps> = ({ username, age, email }) => {
  return (
    <div>
      <h2>User Information</h2>
      <p><strong>Username:</strong> {username}</p>
      <p><strong>Age:</strong> {age}</p>
      <p><strong>Email:</strong> {email}</p>
    </div>
  );
};

export default UserInfo;
