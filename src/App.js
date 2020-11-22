import './App.css';
import Dinner from './Dinner';
import Hello from './Hello';

function App() {
  return (
    <div className="App">
      
      <Hello/>
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
