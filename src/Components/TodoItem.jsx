function TodoItem({ todoName, todoDate, onDeleteClick }) {
  const handleDelete = () => {
    onDeleteClick(todoName); // Explicit named function
  };

  return (
    <div className="container">
      <div className="row kg-row">
        <div className="col-6">{todoName}</div>
        <div className="col-4">{todoDate}</div>
        <div className="col-2">
          <button
            type="button"
            className="btn btn-danger kg-button"
            onClick={handleDelete}
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}

export default TodoItem;
