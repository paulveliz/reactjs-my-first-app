import React, { Component } from "react";

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
        return React.createElement('h4', { }, 'Ingrediente');
    }
}


export default Dish;