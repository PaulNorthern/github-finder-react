import React, { Fragment, Component } from "react";
import Navbar from "./components/layout/Navbar";
import Users from "./components/users/Users";
import axios from "axios";
import "./App.css";

class App extends Component {
  state = {
    users: [],
    loading: false,
  };

  // lifecycle method
  // when components loaded make a request
  async componentDidMount() {
    this.setState({ loading: true });

    const res = await axios.get("https://api.github.com/users");

    this.setState({ users: res.data, loading: false });

    // console.log(res.data);
  }

  foo = () => "Bar";

  render() {
    return (
      <div className="App">
        <Navbar />
        <div className="container">
          <Users loading={this.state.loading} users={this.state.users} />
        </div>

        {/* {loading ? <h4>Loading....</h4> : <h1>Hello {name}</h1>} */}
      </div>
    );
  }
}

export default App;
