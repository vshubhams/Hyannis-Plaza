import styles from "./modalStyle.module.css"
import { useSelector } from "react-redux";
export const Description = () => {
    const id = useSelector((state) => state.app.modal.id);
    const rooms = useSelector((state) => state.app.rooms);

    const data = rooms.filter((item) => {
        return item.id === id;
    })
    let room = data[0];
    console.log('room:', room)
    return (
        <div className={styles.container}>
            <h5>Description</h5>
            <p>{room.longDesc}</p>
            <div  className={styles.features}>
                <div>
                    <p>Base Occupancy</p>
                    <span>{room.baseOcc}</span>
                </div>
                <div>
                    <p>Max Occupancy</p>
                    <span>{room.maxOcc}</span>
                </div>
                <div>
                    <p>Max Adult</p>
                    <span>{room.maxAdult}</span>
                </div>
            </div>
        </div>
    )
}
