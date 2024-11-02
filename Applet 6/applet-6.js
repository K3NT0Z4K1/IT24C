class TodoList {
  constructor() {
    this.editingIndex = -1;
    this.addButton = document.getElementById('addButton');
    this.todoInput = document.getElementById('todoInput');
    this.todoList = document.getElementById('todoList');

    this.addButton.addEventListener('click', () => this.addOrUpdateTask());
    this.todoList.addEventListener('click', (e) => {
        const action = e.target.classList.contains('removeButton') ? 'remove' : 
                       e.target.classList.contains('editButton') ? 'edit' : 
                       e.target.classList.contains('doneButton') ? 'done' : null;
        if (action) this[action + 'Task'](e);
    });
}

}