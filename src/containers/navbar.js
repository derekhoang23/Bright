import React, { Component } from 'react';
// import NavbarItems from '../components/navbarItems';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import style from '../style.css';
class Nav extends Component {

  render(){
    // console.log(this.props.nav)
    const renderNavItems = this.props.nav.map((navItem, index) => {
      return <li key={index} className={`NavBarItems ${navItem.split(' ').join('')}`} ><Link to={`/${navItem.split(' ').join('')}`}>{navItem}</Link></li>
    })
    return (
      <div className='NavbarContainer'>
        <ul className="NavbarList">
          {renderNavItems}
        </ul>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {nav: state.nav}
}


export default connect(mapStateToProps)(Nav);
