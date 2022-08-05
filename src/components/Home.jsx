import React from "react";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();
  return (
    <div>
      <h1>Hi there</h1>
      <p>Create your resume now !</p>
      <button onClick={() => navigate("/edit")}>Create now</button>
    </div>
  );
}

export default Home;
