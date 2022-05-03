function ProgressBar(props) {
  // const [value, setValue] = React.useState(0);

  const collect_value = (event, newvalue) => {
    props.value(newvalue);
  };

  return (
    <div>
      <Slider onChange={collect_value} />
    </div>
  );
}

// BELOW IS ALSO WORKING

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
