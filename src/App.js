
import './App.css';
import { BrowserRouter,Routes, Route } from "react-router-dom"
import Home from './components/home'
import Login from './components/login'
import Not from "./components/404";
import Layout from "./layout/Layout";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />}></Route>
        <Route path="/layout" element={<Layout />}>
          <Route index element={<Home />}></Route>
        </Route>
        <Route path="*" element={<Not />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
