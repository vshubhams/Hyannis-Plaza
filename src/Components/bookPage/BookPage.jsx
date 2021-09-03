import React from 'react'
import Description from './Description/Description'
import styles from './Bookpage.module.css'
import Sidebar1 from './Sidebar/Sidebar1'
import GuestDetail from './Guest_Detail/Guest_Detail'
import { Header } from "../RoomsPage/Components/Header/Header"
import { Redirect, useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { useState } from 'react';
import axios from 'axios'
import { PaymentDetails } from './PaymentDetails/PaymentDetails'
import { console } from 'globalthis/implementation'
import swal from 'sweetalert';
function BookPage() {
    const [room, setRoom] = useState({});
    const { id } = useParams();
    const [bookDetails,setbookDetails] = useState({})
    const [redi, setredi] = useState(false);
    useEffect(() => {
        window.scrollTo(0,0)
        axios.get(process.env.REACT_APP_ROOMS_API_KEY)
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


    const confirmBook = (event) =>
    {
        const { name, value } = event;
        setbookDetails({ ...bookDetails, [name]: value });
        // console.log(room.title);
    }
    const handleSubmitBook = () => {

        axios.post(process.env.REACT_APP_CONFIRM_BOOKING_API_KEY,bookDetails)
            .then((res) => {
                    swal("Done", "Your Booking Sucessfully Completed", "success")
                  .then(willDelete => {
                      if (willDelete)
                      {
                          setredi(true);
                      }
                  });
            })
            .catch((err) =>
            {
                swal({
                    title: "Warning",
                    text: err.message,
                    icon: "warning",
                    dangerMode: true,
                  })
            })

    }
    return redi?<Redirect to='/rooms'/>:(
        <div className={styles.backg}>
        <div className={styles.container}>
            <Header />
            <div className={styles.main}>
                <div>
                    <Sidebar1 room={room} />
                </div>
                <div>
                    <Description room={room} />
                        <GuestDetail confirmBook={ confirmBook }/>
                    <PaymentDetails confirmBook={ confirmBook } handleSubmitBook={ handleSubmitBook } />
                </div>
            </div>
            </div>
            </div>
    )
}

export default BookPage
