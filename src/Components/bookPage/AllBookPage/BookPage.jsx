import React from 'react'
import Discription from '../comp1/Discription'

import styles from './Bookpage.module.css'
import Sidebar1 from '../Sidebar/Sidebar1'
import GuestDetail from '../comp2/Guest_Detail'

function BookPage() {
    return (
        <div className= {styles.main}>
            <div>
                <Sidebar1 />
            </div>
            <div>
                <Discription />
                <GuestDetail />
            </div>
        </div>
    )
}

export default BookPage
