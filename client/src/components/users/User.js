import React, { useEffect } from "react";
import { fetchUser } from "../../actions/userActions";
import { connect } from "react-redux";
import { Link } from "react-router-dom";



const User = ({ dispatch, loading, user, hasErrors }) => {
  useEffect( () => {
    dispatch(fetchUser())
  }, [dispatch])

  const renderUser = () => {
    if (loading) return <p>Loading User...</p>
    if (hasErrors) return <p>Unable to display User.</p>
    console.log('wa ha this from user', user)
    return (
      
      user.map((profile) => 
        <div key={profile.id}>
        <li> 
          <Link to="/user/:id" className="userLink">
            {profile.user_name}
          </Link> 
        </li>
        </div>
      )
    )
  }
    
    // return (
        
    //   user.map((profile) => 
    //     <div key={id} className="profile-details">
    //       <h3>Welcome to Vox Act, {profile.user_name}!</h3>
    //       <p>
    //         Thanks for joining us from {profile.hometown}
    //         <br />
    //         {profile.upid}
    //         <br />
    //         We plan to connect your talents using {profile.email}</p>
    //       <p>Next Steps: 
    //         <br />
    //           Please add your profile photo.
    //         <br />
    //           Then...
    //         Let's add your talent(s).  
    //         <br />
    //       </p>
         
    //       <Link to="./UserPage/id" className="userPageLink">
    //         Complete the Talent Form.
    //       </Link>
    //     </div>
    //       )
      // )
    // ))

    
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