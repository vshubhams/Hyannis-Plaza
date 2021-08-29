import React from 'react';
import TextField from '@material-ui/core/TextField';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import { MenuItem } from '@material-ui/core';
import styles from "./GuestDetail.module.css"

const useStyles = makeStyles((theme) => ({
  root: {

    margin: theme.spacing(1),
    //   width: 250,
    height: '30px'
  },
  container: {
    display: "grid",
    gridTemplateColumns: "auto auto",
    gridGap: "25px",
    // width: "60%",
    fontWeight: "bold",
    marginBottom: '10px',
    marginTop: "20px",
  },

  padd: {
    paddingLeft: '10px'
  },
  flex: {
    display: 'flex',
    flexDirection: 'row',
    paddingLeft: '10px',
    color: 'red',
    marginTop: '10px',
    marginBottom: '10px',

  },
  box: {
    marginTop: "20px",
    marginLeft: "20px",
  }

}));



const ValidationTextField = withStyles({
  root: {


    '& input:valid + fieldset': {
      borderLeftWidth: 6,
      borderColor: 'green',

    },
    '& input:valid:focus + fieldset': {
      borderLeftWidth: 6,
      borderColor: 'blue',
    },

  },
})(TextField);



const names = [
  'India',
  'Australia',
  'Canada',
  'China',
  'France',
  'germany',
  'Japan',
  'Russia',
  'Saudi Arabia',
  'USA',
];


function GuestDetail({confirmBook}) {
  const classes = useStyles();
  const handleSubmit = () => {
    
  }



  return (
    <div className={styles.wrapper}>
      <h3>GUEST DETAILS</h3>
      <form className={classes.container} noValidate autoComplete="off" onSubmit={handleSubmit}>
        <div>
          <ValidationTextField
            label="First Name"
            required
            fullWidth
            variant="filled"
            size="small"
            name="fName"
            onChange={e => confirmBook(e.target)}
          />
        </div>
        <div>
          <ValidationTextField
            label="Last Name"
            required
            fullWidth
            variant="filled"
            size="small"
            name="lName"
            onChange={e => confirmBook(e.target)}
          />
        </div>
        <div>
          <ValidationTextField
            label="Email"
            required
            fullWidth
            variant="filled"
            size="small"
            type="email"
            name="email"
            onChange={e => confirmBook(e.target)}
          />
        </div>
        <div>
          <ValidationTextField
            label="Phone"
            required
            fullWidth
            variant="filled"
            size="small"
            type="Number"
            name="phone"
            onChange={e => confirmBook(e.target)}
          />
        </div>
        <div>
          <ValidationTextField
            label="Address"
            required
            fullWidth
            variant="filled"
            size="small"
            name="address"
            onChange={e => confirmBook(e.target)}
          />
        </div>
        <div>
          <ValidationTextField
            label="City"
            required
            fullWidth
            variant="filled"
            size="small"
            name="city"
            onChange={e => confirmBook(e.target)}
          />
        </div>
        <div>
          <ValidationTextField
            label="State"
            required
            fullWidth
            variant="filled"
            size="small"
            name="State"
            onChange={e => confirmBook(e.target)}
          />
        </div>
        <div>
          <ValidationTextField
            label="Country"
            required
            fullWidth
            variant="filled"
            size="small"
            defaultValue = "India"
            select
            onChange={e =>  confirmBook(e.target)}
            name="Country"
          >
            {names.map((option, i) => {
              return <MenuItem key={i} value={option} >{option}</MenuItem>
            })}


          </ValidationTextField>
        </div>
        <div>
          <ValidationTextField
            label="ZIP Code"
            required
            fullWidth
            variant="filled"
            size="small"
            type='number'
            name="ZipCode"
            onChange={e => confirmBook(e.target)}
          />
        </div>
      </form>
    </div>
  )
}

export default GuestDetail
