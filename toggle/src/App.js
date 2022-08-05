import Togglable from './components/Togglable';
import BasicDataForm from './components/BasicDataForm';
import AdvancedDataForm from './components/AdvancedDataForm';

function App() {
  const handleSubmitBasic = (e) => {
    e.preventDefault();

    const name = e.target.elements.nameInput.value || 'name';
    const age = e.target.elements.ageInput.value || 'age';

    console.log(`You are ${name} and you are ${age} years old`);
  };

  const handleSubmitAdvanced = (e) => {
    e.preventDefault();

    const date = e.target.elements.dateInput.value || 'date';
    const comment = e.target.elements.textInput.value || 'comment';

    console.log(`You was born in ${date} and your comment is ${comment}`);
  };

  return (
    <>
      <Togglable title="Basic Data Form" handleSubmit={handleSubmitBasic}>
        <BasicDataForm />
      </Togglable>
      <Togglable title="Advanced Data Form" handleSubmit={handleSubmitAdvanced}>
        <AdvancedDataForm />
      </Togglable>
    </>
  );
}

export default App;
