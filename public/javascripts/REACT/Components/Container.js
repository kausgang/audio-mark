function Container(props) {
  const [slider_value, setSlider_value] = React.useState(0);
  const [audio_value, setAudio_value] = React.useState(0);
  //   AUDIO FILENAME
  let filename = props.filename;

  //THIS IS FOR MANUAL SLIDER MOVEMENT
  function slider_handler(newValue) {
    setSlider_value(newValue);
  }

  function save_bookmark(bookmark_name, timestamp) {
    //API call to TO SAVE IT IN SERVER
    fetch("/create_bookmark", {
      method: "POST",
      body: JSON.stringify({
        filename: filename,
        bookmark_name: bookmark_name,
        timestamp: timestamp,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    }).then((response) => {
      const status = response.status;
      console.log("status = ", status);

      if (status !== 200) {
        alert("error occured writing to bookmark record");
      } else {
        alert("Bookmark created successfully");
      }
    });
  }

  return (
    <div>
      {/* SEND THE SOUND VARIABLE TO IT'S CHILDREN */}
      <ProgressBar
        sound={props.sound}
        slider_move={slider_handler}
        current_seek={slider_value}
      />
      {/* SHOW THE SLIDER VALUE */}
      <p>{slider_value}</p>
      <PlaybackControl
        seek_progressbar={slider_handler}
        current_seek={slider_value}
        // audio_value={audio_value}
        sound={props.sound}
      />
      <br></br>
      <BookmarkCreator
        timestamp={slider_value}
        save_bookmark={save_bookmark}
        filename={props.filename}
      />
      <br></br>
      <BookmarkList filename={props.filename} />
    </div>
  );
}
