function BookmarkList(props) {
  // GET LIST OF BOOKMARK THROUGH API CALL
  filename = props.filename;

  let URL = "/list_bookmark?filename=" + filename;
  //   fetch(URL).then((response) => {
  //     console.log(response);
  //     const status = response.status;
  //     // console.log("status = ", status);

  //     if (status !== 200) {
  //       alert("error occured listing bookmarks");
  //     }
  //     // else {
  //     //   alert("Bookmark created successfully");
  //     // }
  //   });

  fetch(URL)
    .then((response) => response.json())
    .then((response) => {
      // Do something with response.
      console.log(response);
    });
  return <div>BookmarkList</div>;
}
