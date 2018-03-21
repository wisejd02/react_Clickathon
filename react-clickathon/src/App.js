import React, { Component } from "react";
import FriendCard from "./components/FriendCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import friends from "./friends.json";
import "./App.css";

let guess = [];
class App extends Component {
  // Setting this.state.friends to the friends json array
  state = {
    friends
  };
  
  sortFriends = id => {
    const friends = this.state.friends.sort(function(a, b){return 0.5 - Math.random()})
    // Set this.state.friends equal to the new friends array
    console.log(id);
    guess.includes(id)?
    guess = []:guess.push(id);
    const score = guess.length;
    console.log(guess);
    console.log(score);
    
    this.setState({ friends, score });
  };

  // Map over this.state.friends and render a FriendCard component for each friend object
  render() {
    return (
      <Wrapper>
        <Title>Friends List</Title>
        <h1>Score: {this.state.score}</h1>
        {this.state.friends.map(friend => (
          <FriendCard
            sortFriends={this.sortFriends}
            id={friend.id}
            key={friend.id}
            name={friend.name}
            image={friend.image}
            occupation={friend.occupation}
            location={friend.location}
          />
        ))}
      </Wrapper>
    );
  }

  
}




export default App;
