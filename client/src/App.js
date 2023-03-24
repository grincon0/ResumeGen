import JSON from './JSON/content.json'
import Landing from './components/UI/landing/Landing';
import DefaultLayout from './components/UI/layout/default';
import ClassicLayout from './components/layouts/classic/ClassicLayout';
import ModernLayout from './components/layouts/modern/ModernLayout';
import './styles/_index.scss';


let pageValue = 1;

console.log('json app level', JSON);
function App() {

  const switchToForm = () => {
    console.log('func called');
    pageValue = 2;
  }
  return (
    <>
      <DefaultLayout />
    </>
  );
}

export default App;
