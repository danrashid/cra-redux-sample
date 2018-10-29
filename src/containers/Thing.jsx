import React from "react";
import Thing from "../components/Thing";
import { things } from "../fixtures";

export default class extends React.Component {
  render() {
    return (
      <Thing
        thing={things.find(({ id }) => id === this.props.match.params.id)}
      />
    );
  }
}
