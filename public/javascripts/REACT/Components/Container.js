function Container() {
  const [value, setValue] = React.useState(0);

  function handler(newValue) {
    console.log("called");
    setValue(newValue);
  }

  return (
    <div>
      <ProgressBar value={handler} />
      <p>{value}</p>
    </div>
  );
}

// class Container extends React.Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       value: 0,
//     };
//   }

//   handler(newvalue) {
//     console.log("here");
//     this.setState({ value: newvalue });
//   }
//   render() {
//     return (
//       <div>
//         <ProgressBar value={this.handler} />
//         <p>value is {this.state.value}</p>
//       </div>
//     );
//   }
// }
