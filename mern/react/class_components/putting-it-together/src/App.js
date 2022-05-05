import logo from './logo.svg';
import './App.css';
import PersonCard from './components/PersonCard';

function App() {
  return (
    <div className="App">
      <PersonCard firstname="Jane" lastname="Doe" age={45} haircolor="Black"></PersonCard>
      <PersonCard firstname="John" lastname="Smith" age={88} haircolor="Brown"></PersonCard>
    </div>
  );
}

export default App;
