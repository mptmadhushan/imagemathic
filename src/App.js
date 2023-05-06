import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./routes/login";
import Signup from "./routes/signup";
import Userguide from "./routes/userguide";
import Home from "./routes/home";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
        {/* <Route index element={<Login />} />  */}
        {/* <Route path="Signup" element={<Signup />} /> */}
        <Route index element={<Home />} />
        <Route path="Userguide" element={<Userguide />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
