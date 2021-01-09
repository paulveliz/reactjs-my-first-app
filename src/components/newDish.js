import  React, { Component } from "react";
import TextField from '@material-ui/core/TextField';
import IconButton from '@material-ui/core/IconButton';
import Add from "@material-ui/icons/Add";

class NewDish extends Component {

    newDish = React.createRef();

    addDish = (e) => {
        e.preventDefault();
        console.log(this.newDish.value);
    }

    render(){
        return (
            <div>
                <h4>Nuevo platillo</h4>
                <form onSubmit = { this.addDish }>
                    {/* <input ref= { this.newDish } /> */}
                    <TextField
                        type = "input"
                        label = "Nombre del platillo..."
                        variant = "outlined"
                        inputRef = { e => (this.newDish = e) }
                    />
                    <IconButton color = "primary" onClick = { this.addDish } >
                        <Add/> 
                    </IconButton>
                </form>
            </div>
        );
    }
}

export default NewDish;
