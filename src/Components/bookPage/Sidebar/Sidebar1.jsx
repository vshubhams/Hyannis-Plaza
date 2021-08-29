import { Divider } from '@material-ui/core';

import { Button, makeStyles } from '@material-ui/core'
import React from 'react'


const useStyles = makeStyles((theme) => ({
    color: {
        backgroundColor: '#eee',
        height:'100%'
    },
    btn: {
        backgroundColor: 'rgb(84,20,13)',
        width:'85%',
        margin: '20px',
        marginLeft: '10px'
    },
    flex: {
        display: 'grid',
        gridTemplateRows: 'repeat(4,75px)',
        gridGap: '8px',
        fontFamily: 'Open Sans sans-serif',
        textAlign: 'left',
        fontSize: '14px',
    },

    bold: {
        fontWeight: 'bold',
        textAlign: 'left',
        fontSize: '14px',
    },
    pad: {
        padding: '20px',
        paddingTop: '10px',
    },
    center: {
        textAlign: 'center',
    },
    width: {
        width: '85%',
        margin:'auto',
    },
    blue: {
        color: 'rgb(35,117,155)',
       
        textAlign: 'left',
        fontSize: '14px',
        // margin: '10px',
        marginBottom: '10px'
    },
    temp: {
         textAlign: 'left',
        fontSize: '14px',
        paddingLeft: '20px',
        paddingTop: '2px',
        backgroundColor: 'white',
        width: '90%',
        margin: 'auto',
        paddingBottom:'1rem'
    },
    btn2: {
        fontSize: '18px',
        backgroundColor: 'white',
        padding: '1.5rem',
        margin: '0',
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
                color="secondary"
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
            </div>
            
            <div className={classes.width}>
            
                <p className={classes.blue}>BEST AVAILBALE RATE</p>
          
            </div>
            <Divider />
            <div>
                <Button onClick={handleChange} variant='filled' className={classes.btn2}>TWO DOUBLE BEDS</Button>
                <div className={classes.width}>
                    <hr />
                </div>
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
