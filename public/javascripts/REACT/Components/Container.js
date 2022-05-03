function Container(props) {
  const [value, setValue] = React.useState(0);

  function handler(newValue) {
    setValue(newValue);
  }

  return (
    <div>
      <ProgressBar value={handler} sound={props.sound} />
      {/* SHOW THE SLIDER VALUE */}
      <p>{value}</p>
      <PlaybackControl />
    </div>
  );
}
