import './App.css';
import Dinner from './Dinner';

function App() {
  return (
    <div className="App">
      
      <h1>Hello Everyone</h1>
      <hr/>
      <Dinner dishName = "Chiken Biryani" sweet="Kheer"/>
      <hr/>
      <Dinner dishName = "Karahi" sweet="Halwa"/>
      <hr/>
      <Dinner dishName = "Nihari" sweet="Jaleebi"/>
      
    </div>
  );
}

export default App;
