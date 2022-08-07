import { BrowserRouter, Routes, Route } from "react-router-dom";
import Editor from "./components/Editor";
import Previewer from "./components/Previewer";
import { Provider } from "react-redux";
import { store, persistor } from "./redux/store";
import { PersistGate } from "redux-persist/integration/react";
import Home from "./components/Home";

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="edit" element={<Editor />} />
              <Route path="preview" element={<Previewer />} />
            </Routes>
          </BrowserRouter>
        </PersistGate>
      </Provider>
    </div>
  );
}

export default App;
