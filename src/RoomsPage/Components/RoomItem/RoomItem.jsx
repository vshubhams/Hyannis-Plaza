import styles from './roomItem.module.css';
import PersonIcon from '@material-ui/icons/Person';
import HotelIcon from '@material-ui/icons/Hotel';
import SmokeFreeIcon from '@material-ui/icons/SmokeFree';
import CheckIcon from '@material-ui/icons/Check';
import LocalCafeIcon from '@material-ui/icons/LocalCafe';
import WcIcon from '@material-ui/icons/Wc';
import GroupsIcon from '@material-ui/icons/Groups';
import CircleNotificationsIcon from '@material-ui/icons/CircleNotifications';
export const RoomItem = () => {
    return (
        <div className={styles.container}>
            <div className={styles.heading}>
                <h1>Two double beds</h1>
                <div>$10.00 OFF</div>
            </div>
            <div className={styles.main}>
                <div className={styles.imgBox}>
                    <img src="https://reservation.asiwebres.com/UploadImages/HotelImages/98232/33638/dsc05806_optimized_20210809-04455033.jpg" alt="" />
                </div>
                <div className={styles.content}>
                    <h2>Best available rate</h2>
                    <h3>Promotion - 10$ off eact night</h3>
                    <div className={styles.smoke}>
                    <SmokeFreeIcon />
                    <h4>Non Smoking</h4>
                    </div>
                    <div className={styles.features}>
                        <div>
                            <PersonIcon />
                            <p>Base Occupancy: 2</p>
                        </div>
                        <div>
                            <GroupsIcon />
                            <p>Max Occupancy: 2</p>
                        </div>
                        <div>
                            <WcIcon />
                            <p>Max Adult: 2</p>
                        </div>
                        <div>
                            <HotelIcon />
                            <p>Bad Count: 2</p>
                        </div>
                    </div>
                    <p>Two Double Beds : Featuring a flat-screen cable TV, free high-speed Wi-Fi, a small refrigerator, electronic safe, iron and board, and coffee table + machine. Guests are also provided with a stand up shower bathroom...</p>
                    <div className={styles.infoButton}>More information <span>{`>>`}</span></div>
                </div>
                <div className={styles.price}>
                    <p>(USD-$)</p>
                    <p>Total rate excluding tax</p>
                    <h3>$119.99</h3>
                    <h1>$109.99</h1>
                    <button>BOOK NOW</button>
                </div>
            </div>
            <div className={styles.freebies}>
                <LocalCafeIcon />
                <div>
                    <CheckIcon />
                    <p>Hair Dryer</p>
                </div>
                <div>
                    <CheckIcon />
                    <p>Coffe Maker</p>
                </div>
                <div>
                    <CheckIcon />
                    <p>Iron</p>
                </div>
                <div>
                    <CheckIcon />
                    <p>Air Conditioner</p>
                </div>
            </div>
            <div className={styles.tag}>
                <CircleNotificationsIcon />
                <p>Lowest Price Guaranteed | Book Now Pay At Hotel</p>
            </div>
        </div>
    )
}
