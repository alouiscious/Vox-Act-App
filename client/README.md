VoxAct project workflow for React-Redux design

Build a Rails API for a app user, user's talents, and user authentication using Javascript Web Token.

Upon user authentication via the UI Login.js,
guide the user to their own UserEditPage.js.

when logged_in? is true, from the UserEditPage matching  user.id fetches the User display component
the user can:
  add a profile photo to update the user record.
    recommend add photo with window.confirm
    user input/file type to upload a user profile photo to the server.

  view their user profile and verify updated content
  add media files and descriptions to their talents list
  edit their profile pic 
  edit or delete their talent list items
  view a list of users
  view only other user's profiles

Build
Thunk getstate action creater can take in getstate
## Dependencies (Gems/packages)
## Configuration (environment variables/other stuff in config folder)
## Database
## Models
## Views
## Controllers
## Routes

rails vainilla with a  file field used byebug to observe the file upload.


THE THUNK CODE

function createThunkMiddleware(extraArgument) {
  return ({ dispatch, getState }) => (next) => (action) => {
    if (typeof action === 'function') {
      return action(dispatch, getState, extraArgument);
    }

    return next(action);
  };
}

const thunk = createThunkMiddleware();
thunk.withExtraArgument = createThunkMiddleware;

export default thunk;




This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `yarn build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify



// class VoteBtn extends Component {
//   handleVoteClick = () => {
//     this.props.onClick(this.props.incrementVote())
//   };

//   render() {
//     return (
//       <button onClick={this.handleVoteClick()}>
//       Votes +{this.props.incrementVote()}
//     </button>
//     )
//   };
// }

// const Result = (props) => {
//   return (
//     <div>
//       {props.counter}
//     </div>
//   )
// }

// class VoteCount extends Component {
//   state = {
//     counter: 0
//   }
//   incrementCounter = (incrementVote) => {
//     this.setState((prevState) => {
//       return {
//         counter: prevState.counter + incrementVote
//       }
//     })
//   };

//   render() {
//     return (
//       <div>
//         <VoteBtn incrementValue={1} onClick={this.incrementCounter()} />
//         <Result counter={this.state.counter} />
//       </div>
        
//     )
//   }
// }