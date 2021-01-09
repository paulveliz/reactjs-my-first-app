import React, { Component, Fragment } from "react";
import Button from '@material-ui/core/Button';


export class Flag extends Component {
    render(){
        return (
            <div>
                <h1>Bandera</h1>
            </div>
        );
    }
}

class Ingredient extends Component {
    render(){
        return (
            <Fragment>
                <h4>{ this.props.name }</h4>
            </Fragment>
        );
    }
}

class Dish extends Component {

    countIngredients(){
        return this.props.ingredients.length;
    }

    render(){
        return (
            <div className = "dish" >
                <h1>{ this.props.name }</h1>
                { this.countIngredients() }
                {
                    this.props.ingredients.map( (ingrediente, index, arr) =>  <Ingredient key = {index} name = {ingrediente}/>  )
                }
                <Button variant="contained" color="primary">
                    Elegir
                </Button>
            </div>
        );
    }
}

export default Dish;