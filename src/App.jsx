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

function App() {
  return (<>
    <Navbar/>
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
    <Footer/>

  </>
  );
}

export default App;
