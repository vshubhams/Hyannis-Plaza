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


const DatePicker = ({ label, id,handleDate,currentDate}) => {
  const classes = useStyles();

  return (
    <div>
      <form className={classes.container} noValidate>
        <TextField
          id={id}
          label={label}
          type="date"
          onChange={(e)=>{handleDate(e.target.value,id)}}
          defaultValue={currentDate}
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
