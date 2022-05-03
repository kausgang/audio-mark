function Container(props) {
  // const [value, setValue] = React.useState(0);
  const [slider_value,setSlider_value]=React.useState(0)
  const [audio_value,setAudio_value]=React.useState(0)

  //THIS IS FOR MANUAL SLIDER MOVEMENT
  function slider_handler(newValue) {
    // setValue(newValue);
    setSlider_value(newValue)
    // IF MANUALLY SLIDER MOVED, THE SONG SHOULD SEEK
    // update_slider(newValue)
    // setAudio_value(newValue)
  }

  // // THIS IS FOR PLAYBACK SLIDER MOVEMENT
  // function update_slider(newValue){
  //   // setSlider_value(newValue)
  //   console.log("here")
  // }

  return (
    <div>
      {/* SEND THE SOUND VARIABLE TO IT'S CHILDREN */}
      <ProgressBar sound={props.sound} slider_move={slider_handler} current_seek={slider_value} />
      {/* SHOW THE SLIDER VALUE */}
      <p>{slider_value}</p>
      <PlaybackControl seek_progressbar={slider_handler} current_seek={slider_value} audio_value={audio_value} sound={props.sound}/>
      {/* <PlaybackControl  current_seek={slider_value} sound={props.sound}/> */}
    </div>
  );
}
