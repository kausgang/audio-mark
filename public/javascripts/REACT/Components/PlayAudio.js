function PlayAudio(props) {

  const [slider_value, setSlider_value] = React.useState(0);

  let sound=props.sound

    //THIS IS FOR MANUAL SLIDER MOVEMENT
    function slider_handler(newValue) {
      setSlider_value(newValue);
    }

    
  return (
    <div>
      <br></br>
      <ProgressBar 
        sound={sound} 
        slider_move={slider_handler} 
        current_seek={slider_value} 
      />

      <br></br>
      <p>{slider_value}</p>

      <PlaybackControl
        seek_progressbar={slider_handler}
        current_seek={slider_value}
        sound={sound}
      />

      
    </div>
    
  )
}
