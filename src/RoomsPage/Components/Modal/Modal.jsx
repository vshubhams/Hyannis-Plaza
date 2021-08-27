import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import { useDispatch, useSelector } from 'react-redux';
import { setIsOpen } from '../../../Redux/rooms/actions';
import { CallMissedSharp } from '@material-ui/icons';

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
        outline: "none",
        // padding: theme.spacing(2, 4, 3),
    },
    header: {
        backgroundColor: "#343644",
        display: 'flex',
        justifyContent: 'space-between',
        color: "#FFF",
    },
    main: {

    },
    imgBox: {

    },
    contentBox: {

    }
}));

export default function TransitionsModal() {
    const classes = useStyles();
    const dispatch = useDispatch();

    const open = useSelector((state) => state.app.isOpen);

    const handleClose = () => {
        const setOpenAction = setIsOpen(false);
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
                <Fade in={open}>
                    <div className={classes.paper}>
                        <div className={classes.header}>
                            <h1>Two Double Beds</h1>
                            <div>x</div>
                        </div>
                        
                        <div className={classes.main}>
                            <div className={classes.imgBox}>
                                shubham
                            </div>
                            <div className={classes.contentBox}>
                                verma
                            </div>
                        </div>
                    </div>
                </Fade>
            </Modal>
        </div>
    );
}
