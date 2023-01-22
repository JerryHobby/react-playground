import React, { Component } from 'react';
import { createRoot } from 'react-dom/client';
//import registerServiceWorker from "./registerServiceWorker";
import 'bootstrap/dist/css/bootstrap.css';
import 'font-awesome/css/font-awesome.css';

class SideBar extends Component {
  constructor(props) {
    super(props);
    // console.log('SideBar Constructor: ', this.props);
  }
  componentDidMount() {
    // make Ajax calls to get data
    // console.log('SideBar Mounted');
  }

  render() {
    const { items } = this.props;
    // console.log('SideBar Rendered');
    // console.log(items);
    const linkStyle = 'link-light text-decoration-none p-2';
    return (
      <div>
        <br />
          <div><a className={linkStyle} href='#'>Movies</a></div>
        <hr />
          <div><a  className={linkStyle} href='#'>Movies</a></div>
        <hr />
          <div><a  className={linkStyle} href='#'>Movies</a></div>
        <hr />
          <div><a  className={linkStyle} href='#'>Movies</a></div>
        <hr />
          <div><a  className={linkStyle} href='#'>Movies</a></div>
        <hr />
</div>
    );
  }
}

export default SideBar;

const sideContainer = document.getElementById('sidebar');
const sideRoot = createRoot(sideContainer); // createRoot(container!) if you use TypeScript
sideRoot.render(<SideBar tab="home" />);

