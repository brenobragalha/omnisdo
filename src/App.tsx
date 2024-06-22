import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { PlusCircleIcon } from '@heroicons/react/24/outline';

import { Header } from './components/Header';
import { Input } from './components/Input';
import { Button } from './components/Button';
import { ListHeader } from './components/List/Header';
import { Item } from './components/List/Item';
import { Empty } from './components/List/Empty';

import styles from './App.module.css';

export interface ITask {
  id: string;
  text: string;
  isChecked: boolean;
}

export function App() {
  const [tasks, setTasks] = useState<ITask[]>([]);
  const [inputValue, setInputValue] = useState('');

  const isNewInputEmpty = inputValue.length === 0;

  const checkedTasksCounter = tasks.reduce((acc, task) => {
    if (task.isChecked) {
      return acc + 1;
    }

    return acc;
  }, 0);

  function handleNewInputChange(event: React.ChangeEvent<HTMLInputElement>) {
    setInputValue(event.target.value);
  }

  function handleAddTask(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!inputValue) {
      return;
    }

    const newTask: ITask = {
      id: uuidv4(),
      text: inputValue,
      isChecked: false,
    };

    setTasks((state) => [...state, newTask]);
    setInputValue('');
  }

  function handleRemoveTask(id: string) {
    const filteredTasks = tasks.filter((task) => task.id !== id);

    if (!confirm('Are you sure you want to delete this task?')) {
      return;
    }

    setTasks(filteredTasks);
  }

  function handleToggleTask({ id, value }: { id: string; value: boolean }) {
    const updatedTasks = tasks.map((task) => {
      if (task.id === id) {
        return { ...task, isChecked: value };
      }

      return { ...task };
    });

    setTasks(updatedTasks);
  }

  return (
    <main>
      <Header />

      <section className={styles.wrapper}>
        <form className={styles.taskInfoContainer} onSubmit={handleAddTask}>
          <Input
            onChange={handleNewInputChange}
            value={inputValue}
            type="text"
            required
          />
          <Button disabled={isNewInputEmpty}>
            Add <PlusCircleIcon className={styles.plusCircleIcon} />
          </Button>
        </form>

        <div className={styles.tasksList}>
          <ListHeader
            tasksCounter={tasks.length}
            checkedTasksCounter={checkedTasksCounter}
          />

          {tasks.length > 0 ? (
            <div className={styles.tasksList__items}>
              {tasks.map((task) => (
                <Item
                  key={task.id}
                  data={task}
                  removeTask={handleRemoveTask}
                  toggleTaskStatus={handleToggleTask}
                />
              ))}
            </div>
          ) : (
            <Empty />
          )}
        </div>
      </section>
    </main>
  );
}
