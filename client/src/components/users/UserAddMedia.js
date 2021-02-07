import React, { Component } from "react";
import { connect } from "react-redux";
// import { Field, reduxForm } from "redux-form"

import { fetchClient, addNewPhoto } from "../../actions/userActions";

class UserAddMedia extends Component {
  state = {
    upph: "",
  }


  // renderInput = ({ input, type, meta }) => {
  //   const { mime } = this.props
  //   return (
  //     <div>
  //       <input 
  //         name={input.name}
  //         type={type}
  //         accept={mime}
  //         onChange={event => this.handleUserFileChange(event, input)}
  //       />
  //     </div>
  //   )
  // }

  // handleUserFileChange = (event, input) => {
  handlePhotoFileChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    })


    // let imgFile = event.target.files[0]
    // if (imgFile) {
    //   const localImgURL = URL.createObjectURL(imgFile)
    //   const imgObject = new window.Image()
    //   imgObject.onload = () => {
    //     imgFile.width = imgObject.naturallWidth
    //     imgFile.height = imgObject.naturalHeight
    //     input.onChange(imgFile)
    //   }
    //   imgObject.src = localImgURL
    // }
  }


  
  handlePhotoOnSubmit = (event) => {
    event.preventDefault()

    const userPhoto = {
      user: {
        upph: this.state.upph, 
      }
    }
    console.table('wa ha input talent', this.state.upph)
    console.table('user upid', this.state.upid, this.state.id)
    // let formData = new FormData()
    // formData.append("name", userPhoto.image.name)
    // formData.append("image", userPhoto.image)
    this.props
    .addNewPhoto(userPhoto)
    .then(id => {
      this.props.history.push(`/Users/${id}`)
    })

    this.setState({
      upph: ''
    })
  }
  
        
  render(){
    return ( 
      <div className={"UpphInput"}>
      <form onSubmit={this.handlePhotoOnSubmit()}>
        
      {console.table('upph from userAddDetails', this.state.upph)}
        <br />
        
        <label htmlFor="upph"> Profile Photo </label>
          <input 
            type="file"
            id="upph"
            name="upph"
            // component={this.renderInput}
            value={this.state.upph}
            onChange={this.handlePhotoFileChange}
            placeholder="User Photo Link"
          />
          <button type="submit">Click to add your profile photo</button>
      </form>
    </div> 
    )
  }
}
export default 
// reduxForm({
//   form: "userUpphUpload"
// }); 
connect(null, {addNewPhoto, fetchClient})(UserAddMedia)


