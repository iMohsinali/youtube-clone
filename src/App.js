
import './App.css';
import Header from './Header';
import Recommand from './Recommand';
import Sidebar from './Sidebar';
function App() {
  return (
    <div className="App">
        <Header/>  
         <div className='app_page'>
           <Sidebar/>
           <Recommand/>
         </div>

    </div>
 
  );
}

export default App;
