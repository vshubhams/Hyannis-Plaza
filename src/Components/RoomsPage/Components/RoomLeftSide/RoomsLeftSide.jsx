import React from "react";
import DatePicker from "./DatePicker";
import {Dropdown1, Dropdown2} from "./Dropdown";
import styles from "./RoomsLeftSide.module.css";
import { useState, useEffect } from "react";
import { getBookingDetails } from "../../../../Redux/rooms/actions";
import { useDispatch } from "react-redux";
const RoomsLeftSide = () => {
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [roomCount, setRoomCount] = useState(1);
  const [adultCount, setAdultCount] = useState(1);
  const [childCount, setChildCount] = useState(1);

  const today = new Date();
  const dd = String(today.getDate()).padStart(2, '0');
  const mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
  const yyyy = today.getFullYear();
  const currentDate = yyyy + "-" + mm + "-" + dd;

  useEffect(() => {
    setStartDate(currentDate);
    setEndDate(currentDate);
  },[currentDate])


  const dispatch = useDispatch();
  
  const handleDate = (value,id) => {
    if (id === "date1") {
      setStartDate(value);
    }
    else if (id === "date2") {
      setEndDate(value);
    }
  }
  const countDay = () => {
    const oneDay = 1000 * 60 * 60 * 24;
    const firstDate = new Date(startDate);
    const seconddate = new Date(endDate);
    const difference = Math.abs(firstDate - seconddate);
    const day = Math.round(difference / oneDay);
    return day;
  }
  const nights = countDay();

  useEffect(() => {
    const payload = {
      startDate,
      endDate,
      roomCount,
      adultCount,
      childCount,
      nights
    }
    const bookingDetailsAction = getBookingDetails(payload);
    dispatch(bookingDetailsAction);
  }, [startDate, endDate, roomCount, adultCount, childCount,nights,dispatch]);

  return (
    <>
      <div className={styles.cont}>
        <div className={styles.leftSide}>
          <h2 className={styles.heading1}>Your Stay</h2>
          <DatePicker handleDate={handleDate} currentDate={currentDate} label="Check-In" id="date1"/>       
            <DatePicker handleDate={handleDate} currentDate={currentDate} label="Check-Out" id="date2"/>
            <div className={styles.formGrp}>
              <div className={styles.inputGrp}>
                <label htmlFor="checkIn" className={styles.checkInLabel}>
                  Number of Rooms
                </label>
                <div className={styles.datePickCont}>
                  <select value={roomCount} onChange={(e)=>{setRoomCount(Number(e.target.value))}} id={styles.checkIn}>
                    <option value={1}>
                      1
                    </option>
                    <option value={2}>
                      2
                    </option>
                    <option value={3}>
                      3
                    </option>
                    <option value={4}>
                      4
                    </option>
                    <option value={5}>
                      5
                    </option>
                    <option value={6}>
                      6
                    </option>
                  </select>
                  
                </div>
              </div>
            </div>
            <div className={styles.addIt}>
              <h2>Room 1</h2>
            <svg
                onClick={()=>{setRoomCount(prev=>prev+1)}}
                className={styles.addIcon}
                xmlns="http://www.w3.org/2000/svg"
                height="24px"
                viewBox="0 0 24 24"
                width="24px"
                fill="#000000"
              >
                <path d="M0 0h24v24H0V0z" fill="none" />
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm5 11h-4v4h-2v-4H7v-2h4V7h2v4h4v2z" />
              </svg>
            </div>
            <div className={styles.peoples_outer}>
              <div className={styles.peoples}>
                <label>Adults (21+)</label>
                <div>
                  <select onChange={(e)=>{setAdultCount(e.target.value)}} className={styles.peoples_Sel_1}>
                    <option value={1}>
                      1
                    </option>
                    <option value={2}>
                      2
                    </option>
                    <option value={3}>
                      3
                    </option>
                    <option value={4}>
                      4
                    </option>
                    <option value={5}>
                      5
                    </option>
                    <option value={6}>
                      6
                    </option>
                  </select>
                </div>
              </div>
              <div className={styles.peoples}>
                <label>Child (0-10)</label>
                <div>
                  <select onChange={(e)=>{setChildCount(e.target.value)}} className={styles.peoples_Sel_1}>
                    <option value={1}>
                      1
                    </option>
                    <option value={2}>
                      2
                    </option>
                    <option value={3}>
                      3
                    </option>
                    <option value={4}>
                      4
                    </option>
                    <option value={5}>
                      5
                    </option>
                    <option value={6}>
                      6
                    </option>
                  </select>
                </div>
              </div>
            </div>
            <div className={styles.promo}>
              <div>
                <label>Promotion Code</label>
<input type="text" placeholder="10$ off per Night" className={styles.peoples_Sel_1} />
              </div>
              <div>
                <label>Travel Agent - IATA</label>
                <input type="text" className={styles.peoples_Sel_1}  />
              </div>
            </div>
            <button className={styles.btn}>Search Availability</button>
            <div>
              <Dropdown1 />
              <Dropdown2 />
            </div>
          </div>
        </div>
     
    </>
  );
};

export default RoomsLeftSide;
