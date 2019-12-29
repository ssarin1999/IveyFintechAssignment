import React from 'react';
import './App.css';
import Name from './Name';
import DogCat from './DogCat';
class App extends React.Component {
  constructor(props) {
    super(props);
  }

  handleName(event) {
    document.getElementsByClassName("Name")[0].style.display = "block";
    document.getElementsByClassName("DogCat")[0].style.display = "none";
  }

  handleDogCat(event) {
    document.getElementsByClassName("Name")[0].style.display = "none";
    document.getElementsByClassName("DogCat")[0].style.display = "block";
  }

  render(){
  return (
    <div class="App">
      <div class = "nav">
      <button class="showName" onClick={this.handleName}>Name Function</button>
     <button class="showDogCat" onClick={this.handleDogCat}>Dog or Cat</button>
     </div>
    <div class="DogCat">
    <DogCat/>
    </div>
     <div class="Name">
     <Name/>
     </div>
     
     

     </div>
  );
  }
}

export default App;
