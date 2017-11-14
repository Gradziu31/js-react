import React from 'react';
//import './SectionOne.css';
class SectionOne extends React.Component{
  render(){
    return(
      <div className="col-lg-4">
        <div className="box blue">
         <h1>Nowy iPhone X</h1>
         <p>Poznaj drzemiącą w nim moc!</p>
         <img src="http://static5.businessinsider.com/image/59b8448238d20d7f378b4a0a-1200/iphone-x.png" alt="" className="img-responsive" />
         <p>Cena 2500 zł sztuka</p>
          <div className="box-nr1">
          <h2>UWAGA!</h2>
          <p>(jedna osoba może zamówić jedynie 2 sztuki)</p>
         </div>
          <button onClick={this.props.dodawanie}>+</button>
          <button onClick={this.props.odejmowanie}>-</button>
        </div>
      </div>
    )
  }
}

export default SectionOne;