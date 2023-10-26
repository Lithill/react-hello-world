import logo from './logo.svg';
import './App.css';
import Greet from './components/greet';
import Welcome from './components/welcome';
import HelloJSX from './components/HelloJSX';

function App() {
  return (
    <div className="App">
      <Greet></Greet>
      <Welcome></Welcome>
      <HelloJSX></HelloJSX>
    </div>
  );
}

export default App;
