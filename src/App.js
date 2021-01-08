import  Header from './components/header';
import  Dish, * as D  from "./components/dish";

import './styles/App.css';

function App() {
  const dish = "tacos";
  const dishes = ['tacos', 'deviche', 'pie'];

  return (
    <div className="App">
      <Header/>
      <Dish/>
      Yo como { dish }
      <ul>
        {
          dishes.map( dishMapped => <li> { dishMapped } </li>  )
        }
      </ul>
    </div>
  );

}

export default App;
