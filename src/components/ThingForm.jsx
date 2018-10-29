import React from "react";

export default class extends React.Component {
  constructor(props) {
    super(props);
    this.state = props.thing || {
      name: "",
      stuff: ""
    };
  }

  handleSubmit = event => {
    event.preventDefault();
    console.log(this.state);
  };

  handleChange = ({ target: { name, value } }) => {
    this.setState({
      [name]: value
    });
  };

  render() {
    const { name, stuff } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <h2>{this.props.headline}</h2>
        <p>
          <label>
            Name *<br />
            <input
              name="name"
              type="text"
              required
              value={name}
              onChange={this.handleChange}
            />
          </label>
        </p>
        <p>
          <label>
            Stuff
            <br />
            <textarea name="stuff" value={stuff} onChange={this.handleChange} />
          </label>
        </p>
        <p>
          <button>Save</button>
        </p>
      </form>
    );
  }
}
