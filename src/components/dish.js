import React, { Component, Fragment } from "react";

class Dish extends Component {
    render(){
        return (
            <div>
                <h1>Platillo</h1>
            </div>
        );
    }
}

export class Flag extends Component {
    render(){
        return (
            <div>
                <h1>Bandera</h1>
                <Ingredient/>
            </div>
        );
    }
}

class Ingredient extends Component {
    render(){
        return (
            <Fragment>
                <h4>Ingredient</h4>
                <h4>Ingredient</h4>
            </Fragment>
        );
    }
}


export default Dish;