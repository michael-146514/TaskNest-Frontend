import { useParams } from "react-router-dom";
import axios from "axios";
import React, { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";

const BoardPage = ({}) => {
  const { id } = useParams();
  const test = id;

  return <div></div>;
};

export default BoardPage;
