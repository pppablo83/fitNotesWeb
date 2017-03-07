import React, { Component } from 'react';

import Workout from './Workout.jsx';

// App component - represents the whole app
export default class App extends Component {
    getWorkouts() {
        return [
            { _id: 1, text: 'This is Workout 1' },
            { _id: 2, text: 'This is Workout 2' },
            { _id: 3, text: 'This is Workout 3' },
        ];
    }

    renderWorkouts() {
        return this.getWorkouts().map((workout) => (
            <Workout key={workout._id} workout={workout} />
        ));
    }

    render() {
        return (
            <div className="container">
                <header>
                    <h1>My Workout List</h1>
                </header>

                <ul>
                    {this.renderWorkouts()}
                </ul>
            </div>
        );
    }
}