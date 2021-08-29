import { Divider } from '@material-ui/core';

import { Button, makeStyles } from '@material-ui/core'
import React from 'react'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';


const useStyles = makeStyles((theme) => ({
    color: {
        backgroundColor: '#eee',
        height: '100%',
        padding:"0 20px"
    },
    btn: {
        width: "100%",
        marginTop: '20px',
    },
    flex: {
        display: 'grid',
        gridTemplateColumns: 'repeat(2,50%)',
        gridGap: '0px',
        color: "#555555",
        // fontFamily: 'Open Sans sans-serif',
        textAlign: 'left',
        fontSize: '14px',
    },

    bold: {
        fontWeight: 'bold',
        textAlign: 'left',
        fontSize: '14px',
        margin: "0",
        color: "#555555"
    },
    pad: {
        padding: '10px',
        // paddingTop: '10px',
        // border: "solid"
    },
    center: {
        textAlign: 'center',
    },
    width: {
        width: '85%',
        margin: 'auto',
    },
    blue: {
        color: 'rgb(35,117,155)',
        textAlign: 'left',
        fontSize: '16px',
        margin: '5px 0'
    },
    temp: {
         textAlign: 'left',
        fontSize: '14px',
        paddingLeft: '20px',
        paddingTop: '2px',
        backgroundColor: 'white',
        margin: 'auto',
        paddingBottom: '1rem',
    },
    btn2: {
        fontSize: '18px',
        backgroundColor: 'white',
        display: 'flex',
        justifyContent:"space-between",
        padding: '10px',
        margin: '0',
        cursor: "pointer",
        width: '100%',
        borderBottom:'dotted 1px #777777'
    },

    bld: {
        fontWeight: 'bold',
        textAlign: 'left',
    },
    rtpad: {
        paddingRight: '20px',
    }
}));


function Sidebar1() {
    const classes = useStyles()
    const [open,setOpen] = React.useState(false);
    

    const handleChange = (e) => {
        setOpen((items) => !items);
    }
    return (
        <div className={classes.color}>
            <Button
                className={classes.btn}
                variant="contained"
                color="primary"
                fullWidth
            >Modify</Button>
            <div className={classes.flex}>
                <div className={classes.pad}>
                    <p className={classes.bold}>Check In</p>
                    <p>8/27/2021</p>
                </div>

                <div className={classes.pad}>
                    <p className={classes.bold}>Check Out</p>
                    <p>8/28/2021</p>
                </div>

                <div className={classes.pad}>
                    <p className={classes.bold}>Number<br /> of Room(s) <br/> 1</p>
                </div>

                <div className={classes.pad}>
                    <p className={classes.bold}>Number<br /> of Nights <br/> 1 </p>
                </div>
            </div>

            <div className={classes.pad}>
                <p className={classes.bold}>Booked Rate</p>
                <p className={classes.blue}>BEST AVAILBALE RATE</p>
            </div>
            
          
            <Divider />
            <div>
                <div onClick={handleChange} variant='filled' className={classes.btn2}>TWO DOUBLE BEDS <span>{open?<ExpandLessIcon/>: <ExpandMoreIcon/>}</span></div>
                {/* <div className={classes.width}>
                    <hr />
                </div> */}
                {open ? <div className={classes.temp}>
                    
                    <p className={classes.bld}>Free Room Amenities</p>
                    <p >Hair Dryer</p>
                    <p >Coffee Maker</p>
                    <p >Iron</p>
                    <p >Air Conditioner</p>
                    <p className={classes.bld}>Room Description</p>
                    <p className={classes.rtpad}>Two Double Beds : Featuring a flat-screen cable TV,
                        free high-speed Wi-Fi,
                        a small refrigerator,
                        electronic safe, iron and board,
                        and coffee table + machine.
                        Guests are also provided with a stand up shower bathroom with a hairdryer.
                    </p>




                </div>: <div></div>}







                {/* <Menu open={open} anchorEl={anchor} onClose={handleChange}>
                    <MenuItem>
                        <div>Free Room Amenities
                               
                        </div>
                    </MenuItem>
                </Menu> */}
            </div>
           
        </div>
    )
}

export default Sidebar1
