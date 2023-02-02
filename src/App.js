import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Context from './Context';
import generatorId from './scripts/generatorId'
import Home from './pages/Home';
import Detalis from './pages/Details';

function App() {

  const [inputVisibility, setInputVisibility] = React.useState(false);
  const [taskName, setTaskName] = React.useState('');
  const [modeling, setModeling] = React.useState([]);
  const [ready, setReady] = React.useState([]);
  const [progress, setProgress] = React.useState([]);
  const [completed, setCompleted] = React.useState([]);

  React.useEffect(() => {

    const modeling = localStorage.getItem('modeling') || '[]';
    const ready = localStorage.getItem('ready') || '[]';
    const progress = localStorage.getItem('progress') || '[]';
    const completed = localStorage.getItem('completed') || '[]';

    setModeling(JSON.parse(modeling));
    setReady(JSON.parse(ready));
    setProgress(JSON.parse(progress));
    setCompleted(JSON.parse(completed));
  }, [])

  React.useEffect(() => {
    localStorage.setItem('modeling', JSON.stringify(modeling));
    localStorage.setItem('ready', JSON.stringify(ready));
    localStorage.setItem('progress', JSON.stringify(progress));
    localStorage.setItem('completed', JSON.stringify(completed));
  }, [modeling, ready, progress, completed])

  const onVisibility = () => setInputVisibility(prev => !prev);

  const addingTasksToBacklog = () => {
    setModeling(prev => [...prev,
    {
      id: generatorId(),
      title: taskName,
      description: '',
      status: 'backlog'
    }
    ]);
    setTaskName('');
    setInputVisibility(false);
  }

  const addingItems = (obj) => {

    removingDuplicates(obj.id);

    switch (obj.status) {
      case 'backlog':
        setReady(prev => [
          ...prev,
          { ...obj, status: 'ready' }
        ])
        break
      case 'ready':
        setProgress(prev => [
          ...prev,
          { ...obj, status: 'progress' }
        ])
        break
      case 'progress':
        setCompleted(prev => [
          ...prev,
          { ...obj, status: 'finished' }
        ])
    }
  }

  const removingDuplicates = (id) => {
    const compilation = [setModeling, setReady, setProgress, setCompleted];
    compilation.map(func => (
      func(prev => prev.filter(item => item.id !== id))
    ))
  }

  return (
    <Context.Provider
      value={{
        modeling,
        ready,
        progress,
        addingItems
      }}
    >
      <Routes>
        <Route exact path='/kanban' element={
          <Home
            inputVisibility={inputVisibility}
            onVisibility={onVisibility}
            modeling={modeling}
            ready={ready}
            progress={progress}
            completed={completed}
            taskName={taskName}
            setTaskName={setTaskName}
            addingTasksToBacklog={addingTasksToBacklog}
          />
        }>
        </Route>

        <Route path='/kanban/tasks/:id' element={
          <Detalis
            modeling={modeling}
            ready={ready}
            progress={progress}
            completed={completed}
            setModeling={setModeling}
            setReady={setReady}
            setProgress={setProgress}
            setCompleted={setCompleted}
            removingDuplicates={removingDuplicates}
          />
        }>
        </Route>
      </Routes>

    </Context.Provider>
  );
}

export default App;