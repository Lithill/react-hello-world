import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet';
import Welcome from './components/Welcome';
import HelloJSX from './components/HelloJSX';
import Hi from './components/Hi';
import Message from './components/Message';
import Counter from './components/Counter';

function App() {
  return (
    <div className="App">
      {/* <Greet name="Ross" surname="Hamilton">
        <p>This is a child props</p>
        <p>And this is another</p>
      </Greet>
      <Greet name="Chris" surname="Mugridge">
        <button>Action</button>
      </Greet>
      <Greet name="Connie" surname="Hamilgridge"></Greet>
      <Welcome name="Ross" surname="Hamilton"></Welcome>
      <Welcome name="Chris" surname="Mugridge"></Welcome>
      <Welcome name="Connie" surname="Hamilgridge"></Welcome>
      <HelloJSX></HelloJSX>
      <Hi></Hi> 
      <Message></Message>*/}
      <Counter></Counter>
    </div>
  );
}

export default App;
