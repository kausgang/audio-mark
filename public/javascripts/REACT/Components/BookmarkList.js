function BookmarkList(props) {
  // GET LIST OF BOOKMARK THROUGH API CALL
  let filename = props.filename;
  let [response_data,setResponse_data]=React.useState(null);
  // let sound=props.sound



  React.useEffect(()=>{

    URL = "/list_bookmark?filename=" + filename;

  fetch(URL)
    .then((response) => response.json())
    .then((response) => {
      // Do something with response.

      setResponse_data(response.slice(0, -1)) //remove the last element
   
    });

  },[]) //AN EMPTY ARRY TO MAKE USEEFFECT TO RUN ONCE AND BEHAVE LIKE COMPONENTDIDMOUNT
  // When using useEffect with a second array argument, React will run the callback after mounting (initial render)
  //  and after values in the array have changed. Since we pass an empty array, it will run only after mounting


  function give_timestamp(e) {
    let timestamp_value=e.target.attributes.data_timestamp.value
    console.log(timestamp_value)
    alert(timestamp_value)

    // props.bookmark_seek
    // console.log(e.target.attributes.data())
  }
 

function Createlist(props) {
  
  const response=props.response
  console.log(response)

  if(response===null)
  return null //for the initial render

  let listItems = response.map((element,index)=>


    <li key={index} onClick={give_timestamp}><a href="#"  data_timestamp={element.split(',')[1]}>{element.split(',')[0]}</a></li>

  );
  
  return (
    <div><ul>{listItems}</ul></div>
    
  );
  

}


  // return <Createlist response={response_data} sound={props.sound} />
  return <Createlist response={response_data}  />
    
}
