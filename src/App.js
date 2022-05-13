
import './App.css';
//components
import Header from './components/Header';
import MainContent from './components/MainContent';
import Description from './components/Description';
//styles
import './styles/header.css';
import './styles/mainContent.css';
import './styles/description.css';

function App() {
  return (
    <div className="App">
      <Header/>
      <MainContent/>
      <Description/>  
    </div>
  );
}

export default App;
