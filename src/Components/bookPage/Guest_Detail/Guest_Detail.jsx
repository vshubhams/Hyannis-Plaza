import React from 'react';
import TextField from '@material-ui/core/TextField';
import { makeStyles, withStyles } from '@material-ui/core/styles';
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
      <form className={classes.container} noValidate autoComplete="off" onSubmit={handleSubmit}>
        <div>
          <ValidationTextField
            label="First Name"
            required
            fullWidth
            variant="filled"
            size="small"
            value={firstname}
            onChange={e => setFirstName(e.target.value)}
          />
        </div>
        <div>
          <ValidationTextField
            label="Last Name"
            required
            fullWidth
            variant="filled"
            size="small"
            value={lastname}
            onChange={e => setLastName(e.target.value)}
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
            value={email}
            onChange={e => setEmail(e.target.value)}
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
            value={phone}
            onChange={e => setPhone(e.target.value)}
          />
        </div>
        <div>
          <ValidationTextField
            label="Address"
            required
            fullWidth
            variant="filled"
            size="small"
            value={address}
            onChange={e => setAddress(e.target.value)}
          />
        </div>
        <div>
          <ValidationTextField
            label="City"
            required
            fullWidth
            variant="filled"
            size="small"
            value={city}
            onChange={e => setCity(e.target.value)}
          />
        </div>
        <div>
          <ValidationTextField
            label="State"
            required
            fullWidth
            variant="filled"
            size="small"
            value={state}
            onChange={e => setState(e.target.value)}
          />
        </div>
        <div>
          <ValidationTextField
            label="Country"
            required
            fullWidth
            variant="filled"
            size="small"
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
            label="ZIP Code"
            required
            fullWidth
            variant="filled"
            size="small"
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
