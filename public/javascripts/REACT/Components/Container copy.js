function Container(props) {
  const [slider_value, setSlider_value] = React.useState(0);
  const [bookmark_timestam,setBookmark_timestamp]=React.useState([null,0])

  //   AUDIO FILENAME
  let filename = props.filename;

  //THIS IS FOR MANUAL SLIDER MOVEMENT
  function slider_handler(newValue) {
    setSlider_value(newValue);
  }

  function save_bookmark(bookmark_name, timestamp) {
    //API call to TO SAVE IT IN SERVER
    if(bookmark_name!==null){

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
          // if(bookmark_name!==null)
            alert("Bookmark created successfully");
            
          
          setBookmark_timestamp([bookmark_name,timestamp])
        }
      });
    }
    // fetch("/create_bookmark", {
    //   method: "POST",
    //   body: JSON.stringify({
    //     filename: filename,
    //     bookmark_name: bookmark_name,
    //     timestamp: timestamp,
    //   }),
    //   headers: {
    //     "Content-type": "application/json; charset=UTF-8",
    //   },
    // }).then((response) => {
    //   const status = response.status;
    //   console.log("status = ", status);

    //   if (status !== 200) {
    //     alert("error occured writing to bookmark record");
    //   } else {
    //     // if(bookmark_name!==null)
    //       alert("Bookmark created successfully");
          
        
    //     setBookmark_timestamp([bookmark_name,timestamp])
    //   }
    // });
  }

  // SEEK PROGRESSBAR AND AUDIO IF BOOKMARK IS CLICK
  function bookmark_seek(timestamp) {
    setSlider_value(parseInt(timestamp));
  }

  // RESET BOOKMARK_TIMESTAMP TO STOP RERENDERING BOOKMARK_LIST
  function reset_bookmark_timestamp() {
    setBookmark_timestamp([null,0])
  }
  
  return (
    <div>
      <SelectAudio />
      <p>Refresh the page if input file changed</p>
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
        sound={props.sound}
      />
      <br></br>
      <BookmarkCreator
        timestamp={slider_value}
        save_bookmark={save_bookmark}
        filename={props.filename}
      />
      
      <br></br>
      {/* <BookmarkList filename={props.filename} sound={props.sound} /> */}
      <p>Bookmark drildown will only work when audio is paused</p>
      <BookmarkList filename={props.filename} bookmark_timestamp={bookmark_timestam} reset_bookmark_timestamp={reset_bookmark_timestamp} bookmark_seek={bookmark_seek} />
    </div>
  );
}