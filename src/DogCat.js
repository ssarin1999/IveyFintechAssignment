import React from 'react';
import './DogCat.css';
import Dog from './dog.jpg';
import Cat from './cat.jpg';

class Name extends React.Component {
  constructor(props) {
    super(props);
    this.state = {dogcat: 1};
    this.handleCat = this.handleCat.bind(this);
    this.handleDog = this.handleDog.bind(this);
  }

  
  handleCat(event) {
    document.getElementsByClassName("dog")[0].style.display = "none";
    document.getElementsByClassName("cat")[0].style.display = "block";
  }

  handleDog(event) {
    document.getElementsByClassName("dog")[0].style.display = "block";
    document.getElementsByClassName("cat")[0].style.display = "none";
  }

  render(){
  return (
    <div>
        <div class="dog">
       <img src={Dog} width="500px" height="300px"/>
       </div>
       <div class="cat">
       <img src={Cat} width="500px" height="300px"/>
       </div>
        <div>
       <button class="Dog" onClick={this.handleDog}>Show Me Dog</button>
       </div>
       <div>
       <button class="Cat" onClick={this.handleCat}>Show Me Cat</button>
       </div>
    </div>
  );
  }
}

export default Name;