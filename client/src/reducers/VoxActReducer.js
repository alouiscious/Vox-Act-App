import { combineReducers } from "redux";

const rootReducer = combineReducers({
  clients: clientReducer
  // users: manageUser,
  // talents: talentsReducer
  // talentCounts: talentCountReducer
})

export default rootReducer

function clientReducer(state = [], action) {
  let idx

  switch(action.type) {
    case 'ADD_CLIENT':
      const client = {
        name: action.name, 
        email: action.email, 
        
        hometown: action.hometown, 
        password: action.password
      }
      console.log('from manage', client)
      return({...state, clients: [...state, action.client, client],
        // ...state, clients: [...state.clients, action.client, client]
      })
    
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



manageUser = (state={user: {}, loggedIn: false}, action) => {
  switch(action.type) {

    case 'LOGIN_USER':
      const user = {
        id: action.id, 
        name: action.name, 
        email: action.email 
      }
      return({
        ...state, 
        users: [
          ...state.users, 
          action.user, 
          user
        ]
      })
    
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



