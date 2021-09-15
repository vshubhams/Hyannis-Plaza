import React from 'react'
import Header from '../landing_page/header/header';
import styles from '../RoomsPage/Components/RoomLeftSide/RoomsLeftSide.module.css';
import Footer from '../landing_page/footer/footer';

const Package = () => {
    return (
        <>
           <div>
               <Header />
           </div> 
           <div className={styles.pkgBody}>
                <img src="https://images.squarespace-cdn.com/content/v1/5af3725e697a98ab349b91e4/1611258006023-6JTYQ8YGA0JFUOZPTUI9/Romance.jpg?format=1000w" alt="roses" />
           </div>
           <div className={styles.pkgwrt}>
           <h2>&nbsp;<strong>Romance Package</strong></h2>
           <p>Honeymoons, Baby-moon, Anniversary or just a quick weekend away, let us help you make it <strong>special.</strong></p>
           <p>Start off your special TIME together by walking into your room which awaits you with fresh local flowers, delicious chocolates and a bottle of Champagne. </p>
           <p>Enjoy dinner at one of our many local restaurants then come back and soak in the hot tub before you snuggle into bed and prepare to sleep-in late. </p>
           <p>Need to make it even more special? Let us know, we are willing to help.</p>
           <h2><strong>PACKAGE INCLUDES:</strong></h2>
           <ul><li><h2><strong>CHAMPAGNE FOR TWO  </strong></h2></li><li><h2 ><strong> FLOWERS </strong></h2></li><li><h2 ><strong>CHOCOLATES</strong></h2></li></ul>
           <h1>Add onto any Room for $50</h1>
          
           </div>
           <button className={styles.bn}>BOOK NOW</button>
           <div>
               <Footer />
           </div>

        </>
    )
}

export default Package
