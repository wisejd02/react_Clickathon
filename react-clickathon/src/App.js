import React, { Component } from "react";
import ImageCard from "./components/ImageCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import images from "./images.json";
import "./App.css";

let guess = [];
class App extends Component {
  // Setting this.state.friends to the friends json array
  state = {
    images
  };
  
  sortImages = id => {
    let score ="";
    let gmMsg="";
    const images = this.state.images.sort(function(a, b){return 0.5 - Math.random()})
    // Set this.state.friends equal to the new friends array
    console.log(id);
    guess.includes(id)?
    guess = []:guess.push(id);
    score = guess.length;
    (score === 0)?gmMsg=" You clicked on the same image twice! :-(":gmMsg="";
    console.log(guess);
    console.log(score);
    
    this.setState({ images, score, gmMsg });
  };

  // Map over this.state.friends and render a FriendCard component for each friend object
  render() {
    return (
      <Wrapper>
        <Title>React-Memory</Title>
        <h1>Score: {this.state.score}{this.state.gmMsg}</h1>
        {this.state.images.map(image => (
          <ImageCard
            sortImages={this.sortImages}
            id={image.id}
            key={image.id}
            name={image.name}
            image={image.image}
          />
        ))}
      </Wrapper>
    );
  }

  
}




export default App;
