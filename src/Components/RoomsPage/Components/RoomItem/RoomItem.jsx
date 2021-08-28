import styles from './roomItem.module.css';
import PersonIcon from '@material-ui/icons/Person';
import HotelIcon from '@material-ui/icons/Hotel';
import SmokeFreeIcon from '@material-ui/icons/SmokeFree';
import CheckIcon from '@material-ui/icons/Check';
import LocalCafeIcon from '@material-ui/icons/LocalCafe';
import WcIcon from '@material-ui/icons/Wc';
import GroupsIcon from '@material-ui/icons/Groups';
import CircleNotificationsIcon from '@material-ui/icons/CircleNotifications';
import { useDispatch } from 'react-redux';
import { setIsOpen } from '../../../../Redux/rooms/actions';
import { useHistory } from 'react-router-dom';

export const RoomItem = ({ items }) => {

    const dispatch = useDispatch();
    const history = useHistory();
    
    
    // console.log(items)
    const { title,image,shortDesc,price,strikePrice,bed,baseOcc,maxOcc,maxAdult,id} = items;
    const handleOpen = () => {
        const payload={id,isOpen:true}
        const setOpenAction = setIsOpen(payload);
        dispatch(setOpenAction)
    };
    return (
        <div className={styles.container}>
            <div className={styles.heading}>
                <h1>{title}</h1>
                <div>$10.00 OFF</div>
            </div>
            <div className={styles.main}>
                <div onClick={handleOpen} className={styles.imgBox}>
                    <img src={image} alt="" />
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
                            <p>Base Occupancy: {baseOcc}</p>
                        </div>
                        <div>
                            <GroupsIcon />
                            <p>Max Occupancy: {maxOcc}</p>
                        </div>
                        <div>
                            <WcIcon />
                            <p>Max Adult: {maxAdult}</p>
                        </div>
                        <div>
                            <HotelIcon />
                            <p>Bad Count: {bed}</p>
                        </div>
                    </div>
                    <p>{shortDesc}</p>
                    <div onClick={handleOpen} className={styles.infoButton}>More information <span>{`>>`}</span></div>
                </div>
                <div className={styles.price}>
                    <p>(USD-$)</p>
                    <p>Total rate excluding tax</p>
                    <h3>$ {strikePrice}</h3>
                    <h1>$ {price}</h1>
                    <button onClick={() => { history.push(`/book/${id}`)}}>BOOK NOW</button>
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
