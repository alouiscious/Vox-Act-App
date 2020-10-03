import { combineReducers } from "redux";


const rootReducer = combineReducers({
  clients: clientReducer,
  users: userReducer
  // talents: talentsReducer
  // talentCounts: talentCountReducer
})


function clientReducer(state = [], action) {
  let idx

  switch(action.type) {
    case 'ADD_CLIENT':
      const client = {
        id: action.id,
        name: action.name, 
        email: action.email, 
        
        hometown: action.hometown, 
        password: action.password
      }
      console.log('from manage', client)
      return{...state, client
        // ...state, clients: [...state.clients, action.client, client]
      }
    
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
    default:
      return state
  }
}

// function talentsReducer(state = [], action) {
//   let idx

//   switch (action.type) {
//     case 'ADD_TALENT':
//       return [
//         ...state, 
//         action.talent
//       ]
  
//     case 'REMOVE_TALENT':
//       idx = state.findIndex(talent => talent.id === action.id)
//       return [
//         ...state.slice(0, idx), 
//         ...state.slice(idx + 1)
//       ]

  
//     default:
//       return state
//   }
// }



function userReducer (state={user: {}, loggedIn: false, loading: false}, action) {
  switch(action.type) {

    case 'LOADING_USER':
      return { ...state, loading: true}

    case 'LOGIN_USER':
      return {user: action.user, loggedIn: true, loading: false}

      // const user = {
      //   id: action.id, 
      //   email: action.email,
      //   password: action.password
      // }
      // return({ user: action.user,
      //   ...state, loading: false, loggedIn: true,
      //   users: [ ...state.users, action.user, user ]
      // })
    
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
