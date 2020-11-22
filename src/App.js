import './App.css';
import Dinner from './Dinner';
import Hello from './Hello';

function App() {
  return (
    <div className="App">
      
      <Hello name="Rashid"/>
      <hr/>
      <header className="App-header">
      <Dinner dishName = "Chiken Biryani" sweet="Kheer"/>
      <hr/>
      <Dinner dishName = "Karahi" sweet="Halwa"/>
      <hr/>
      <Dinner dishName = "Nihari" sweet="Jaleebi"/>
      </header>
    </div>
  );
}

export default App;
