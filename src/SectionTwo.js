import React from 'react';
//import './SectionOne.css';

class SectionTwo extends React.Component{
    render(){
      return(
        <div className="col-lg-4"> 
        <div className="box green">
          <h1>Zamów również!</h1>
          <p>Kupując teraz oszczędzasz!</p>
          <img src="https://ksassets.timeincuk.net/wp/uploads/sites/54/2017/09/iphone-qi-chargig-2.png" alt="" className="img-responsive" />
          <label><input type="checkbox" value="800" onChange={this.props.zaznaczone} /><p>Ładowarka bezprzewodowa (koszt 800 zł)</p></label>
          <label><input type="checkbox" value="250" onChange={this.props.zaznaczone} /><p>Głośnik bluetooth (koszt 250 zł)</p></label>
          <label><input type="checkbox" value="99" onChange={this.props.zaznaczone} /><p>Etui skórzane (koszt 99 zł)</p></label>
          <label><input type="checkbox" value="799" onChange={this.props.zaznaczone} /><p>Słuchawki bezprzewodowe (koszt 799 zł)</p></label>
          <label><input type="checkbox" value="39" onChange={this.props.zaznaczone} /><p>Szkło ochronne na ekran (koszt 39 zł)</p></label>
          <label><input type="checkbox" value="555" onChange={this.props.zaznaczone} /><p>Dodatkowe ubezpieczenie o rok (koszt 599 zł)</p></label>
        </div>
        </div>
      )
    }
  }
  
  export default SectionTwo;
  