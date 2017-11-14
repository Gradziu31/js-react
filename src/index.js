import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import SectionOne from './SectionOne';
import SectionTwo from './SectionTwo';
import SectionThree from './SectionThree';
import registerServiceWorker from './registerServiceWorker';

class App extends React.Component {
    constructor(props){
        super(props);
        this.dodawanie = this.dodawanie.bind(this);
        this.odejmowanie = this.odejmowanie.bind(this);
        this.zaznaczone = this.zaznaczone.bind(this);
        this.state ={
            cena: 0,
            klik: 0
        }
      }
      dodawanie(){
          if(this.state.klik < 2){
            this.setState((prevState) => {
                return{
                    cena: prevState.cena+2500,
                    klik: prevState.klik+1
                }
              });
          }
      }
    odejmowanie(){
        if(this.state.klik > 0){
            this.setState((prevState) => {
                return{
                    cena: prevState.cena-2500,
                    klik: prevState.klik-1
                }
              });
          }
    }
    zaznaczone(e){
        let value = parseInt(e.target.value);
        if(e.target.checked === true){
            this.setState((prevState)=>{
                return{
                  cena: prevState.cena+value
                }
          })
        } else {
            this.setState((prevState)=>{
                return{
                  cena: prevState.cena-value
                }
          })
        }
    }
        render(){ 
            return(
                <div className="container"> 
                    <div className="row">
                        <SectionOne 
                        dodawanie={this.dodawanie}
                        odejmowanie={this.odejmowanie}
                        />
                        <SectionTwo 
                        dodatki={this.dodatki}
                        zaznaczone={this.zaznaczone}
                        />
                        <SectionThree 
                        cena={this.state.cena} 
                        />
                    </div>
                </div>
            )
        }
}

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
