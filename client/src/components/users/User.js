import React, { useEffect } from "react";
import { fetchUser } from "../../actions/userActions";
import { connect } from "react-redux";

// import TalentInput from "../talents/TalentInput";

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
const User = ({ dispatch, loading, users, hasErrors }) => {
  useEffect( () => {
    dispatch(fetchUser())
  }, [dispatch])

  const renderUser = () => {
    if (loading) return <p>Loading User...</p>
    if (hasErrors) return <p>Unable to display User.</p>
    console.log('wa ha this from user', users)
    return (
      users.map((user, upid) => 
        <div key={upid} className="user-details">
          <h3>Welcome to Vox Act, {user.user_name}!</h3>
          <p>
            Thanks for joining us from {user.hometown}
            <br />
            {user.upid}
            <br />
            We plan to connect your talents using {user.email}</p>
          <p>Next Steps: 
            <br />
              Please add your profile photo.
            <br />
              Then...
            <br />
            Let's add your talent(s). Complete the Talent Form.
          </p>
        </div>
      )
    )
  }

  return (
    <div>
      {renderUser()}  
    </div>
  )


}

const mapStateToProps = (state) => ({
  loading: state.users.loading,
  users: state.users.users,
  hasErrors: state.users.hasErrors,
  numberOfUsers: state.users.count,

}) 
export default connect(mapStateToProps)(User)
// export default (User)
// export default connect(null, {addUserPhoto, UserDetails})(User)