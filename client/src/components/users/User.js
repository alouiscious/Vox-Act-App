import React, { useEffect } from "react";
import { fetchUser } from "../../actions/userActions";
import { connect } from "react-redux";
import { Link } from "react-router-dom";



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
            Let's add your talent(s).  
            <br />
          </p>
          <Link to="./UserPage/:id" className="userPageLink">
            Complete the Talent Form.
          </Link>
          
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