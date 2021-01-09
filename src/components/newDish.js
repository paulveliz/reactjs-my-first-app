import  React, { Component } from "react";
import TextField from '@material-ui/core/TextField';
import IconButton from '@material-ui/core/IconButton';
import Add from "@material-ui/icons/Add";

class NewDish extends Component {

    platillo = React.createRef();

    addDish = () => {
        console.log('Nuevo platillo');
        console.log(this.platillo);
    }

    render(){
        return (
            <div>
                <h4>Nuevo platillo</h4>
                <form>
                    <TextField
                        type = "input"
                        label = "Nombre del platillo..."
                        variant = "outlined"
                        onSubmit = {this.addDish}
                        ref = { (e) => e = this.platillo }
                    />
                    <IconButton color = "primary" onClick = {this.addDish} >
                        <Add/> 
                    </IconButton>
                </form>
            </div>
        );
    }
}

export default NewDish;
