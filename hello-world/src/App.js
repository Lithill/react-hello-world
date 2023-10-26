import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet';
import Welcome from './components/Welcome';
import HelloJSX from './components/HelloJSX';
import Hi from './components/Hi';

function App() {
  return (
    <div className="App">
      <Greet name="Ross" surname="Hamilton">
        <p>This is a child props</p>
        <p>And this is another</p>
      </Greet>
      <Greet name="Chris" surname="Mugridge">
        <button>Action</button>
      </Greet>
      <Greet name="Connie" surname="Hamilgridge"></Greet>
      <Welcome></Welcome>
      <Welcome></Welcome>
      <Welcome></Welcome>
      <HelloJSX></HelloJSX>
      <Hi></Hi>
    </div>
  );
}

export default App;
