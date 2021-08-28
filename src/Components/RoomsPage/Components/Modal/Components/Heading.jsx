import styles from "./modalStyle.module.css"
import { useSelector } from "react-redux";
export const Heading = () => {
    const id = useSelector((state) => state.app.modal.id);
    const rooms = useSelector((state) => state.app.rooms);

    const data = rooms.filter((item) => {
        return item.id === id;
    })
    let room = data[0];
    return (
        <>
            <h3 className={styles.heading}>{room.title}</h3>
        </>
    )
}
