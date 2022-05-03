
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


  // const stop = () => {
  //   let button_class = document.getElementById("play_pause").getAttribute('class')
    
  //   if(button_class==='playing') //now i can only pause it
  //   {document.getElementById("play_pause").setAttribute('class','paused')}
    
  //   // CHANGE BUTTON TEXT 
  //   // playing?setPlaying(false):setPlaying(true)
  //   console.log("playing = " , playing)
  //   setPlaying(false)

  //   // SEEK TO 0
  //   sound.seek(0)
  //   // props.seek_progressbar(sound.seek(0))

  //   sound.stop();
  // };

  const seek10 = () => {


    // GET CURRENT SEEK TIME FROM PARENT
    setTimestamp(props.current_seek)
    // SEEK TO TMESTAMP
    sound.seek(timestamp+10);

    // UPDATE THE SEEK COUNTER IN PROGRESS BAR
    props.seek_progressbar(timestamp+10)

  
  };

  return (
    <div>
      {/* <br></br> */}
      {/* <p>{timestamp}</p> */}
      {/* <br></br> */}
      <button id="play_pause" className='paused' onClick={play}>Click to {playing?'Pause':'Play'}</button>
      {/* <button onClick={pause}>Click to pause</button> */}
      {/* <button onClick={stop}>Click to stop</button> */}
      <button onClick={seek10}>Forward 10sec</button>
    </div>
  );
}

// export default App;
