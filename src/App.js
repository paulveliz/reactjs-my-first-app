import  Header from './components/header';
import  Dish, * as D  from "./components/dish";

import './styles/App.css';

function App() {
  const dish = "tacos";

  return (
    <div className="App">
      <Header/>
      <Dish name= {dish} ingredients = {['Tortilla', 'Cebolla', 'Carne']} qty="3"/>
    </div>
  );

}

export default App;
