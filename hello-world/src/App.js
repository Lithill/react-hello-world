import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet';
import Welcome from './components/Welcome';
import HelloJSX from './components/HelloJSX';
import Hi from './components/Hi';

function App() {
  return (
    <div className="App">
      <Greet></Greet>
      <Welcome></Welcome>
      <HelloJSX></HelloJSX>
      <Hi></Hi>
    </div>
  );
}

export default App;
