import { Container, makeStyles,Grid, Typography } from '@material-ui/core';
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
        width:'20%'
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
    return (<Container className={cla.cont}>
        <Grid container className={cla.falign} spacing={2} direction="row" alignItems="center" justifyContent='space-between'>
            <Grid item className={cla.imgStylefix}>
                <Typography component='div'>
                    <img src='https://imgur.com/tdmG8UG.png' className={cla.imgStyle} />
                </Typography>
            </Grid>
            <Grid item className={cla.gridItem}>
                <Grid container style={{gridGap:'10px'}} direction="row" alignItems="center" justifyContent='center'>
                <Typography component='nav'>
                        HOME
                </Typography>
                    
                <Typography component='nav'>
                        ROOMS
                </Typography>

                <Typography component='nav'>
                        GALLERY
                </Typography>
                    
                <Typography component='nav'>
                        PACKAGES
                </Typography>

                <Typography component='nav'>   
                      RESTAURANT
                </Typography>

                <Typography component='nav'>   
                   AMENITIES
                </Typography>
                    
                <Typography component='nav'>   
                        AROUND US
                </Typography>
                    
                <Typography component='nav'>   
                   <button className={cla.btnstyle}>BOOK NOW</button>
                </Typography>
                    
                </Grid>
            </Grid>
        </Grid>
    </Container>)
}

export default Header;