function ProgressBar(props) {
  // COLLECT THE SOUND FILE TO FIND DURATION

  let sound = props.sound;
  const [duration, setDuration] = React.useState(0);
  // DO IT IN COMPONENT DIDMOUNT
  // sound.on("load", setDuration(sound.duration));

  const collect_value = (event, newvalue) => {
    props.value(newvalue);
  };

  // FIND OUT MAX DURATION OF THE AUDIO FILE AND SEND THAT AS PROPS TO SLIDER COMPONENT
  return (
    <div>
      <Slider max={500} onChange={collect_value} />{" "}
      {/* CHANGE 500 TO DURATION */}
    </div>
  );
}

// BELOW CODE SHOWS THE BASIC OPERATION IN CLASS BASED APPROACH

// class ProgressBar extends React.Component {
//   constructor(props) {
//     super(props);
//   }

//   collect_value = (e, newvalue) => {
//     this.props.value(newvalue);
//   };
//   render() {
//     return (
//       <div>
//         <Slider onChange={this.collect_value} />
//       </div>
//     );
//   }
// }
