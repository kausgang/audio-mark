// const [value, setValue] = React.useState(0);

// const [audio, setAudio] = React.useState('');

var sound = new Howl({
  src: ["../../AUDIO/2.mp3"],
  html5: true,
});

function select_audio(selected_song) {
  // setAudio(selected_song)
}
// var sound = new Howl({
//   src: {audio},
//   html5: true,
// });

// GET FILENAME
let filename = sound._src.split("/").pop();
console.log(filename)

const rootelement = document.getElementById("root");
const root = ReactDOM.createRoot(rootelement);
root.render(
  <div>
    <SelectAudio select_audio={select_audio}/>
    <Container sound={sound} filename={filename} />
  </div>
);
