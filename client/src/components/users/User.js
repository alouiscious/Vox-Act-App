import React, { useEffect } from "react";
import { getUsers } from "../../actions/usersActions";

// import TalentInput from "../talents/TalentInput";
// import { connect } from "react-redux";

// import { addUserPhoto } from "../../actions/userActions";

// class User extends Component {
  
//   handleUserOnChange = event => {
//     this.setState({ 
//       [event.target.name]: event.target.value
//     })
//   }
    
//   handleUserOnSubmit = event => {
//     event.preventDefault()
//     console.log('wa ha input user', this.state)
//     const userPhoto = ({
//       upph: this.state.upph
//     })     

//     this.props.addUserPhoto(userPhoto)
//     .then( () => {
//       return this.props.addUserPhoto(userPhoto)
//     })
//     .then(() => {
//       this.props.history.push('/UserPage')
//     })
    
//     this.setState({
//       user_name: '', 
//       hometown: '', 
//       email: '', 
//       password: '',
//       upid: '',
//       upph: ''
//     })
    

  

//     render = () => {
//       return ( 
//         <form onSubmit={this.handleUserOnSubmit}>
//         <br />
//             <input
//               type="file"
//               name="upph"
//               id="upph"
//               onChange={this.handleUserOnChange}
//               value={this.state.upph}
//               placeholder="Add a Bio Photo"
//             />
//             <br />
//             <input 
//               type="submit" 
//               value="UserInput"
//             />
//           </form>
//       )
//     }
//   }
// }

const User = ({ dispatch, users }) => {
  useEffect( () => {
    dispatch(getUsers)
  }, [dispatch])

  const renderUser = (users) => {
    console.log('wa ha this from user', users)
    // return users.map((user) => <User key={user.id}/>)
  }

  return (
    <div className="user-details">
      <h3>
        Welcome to Vox Act {renderUser()}!
      </h3>
      <p>You're joining us from {}</p>
      <br/>
      <p>We plan to connect your talents with {}</p>

      <p>please add your profile photo.
        Let start by adding a talent.
              Complete this form
      </p>
    </div>
  )
  }
 

export default (User)
// export default connect(null, {addUserPhoto, UserDetails})(User)