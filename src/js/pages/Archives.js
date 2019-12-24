import React from "react";

export default class Settings extends React.Component {
  render() {
    // const query = new URLSearchParamas(tnis.props.location.search)
    // let message
    //     = (this.props.match.params.article ? this.props.match.params.article + ", " : "")
    //     + "date=" + query.get("date") + ", filter=" + query.get("filter");

    return (
      <h1>Archives ({this.props.match.params.article})</h1>
    )
  }
}