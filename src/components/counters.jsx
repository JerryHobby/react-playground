import React, { Component } from "react";

class Counters extends Component {
  state = {
    count: 0,
    tags: [ 
        {tag: "tag1", counter: 0}, 
        {tag: "tag2", counter: 0}, 
        {tag: "tag3", counter: 0}, 
        {tag: "tag4", counter: 0}, 
        {tag: "tag5", counter: 0}, 
        {tag: "tag6", counter: 0}, 
        {tag: "tag7", counter: 0}, 
    ],
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
    //let buttonClasses = this.getButtonClasses();

    if (this.state.tags.length === 0) return <p>There are no tags!</p>;

    return (
      <div>
        {this.state.tags.map((tag) => (
          <div key={tag.tag}>
            {tag.tag} {tag.counter}&nbsp;&nbsp;
            <button
              className={this.getButtonClassesEnabled()}
              onClick={() => this.handleIncrement(tag)}
            >
              +
            </button>
            <button
              className={this.getButtonClasses(tag)}
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
    this.handleShowState();
    return count === 0 ? "zero" : count;
      
  }

  handleShowState = () => {
    const output = JSON.stringify(this.state, null, 2);
    console.log(output);
      
  }

  handleIncrement = (product) => {
    const { count } = this.state;
      
    product.counter++;  
    this.setState({count: count + 1 });
    this.setState(product);
  };

  handleDecrement = (product) => {

    const { count } = this.state;

    if(product.counter > 0) {    
        product.counter--;
        this.setState({count: count - 1 });
        this.setState(product);
    }
  };

  getBadgeClasses() {
    const { count } = this.state;
    return "badge m-2 " + (count ? "bg-primary" : "bg-warning");
  }

  getButtonClassesEnabled() {
    return "btn btn-secondary btn-sm";
  }
  getButtonClasses(product) {
    if(product.counter === 0) {
      return "btn btn-warning btn-sm";
    }
    return this.getButtonClassesEnabled();
  }
}

export default Counters;
