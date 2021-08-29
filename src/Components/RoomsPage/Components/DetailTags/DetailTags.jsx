import styles from "./detailTag.module.css";
import Brightness2Icon from '@material-ui/icons/Brightness2';
import DateRangeIcon from '@material-ui/icons/DateRange';
import HotelIcon from '@material-ui/icons/Hotel';
import WcIcon from '@material-ui/icons/Wc';
import { useSelector } from "react-redux";

export const DetailTags = () => {
    const { startDate, endDate, roomCount, adultCount,nights } = useSelector(state => state.app.bookingDetails);


    
    return (
        <div className={styles.container}>
            <div>
                <DateRangeIcon />
                Check in
                <span>{startDate }</span>
            </div>
            <div>
                <DateRangeIcon />
                Check in
                <span>{endDate} </span>
            </div>
            <div className={styles.moonIcon}>
                <Brightness2Icon />
                Night(s)
                <span>{nights}</span>
            </div>
            <div>
                <HotelIcon />
                Room(s)
                <span>{roomCount}</span>
            </div>
            <div>
                <WcIcon />
                 Adult
                <span>{adultCount}</span>
            </div>
        </div>
    )
}
