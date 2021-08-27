import styles from "./detailTag.module.css";
import Brightness2Icon from '@material-ui/icons/Brightness2';
import DateRangeIcon from '@material-ui/icons/DateRange';
import HotelIcon from '@material-ui/icons/Hotel';
import WcIcon from '@material-ui/icons/Wc';

export const DetailTags = () => {
    return (
        <div className={styles.container}>
            <div>
                <DateRangeIcon />
                Check in
                <span>08/28/2021</span>
            </div>
            <div>
                <DateRangeIcon />
                Check in
                <span>08/28/2021</span>
            </div>
            <div className={styles.moonIcon}>
                <Brightness2Icon />
                Night(s)
                <span>1</span>
            </div>
            <div>
                <HotelIcon />
                Room(s)
                <span>1</span>
            </div>
            <div>
                <WcIcon />
                 Adult
                <span>1</span>
            </div>
        </div>
    )
}
