import React from "react";
import ThingForm from "../components/ThingForm";
import { things } from "../fixtures";

export default class extends React.Component {
  render() {
    return (
      <ThingForm
        headline="Edit the Thing"
        thing={things.find(({ id }) => id === this.props.match.params.id)}
      />
    );
  }
}
