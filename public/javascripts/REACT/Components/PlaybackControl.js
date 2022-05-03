
function PlaybackControl(props) {

  let sound = props.sound
  // initialize timestamp to 0 second
  const [timestamp, setTimestamp] = React.useState(0);
  const [playing,setPlaying]= React.useState(false)

 

  // MOVING SLIDER WILL UPDATE CURRENTSEEK AND RERENDER PLAYBACK
  React.useEffect(()=>{

    setTimestamp(props.current_seek)
    
    
    if(playing){
      
      setTimeout(() => {
        props.seek_progressbar(Math.round(sound.seek()))
      }, 1000);
    }


  })


  const play = () => {

    // let intervalID = 0

    


    // UPDATE TIMESTAMP ONLY WHEN IT IS PLAYING
    let button_class = document.getElementById("play_pause").getAttribute('class')
    
    if(button_class==='playing') //now i can only pause it
    {
      // CLEAR INTERVAL
      // clearInterval(intervalID) 
      // PAUSE THE MUSIC
      sound.pause()
      //CHANGE CLASSNAME
      document.getElementById("play_pause").setAttribute('class','paused')
    }
    else 
    {
      // GET CURRENT SEEK TIME FROM PARENT
      setTimestamp(props.current_seek)
      // SEEK TO TMESTAMP
      sound.seek(timestamp);
      



      // PLAY MUSIC
      sound.play()
      //CHANGE CLASSNAME TO RERENDER COMPONENT
      document.getElementById("play_pause").setAttribute('class','playing')
    }

    // CHANGE BUTTON TEXT 
    playing?setPlaying(false):setPlaying(true)
  };


  const back1sec = () => {


    // GET CURRENT SEEK TIME FROM PARENT
    setTimestamp(props.current_seek)
    // SEEK TO TMESTAMP
    sound.seek(timestamp-1);

    // UPDATE THE SEEK COUNTER IN PROGRESS BAR
    props.seek_progressbar(timestamp-1)

  
  };


  const back10sec = () => {


    // GET CURRENT SEEK TIME FROM PARENT
    setTimestamp(props.current_seek)
    // SEEK TO TMESTAMP
    sound.seek(timestamp-10);

    // UPDATE THE SEEK COUNTER IN PROGRESS BAR
    props.seek_progressbar(timestamp-10)

  
  };

  const back60sec = () => {


    // GET CURRENT SEEK TIME FROM PARENT
    setTimestamp(props.current_seek)
    // SEEK TO TMESTAMP
    sound.seek(timestamp-60);

    // UPDATE THE SEEK COUNTER IN PROGRESS BAR
    props.seek_progressbar(timestamp-60)

  
  };

  const forward1sec = () => {


    // GET CURRENT SEEK TIME FROM PARENT
    setTimestamp(props.current_seek)
    // SEEK TO TMESTAMP
    sound.seek(timestamp+1);

    // UPDATE THE SEEK COUNTER IN PROGRESS BAR
    props.seek_progressbar(timestamp+1)

  
  };


  const forward10sec = () => {


    // GET CURRENT SEEK TIME FROM PARENT
    setTimestamp(props.current_seek)
    // SEEK TO TMESTAMP
    sound.seek(timestamp+10);

    // UPDATE THE SEEK COUNTER IN PROGRESS BAR
    props.seek_progressbar(timestamp+10)

  
  };

  const forward60sec = () => {


    // GET CURRENT SEEK TIME FROM PARENT
    setTimestamp(props.current_seek)
    // SEEK TO TMESTAMP
    sound.seek(timestamp+60);

    // UPDATE THE SEEK COUNTER IN PROGRESS BAR
    props.seek_progressbar(timestamp+60)

  
  };

  return (
    <div>
      {/* <br></br> */}
      {/* <p>{timestamp}</p> */}
      {/* <br></br> */}
      <button onClick={back1sec}>Back 1sec</button>
      <button onClick={back10sec}>Back 10sec</button>
      <button onClick={back60sec}>Back 1min</button>


      <button id="play_pause" className='paused' onClick={play}>Click to {playing?'Pause':'Play'}</button>
      {/* <button onClick={pause}>Click to pause</button> */}
      {/* <button onClick={stop}>Click to stop</button> */}
      <button onClick={forward1sec}>Forward 1sec</button>
      <button onClick={forward10sec}>Forward 10sec</button>
      <button onClick={forward60sec}>Forward 1min</button>
    </div>
  );
}

// export default App;
