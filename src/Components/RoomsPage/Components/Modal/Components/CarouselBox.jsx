import Carousel from 'react-bootstrap/Carousel'
import { useSelector } from "react-redux";
import styles from "./modalStyle.module.css"
import CheckIcon from '@material-ui/icons/Check';
export const CarouselBox = () => {

    const id = useSelector((state) => state.app.modal.id);
    const rooms = useSelector((state) => state.app.rooms);

    const data = rooms.filter((item) => {
        return item.id === id;
    })
    let room = data[0];

    return (
        <div className={styles.carouselBox}>
            <h5>Photos</h5>
            <Carousel >
                <Carousel.Item>
                    <img className="d-block w-100" src={room.img} alt="First slide" />
                </Carousel.Item>
                <Carousel.Item>
                    <img className="d-block w-100" src={room.img2} alt="Second slide" />
                </Carousel.Item>
                <Carousel.Item>
                    <img className="d-block w-100" src={room.img3} alt="Third slide" />
                </Carousel.Item>
                <Carousel.Item>
                    <img className="d-block w-100" src={room.img4} alt="Third slide" />
                </Carousel.Item>
                <Carousel.Item>
                    <img className="d-block w-100" src={room.img5} alt="Third slide" />
                </Carousel.Item>
            </Carousel>
            <h5 className={styles.amenityHeading}>Amenities</h5>
            <div className={styles.amenities}>
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
        </div>
    )
}

