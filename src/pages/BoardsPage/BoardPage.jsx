import { useParams } from "react-router-dom";
import axios from "axios";
import React, { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";

import UserCategories from "../../components/Categories/UserCategories";

const BoardPage = ({}) => {
  const { id } = useParams();

  return (
    <div>
      <div>
        <UserCategories />
      </div>
    </div>
  );
};

export default BoardPage;
