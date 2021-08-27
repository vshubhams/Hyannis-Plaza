import React from "react";
import DatePicker from "../../../DatePicker";
import {Dropdown1, Dropdown2} from "../../../Dropdown";
import styles from "./RoomsLeftSide.module.css";
const RoomsLeftSide = () => {
  return (
    <>
      <div className={styles.cont}>
        <div className={styles.leftSide}>
          <h2 className={styles.heading1}>Your Stay</h2>
          <DatePicker label="check-In" />       
            <DatePicker label="check-out" />
            <div className={styles.formGrp}>
              <div className={styles.inputGrp}>
                <label for="checkIn" className={styles.checkInLabel}>
                  Number of Rooms
                </label>
                <div className={styles.datePickCont}>
                  <select id={styles.checkIn} role="listbox">
                    <option role="option" value="1">
                      1
                    </option>
                    <option role="option" value="2">
                      2
                    </option>
                    <option role="option" value="3">
                      3
                    </option>
                    <option role="option" value="4">
                      4
                    </option>
                    <option role="option" value="5">
                      5
                    </option>
                    <option role="option" value="6">
                      6
                    </option>
                  </select>
                  {/* <div className={styles.calSvgDiv}><svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="calendar-alt" className={styles.calIcon} role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M0 464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V192H0v272zm320-196c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12h-40c-6.6 0-12-5.4-12-12v-40zm0 128c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12h-40c-6.6 0-12-5.4-12-12v-40zM192 268c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12h-40c-6.6 0-12-5.4-12-12v-40zm0 128c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12h-40c-6.6 0-12-5.4-12-12v-40zM64 268c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12H76c-6.6 0-12-5.4-12-12v-40zm0 128c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12H76c-6.6 0-12-5.4-12-12v-40zM400 64h-48V16c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v48H160V16c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v48H48C21.5 64 0 85.5 0 112v48h448v-48c0-26.5-21.5-48-48-48z"></path></svg></div>  */}
                </div>
              </div>
            </div>
            <div className={styles.addIt}>
              <h2>Room 1</h2>
              <svg
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
                  <select class={styles.peoples_Sel_1} role="listbox">
                    <option role="option" value="1">
                      1
                    </option>
                    <option role="option" value="2">
                      2
                    </option>
                    <option role="option" value="3">
                      3
                    </option>
                    <option role="option" value="4">
                      4
                    </option>
                    <option role="option" value="5">
                      5
                    </option>
                    <option role="option" value="6">
                      6
                    </option>
                  </select>
                </div>
              </div>
              <div className={styles.peoples}>
                <label>Child (0-10)</label>
                <div>
                  <select class={styles.peoples_Sel_1} role="listbox">
                    <option role="option" value="1">
                      1
                    </option>
                    <option role="option" value="2">
                      2
                    </option>
                    <option role="option" value="3">
                      3
                    </option>
                    <option role="option" value="4">
                      4
                    </option>
                    <option role="option" value="5">
                      5
                    </option>
                    <option role="option" value="6">
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
      {/* </div> */}
    </>
  );
};

export default RoomsLeftSide;
