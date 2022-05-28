function PlaybackControl(props) {
  let sound = props.sound;
  // initialize timestamp to 0 second
  const [timestamp, setTimestamp] = React.useState(0);
  const [playing, setPlaying] = React.useState(false);

  // MOVING SLIDER WILL UPDATE CURRENTSEEK AND RERENDER PLAYBACK
  React.useEffect(() => {
    setTimestamp(props.current_seek);

    if (playing) {
      setTimeout(() => {
        // props.seek_progressbar(Math.round(sound.seek()));
        props.seek_progressbar(sound.seek());
      }, 1000);
    }

    // if (playing) {
    //   props.seek_progressbar(Math.round(sound.seek()));
    // }

    // // BOOKARK SEEK HAS BEEN CLICKED
    // if (props.audio_value !== null) {
    //   console.log("audio_value=", props.audio_value);
    //   // GET CURRENT SEEK TIME FROM PARENT
    //   setTimestamp(props.audio_value);
    //   // SEEK TO TMESTAMP
    //   sound.seek(timestamp);

    //   // UPDATE THE SEEK COUNTER IN PROGRESS BAR
    //   props.seek_progressbar(timestamp);
    // }
  });

  const play = () => {
    // let intervalID = 0

    // UPDATE TIMESTAMP ONLY WHEN IT IS PLAYING
    let button_class = document
      .getElementById("play_pause")
      .getAttribute("class");

    if (button_class === "playing btn btn-primary") {
      //now i can only pause it
      // CLEAR INTERVAL
      // clearInterval(intervalID)
      // PAUSE THE MUSIC
      sound.pause();

      // Change Icon
      document.getElementById("play_icon").innerHTML = "play_arrow";

      //CHANGE CLASSNAME
      document
        .getElementById("play_pause")
        .setAttribute("class", "paused btn btn-primary");
    } else {
      // GET CURRENT SEEK TIME FROM PARENT
      setTimestamp(props.current_seek);
      // SEEK TO TMESTAMP
      sound.seek(timestamp);

      // PLAY MUSIC
      sound.play();

      // Change Icon
      document.getElementById("play_icon").innerHTML = "pause";

      //CHANGE CLASSNAME TO RERENDER COMPONENT
      document
        .getElementById("play_pause")
        .setAttribute("class", "playing btn btn-primary");
    }

    // CHANGE BUTTON TEXT
    playing ? setPlaying(false) : setPlaying(true);
  };

  const back1sec = () => {
    // GET CURRENT SEEK TIME FROM PARENT
    setTimestamp(props.current_seek);
    // SEEK TO TMESTAMP
    sound.seek(timestamp - 1);

    // UPDATE THE SEEK COUNTER IN PROGRESS BAR
    props.seek_progressbar(timestamp - 1);
  };

  const back10sec = () => {
    // GET CURRENT SEEK TIME FROM PARENT
    setTimestamp(props.current_seek);
    // SEEK TO TMESTAMP
    sound.seek(timestamp - 10);

    // UPDATE THE SEEK COUNTER IN PROGRESS BAR
    props.seek_progressbar(timestamp - 10);
  };

  const back60sec = () => {
    // GET CURRENT SEEK TIME FROM PARENT
    setTimestamp(props.current_seek);
    // SEEK TO TMESTAMP
    sound.seek(timestamp - 60);

    // UPDATE THE SEEK COUNTER IN PROGRESS BAR
    props.seek_progressbar(timestamp - 60);
  };

  const forward1sec = () => {
    // GET CURRENT SEEK TIME FROM PARENT
    setTimestamp(props.current_seek);
    // SEEK TO TMESTAMP
    sound.seek(timestamp + 1);

    // UPDATE THE SEEK COUNTER IN PROGRESS BAR
    props.seek_progressbar(timestamp + 1);
  };

  const forward10sec = () => {
    // GET CURRENT SEEK TIME FROM PARENT
    setTimestamp(props.current_seek);
    // SEEK TO TMESTAMP
    sound.seek(timestamp + 10);

    // UPDATE THE SEEK COUNTER IN PROGRESS BAR
    props.seek_progressbar(timestamp + 10);
  };

  const forward60sec = () => {
    // GET CURRENT SEEK TIME FROM PARENT
    setTimestamp(props.current_seek);
    // SEEK TO TMESTAMP
    sound.seek(timestamp + 60);

    // UPDATE THE SEEK COUNTER IN PROGRESS BAR
    props.seek_progressbar(timestamp + 60);
  };

  const _1x_speed = () => {
    sound.rate(1);
  };
  const _1_25x_speed = () => {
    sound.rate(1.25);
  };
  const _1_5x_speed = () => {
    sound.rate(1.5);
  };
  const _1_75x_speed = () => {
    sound.rate(1.75);
  };
  // 2X speed
  const _2x_speed = () => {
    sound.rate(2);
  };
  // return (
  //   <div>
  //     {/* <br></br> */}
  //     {/* <p>{timestamp}</p> */}
  //     {/* <br></br> */}

  //     <button onClick={back60sec}>Back 1min</button>
  //     <button onClick={back10sec}>Back 10sec</button>
  //     <button onClick={back1sec}>Back 1sec</button>

  //     {/* <button id="play_pause" className="paused" onClick={play}>
  //       Click to {playing ? "Pause" : "Play"}
  //     </button>
  //      */}

  //     <button id="play_pause" className="paused" onClick={play}>
  //       <span class="material-symbols-rounded">play_pause</span>
  //       {/* Click to {playing ? "Pause" : "Play"} */}
  //     </button>

  //     {/* <button onClick={pause}>Click to pause</button> */}
  //     {/* <button onClick={stop}>Click to stop</button> */}
  //     <button onClick={forward1sec}>Forward 1sec</button>
  //     <button onClick={forward10sec}>Forward 10sec</button>
  //     <button onClick={forward60sec}>Forward 1min</button>
  //   </div>
  // );

  return (
    <div>
      <div className="btn-group" role="group" aria-label="Basic example">
        {/* back 60 sec */}
        <button type="button" className="btn btn-secondary" onClick={back60sec}>
          <span className="material-symbols-rounded">arrow_back</span>
        </button>
        {/* back 10 sec */}
        <button type="button" className="btn btn-secondary" onClick={back10sec}>
          <span className="material-symbols-rounded">
            keyboard_double_arrow_left
          </span>
        </button>
        {/* back 1 sec */}
        <button type="button" className="btn btn-secondary" onClick={back1sec}>
          <span className="material-symbols-rounded">keyboard_arrow_left</span>
        </button>
      </div>

      <div className="btn-group" role="group" aria-label="Basic example">
        <button
          id="play_pause"
          className="paused btn btn-primary"
          onClick={play}
        >
          <span id="play_icon" className="material-symbols-rounded">
            play_arrow
          </span>
        </button>
      </div>

      <div className="btn-group" role="group" aria-label="Basic example">
        {/* forward 1 sec */}
        <button
          type="button"
          className="btn btn-secondary"
          onClick={forward1sec}
        >
          <span className="material-symbols-rounded">keyboard_arrow_right</span>
        </button>
        {/* forward 10 sec */}
        <button
          type="button"
          className="btn btn-secondary"
          onClick={forward10sec}
        >
          <span className="material-symbols-rounded">
            keyboard_double_arrow_right
          </span>
        </button>
        {/* forward 60 sec */}
        <button
          type="button"
          className="btn btn-secondary"
          onClick={forward60sec}
        >
          <span className="material-symbols-rounded">arrow_right_alt</span>
        </button>
      </div>

      <div className="btn-group" role="group" aria-label="Basic example">
        {/* speed control */}
        <button
          id="play_pause"
          className="paused btn btn-warning"
          onClick={_1x_speed}
        >
          {/* {" "} */}
          1x
        </button>
        <button
          id="play_pause"
          className="paused btn btn-warning"
          onClick={_1_25x_speed}
        >
          {" "}
          1.25x
        </button>
        <button
          id="play_pause"
          className="paused btn btn-warning"
          onClick={_1_5x_speed}
        >
          {" "}
          1.5x
        </button>
        <button
          id="play_pause"
          className="paused btn btn-warning"
          onClick={_1_75x_speed}
        >
          {" "}
          1.75x
        </button>
        <button
          id="play_pause"
          className="paused btn btn-warning"
          onClick={_2x_speed}
        >
          {" "}
          2x
        </button>
      </div>
    </div>
  );
}

// export default App;
