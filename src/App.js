import  Header from './components/header';
import  Dish from "./components/dish";
import NewDish from './components/newDish';

import './styles/App.css';

function App() {
  const dish = "tacos";

  return (
    <div className="App">
      <Header/>
      <NewDish/>
      <Dish name= {dish} ingredients = {['Tortilla', 'Cebolla', 'Carne']} qty="3"/>
    </div>
  );

}

export default App;
