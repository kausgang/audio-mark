function Container(props) {

  const [slider_value,setSlider_value]=React.useState(0)
  const [audio_value,setAudio_value]=React.useState(0)

  //THIS IS FOR MANUAL SLIDER MOVEMENT
  function slider_handler(newValue) {

    setSlider_value(newValue)

  }


  function save_bookmark(name){
    console.log(name)
    //API call to TO SAVE IT IN SERVER
  }

  return (
    <div>
      {/* SEND THE SOUND VARIABLE TO IT'S CHILDREN */}
      <ProgressBar sound={props.sound} slider_move={slider_handler} current_seek={slider_value} />
      {/* SHOW THE SLIDER VALUE */}
      <p>{slider_value}</p>
      <PlaybackControl seek_progressbar={slider_handler} current_seek={slider_value} audio_value={audio_value} sound={props.sound}/>
      <br></br>
      <BookmarkCreator timestamp={slider_value} save_bookmark={save_bookmark}/>
    </div>
  );
}
