import React, { Component } from "react";
import LandingView from "./views/landingview";
import CreateEditHolder from "./views/createeditholder";
import SettingsHolder from "./views/settingsholder";
import BillingHolder from "./views/billingholder";
import Stripe from "./components/StripeFE";
import AddFileHolder from "./views/addfileholder";
import { Route  } from "react-router-dom";
import "./App.css";
import styled from "styled-components";
import { Auth0Lock } from "auth0-lock";
import history from "./history";

//KEITH
import Splash from "./KeithExperiment/Splash"

const AppContainer = styled.div`
  height: auto;
  min-height: 100vh;
  width: 100%;
  margin: 0;
  padding: 0;
`;

var clientId = "b6bFFU1t8pbHa0lk6GgPpaFhabemmWc8";
var domain = "lambdabackendproject.auth0.com";
var options = {
  // autoclose: false,
  // closable: false,
  avatar: null
};

var lock = new Auth0Lock(clientId, domain, options);

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: null,
      
      //KEITH
      theme: 'red'
    };
    //KEITH
    this.toggleTheme = this.toggleTheme.bind(this);
}
//KEITH
toggleTheme() {
  const theme = this.state.theme === "red" ? "blue" : "red";
  this.setState({ theme });
  document.documentElement.setAttribute("data-theme", theme);
}

  componentDidMount() {
    this.lockOn();
  }

  lockOn = () => {
    lock.on("authenticated", function(authResult) {
      // Use the token in authResult to getUserInfo() and save it to localStorage
      lock.getUserInfo(authResult.accessToken, function(error, profile) {
        if (error) {
          // Handle error
          return;
        }
        let variablePromise = new Promise((resolve, reject) => {
          console.log("hi");
          resolve(
            // console.log(variablePromise),
            // console.log(authResult),
            localStorage.setItem("accessToken", authResult.accessToken),
            localStorage.setItem("profile", JSON.stringify(profile))
          );
        });
        variablePromise.then(() => {
          history.push("/add");
          window.location.reload();
        });
      });
    });
  };

  lockOpen(event) {
    lock.show();
  }

  isAuthenticated() {
    // check whether the current time is past the access token's expiry time
    const expiresAt = localStorage.getItem("expires_at");
    return new Date().getTime() < expiresAt;
  }

  render() {
    if (this.isAuthenticated() || localStorage.getItem("accessToken")) {
      return (
        <AppContainer>

          {/* KEITH */}
          <Splash toggleTheme={this.toggleTheme} />

            <Route
            exact
            path="/"
            render={props => <AddFileHolder {...props} />}
          />
          <Route
            exact
            path="/add"
            render={props => <AddFileHolder {...props} />}
          />

          <Route path="/stripe" render={props => <Stripe {...props} />} />
          <Route
            exact
            path="/settings"
            render={props => <SettingsHolder {...props} />}
          />
          <Route
            exact
            path="/create"
            render={props => <CreateEditHolder {...props} />}
          />
          <Route
            exact
            path="/billing"
            render={props => <BillingHolder {...props} />}
          />
        </AppContainer>
      );
    } else {
      return (
        <Route
          exact
          path="/"
          render={props => <LandingView {...props} lockOpen={this.lockOpen} lock={lock} />}
        />
      );
    }
  }
}

// export default Authenticate(App);
export default App;
