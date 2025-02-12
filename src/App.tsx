import { useState } from "react";
import UserProfile from "./components/UserProfileProps";
import "./index.css";

const App: React.FC = () => {
  const [user, setUser] = useState({
    name: "Khushwant",
    age: 23,
    email: "kp@zasmlabs.com",
  });

  return (
    <div>
      <h1>User Profile</h1>
      <UserProfile name={user.name} age={user.age} email={user.email} />
    </div>
  );
};

export default App;
