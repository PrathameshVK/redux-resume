import { useNavigate } from "react-router-dom";

function App() {
  const navigate = useNavigate();
  return (
    <div className="App">
      <div>
        <h1>Hi there</h1>
        <p>Create your resume now !</p>
        <button onClick={() => navigate("/edit")}>Create now</button>
      </div>
    </div>
  );
}

export default App;
