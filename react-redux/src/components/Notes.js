import { useSelector } from 'react-redux';

const Notes = () => {
  const notes = useSelector((state) => state);

  return (
    <ul>
      {notes.map((note) => {
        return <li key={note.id}>{note.content}</li>;
      })}
    </ul>
  );
};

export default Notes;
