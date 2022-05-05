function SelectAudio(props) {

    const [audio, setAudio] = React.useState('');

    function handleChange(event)
    {
        
        let selected_song=event.target.value
        setAudio(selected_song);
        // alert(selected_song)
        props.select_song(selected_song)
    };

  return (
    <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Song1</InputLabel>
        <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={audio}
            label="Song"
            onChange={handleChange}
        >
            <MenuItem value="../../AUDIO/1.mp3">Song 1</MenuItem>
            <MenuItem value ="../../AUDIO/2.mp3">Song 2</MenuItem>
            {/* <MenuItem value={30}>Song 3</MenuItem> */}
        </Select>
    </FormControl>
  )
}

