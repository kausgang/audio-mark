
function PlaybackControl(props) {

  let sound = props.sound
  // initialize timestamp to 0 second
  const [timestamp, setTimestamp] = React.useState(0);
  const [playing,setPlaying]= React.useState(false)
  
  // let intervalID = 0
 

  // MOVING SLIDER WILL UPDATE CURRENTSEEK AND RERENDER PLAYBACK
  React.useEffect(()=>{

    setTimestamp(props.current_seek)
    // sound.seek(timestamp)
  })


  const play = () => {

    let intervalID = 0

    // // GET CURRENT SEEK TIME FROM PARENT
    // setTimestamp(props.current_seek)
    // console.log('timestamp = ',timestamp)
    
    // seek
    // sound.seek(timestamp);
    // start playback
    // sound.play();




    // // START THE PLAYBACK COUNTER
    // intervalID=setInterval(() => {    
    //   // CALL THE PARENT SEEK FUNCTION TO UPDATE SLIDER
    //     props.seek_progressbar(Math.round(sound.seek()))
    // }, 1000); //do it every 1 second


    // UPDATE TIMESTAMP ONLY WHEN IT IS PLAYING
    let button_class = document.getElementById("play_pause").getAttribute('class')
    
    if(button_class==='playing') //now i can only pause it
    {
      // CLEAR INTERVAL
      clearInterval(intervalID) 
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
      
      // START THE PLAYBACK COUNTER
      intervalID = setInterval(() => {    
      // CALL THE PARENT SEEK FUNCTION TO UPDATE SLIDER
        props.seek_progressbar(Math.round(sound.seek()))
    }, 1000); //do it every 1 second


      // PLAY MUSIC
      sound.play()
      //CHANGE CLASSNAME
      document.getElementById("play_pause").setAttribute('class','playing')
    }

    // CHANGE BUTTON TEXT 
    playing?setPlaying(false):setPlaying(true)
  };


  const stop = () => {
    sound.stop();
  };

  const seek10 = () => {
    // get the current time
    const time = sound.seek();
    // stop the playback
    sound.stop();
    // seek
    sound.seek(time + 10);
    // start playback
    sound.play();
    // show timestamp
    setInterval(() => {
      // update timestamp variable
      setTimestamp(() => {
        //roundup the seek value to show passed seconds
        return Math.round(sound.seek());
      });
    }, 1000);
  };

  return (
    <div>
      {/* <br></br> */}
      {/* <p>{timestamp}</p> */}
      {/* <br></br> */}
      <button id="play_pause" className='paused' onClick={play}>Click to {playing?'Pause':'Play'}</button>
      {/* <button onClick={pause}>Click to pause</button> */}
      <button onClick={stop}>Click to stop</button>
      <button onClick={seek10}>Forward 10sec</button>
    </div>
  );
}

// export default App;
