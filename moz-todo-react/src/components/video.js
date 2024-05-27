import React,  { useState, useRef, useEffect } from "react";
import videojs from "video.js";
// Forest
import "video.js/dist/video-js.css";
import '@videojs/themes/forest/index.css';



function VideoForest(props) {
    const { } = props;
    const videoRef = useRef(null);
    const playerRef = useRef<any>(null);
    const [option, setOptopm] = useState({});
  
    const onReadyPlay = (palyer) => {
      videoRef.current = palyer
      palyer.play();
    }

    const init = () => {
        let _option = {
          controls: true,
          autoplay: false,//加载完成是否自动播放
          loop: false,//视频播放结束后，是否循环播放
          notSupportedMessage: '此视频暂无法播放，请稍后再试',
          poster: 'https://t7.baidu.com/it/u=1819248061,230866778&fm=193&f=GIF',//视频封面
          controlBar: {
            // timeDivider: true,//是否显示时间控制条，默认为true
            // remainingTimeDisplay: false,//是否显示剩余时间，默认为true
            // fullscreenToggle: true // 全屏按钮
            children: [//自定义
              { name: 'playToggle' }, // 播放按钮
              {
                name: 'volumePanel', // 音量控制
                inline: false, // 不使用水平方式
              },
              { name: 'currentTimeDisplay' }, // 当前已播放时间
              { name: 'durationDisplay' }, // 总时间
              { name: 'progressControl' }, // 播放进度条
              {
                name: 'pictureInPictureToggle'//支持画中画
              },
              {
                name: 'FullscreenToggle'//支持全屏
              }
            ]
          }
    
        }
    
    return (
        <video src="http://vjs.zencdn.net/v/oceans.mp4">
            {/* <source src="https://storage.googleapis.com/videojs-vhs/videojs-vhs-trailer.mp4" />
            <track kind="captions" src="https://storage.googleapis.com/videojs-vhs/videojs-vhs-trailer.en.vtt" />
            <track kind="subtitles" src="https://storage.googleapis.com/videojs-vhs/videojs-vhs-trailer.en.vtt" />
            <p className="vjs-no-js">To view this video please enable JavaScript, and consider upgrading to a web browser that supports HTML5 Video</p><source src="https://storage.googleapis.com/videojs-vhs/videojs-vhs-trailer.mp4" />
            <track kind="captions" src="https://storage.googleapis.com/videojs-vhs/videojs-vhs-trailer.en.vtt" />
            <track kind="subtitles" src="https://storage.googleapis.com/videojs-vhs/videojs-vhs-trailer.en.vtt" />
            <p className="vjs-no-js">To view this video please enable JavaScript, and consider upgrading to a web browser that supports HTML5 Video</p> */}
             {/* <source src={`http://vjs.zencdn.net/v/oceans.mp4`} type="video/mp4" /> */}
        </video>
    );
  }
}
  
export default VideoForest;