const Notification = ({ message }) => {
  if (message === null) {
    return null;
  }

  return <>{message !== null ? <div className="success">{message}</div> : ''}</>;
};

export default Notification;
