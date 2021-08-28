import './pramotion.css';
export default function Pramotion() {
    return <div className="pramotion">
    <p className="desc"> SIGN UP BELOW FOR THE LATEST PROMOTIONS AND DISCOUNTS!</p>
        <div>
            <form>
                <div>
                    <div>
                        <div>
                            <p>First Name *</p>
                            <input type="text" />
                        </div>

                        <div>
                            <p>Last Name *</p>
                            <input type="text" />
                        </div>
                    </div>
                    
                    <div>
                    <div>
                        <p>Email *</p>
                        <input type="text" />
                        </div>
                        
                        <div>
                        <p>Phone No. *</p>
                        <input type="text" />
                    </div>
                    </div>
                </div>
                <div className='formbtn'>
                <button>Submit</button>
                </div>
             </form>
       </div>
    </div>
}