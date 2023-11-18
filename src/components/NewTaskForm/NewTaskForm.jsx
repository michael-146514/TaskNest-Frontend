const NewTaskForm = ({}) => {
  return (
    <div>
      <div>
        <input type="text" id="Title" name="Title" />
      </div>
      <div>
        <input type="text" id="Description" name="Description" />
      </div>
      <div>
        <input type="text" id="DueDate" name="DueDate" />
      </div>
      <div>
        <input type="checkbox" id="IsCompleted" name="IsCompleted" />
      </div>
      <div>
        <input type="text" id="Priority" name="Priority" />
      </div>
      <div>
        <input type="text" id="Position" name="Position" />
      </div>
      <div>
        <input type="color" id="Color" name="Color" />
      </div>
    </div>
  );
};

export default NewTaskForm;
