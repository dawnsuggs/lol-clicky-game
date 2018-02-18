import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
var shuffle = require('shuffle-array');

// import '../images'//

class App extends Component {
  constructor() {
    super();

this.state = {cards: [{url: "Miss Baby Glitter.jpg", 
                      id: 1}, 
                      {url: "Fresh.jpg", 
                      id: 2}, 
                      {url: "BB Bop.png", 
                      id: 3}, 
                      {url: "Coconut Cutie.png", 
                      id: 4}, 
                      {url: "Cosmic Queen.png", 
                      id: 5},
                      {url: "diva.jpg", 
                      id: 6},
                      {url: "Kicks.png", 
                      id: 7},
                      {url: "Miss Baby.jpg", 
                      id: 8},
                      {url: "Mer Baby.png", 
                        id: 9}],
              clicked: [],
              score: 0
            }

     //this.click = this.click.bind(this);//

  }

  clicked = id => {
  if (this.state.clicked.indexOf(id) === -1) {
    this.setState({score: this.state.score + 1});

  this.state.clicked.push(id);
  this.shuffle()

  if (this.state.score === 9) { 
  alert("YOU WIN!")}
    
  } 
  else{
    this.setState({score: 0});
    this.shuffle()
  }
}

shuffle = () => {
  //put the shuffling node package in here//
  console.log("before " + this.state.cards);
  shuffle(this.state.cards);
  console.log("after " + this.state.cards);
}


  render() {
    return (
      <div className="wrapper" style={{background:"pink"}}>
        <div className="jumbotron text-center" style={{fontSize:"50px", background: "purple", marginBottom:"0"}}>
          LOL Clicky Game 
          <h3>Score: {this.state.score}</h3>
        </div>
          <div className="container" style={{marginTop:"0"}}>
          <div className="row">
      {this.state.cards.map(function(card) {
          return ( 
            <div className="col-md-4 text-center" style={{border:"2px solid pink", background:"white"}}><img style={{height: "150px"}} src={"./images/" + card.url}
  onClick = {() => this.clicked(card.id)} /></div>
  )

      }.bind(this)

  )
    } 
      
    </div>
    </div>
    </div>
    ) 
  }

}

export default App;

