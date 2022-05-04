// const [value, setValue] = React.useState(0);

var sound = new Howl({
  src: ["../../AUDIO/origin.mp3"],
  html5: true,
});

// GET FILENAME
let filename = sound._src.split("/").pop();

const rootelement = document.getElementById("root");
const root = ReactDOM.createRoot(rootelement);
root.render(
  <div>
    <Container sound={sound} filename={filename} />
  </div>
);
