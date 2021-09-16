import React from 'react'
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import Input from '@material-ui/core/Input';
import MenuItem from '@material-ui/core/MenuItem';
import ListItemText from '@material-ui/core/ListItemText';
import Checkbox from '@material-ui/core/Checkbox';
import { useDispatch } from 'react-redux';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { getFilterRoom } from '../../../../Redux/rooms/actions';




const useStyles = makeStyles((theme) => ({


    formControl: {
        margin: theme.spacing(1),
        minWidth: 330,
        maxWidth: 400,
        
      },
      chkb:{
        
        color: "rgb(84,18,2)"
      }

}));

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const names = [
    'Two Double Beds',
    'Regency Suite',
    'Crown Victorian',
    'Plaza Suite',
    'Royal Victorian Suite',
    'Family Suite',
    'Princess Junior Suite',
    'Princess Suite',
  ];
  
  const names1 = [
    'Edit / Cancel Booking',
    'Promotion Code',
    'Terms and Conditions',
    'Cancellation Policy',
    'Pets Policy',
  ];
  

const Dropdown1 = () => {
    const classes = useStyles();
   
   
    const [personName, setPersonName] = React.useState([]);
  
    const dispatch = useDispatch();

    const handleChange = (event) => {
      setPersonName(event.target.value);
      const getFilterAction = getFilterRoom(event.target.value);
      dispatch(getFilterAction);
     
      
    };

    

    return (
        <div>
              <FormControl className={classes.formControl}>
        <InputLabel id="demo-mutiple-checkbox-label">REFINE ROOM</InputLabel>
        <Select
          labelId="demo-mutiple-checkbox-label"
          id="demo-mutiple-checkbox"
          multiple
          value={personName}
          onChange={handleChange}
          input={<Input />}
          renderValue={(selected) => selected.join(', ')}
          MenuProps={MenuProps}
        >
          {names.map((name) => (
            <MenuItem key={name} value={name}>
              <Checkbox checked={personName.indexOf(name) > -1 }  className={classes.chkb} color="primary"/>
              
              <ListItemText primary={name} />
            </MenuItem>
          ))}
        </Select>
      </FormControl>
        </div>
    )
}



const Dropdown2 = () => {

    const classes = useStyles();
    const [personName1, setPersonName1] = React.useState([]);
  
    const handleChange = (event) => {
      setPersonName1(event.target.value);
    };

 const theme = useTheme();
      function getStyles(name, personName1, theme) {
    return {
      fontWeight:
        personName1.indexOf(name) === -1
          ? theme.typography.fontWeightRegular
          : theme.typography.fontWeightMedium,
    };
  }

    return (
        <div>
            
            <FormControl className={classes.formControl}>
        <InputLabel id="demo-mutiple-name-label">OTHER LINKS</InputLabel>
        <Select
          labelId="demo-mutiple-name-label"
          id="demo-mutiple-name"
          multiple
          value={personName1}
          onChange={handleChange}
          input={<Input />}
          MenuProps={MenuProps}
        >
          {names1.map((name) => (
            <MenuItem key={name} value={name} style={getStyles(name, personName1, theme)}>
              {name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>

        </div>
    )
}




export { Dropdown1, Dropdown2 }
