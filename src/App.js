import  Header from './components/header';
import  Dish, * as D  from "./components/dish";

import './styles/App.css';

function App() {
  return (
    <div className="App">
      <Header/>
      <Dish/>
      <D.Flag/>
    </div>
  );
}

export default App;
