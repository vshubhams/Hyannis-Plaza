import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import { useDispatch, useSelector } from 'react-redux';
import { setIsOpen } from '../../../../Redux/rooms/actions';
import { CarouselBox } from './Components/CarouselBox';
import { Description } from './Components/Description';
import { Heading } from './Components/Heading';
const useStyles = makeStyles((theme) => ({
    modal: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    paper: {
        backgroundColor: theme.palette.background.paper,
        boxShadow: theme.shadows[5],
        width: "80%",
        margin: "50px 0",
        outline: "none",
    },
    header: {
        backgroundColor: "#343644",
        display: 'flex',
        justifyContent: 'space-between',
        color: "#FFF",
        padding: "5px 10px 10px"
    },
    container: {
        padding: "20px",
    },
    main: {
        display: 'grid',
        gridGap: "2%",
        gridTemplateColumns: "49% 49%",
    },
    imgBox: {
        // border:"solid blue"
    },
    contentBox: {
        // border: "solid red"
    },
    bottom: {
        display: "flex",
        justifyContent: "space-between",
    },
    closeButton: {
        color: "#FFF",
        border: "none",
        padding: "8px 18px",
        backgroundColor: "#541202"
    },
    cross: {
        fontSize: "20px",
        fontWeight: "700",
        marginRight: "20px",
        cursor:"pointer"
    }

}));

export default function TransitionsModal() {
    const open = useSelector((state) => state.app.modal.isOpen);
    const classes = useStyles();
    const dispatch = useDispatch();

    const handleClose = () => {
        const payload = { id: "", isOpen: false }
        const setOpenAction = setIsOpen(payload);
        dispatch(setOpenAction)
    };

    return (
        <div>
            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                className={classes.modal}
                open={open}
                onClose={handleClose}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                    timeout: 500,
                }}
            >
                <div className={classes.paper}>
                    <div className={classes.header}>
                        <Heading />
                        <div className={classes.cross} onClick={handleClose} >x</div>
                    </div>

                    <div className={classes.container}>
                        <div className={classes.main}>
                            <div className={classes.imgBox}>
                                <CarouselBox />
                            </div>
                            <div className={classes.contentBox}>
                                <Description />
                            </div>
                        </div>
                        <div className={classes.bottom}>
                            <div></div>
                            <button className={classes.closeButton} onClick={handleClose}>CLOSE</button>
                        </div>
                    </div>
                </div>
            </Modal>
        </div>
    );
}
