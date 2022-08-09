import { useDispatch } from 'react-redux';
import { createNote } from '../reducers/noteReducer.js';

const NewNote = () => {
  const dispatch = useDispatch();

  const addNote = (e) => {
    e.preventDefault();
    const content = e.target.note.value;

    dispatch(createNote(e.target.note.value));
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
