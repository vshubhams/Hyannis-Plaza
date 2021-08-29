import { Container, makeStyles,Grid, Typography } from '@material-ui/core';
import { useState } from 'react';
import { Link, Redirect } from 'react-router-dom';
import "./header.css";

const useStyles = makeStyles((theme) => ({
    cont: {
        width: '100%',
        background: '#212121',
        height:'7rem'
    },
    falign:
    {
        height: '100%',
    },

    imgStyle: {
        width: '80%',
    },

    imgStylefix: {
        width:'16%'
    },

    gridItem: {
        color: 'white',
        fontWeight:'900'
    },
    btnstyle : {
        padding: '.7rem',
        background: 'transparent',
        border: '2px solid white',
        color:'white'
    }
}))
const Header = () => {
    const cla = useStyles();
    const [redi, setredi] = useState(false);
    return redi?<Redirect to='/booking'/>:(<Container className={cla.cont}>
        <Grid container className={cla.falign} spacing={2} direction="row" alignItems="center" justifyContent='space-between'>
            <Grid item className={cla.imgStylefix}>
                <Typography component='div'>
                    <img alt="header" src='https://imgur.com/tdmG8UG.png' className={cla.imgStyle} />
                </Typography>
            </Grid>
            <Grid item className={cla.gridItem}>
                <Grid container style={{gridGap:'10px'}} direction="row" alignItems="center" justifyContent='center'>
                <Typography component='nav'>
                        <Link to='/' className='link_deco'>HOME</Link>
                </Typography>
                    
                <Typography component='nav'>
                <Link to='/' className='link_deco'>ROOMS</Link>
                </Typography>

                <Typography component='nav'>
                        <Link to='/' className='link_deco'>GALLERY</Link>
                </Typography>
                    
                <Typography component='nav'>
                <Link to='/packages' className='link_deco'>PACKAGES</Link>
                </Typography>

                <Typography component='nav'>   
                <Link to='/' className='link_deco'>RESTAURANT</Link>
                </Typography>

                <Typography component='nav'>   
                <Link to='/' className='link_deco'>AMENITIES</Link>
                </Typography>
                    
                <Typography component='nav'>   
                <Link to='/' className='link_deco'>AROUND US</Link>
                </Typography>
                    
                    <Typography component='nav'>    
                   <button className={cla.btnstyle} onClick={()=>setredi(true)}>BOOK NOW</button>
                </Typography>
                    
                </Grid>
            </Grid>
        </Grid>
    </Container>)
}

export default Header;