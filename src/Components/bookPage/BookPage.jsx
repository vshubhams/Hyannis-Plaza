import React from 'react'
import Description from './Description/Description'
import styles from './Bookpage.module.css'
import Sidebar1 from './Sidebar/Sidebar1'
import GuestDetail from './Guest_Detail/Guest_Detail'
import { Header } from "../RoomsPage/Components/Header/Header"
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { useState } from 'react';
import axios from 'axios'


function BookPage() {
    const [room, setRoom] = useState({});
    const { id } = useParams();

    useEffect(() => {
        window.scrollTo(0,0)
        axios.get("http://localhost:3001/rooms")
            .then((res) => {
                const data = res.data.filter((item) => {
                    return item.id === id;
                })
                setRoom(data[0])
            })
            .catch((err) => {
                console.log('err:', err)
            })
    }, [id]);

    console.log('room:', room)
    return (
        <div>
            <Header />
            <div className={styles.main}>
                <div>
                    <Sidebar1 />
                </div>
                <div>
                    <Description room={room} />
                    <GuestDetail />
                </div>
            </div>
        </div>
    )
}

export default BookPage
