import { combineReducers } from "redux";


const rootReducer = combineReducers({
  clients: clientReducer,
  users: userReducer,
  talents: talentsReducer
  // talentCounts: talentCountReducer
})


function clientReducer(state = [], action) {
  let idx

  switch(action.type) {
    
    case 'LOADING_CLIENT':
      const client = {
        clientName: action.clientName, 
        hometown: action.hometown, 
        email: action.email, 
        password: action.password,
        cpid: action.cpid,
        photo: action.photo
      }
      return  [...state, client, {loading: true}]

    case 'ADD_CLIENT':
      console.log('client from manage', this.state.client)

      return [...state, client]
        // ...state, clients: [...state.clients, action.client, client]
  
    case 'REMOVE_CLIENT':
      idx = state.clients.findIndex(client => client.id === action.id)
      return (
        {...state,
          clients: [
            ...state.clients.slice(0, idx),
            ...state.clients.slice(idx + 1)
          ]
        }
      )

      
    case 'LOADING_USER':
      return { ...state, loading: true}

    case 'LOGIN_USER':
      return {user: action.user, loggedIn: true, loading: false}


    case 'LOGIN_ERROR':
        return {...state, loginError: action.loginError}
        
    default:
      return state
  }
}

function talentsReducer(state = [], action) {
  let idx

  switch (action.type) {
    case 'ADD_TALENT':
      const talent = {
        talent_style: action.talent_style,
        client_name:  action.client_name,
        client_id:  action.client_id,
        mfid: action.mfid,
        media_URL:  action.media_URL,
        title:  action.title
      }
      return [
        ...state, talent
      ]
  
    case 'REMOVE_TALENT':
      idx = state.talents.findIndex(talent => talent.id === action.id)
      return [
        ...state.talents.slice(0, idx), 
        ...state.talents.slice(idx + 1)
      ]

  
    default:
      return state
  }
}


function userReducer (state={user: {}, loggedIn: false, loading: false}, action) {
  switch(action.type) {
 
    case 'LOADING_USER':
      return { ...state, loading: true}

    case 'LOGIN_USER':
      const user = ({
        email: action.email,
        password: action.password
      })
      return ({
        user: action.user, loggedIn: true, loading: false,
        ...state, 
        users: [ ...state.users, action.user, user ]
      })

    case 'LOGIN_ERROR':
      return ({...state, loginError: action.error})

    case 'REMOVE_USER':
      const removalIndex = state.users.findIndex(user => user.id === action.id)
      return (
        {...state,
          users: [
            ...state.users.slice(0, removalIndex),
            ...state.users.slice(removalIndex + 1)
          ]
        }
      )
      default:
        return state
  }
}




//  function manageAgents(state = {
//   numberOfAgents: 0}, action){
//   switch(action.type) {
//     case 'INCREASE':
//       return [{...state}, { 
//         numberOfAgents: state.numberOfAgents + 1
//       }]
//     default:
//       return state  
//   }
// }



export default rootReducer
