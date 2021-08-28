import { useState } from 'react';
import { Redirect } from 'react-router';
import '../banner/banner.css';
export default function Banner() {
    const [redi,setredi]=useState(false)
    return redi?<Redirect to='/booking'/>:(<div className='bannerSize'>
        
        <div className="fontDesign">
            <p className="hotelName"><strong>Hyannis Plaza Hotel </strong></p>
            <p className="italicDes">Hyannis, MA</p>
            <button onClick={()=>setredi(true)}>BOOK NOW</button>
        </div>
    </div>);
}