import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles((theme) => ({
    container: {
      display: 'flex',
      flexWrap: 'wrap',
    },
    textField: {
      marginLeft: theme.spacing(1),
      marginRight: theme.spacing(1),
      marginBottom: theme.spacing(2),
      width: "100%",
    },
  }));

  
const DatePicker = ({label}) => {
    const classes = useStyles();
   
    var today = new Date();
var dd = String(today.getDate()).padStart(2, '0');
var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
var yyyy = today.getFullYear();

today = dd + '-' + mm + '-' + yyyy;
// console.log(today);

    return (
        <div>
              <form className={classes.container} noValidate>
      <TextField
        id="date"
        label={label}
        type="date"
    //    value={today}
        defaultValue="29-08-2021"
        className={classes.textField}
        InputLabelProps={{
          shrink: true,
        }}
      />
    </form>
        </div>
    );
}

export default DatePicker
