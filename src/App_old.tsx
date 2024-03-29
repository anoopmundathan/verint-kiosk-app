import React from 'react';
import logo from './logo.svg';
import './App.css';
import Clock from './Clock';


function App() {
  const [view, setView] = React.useState("home");

  const handleClick = () => {
    setView("service")
  }

  const handleBack = () => {
    setView("home")
  }

  const handleService = () => {
    setView("customer");
  }

  return (
    <div className="App">
      <header className="App-header" style={{ height: "50px" }}>
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      
      {view === "home" && (
        <div>
          <div style={{ height: "100px", background: "skyblue", display: "flex", alignItems: "center", justifyContent: "center", color: "#fff" }} role="region" aria-live="assertive" aria-atomic="true">
            <h1>Welcome to citi bank</h1>
          </div>
          <div style={{ height: "500px", display: "flex", alignItems: "center", justifyContent: "center"}}>
            <button onClick={handleClick} style={{ height: "100px", width: "300px"}}>Join Line</button>
          </div>
        </div>
      )}

      {view === "service" && (
        <div role="region" aria-live="assertive" aria-atomic="true">
          <div style={{ display: "flex", justifyContent: 'center' }}>
              <div style={{ height: "100px", display: "flex", flex: .5, alignItems: "center", justifyContent: "center" }}>
                <button onClick={handleBack} style={{ height: "100px", width: "300px"}}>Back</button> 
              </div>
              <div style={{ height: "100px", background: "skyblue", display: "flex", flex: 6, alignItems: "center", justifyContent: "center", color: "#fff" }} role="region" aria-live="assertive" aria-atomic="true">
                <h1>Select your reason for visiting</h1>
              </div>
          </div>
          <div style={{ height: "500px", display: "flex", alignItems: "center", justifyContent: "center"}}>
           <button onClick={handleService} style={{ height: "100px", width: "300px"}}>Apply for credi card</button>
           <button onClick={() => setView("lending")} style={{ height: "100px", width: "300px"}}>Home lending</button>
           <button onClick={handleService} style={{ height: "100px", width: "300px"}}>Investments</button>
          </div>
        </div> 
      )}

    {view === "customer" && (
        <div role="region" aria-live="assertive" aria-atomic="true">
          <div style={{ display: "flex", justifyContent: 'center' }}>
              <div style={{ height: "100px", display: "flex", flex: .5, alignItems: "center", justifyContent: "center" }}>
                <button onClick={() => setView("service")} style={{ height: "100px", width: "300px"}}>Back</button> 
              </div>
              <div style={{ height: "100px", background: "skyblue", display: "flex", flex: 6, alignItems: "center", justifyContent: "center", color: "#fff" }} role="region" aria-live="assertive" aria-atomic="true">
                <h1>Please fill out the fields so that our banker can call you by name when it's your turn</h1>
              </div>
          </div>
          <div style={{ height: "500px", display: "flex", flexDirection: "column" , alignItems: "center", justifyContent: "center"}}>
            <label>Name
              <input type='text'/>
            </label><br />
            <label>
              Phone number
              <input type="text" />
            </label>
          </div>
        </div> 
      )}

      {view === "lending" && (<Clock />)}

    </div>
  );
}

export default App;
