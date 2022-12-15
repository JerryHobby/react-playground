import React, { Component } from "react";

class Counter extends Component {
  state = {
    count: 0,
    tags: ["tag1", "tag2", "tag3"],
    tags0: [],
  };

  render() {
    let badgeClasses = this.getBadgeClasses();

    return (
      <React.Fragment>
        <span className={badgeClasses}>{this.formatCount()}</span>
        {this.state.tags.length === 0 && <p>Please create some tags.</p>}
        {this.renderTags()}
      </React.Fragment>
    );
  }

  renderTags() {
    let buttonClasses = this.getButtonClasses();

    if (this.state.tags.length === 0) return <p>There are no tags!</p>;

    return (
      <div>
        {this.state.tags.map((tag) => (
          <div key={tag}>
            {tag}
            <button
              className={buttonClasses}
              onClick={() => this.handleIncrement(tag)}
            >
              +
            </button>
            <button
              className={buttonClasses}
              onClick={() => this.handleDecrement(tag)}
            >
              -
            </button>
          </div>
        ))}
      </div>
    );
  }

  formatCount() {
    const { count } = this.state;
    return count === 0 ? "zero" : count;
  }

  handleIncrement = (product) => {
    this.setState({ count: this.state.count + 1 });
  };

  handleDecrement = (product) => {
    const { count } = this.state;
    //const [count, setCount] = this.useState(0);
    if (count) {
      this.setState({ count: this.state.count - 1 });
    }
  };

  getBadgeClasses() {
    const { count } = this.state;
    return "badge m-2 " + (count ? "bg-primary" : "bg-warning");
  }

  getButtonClasses() {
    return "btn btn-secondary btn-sm";
  }
}

export default Counter;
