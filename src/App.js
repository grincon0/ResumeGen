import logo from './logo.svg';
import './App.css';
import JSON from './JSON/resumeContent.json'
import ClassicLayout from './components/layouts/classic/ClassicLayout';
import ModernLayout from './components/layouts/modern/ModernLayout';

const resumeValue = 1;

console.log('json app level', JSON);
function App() {
  return (
    <div className="App">
      {resumeValue === 1 ? <ClassicLayout resumeData={JSON} /> : <ModernLayout resumeData={JSON} /> }
    </div>
  );
}

export default App;
