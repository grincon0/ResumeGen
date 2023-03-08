import logo from './logo.svg';
import JSON from './JSON/content.json'
import Landing from './components/UI/landing/Landing';
import ClassicLayout from './components/layouts/classic/ClassicLayout';
import ModernLayout from './components/layouts/modern/ModernLayout';
import './styles/_index.scss';
import FormWrapper from './components/UI/formWrapper/FormWrapper';


let pageValue = 1;

console.log('json app level', JSON);
function App() {

  const switchToForm = () => {
    console.log('func called');
    pageValue = 2;
  }
  return (
    <>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=DM+Sans:ital,wght@0,400;0,700;1,400&display=swap" rel="stylesheet" />
      </head>
        <div className="App">
          {pageValue === 1 && <Landing propFunc={switchToForm}/>}
          {pageValue === 2 && <FormWrapper />}
          {/* {resumeValue === 1 ? <ClassicLayout resumeData={JSON} /> : <ModernLayout resumeData={JSON} /> } */}
        </div>
    </>
  );
}

export default App;
