
import './App.css';
//components
import Header from './components/Header';
import MainContent from './components/MainContent';
import Description from './components/Description';
import HowItWorks from './components/HowItWorks';
import ConnectMyBusiness from './components/ConnectMyBusiness';
import Contacts from './components/Contacts';
//styles
import './styles/header.css';
import './styles/mainContent.css';
import './styles/description.css';
import './styles/howitworks.css';
import './styles/connectmybusiness.css';
import './styles/contacts.css';
function App() {
  return (
    <div className="App">
      <Header/>
      <MainContent/>
      <Description/> 
      <HowItWorks/>
      <ConnectMyBusiness/>
      <Contacts/>
    </div>
  );
}

export default App;
