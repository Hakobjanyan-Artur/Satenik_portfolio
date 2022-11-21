import './App.css';
import { Route, Routes } from 'react-router-dom';
import HomeWrapper from './pages/HomeWrapper';
import Home from './Component/Home/Home';
import About from './Component/About/About';
import Works from './Component/Works/Works';
import Blog from './Component/Blog/Blog';
import Contact from './Component/Contact/Contact';
import Login from './Component/Login/Login';
import Registration from './Component/Registration/Registration';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<HomeWrapper />}>
          <Route index element={<Home />}/>
          <Route path='works' element={<Works />}/>
          <Route path='about' element={<About />}/>
          <Route path='blog' element={<Blog />}/>
          <Route path='contact' element={<Contact />}/>
        </Route>
        <Route path='/login' element={<Login />} />
        <Route path='/registration' element={< Registration /> }/>
      </Routes>
    </div>
  );
}

export default App;
