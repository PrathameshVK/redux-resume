import { BrowserRouter, Routes, Route } from "react-router-dom";
import Editor from "./components/Editor";
import Previewer from "./components/Previewer";
import { Provider } from "react-redux";
import store from "./redux/store";
import Home from "./components/Home";

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="edit" element={<Editor />} />
            <Route path="preview" element={<Previewer />} />
          </Routes>
        </BrowserRouter>
      </Provider>
    </div>
  );
}

export default App;
