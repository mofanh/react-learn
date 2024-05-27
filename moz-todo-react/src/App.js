import React from "react";
import Todo from "./components/Todo";
import Form from "./components/Form";
import FilterButton from "./components/FilterButton";
import VideoForest from "./components/video";


function App(props) {
  const taskList = props.tasks?.map((task) => {
    return <Todo id={task.id} name={task.name} completed={task.completed} key={task.id} />;
  });

  function addTask(name) {
      alert(name);
  }

  const playerRef = React.useRef(null);

	const videoJsOptions = {
		// 自动播放：为true时，加载完毕自动播放
		autoplay: true,
		// 播放器子控件是否显示：为true时显示暂停、播放速率等按钮
		controls: true,
		// 响应性：为true时，播放视频进度条会自动移动
		responsive: true,
		// 流式布局：为true时尽可能大得填满父标签的剩余空间
		fluid: true,
		// 视频源
		sources: [{
			// 视频文件的路径，可以是一个前端相对路径、后台视频文件URL、直播源等
			src: 'http://vjs.zencdn.net/v/oceans.mp4',
			// 视频源类型
			type: 'video/mp4'
		}]
	};

	// 播放器实例化完成后的事件动作，注意！不是视频加载成功
	const handlePlayerReady = (player) => {
		playerRef.current = player;
		// 播放器的子事件在这里定义

		player.on("canplaythrough", () => {
	        console.log("视频加载完成！")
        });
        
		player.on("error", () => {
            console.log(`视频文件加载失败，请稍后重试！`);
        });
        
        player.on("stalled", () => {
            console.log(`网络异常，请稍后重试！`);
        });
	};


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
      {/* <VideoJS options={videoJsOptions} onReady={handlePlayerReady}/> */}
    </div>
  );
}


export default App;
