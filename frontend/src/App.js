import './App.css';
import NavBar from './components/NavBar';
import { BrowserRouter, Route, Routes, useNavigate } from "react-router-dom";
import AddSalesEntry from './pages/AddSalesEntry';
import Top5Sales from './pages/Top5Sales';
import TotalRevenue from './pages/TotalRevenue';
import Login from './pages/Login';
import Registration from './pages/Registration';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';


function App() {

  function DynamicRouting() {

    const dispatch = useDispatch();
    const navigate = useNavigate();


    useEffect(() => {
      const userData = JSON.parse(localStorage.getItem('user'));
      if (userData) {
        dispatch({ type: "LOGIN_SUCCESS", payload: userData })
        navigate('/addsales')
      } else {
        localStorage.removeItem("authentication");
        localStorage.removeItem("user");
        dispatch({
          type: "LOGIN_ERROR"
        })
        navigate('/')
      }
      // eslint-disable-next-line
    }, []);

    return (

      <Routes>
        <Route path='/addsales' element={<AddSalesEntry />} ></Route>
        <Route path='/top5sales' element={<Top5Sales />} ></Route>
        <Route path='/totalrevenue' element={<TotalRevenue />} ></Route>
        <Route path='/' element={<Login />} ></Route>
        <Route path='/signup' element={<Registration />} ></Route>
      </Routes>
    )
  }

  return (
    <>
      <BrowserRouter>
        <NavBar />
        <DynamicRouting />
      </BrowserRouter>

    </>
  );
}

export default App;
