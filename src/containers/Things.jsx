import React from "react";
import Things from "../components/Things";
import { fetchThingsIfNeeded } from "../actions/fetchThings";
import { connect } from "react-redux";

const mapStateToProps = state => state.things;

const mapDispatchToProps = dispatch => ({
  fetchThingsIfNeeded: () => dispatch(fetchThingsIfNeeded())
});

class ThingsContainer extends React.Component {
  constructor(props) {
    super(props);
    props.fetchThingsIfNeeded();
  }

  render() {
    const { isLoading, things, error } = this.props;
    return !isLoading && things ? (
      <Things things={things} />
    ) : error ? (
      <p>
        {["Error", error.response.status, error.response.statusText].join(" ")}
      </p>
    ) : (
      <p>Loading…</p>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ThingsContainer);
