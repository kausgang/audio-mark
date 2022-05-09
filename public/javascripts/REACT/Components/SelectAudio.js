function SelectAudio(props) {
  const [audio, setAudio] = React.useState("");
  const [isDisabled, setIsDisabled] = React.useState(false);
  let menuitem = null;

  function handleChange(event) {
    let selected_song = event.target.value;
    setAudio(selected_song);

    setIsDisabled(true);

    // CREATE A DUMMY BOOKMARK FILE WHEN THE SUDIO IS SELECTED
    // URL = "/list_bookmark?filename=" + filename;
    // fetch(URL)
    // .then((response) => response.json())
    // .


    props.select_song(selected_song);
  }

  return (
    <FormControl id="song_selection" disabled={isDisabled} fullWidth>
      <InputLabel id="demo-simple-select-label">Song</InputLabel>
      <Select
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        value={audio}
        label="Song"
        onChange={handleChange}
      >
        {/* {props.mp3_files.map((mp3_file, index) => (
          <MenuItem key={index}>
            {mp3_files.substr(0, mp3_file.indexOf("."))}
          </MenuItem>
        ))} */}

        {props.mp3_files.map((mp3_file, index) => (
          <MenuItem key={index} value={"../../AUDIO/" + mp3_file}>
            {mp3_file.substr(0, mp3_file.indexOf("."))}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );

  // return (
  //   <FormControl id="song_selection" disabled={isDisabled} fullWidth>
  //     <InputLabel id="demo-simple-select-label">Song</InputLabel>
  //     <Select
  //       labelId="demo-simple-select-label"
  //       id="demo-simple-select"
  //       value={audio}
  //       label="Song"
  //       onChange={handleChange}
  //     >
  //       {/* <MenuItem value="../../AUDIO/1.mp3">Song 1</MenuItem>
  //       <MenuItem value="../../AUDIO/2.mp3">Song 2</MenuItem> */}
  //     </Select>
  //   </FormControl>
  // );
}
