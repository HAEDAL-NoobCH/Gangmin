import './App.css';
import NameComponent from './components/NameComponent';
import SayName from './components/SayName';
import EventPractice from './components/EventPractice';

function App() {
    return (
        <div className="App">
            <NameComponent name="Gangmin" />
            <SayName />
            <EventPractice />
        </div>
    );
}

export default App;
