function BookmarkList(props) {
  // GET LIST OF BOOKMARK THROUGH API CALL
  let filename = props.filename;
  let [response_data, setResponse_data] = React.useState([]);

  React.useEffect(() => {
    URL = "/list_bookmark?filename=" + filename;

    fetch(URL)
      .then((response) => response.json())
      .then((response) => {
        // Do something with response.

        setResponse_data(response.slice(0, -1)); //remove the last element
      });
  },[]); //AN EMPTY ARRY TO MAKE USEEFFECT TO RUN ONCE AND BEHAVE LIKE COMPONENTDIDMOUNT
  // When using useEffect with a second array argument, React will run the callback after mounting (initial render)
  //  and after values in the array have changed. Since we pass an empty array, it will run only after mounting

  function send_timestamp(e) {
    let timestamp_value = e.target.attributes.data_timestamp.value;
    props.bookmark_seek(timestamp_value);
  }

  return (
    <ul>
      {response_data.map((element, index) => (
        <li key={index} onClick={send_timestamp}>
          <a href="#" data_timestamp={element.split(",")[1]}>
            {element.split(",")[0]}
          </a>
        </li>
      ))}
    </ul>
  );
}
