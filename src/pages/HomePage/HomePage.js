import React from "react";
import { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";
import axios from "axios";

// Components
import Boards from "../../components/Boards/Boards";

const HomePage = () => {
  const [user, token] = useAuth();

  const GetUserBoards = async () => {};
  useEffect(() => {}, [token]);

  return (
    <div className="container">
      <div>
        <button>Tasks</button>
        <button>Calendar</button>
      </div>
      <div>
        <Boards />
      </div>
    </div>
  );
};

export default HomePage;
