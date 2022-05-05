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


  //ADD BOOKMARK TO THE LIST ONCE CREATE BOOKMARK IS CLICKED
  React.useEffect(()=>{
    if(props.bookmark_timestamp[0]!=null){
      let ul=document.getElementById('bookmark_list');
      // console.log(bookmark_list)
      let li = document.createElement("li");
      li.addEventListener("click",send_timestamp)
      var aTag = document.createElement('a');
      aTag.setAttribute('href',"#");
      aTag.innerText = props.bookmark_timestamp[0];
      aTag.setAttribute("data_timestamp",props.bookmark_timestamp[1])
      li.appendChild(aTag)

      //ADD OTHER ATTRIBUTES
      
      ul.appendChild(li);


      // RESET THE VALUE OF BOOKMARK_TIMESTAMP IN PARENT TO STOP RERENDERING
      props.reset_bookmark_timestamp()
    }
    
  })
    
  

  return (
    <ul id="bookmark_list">
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
