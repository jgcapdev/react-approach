import { useSelector, useDispatch } from 'react-redux';
import { deleteNote } from '../redux/actions.js';

const Notes = () => {
  const dispatch = useDispatch();
  const notes = useSelector((state) => state);

  const removeNote = (id) => {
    dispatch(deleteNote(id));
  };

  return (
    <ul>
      {notes.map((note) => {
        return (
          <li key={note.id}>
            {note.content}
            <button onClick={() => removeNote(note.id)}>Delete</button>
          </li>
        );
      })}
    </ul>
  );
};

export default Notes;
