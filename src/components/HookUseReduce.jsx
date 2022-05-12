import React, { useReducer, useState } from 'react';

const HookUseReduce = () => {
  const [number, dispatchNumber] = useReducer((state, action) => {
    return Math.random(state);
  });

  const [taskText, setTaskText] = useState('');

  const initialTaks = [
    { id: 1, text: 'Fazendo uma coisa' },
    { id: 2, text: 'Fazendo outra coisa' },
  ];

  const taskReducert = (state, action) => {
    switch (action.type) {
      case 'ADD':
        setTaskText('');
        return [...state, { id: Math.random(), text: action.task }];

      case 'DELETE':
        return state.filter((task) => task.id !== action.id);

      default:
        break;
    }
  };

  const [tasks, dispatchTasks] = useReducer(taskReducert, initialTaks);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatchTasks({ type: 'ADD', task: taskText });
  };

  const removeTask = (id) => {
    dispatchTasks({ type: 'DELETE', id: id });
  };

  return (
    <div>
      <h2>HookUseReduce</h2>
      <p>Número: {number}</p>
      <button onClick={dispatchNumber}>Alterar número</button>
      <h3>Tarefas:</h3>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          onChange={(e) => setTaskText(e.target.value)}
          value={taskText}
        />
        <input type="submit" value="Enviar" />
      </form>
      {tasks.map((task) => (
        <li key={task.id} onDoubleClick={() => removeTask(task.id)}>
          {task.text}
        </li>
      ))}
      <hr />
    </div>
  );
};

export default HookUseReduce;
