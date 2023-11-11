import React from "react";
import { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";
import axios from "axios";
import UserBoards from "../../components/Boards/UserBoards";
// Components

const HomePage = () => {
  const [user, token] = useAuth();
  const [Boards, Setboards] = useState([]);

  const GetUserBoards = async () => {
    try {
      const response = await axios.get("https://localhost:5001/api/");
    } catch (error) {
      console.warn(`Error in GetUserBoards: `, error);
    }
  };
  useEffect(() => {}, [token]);

  return (
    <div className="container">
      <div>
        <button>Tasks</button>
        <button>Calendar</button>
      </div>
      <div>
        <UserBoards />
      </div>
    </div>
  );
};

export default HomePage;
