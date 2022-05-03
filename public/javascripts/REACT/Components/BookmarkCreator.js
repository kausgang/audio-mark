function BookmarkCreator(props) {
  const create_bookmark = () => {
    console.log(props.timestamp);
    let name = prompt("What's the name for the Bookmark");
    props.save_bookmark(name);
    // alert("Bookmark added")
  };
  return (
    <div>
      <button onClick={create_bookmark}>Create Bookmark</button>
    </div>
  );
}
