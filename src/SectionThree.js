import React from 'react';
//import './SectionOne.css';

class SectionThree extends React.Component{
  render(){
    return(
      <div className="col-lg-4">
      <div className="box yellow">
        <h1>Wartość Twojego zamówienia:</h1>
        <img src="https://seeklogo.com/images/C/canadian-dollar-cad-logo-ED1E6D587A-seeklogo.com.gif" alt=""/>
        <h1>Koszt: {this.props.cena} zł</h1>
      </div>
      </div>
    )
  }
}
export default SectionThree;
