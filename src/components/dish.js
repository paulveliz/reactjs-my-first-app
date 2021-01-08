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
                <h4>Ingredient</h4>
                <h4>Ingredient</h4>
            </Fragment>
        );
    }
}

class Dish extends Component {
    render(){
        return (
            <div className = "dish" >
                <h1>Platillo</h1>
                <Ingredient/>
                <Button variant="contained" color="primary">
                    Primary
                </Button>
            </div>
        );
    }
}

export default Dish;