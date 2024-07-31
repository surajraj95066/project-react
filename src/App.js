import './App.css';
import Navbar from './components/Navbar';
// import Image from './components/image';
import Area1 from './components/Area1';
import Contain1 from './components/Contain1';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Navbar/>
      <div className="con-1">
        {/* <Image/> */}
        <Area1></Area1>
        <Contain1></Contain1>
        <Footer></Footer>
      </div>
    
    </>
  );
}

export default App;
