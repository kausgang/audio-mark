function BookmarkCreator(props) {
  const create_bookmark = () => {
    // console.log(props.timestamp);
    // let name = prompt("What's the name for the Bookmark");
    let name = props.timestamp + " -  Seconds";
    props.save_bookmark(name, props.timestamp);
    // alert("Bookmark added")
  };
  return (
    <div>
      <button className="btn btn-success btn-lg" onClick={create_bookmark}>
        Create Bookmark
      </button>
    </div>
  );
}
