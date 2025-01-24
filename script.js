document.addEventListener('DOMContentLoaded', () => {
    // 2. Select DOM Elements
    const addButton = document.getElementById('add-button');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');
  
    // 3. Create the addTask Function
    const addTask = () => {
      // 4. Task Creation and Removal
      const taskText = taskInput.value.trim();
  
      if (taskText === "") {
        alert("Please enter a task.");
        return;
      }
  
      const listItem = document.createElement('li');
      listItem.textContent = taskText;
  
      const removeButton = document.createElement('button');
      removeButton.textContent = "Remove";
      removeButton.classList.add('remove-btn');
  
      removeButton.addEventListener('click', () => {
        taskList.removeChild(listItem);
      });
  
      listItem.appendChild(removeButton);
      taskList.appendChild(listItem);
  
      taskInput.value = "";
    };
  
    // Add event listener to the add button
    addButton.addEventListener('click', addTask);
  });

  document.addEventListener('DOMContentLoaded', () => {
    // 2. Select DOM Elements
    const addButton = document.getElementById('add-button');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');
  
    // 3. Create the addTask Function
    const addTask = () => {
      // 4. Task Creation and Removal
      const taskText = taskInput.value.trim();
  
      if (taskText === "") {
        alert("Please enter a task.");
        return;
      }
  
      const listItem = document.createElement('li');
      listItem.textContent = taskText;
  
      const removeButton = document.createElement('button');
      removeButton.textContent = "Remove";
      removeButton.classList.add('remove-btn');
  
      removeButton.addEventListener('click', () => {
        taskList.removeChild(listItem);
      });
  
      listItem.appendChild(removeButton);
      taskList.appendChild(listItem);
  
      taskInput.value = "";
    };
  
    // 5. Attach Event Listeners
    addButton.addEventListener('click', addTask);
  
    taskInput.addEventListener('keypress', (event) => {
      if (event.key === 'Enter') {
        addTask();
      }
    });
  
    addTask(); // Invoke addTask on DOMContentLoaded
  });


  document.addEventListener('DOMContentLoaded', () => {
    // 2. Select DOM Elements
    const addButton = document.getElementById('add-button');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');
  
    // 1. Initialize and Load Tasks
    let tasks = JSON.parse(localStorage.getItem('tasks')) || [];
  
    // Load existing tasks from Local Storage
    loadTasks();
  
    // 3. Create the addTask Function
    const addTask = () => {
      // 4. Task Creation and Removal
      const taskText = taskInput.value.trim();
  
      if (taskText === "") {
        alert("Please enter a task.");
        return;
      }
  
      const listItem = document.createElement('li');
      listItem.textContent = taskText;
  
      const removeButton = document.createElement('button');
      removeButton.textContent = "Remove";
      removeButton.classList.add('remove-btn');
  
      removeButton.addEventListener('click', () => {
        taskList.removeChild(listItem);
        // 3. Implement Task Removal with Local Storage Update
        tasks = tasks.filter(task => task !== taskText);
        localStorage.setItem('tasks', JSON.stringify(tasks));
      });
  
      listItem.appendChild(removeButton);
      taskList.appendChild(listItem);
  
      // 2. Update Task Addition Functionality
      tasks.push(taskText);
      localStorage.setItem('tasks', JSON.stringify(tasks));
  
      taskInput.value = "";
    };
  
    // 5. Attach Event Listeners
    addButton.addEventListener('click', addTask);
  
    taskInput.addEventListener('keypress', (event) => {
      if (event.key === 'Enter') {
        addTask();
      }
    });
  
    // 4. Code for Loading Tasks from Local Storage
    function loadTasks() {
      taskList.innerHTML = ''; // Clear existing tasks
  
      tasks.forEach(task => {
        const listItem = document.createElement('li');
        listItem.textContent = task;
  
        const removeButton = document.createElement('button');
        removeButton.textContent = "Remove";
        removeButton.classList.add('remove-btn');
  
        removeButton.addEventListener('click', () => {
          taskList.removeChild(listItem);
          tasks = tasks.filter(t => t !== task);
          localStorage.setItem('tasks', JSON.stringify(tasks));
        });
  
        listItem.appendChild(removeButton);
        taskList.appendChild(listItem);
      });
    }
  });

  document.addEventListener('DOMContentLoaded', () => {
    // 2. Select DOM Elements
    const addButton = document.getElementById('add-button');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');
  
    // 1. Load Tasks from Local Storage
    loadTasks();
  
    // 3. Create the addTask Function
    function addTask(taskText, save = true) {
      // 4. Task Creation and Removal
      const listItem = document.createElement('li');
      listItem.textContent = taskText;
  
      const removeButton = document.createElement('button');
      removeButton.textContent = "Remove";
      removeButton.classList.add('remove-btn');
  
      removeButton.addEventListener('click', () => {
        taskList.removeChild(listItem);
        removeTask(taskText); // Call removeTask function
      });
  
      listItem.appendChild(removeButton);
      taskList.appendChild(listItem);
  
      // 5. Saving Tasks to Local Storage
      if (save) {
        saveTask(taskText);
      }
    }
  
    // 5. Saving Tasks to Local Storage
    function saveTask(taskText) {
      const storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
      storedTasks.push(taskText);
      localStorage.setItem('tasks', JSON.stringify(storedTasks));
    }
  
    // 5. Saving Tasks to Local Storage
    function removeTask(taskText) {
      const storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
      const updatedTasks = storedTasks.filter(task => task !== taskText);
      localStorage.setItem('tasks', JSON.stringify(updatedTasks));
    }
  
    // 1. Load Tasks from Local Storage
    function loadTasks() {
      const storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
      storedTasks.forEach(taskText => addTask(taskText, false)); // Add existing tasks without saving to avoid duplication
    }
  
    // 5. Attach Event Listeners
    addButton.addEventListener('click', () => {
      const taskText = taskInput.value.trim();
      addTask(taskText);
      taskInput.value = "";
    });
  
    taskInput.addEventListener('keypress', (event) => {
      if (event.key === 'Enter') {
        const taskText = taskInput.value.trim();
        addTask(taskText);
        taskInput.value = "";
      }
    });
  });

  document.addEventListener('DOMContentLoaded', () => {
    // 2. Select DOM Elements
    const addButton = document.getElementById('add-button');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');
  
    // 1. Load Tasks from Local Storage
    loadTasks();
  
    // 3. Create the addTask Function
    function addTask(taskText) {
      // 4. Task Creation and Removal
      const listItem = document.createElement('li');
      listItem.textContent = taskText;
  
      const removeButton = document.createElement('button');
      removeButton.textContent = "Remove";
      removeButton.classList.add('remove-btn');
  
      removeButton.addEventListener('click', () => {
        taskList.removeChild(listItem);
        removeTask(taskText); // Call removeTask function
      });
  
      listItem.appendChild(removeButton);
      taskList.appendChild(listItem);
  
      // 5. Saving Tasks to Local Storage
      saveTask(taskText);
    }
  
    // 5. Saving Tasks to Local Storage
    function saveTask(taskText) {
      const storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
      storedTasks.push(taskText);
      localStorage.setItem('tasks', JSON.stringify(storedTasks));
    }
  
    // 5. Saving Tasks to Local Storage
    function removeTask(taskText) {
      const storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
      const updatedTasks = storedTasks.filter(task => task !== taskText);
      localStorage.setItem('tasks', JSON.stringify(updatedTasks));
    }
  
    // 1. Load Tasks from Local Storage
    function loadTasks() {
      const storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
      storedTasks.forEach(taskText => addTask(taskText));
    }
  
    // 5. Attach Event Listeners
    addButton.addEventListener('click', () => {
      const taskText = taskInput.value.trim();
      addTask(taskText);
      taskInput.value = "";
    });
  
    taskInput.addEventListener('keypress', (event) => {
      if (event.key === 'Enter') {
        const taskText = taskInput.value.trim();
        addTask(taskText);
        taskInput.value = "";
      }
    });
  });