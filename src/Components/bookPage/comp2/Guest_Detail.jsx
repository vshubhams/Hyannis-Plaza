import React from 'react';
import TextField from '@material-ui/core/TextField';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';

import Divider from '@material-ui/core/Divider';
import { Box } from '@material-ui/core';
import NotificationsIcon from '@material-ui/icons/Notifications';
import { MenuItem } from '@material-ui/core';

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


function GuestDetail() {
  const classes = useStyles();
  const [firstname, setFirstName] = React.useState('');
  const [lastname, setLastName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [phone, setPhone] = React.useState();
  const [address, setAddress] = React.useState('');
  const [city, setCity] = React.useState('');
  const [state, setState] = React.useState('');
  const [country, setCountry] = React.useState('');
  const [zipCode, setZipCode] = React.useState();

  const handleSubmit = () => {
    const payload = {
      firstname,
      lastname,
      email,
      phone,
      address,
      city,
      state,
      country,
      zipCode
    }
    console.log(payload)
  }



  return (
    <div className={classes.box}>
      <Box className={classes.flex}>
        <NotificationsIcon />
        <Typography
          variant='subtitle2'
          align='justify'
          className={classes.padd}
        >Lowest Price Guaranteed | Book Now Pay At Hotel</Typography>
      </Box>
      <Divider />
      <Typography
        variant='h5'
        align='justify'
        className={classes.padd}
      >GUEST DETAILS</Typography>
      <Divider />



      <form className={classes.container} noValidate autoComplete="off" onSubmit={handleSubmit}>
        <div>
          <ValidationTextField
            label="First Name"
            required
            fullWidth
            variant="outlined"
            size="medium"
            id="outlined1"
            value={firstname}
            onChange={e => setFirstName(e.target.value)}
          />
        </div>
        <div>
          <ValidationTextField
            label="Last Name"
            required
            fullWidth
            variant="outlined"
            size="medium"
            id="outlined2"
            value={lastname}
            onChange={e => setLastName(e.target.value)}
          />
        </div>
        <div>
          <ValidationTextField
            label="Email"
            required
            fullWidth
            variant="outlined"
            size="medium"
            type="email"
            id="outlined3"
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
        </div>
        <div>
          <ValidationTextField
            id="outlined4"
            label="Phone"
            required
            fullWidth
            variant="outlined"
            size="medium"
            type="Number"
            value={phone}
            onChange={e => setPhone(e.target.value)}
          />
        </div>
        <div>
          <ValidationTextField
            id="outlined5"
            label="Address"
            required
            fullWidth
            variant="outlined"
            size="medium"
            value={address}
            onChange={e => setAddress(e.target.value)}
          />
        </div>
        <div>
          <ValidationTextField
            id="outlined6"
            label="City"
            required
            fullWidth
            variant="outlined"
            size="medium"
            value={city}
            onChange={e => setCity(e.target.value)}
          />
        </div>
        <div>
          <ValidationTextField
            id="outlined7"
            label="State"
            required
            fullWidth
            variant="outlined"
            size="medium"
            value={state}
            onChange={e => setState(e.target.value)}
          />
        </div>
        <div>
          <ValidationTextField
            id="outlined8"
            label="Country"
            required
            fullWidth
            variant="outlined"
            size="medium"
            select
            onChange={e => setCountry(e.target.value)}
            value={country}
          >
            {names.map((option, i) => {
              return <MenuItem key={i} value={option} >{option}</MenuItem>
            })}


          </ValidationTextField>
        </div>
        <div>
          <ValidationTextField
            id="outlined9"
            label="ZIP Code"
            required
            fullWidth
            variant="outlined"
            size="medium"
            type='number'
            value={zipCode}
            onChange={e => setZipCode(e.target.value)}
          />
        </div>
      </form>
    </div>
  )
}

export default GuestDetail
