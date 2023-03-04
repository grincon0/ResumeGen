import logo from './logo.svg';
import './App.css';
import JSON from './JSON/resumeContent.json'
import Landing from './components/UI/landing/Landing';
import ClassicLayout from './components/layouts/classic/ClassicLayout';
import ModernLayout from './components/layouts/modern/ModernLayout';
import './styles/_global.scss';

const resumeValue = 1;

console.log('json app level', JSON);
function App() {
  return (
    <>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=DM+Sans:ital,wght@0,400;0,700;1,400&display=swap" rel="stylesheet" />
      </head>
        <div className="App">
          <Landing />
          {/* {resumeValue === 1 ? <ClassicLayout resumeData={JSON} /> : <ModernLayout resumeData={JSON} /> } */}
        </div>
    </>
  );
}

export default App;
