
import Dishes from './Components/Dishes/Dishes';
import './App.css';
import AllCategories from './Components/Filter/AllCategories';
import Cart from './Components/Cart/Cart';

function App() {
  return (
    <div className="App">

      <div className='block'>
      <AllCategories/>
      <Cart/>
      </div>
      <div className='block'>
      <Dishes/>
      </div>
      
     
    </div>
  );
}

export default App;
