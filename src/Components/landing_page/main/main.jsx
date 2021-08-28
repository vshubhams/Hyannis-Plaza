import '../main/main.css';
import { Grid } from '@material-ui/core';
import { Link } from 'react-router-dom';
export default function Main() {
    return (<div className='mainSize'>
    <div className='content'>
    <h1>Welcome to the Hyannis Plaza Hotel </h1>
    <p>The Hyannis Plaza Hotel emanates the passion of Cape Cod while offering the ideal location just steps away from all the best restaurants, shops, and activities on Hyannis Main Street. To create a truly unique experience, there are 141 guest rooms with 111 suites designed for the discerning traveler. Warm color tones accented with rich textiles and dark woods create open and inviting spaces. Modern conveniences such as our high speed fiber-optic internet and outdoor pool make every room a comforting place to unwind.</p>
</div>

<div className='imgDes'>
    <div>
        <img alt="main_image" src='https://images.squarespace-cdn.com/content/v1/5af3725e697a98ab349b91e4/1628425724735-4UIRU963VFA97YHQ9K4J/%5C?format=500w' />
        <div className="details">
            <p className='first'>Gallery</p>
            <p className='second'>Click to see more high quality pictures of our rooms and property amenities. </p>
            <p className='third'>Gallery →</p>
        </div>
    </div>
    <div>
        <img alt="main_image" src='https://images.squarespace-cdn.com/content/v1/5af3725e697a98ab349b91e4/1628425797548-GFQDPVQ3J0P2KI2DCMQ9/dsc05798_optimized.jpg?format=500w' />
        <div className="details">
            <p className='first'>Book Now</p>
            <p className='second'>Ready to take the next step? Click here to book your room through our secure platform.</p>
            <p className='third'>Book Now →</p>
        </div>
    </div>
</div>
<hr style={{ marginLeft: "7rem", marginRight: "7rem" }} />
<div className="features">
    <Grid container spacing={1} justifyContent='center' alignItems="center">
        <Grid item xl={4} md={4} sm={12}>
            <div>
                <p>ATTRACTIONS</p>
                <img alt="main_image" src="https://images.squarespace-cdn.com/content/v1/5af3725e697a98ab349b91e4/1625843316966-YT0BPIW8JKJW2AX0WYBK/image-asset.jpeg?format=300w" width='250vh' height='150vh' />
            </div>
        </Grid>
        <Grid item xl={4} md={4} sm={12}>
            <div>
                <p>PACKAGES</p>
                <img alt="main_image" src="https://images.squarespace-cdn.com/content/v1/5af3725e697a98ab349b91e4/1625844873346-5QD8SVZU1CNP7CXY3UQC/Luxury-Turndown-1.jpg?format=300w" width='250vh' height='150vh' />
            </div>
        </Grid>
        <Grid item xl={4} md={4} sm={12}>
            <div>
                <p>RESTAURANTS</p>
                <img alt="main_image" src="https://images.squarespace-cdn.com/content/v1/5af3725e697a98ab349b91e4/1625844188813-IQHAA2VA7UB18863J9FP/download.jpg?format=300w" width='250vh' height='150vh' />
            </div>
        </Grid>
    </Grid>
</div>

<div className="footerStrip">
    <p>** <Link to='/booking'> GUARANTEED BEST RATE WHEN YOU BOOK WITH US DIRECTLY </Link> **</p>
        </div>
    </div>)
}