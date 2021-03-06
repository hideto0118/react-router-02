import React from "react";
import { NavLink, Link, withRouter } from "react-router-dom";

import Nav from "../components/layout/Nav";

class Layout extends React.Component {
  navigate() {
    console.log(this.props.history);
    this.props.history.push("/");
    // this.props.history.replace("/");
  }

  render () {
    return (
      <div>
        <Nav location={location} />
        <h1>KillerNews.net</h1>
        {this.props.children}
        <Link to="/archives/some-other-articles?date=yesterday&fileter=none" class="btn btn-warning">archives (article name shows up)</Link>
        <Link to="/archives?date=today&filter=hot" class="btn btn-danger">archives</Link> 
        <NavLink to="/settings/main" class="btn btn-success" activeClassName="btn-danger">settings</NavLink>
        <Link to="/settings/extra" class="btn btn-success">settings (extra)</Link>
        <button class="btn btn-info" onClick={this.navigate.bind(this)}>featured</button>
      </div>
    );
  }
}

export default withRouter(Layout);