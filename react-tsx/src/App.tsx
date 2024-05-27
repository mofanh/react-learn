import React,{ useState } from 'react';
import Todo from "./components/Todo";
import Form from "./components/Form";
import FilterButton from "./components/FilterButton";
import VideoJS from './components/VideoJS';


interface task {
  id: number;
  name: string;
  completed: boolean;
}

interface AppProps {
  tasks: task[];
}

function App(props:AppProps) {
  const taskList = props.tasks?.map((task) => {
    return <Todo id={task.id} name={task.name} completed={task.completed} key={task.id} />;
  });

  function addTask(name: unknown) {
      alert(name);
  }

  return (
    <div className="todoapp stack-large">
      <h1>TodoMatic</h1>
      <Form addTask={addTask}/>
      <div className="filters btn-group stack-exception">
        <FilterButton />
        <FilterButton />
        <FilterButton />
      </div>
      <h2 id="list-heading">3 tasks remaining</h2>
      <ul
        role="list"
        className="todo-list stack-large stack-exception"
        aria-labelledby="list-heading">
        {taskList}
      </ul>
        <div>
        <VideoJS  
          options={{
            autoplay: true,
            controls: true,
            sources: [{
              type: "video/mp4",
              src: "http://vjs.zencdn.net/v/oceans.mp4",
            }]
          }} onReadyPlay={undefined}/>
        </div>
    </div>
  );
}


export default App;

