import logo from './logo.svg';
import './App.css';
import bootstrap from '../node_modules/bootstrap/dist/css/bootstrap.css'
import Navbar from './Navbar/Navbar';
import Home from './Home/Home';
import Intro from './Intro/Intro';
import Table from './Table/Table';
import Table1 from './Table1/Table1';
import Table2 from './Table2/Table2';
import Table3 from './Table3/Table3';
import Table4 from './Table4/Table4';
import Table5 from './Table5/Table5';
import Table6 from './Table6/Table6';
import Table7 from './Table7/Table7';
import Footer from './Footer/Footer';
import SmartHome from './SmartHome/SmartHome';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from './Layout/Layout';
import Contact from './Contact/Contact';

function App() {
  const routes = createBrowserRouter([
    {path:'' , element:<Layout/> , children: [
      {path:'' , element:<Home/>},
      {path:'home' , element:<Home/>},
      {path:'table' , element:<Table/>},
      {path:'table1' , element:<Table1/>},
      {path:'table2' , element:<Table2/>},
      {path:'table3' , element:<Table3/>},
      {path:'table4' , element:<Table4/>},
      {path:'table5' , element:<Table5/>},
      {path:'table6' , element:<Table6/>},
      {path:'table7' , element:<Table7/>},
      {path:'contact' , element:<Contact/>},
      {path:'smartHomes' , element:<SmartHome/>}
    ]}
  ])
  return (<>
    <RouterProvider router={routes}/>
    {/* <Navbar/>
    <Home/>
    <Intro/>
    <Table/>
    <Table1/>
    <Table2/>
    <Table3/>
    <Table4/>
    <Table5/>
    <Table6/>
    <Table7/>
    <SmartHome/>
    <Footer/> */}
  </>
  );
}

export default App;
