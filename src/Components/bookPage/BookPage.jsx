import React from 'react'
import Description from './Description/Description'

import styles from './Bookpage.module.css'
import Sidebar1 from './Sidebar/Sidebar1'
import GuestDetail from './Guest_Detail/Guest_Detail'
import { Header } from '../RoomsPage/Components/Header/Header'

function BookPage() {
    return (
        <div>
            <Header />
        <div className= {styles.main}>
            <div>
                <Sidebar1 />
            </div>
            <div>
                <Description />
                <GuestDetail />
            </div>
            </div>
        </div>
    )
}

export default BookPage
