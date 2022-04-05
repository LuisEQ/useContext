
import './App.css';
import Container from './Container';
import { DarkModeProvider } from './Darkmode';


function App() {
  return (
    <div className="App">
      <DarkModeProvider>
        <Container />
      </DarkModeProvider>
    </div>
  );
};

export default App;
