type UserProfileProps = {
    name: string;
    age: number;
    email: string;
  };
  
  const UserProfile: React.FC<UserProfileProps> = ({ name, age, email }) => {
    return (
      <div className="profile-card">
        <h2>{name}</h2>
        <p>Age: {age}</p>
        <p>Email: {email}</p>
      </div>
    );
  };
  
  export default UserProfile;
  