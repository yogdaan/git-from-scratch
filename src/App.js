import React, { Component } from "react";
import Terminal from "terminal-in-react";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header>
          <div className="container">
            <div className="logo">GIT FROM SCRATCH</div>
          </div>
        </header>
        <div className="main_wrapper">
          <div className="container">
            <main>
              <div className="terminal">
                <Terminal
                  color="#EF8354"
                  allowTabs={false}
                  backgroundColor="#fafafa"
                  barColor="#BFC0C0"
                  style={{
                    fontWeight: "bold",
                    fontSize: "1em"
                  }}
                  msg="Type 'help' for more info."
                  promptSymbol={"git@yogdaan:~$ "}
                />
              </div>
              <div className="output shadow">OUTPUT TREE</div>
            </main>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
