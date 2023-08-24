import './App.css';
import {Route, Routes, BrowserRouter} from "react-router-dom";
import HomePage from "./page/HomePage";
import SignInPage from "./page/SignInPage";
import JoinPage from "./page/JoinPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/signin" element={<SignInPage />} />
        <Route path="/join" element={<JoinPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
