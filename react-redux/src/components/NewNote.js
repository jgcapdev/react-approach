import { useDispatch } from 'react-redux';
import { createNote } from '../redux/actions.js';

const NewNote = () => {
  const dispatch = useDispatch();

  const addNote = (e) => {
    e.preventDefault();
    const content = e.target.note.value;

    if (content === '') return;

    dispatch(createNote(content));
    e.target.note.value = '';
  };

  return (
    <form onSubmit={addNote}>
      <input name="note" />
      <button>Add</button>
    </form>
  );
};

export default NewNote;
