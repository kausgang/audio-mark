function SelectAudio(props) {
  const [audio, setAudio] = React.useState("");
  const [isDisabled, setIsDisabled] = React.useState(false);

  function handleChange(event) {
    let selected_song = event.target.value;
    setAudio(selected_song);

    setIsDisabled(true);
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
        <MenuItem value="../../AUDIO/1.mp3">Song 1</MenuItem>
        <MenuItem value="../../AUDIO/2.mp3">Song 2</MenuItem>
        {/* <MenuItem value={30}>Song 3</MenuItem> */}
      </Select>
    </FormControl>
  );
}
