import React, { Component } from "react";
import CardList from "./CardList";
import { robots } from './robots';  
import SearchBox from './SearchBox';
import './app.css';


class App extends  Component {
    constructor() {
        super()
        this.state = {
            robots: robots,
            searchfield: ''
        }
    }
    
    onSearchCange = (event)  => {
        this.setState({ searchfield: event.target.value}) //Methode von React
    }

    render() {
        const filteredRobots = this.state.robots.filter(robot => {
            return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
        })
        return (
            <div className="tc">
                <h1 className="f2">Robo Friends</h1>
                <SearchBox searchChange={this.onSearchCange}/>
                <CardList robots={ filteredRobots } />
            </div>
        );
    } 
       
}

export default App;
