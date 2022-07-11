// const { async } = require("replace/bin/shared-options");

function BookmarkList(props) {
  // GET LIST OF BOOKMARK THROUGH API CALL
  let filename = props.filename;

  // let [response_data, setResponse_data] = React.useState([]);

  // React.useEffect(() => {
  //   URL = "/list_bookmark?filename=" + filename;

  //   console.log("here now")
  //   fetch(URL)
  //     .then((response) => response.json())
  //     .then((response) => {
  //       // Do something with response.

  //       setResponse_data(response.slice(0, -1)); //remove the last element
  //     });
  // },[]);

  //AN EMPTY ARRY TO MAKE USEEFFECT TO RUN ONCE AND BEHAVE LIKE COMPONENTDIDMOUNT
  // When using useEffect with a second array argument, React will run the callback after mounting (initial render)
  //  and after values in the array have changed. Since we pass an empty array, it will run only after mounting

  // const edit_bookmark = (e) => {
  const edit_bookmark = async (e) => {
    // capture the name user wants to give to the bookmark
    // let new_bookmark_name = prompt("Bookmark Name ?");
    const { value: new_bookmark_name } = await Swal.fire({
      title: "Update Bookmark",
      input: "text",
      inputLabel: "Enter the new Bookmark name",
      showCancelButton: true,
      icon: "warning",
      inputValidator: (value) => {
        if (!value) {
          return "You need to write something!";
        }
      },
    });

    let old_bookmark_name =
      e.target.parentNode.attributes.data_oldBookmarkName.value;

    // update bookmark name
    fetch("/update_bookmark", {
      method: "POST",
      body: JSON.stringify({
        filename: filename,
        old_bookmark_name,
        new_bookmark_name,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    }).then((response) => {
      const status = response.status;
      console.log("status = ", status);

      // if (status !== 200) {
      //   alert("error occured writing to bookmark record");
      // } else {
      //   // if(bookmark_name!==null)
      //   // alert("Bookmark created successfully");

      //   setBookmark_timestamp([bookmark_name, timestamp]);
      // }

      Swal.fire({
        title: "Bookmark Updated",
        text: "Bookmark Updated - Continue",
        icon: "success",
        confirmButtonText: "Cool",
      });
    });

    // alert("Bookmark name has been updated. Continue.");
  };

  async function delete_bookmark(e) {
    let old_bookmark_name =
      e.target.parentNode.attributes.data_oldBookmarkName.value;

    console.log(old_bookmark_name);

    // let delete_bookmark_prompt = prompt(
    //   "type DELETE BOOKMARK to delete bookmark"
    // );

    const { value: delete_bookmark_prompt } = await Swal.fire({
      title: "Delete Bookmark",
      input: "text",
      inputLabel: "Type DELETE BOOKMARK to delete the bookmark",
      showCancelButton: true,
      icon: "warning",
      inputValidator: (value) => {
        if (!value) {
          return "You need to write something!";
        }
      },
    });

    if (delete_bookmark_prompt === "DELETE BOOKMARK") {
      // update bookmark name
      fetch("/delete_bookmark", {
        method: "POST",
        body: JSON.stringify({
          filename: filename,
          old_bookmark_name,
        }),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      }).then((response) => {
        const status = response.status;
        console.log("status = ", status);
      });

      Swal.fire({
        title: "Bookmark Deleted",
        text: "Bookmark Deleted - Continue",
        icon: "success",
        confirmButtonText: "Cool",
      });
    } else return 1;
  }

  function send_timestamp(e) {
    let timestamp_value = e.target.attributes.data_timestamp.value;
    props.bookmark_seek(timestamp_value);
  }

  //ADD BOOKMARK TO THE LIST ONCE CREATE BOOKMARK IS CLICKED
  React.useEffect(() => {
    URL = "/list_bookmark?filename=" + filename;

    fetch(URL)
      .then((response) => response.json())
      .then((response) => {
        // console.log(response)

        // setResponse_data(response.slice(0, -1)); //remove the last element

        let ul = document.getElementById("bookmark_list");
        // remove all children
        ul.innerHTML = "";
        // console.log(bookmark_list)
        response.slice(0, -1).forEach((element) => {
          // console.log(element.split(','))
          if (element.split(",")[0] !== null) {
            let li = document.createElement("li");
            li.setAttribute(
              "class",
              "list-group-item d-flex justify-content-between"
            );
            // li.addEventListener("click", send_timestamp);
            var aTag = document.createElement("a");
            aTag.setAttribute("href", "#");
            aTag.innerText = element.split(",")[0];
            aTag.setAttribute("data_timestamp", element.split(",")[1]);
            aTag.addEventListener("click", send_timestamp);
            li.appendChild(aTag);

            // create a div to hold the edit/delete buttons
            let update_holder_div = document.createElement("div");

            var edit_button = document.createElement("a");
            edit_button.setAttribute("href", "#");
            edit_button.setAttribute("id", "edit");
            edit_button.setAttribute(
              "data_oldBookmarkName",
              element.split(",")[0]
            );
            edit_button.innerHTML =
              '<span class="material-symbols-outlined">edit</span>';
            edit_button.addEventListener("click", edit_bookmark);

            var delete_button = document.createElement("a");
            delete_button.setAttribute("href", "#");
            delete_button.setAttribute("id", "edit");
            delete_button.setAttribute(
              "data_oldBookmarkName",
              element.split(",")[0] + "," + element.split(",")[1]
            );
            delete_button.innerHTML =
              '<span class="material-symbols-outlined">delete</span>';
            delete_button.addEventListener("click", delete_bookmark);

            // add edit and delete buttons to div
            update_holder_div.appendChild(edit_button);
            update_holder_div.appendChild(delete_button);

            // li.appendChild(aTag2);
            li.appendChild(update_holder_div);
            ul.appendChild(li);
          }
        });
      })
      .catch(function (error) {
        console.log(error);
      });
  });

  return (
    <div className="m-2">
      <div className="d-flex justify-content-between">
        <p class="text-danger text-decoration-underline">
          To Update bookmark names, edit - <b> ./public/"filename".txt</b>
        </p>
        <p class="text-info text-decoration-underline">
          Bookmark drilldown will only work when audio is paused.
        </p>
      </div>

      <ul id="bookmark_list" className="list-group list-group-flush">
        {/* {response_data.map((element, index) => (
        <li key={index} onClick={send_timestamp}>
          <a href="#" data_timestamp={element.split(",")[1]}>
            {element.split(",")[0]}
          </a>
        </li>
      ))} */}
      </ul>
    </div>
  );
}
