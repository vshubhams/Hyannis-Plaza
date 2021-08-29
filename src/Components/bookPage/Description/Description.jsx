import React from 'react';
import styles from './Description.module.css'
import SmokeFreeIcon from '@material-ui/icons/SmokeFree';
import CircleNotificationsIcon from '@material-ui/icons/CircleNotifications';
function Description({ room }) {

    return (
        <div className={styles.wrapper}>
            <h3>BOOKING DETAILS</h3>
            <div className={styles.container}>
                <h5>{room.title}</h5>
                <div className={styles.main}>
                    <div className={styles.imgBox}>
                        <img src={room.image} alt="" />
                    </div>
                    <div className={styles.details}>
                        <div className={styles.left}>
                            <div>
                                <h6>RATE TYPE:</h6>
                                <p>Best Available Rate</p>
                            </div>
                            <div>
                                <h6>CHECK-IN-OUT:</h6>
                                <p><span>8/28/2021</span> to <span>8/29/2021</span></p>
                            </div>
                            <div className={styles.boxes}>
                                <div>
                                    <h4>ROOM</h4>
                                    <p>1</p>
                                </div>
                                <div>
                                    <h4>ADULT</h4>
                                    <p>1</p>
                                </div>
                            </div>
                        </div>
                        <div className={styles.right}>
                            <div className={styles.smoke}>
                                <SmokeFreeIcon />
                                <h4>Non Smoking</h4>
                            </div>
                            <div className={styles.promotion}>
                                <h6>PROMOTION:</h6>
                                <p>10$ OFF PER NIGHT -$10 FLAT OFF</p>
                            </div>
                        </div>
                        <div className={styles.priceTable}>
                            <div className={styles.firstRow}>
                                <h6>Price ($)</h6>
                                <h6>Tax ($)</h6>
                                <h6>Fees ($)</h6>
                                <h6 className={styles.totalPrice}>Total ($)</h6>
                            </div>
                            <div>
                                <h6> <span>(Room/Night)</span>{room.price}</h6>
                                <h6>36.12</h6>
                                <h6>8.50</h6>
                                <h6 className={styles.totalValue}>{(room.price+36.12+8.50).toFixed(2)}</h6>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles.tax}>
                    <div>TAX INCLUDED</div>
                    <p>Occupancy Tax : 11.7 % <span>( Room/Night )</span> , CCWPF : 2.75 % <span>( Room/Night )</span> , Resort Fee : $ 8.50 <span>( Room/Night )</span></p>
                </div>
                <div className={styles.grandTotal}>
                    <h3>Grand Total <span>(USD-$) {(room.price+36.12+8.50).toFixed(2)}</span></h3>
                </div>
                <div className={styles.tag}>
                <CircleNotificationsIcon />
                <p>Lowest Price Guaranteed | Book Now Pay At Hotel</p>
            </div>
            </div>
        </div>
    )
}

export default Description
