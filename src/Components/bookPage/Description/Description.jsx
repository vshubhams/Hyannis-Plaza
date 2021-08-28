import React from 'react';
import styles from './Description.module.css'
import SmokeFreeIcon from '@material-ui/icons/SmokeFree';

function Description() {
    return (
        <div className={styles.main}>
            <p className={styles.size}>BOOKING DETAILS</p>
            <hr />
            <h6 className= {styles.box21}>TWO DOUBLE BEDS</h6>
            <div className= {styles.box2}>
                <img alt="Reservation" src="/images/dsc05806_optimized_20210809-04455033.jpg" style={{ width: "204px", height: "136px" }} />
                <div>
                    <div className={styles.box221}>
                        <b>RATE TYPE:&nbsp;&nbsp; </b>
                        <p> Best Available Rate</p></div>
                    <div className={styles.box221}>
                        <b>CHECK-IN-OUT: &nbsp;&nbsp;</b>
                        <p> 8/25/2021 to 8/26/2021, 1 Night(s).</p>
                    </div>
                    <div className={styles.box223}>
                        <div className={styles.box2231}>
                            <div style={{textAlign: 'center'}}>ROOM</div>
                            <div style={{textAlign: 'center'}}>1</div>
                        </div>
                        <div className={styles.box2231}>
                            <div style={{textAlign: 'center'}}>ADULT</div>
                            <div style={{textAlign: 'center'}}>1</div>
                        </div>
                    </div>
                </div>
                <div className={styles.box3}>
                    <b style={{color: 'red'}}><SmokeFreeIcon style={{height:"15px", marginTop:"2px"}} />&nbsp;NON SMOKING</b>
                    <div>
                        <b>Promotion: </b>
                        <p>10$ OFF PER NIGHT - $10 FLAT OFF</p>
                    </div>
                </div>
            </div>

            <div className={styles.box4}>
                <div>
                    <div>PRICE ($)</div>
                    <div>(Room/Night) 109.99</div>
                </div>

                <div>
                    <div>TAX ($)</div>
                    <div>15.89</div>
                </div>

                <div>
                    <div>FEES ($)</div>
                    <div>$ 8.50</div>
                </div>

                <div>
                    <div>TOTAL ($)</div>
                    <div>134.38</div>
                </div>
            </div>
            <div className={styles.box5}>
                <div className={styles.marbottom}>TAX INCLUDED</div>
                <div className={styles.bold}>
                    <div>Occupancy Tax:&nbsp;</div>
                    <div>11.7 % ( Room/Night ),</div>
                </div>
                <div className={styles.bold}>
                    <div>CCWPF :&nbsp;</div>
                    <div>2.75 % ( Room/Night ),</div>
                </div>

                <div className={styles.bold}>
                    <div>Resort Fee :&nbsp;</div>
                    <div>: $ 8.50 ( Room/Night ),</div>
                </div>
            </div>

            <div className={styles.box6}>
                <div className={styles.bold1}>Grand Total&nbsp;&nbsp;</div>
                <div className={styles.bold2}>
                    <span style={{fontSize:"14px"}}>( USD-$ )</span>
                    134.38</div>
            </div>
        </div>
    )
}

export default Description
