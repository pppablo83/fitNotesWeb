import React, { Component, PropTypes } from 'react';

// Workout component - represents a single workout item
export default class Workout extends Component {
    render() {
        return (
            <li>{this.props.workout.text}</li>
        );
    }
}

Workout.propTypes = {
    // This component gets the task to display through a React prop.
    // We can use propTypes to indicate it is required
    task: PropTypes.object.isRequired,
};