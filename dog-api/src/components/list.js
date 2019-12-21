import React, { Component } from 'react';

class DogList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            list: []
        }
    }

    componentDidMount() {
        fetch("https://dog.ceo/api/breeds/list/all")
            .then(res => res.json())
            .then(
            (result) => {
                this.state({
                    isLoaded: true,
                    list: result.list
                })
            },
            (error) => {
                this.state({
                    isLoaded: true,
                    error
                })
            }
            )
    }

    render() {
        const { error, isLoaded, list } = this.state;
        if (error) {
            return <div>Error: {error.message}</div>
        }
        else if (!isLoaded) {
            return <div>Loading...</div>
        }
        else {
            return (
                <ul>
                    {list.map(dog => (
                        <li key={list.message}>
                            {list.message}
                        </li>
                    ))}
                </ul>
            )
        }
    }
}

export default DogList;