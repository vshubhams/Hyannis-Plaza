import styles from './header.module.css'
import RoomIcon from '@material-ui/icons/Room';
import HomeIcon from '@material-ui/icons/Home';
import PhoneEnabledIcon from '@material-ui/icons/PhoneEnabled';
export const Header = () => {
    return (
        <div className={styles.container}>
            <div className={styles.left}>
                <img src="./hyannis-logo.png" alt="" />
                <p>Hyannis Plaza Hotel, Hyannis</p>
            </div>
            <div className={styles.right}>
                <div>
                    <RoomIcon />
                    662 Main St, Hyannis, Massachusetts, 02601, United States
                </div>
                <div className={styles.row2}>
                    <div>
                        <HomeIcon />
                        Back To Website Home
                    </div>
                    <div>
                        <PhoneEnabledIcon />
                        508-775-5601
                    </div>
                </div>
                <div>
                    <img src="./en.png" alt="" />
                </div>
            </div>
        </div>
    )
}
