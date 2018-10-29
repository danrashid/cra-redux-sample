import React from "react";
import Things from "../components/Things";
import { things } from "../fixtures";

export default class extends React.Component {
  render() {
    return <Things things={things} />;
  }
}
