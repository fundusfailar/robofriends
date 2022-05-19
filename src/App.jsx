import React, { Component } from "react";
import CardList from "./CardList";
import SearchBox from './SearchBox';
import './app.css';
import Scroll from './Scroll';


class App extends  Component {
    constructor() {
        super()
        this.state = {
            robots: [],
            searchfield: ''
        }
    }
   
    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(users => this.setState({ robots: users }));
    }

    onSearchCange = (event)  => {
        this.setState({ searchfield: event.target.value}) //Methode von React
    }

    render() {
        const filteredRobots = this.state.robots.filter(robot => {
            return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
        })
        if (this.state.robots.length === 0) {
            return <h1>Loading Users</h1>
        } else {
            return (
                <div className="tc">
                    <h1 className="f2">Robo Friends</h1>
                    <SearchBox searchChange={this.onSearchCange}/>
                    <Scroll>
                        <CardList robots={ filteredRobots } />
                    </Scroll>
                </div>
            );
        }
        
    } 
       
}

export default App;
