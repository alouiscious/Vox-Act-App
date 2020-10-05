import React from 'react';
// import {
//   BrowserRouter as Router, 
//   Route, 
//   Link,
  
//   useParams,
//   useRouteMatch
// } from 'react-router-dom';

// import NavBar from './components/Navbar';
import logo from './logo.jpg';
import './App.css';
import VoxAct from './containers/VoxAct'

function App() {
  return (
    <div className="App">
      {/* <Router>
          <Sidebar>
            {talents ? (talents.map(talent => (
              <SidebarItem key={talent.client.id}>
                <Link to={ClientPage}> 
                  view {client.name}
                </Link>
              </SidebarItem>
            ))
            ) : (<div> loading...</div>)}
            <SidebarItem>
              <Link to={VoxActHome}>Log In</Link>

            </SidebarItem>
          </Sidebar>
        <NavBar />
      </Router> */}
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div>
          <VoxAct />
        </div>
            <a
            className="App-link"
            href="https://alouisciousmedia.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span role="img" alt="copyright"> 
              <label name="copyright">
              </label>
              © ℗1994-2020 Alouiscious Media™️
            </span>
              </a>
        </header>
    </div>
  );
}

export default App;
