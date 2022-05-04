function BookmarkList(props) {
  // GET LIST OF BOOKMARK THROUGH API CALL
  let filename = props.filename;
  let bookmark_names = [],bookmark_timestamps=[]
  let list,listItems;

  const [bookmark,setBookmark]=React.useState([])
  // const [listItems,setListItems]=React.useState([])


  React.useEffect(()=>{

    URL = "/list_bookmark?filename=" + filename;

  fetch(URL)
    .then((response) => response.json())
    .then((response) => {
      // Do something with response.
      console.log(response)
    for(let i=0;i<(response.length-1);i++){


      bookmark_names.push(response[i].split(',')[0])
      bookmark_timestamps.push(response[i].split(',')[1])

      
    }

    setBookmark(bookmark_names)

    console.log(bookmark_names)

   
    });

  },[]) //AN EMPTY ARRY TO MAKE USEEFFECT TO RUN ONCE AND BEHAVE LIKE COMPONENTDIDMOUNT
  // When using useEffect with a second array argument, React will run the callback after mounting (initial render)
  //  and after values in the array have changed. Since we pass an empty array, it will run only after mounting


 





  return <div>{list}</div> ;
}
