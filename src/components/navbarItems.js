import react from 'react';
import { connect } from 'react-redux';



const NavbarItems = (props) => {
  render(){
    // const renderNavItems = this.props.nav.map(navItem => {
    //   return <li className="navBarItems">{navItem}</li>
    // })
    return (
      {renderNavItems}
    )
  }
}



function mapStateToProps(state) {
  return {nav: state.nav}
}

export default connect(mapStateToProps)(NavbarItems);
