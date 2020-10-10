  uploadAction() {
    var data = new FormData();
    var imagedata = document.querySelector('input[type="file"]').files[0];
    data.append("data", imagedata);

    fetch("http://localhost:8910/taskCreationController/createStoryTask", {
      mode: 'no-cors',
      method: "POST",
      headers: {
        "Content-Type": "multipart/form-data"
        "Accept": "application/json",
        "type": "formData"
      },
      body: data
    }).then(function (res) {
      if (res.ok) {
        alert("Perfect! ");
      } else if (res.status == 401) {
        alert("Oops! ");
      }
    }, function (e) {
      alert("Error submitting form!");
    });
  }

  render() {
    return (
        <form encType="multipart/form-data" action="">
          <input type="file" name="fileName" defaultValue="fileName"></input>
          <input type="button" value="upload" onClick={this.uploadAction.bind(this)}></input>
        </form>
    )