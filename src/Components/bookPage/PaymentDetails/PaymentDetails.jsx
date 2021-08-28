import styles from "./paymentDetails.module.css";
import { useState } from "react";
import { makeStyles } from '@material-ui/core/styles';
import Checkbox from '@material-ui/core/Checkbox';
import TextField from '@material-ui/core/TextField';
import Cards from 'react-credit-cards'
import 'react-credit-cards/es/styles-compiled.css'

const useStyles = makeStyles((theme) => ({
    container: {
        display: "grid",
        gridTemplateColumns: "auto auto",
        gridGap: "25px",
        fontWeight: "bold",
        marginBottom: '10px',
        marginTop: "20px",
    }
}));
export const PaymentDetails = () => {
    const classes = useStyles();
    const [number, setNumber] = useState('')
    const [name, setName] = useState('')
    const [expiry, setExpiry] = useState('')
    const [cvc, setCvc] = useState('')
    const [focus, setFocus] = useState('')

    return (
        <div className={styles.wrapper}>
            <h3>PAYMENT DETAILS</h3>

            <Cards
            number={number}
            name={name}
            expiry={expiry}
            cvc={cvc}
            focused={focus}
            />
            <form className={classes.container}>
                <TextField
                    label="Card Number"
                    name='number'
                    required
                    fullWidth
                    variant="filled"
                    size="small"
                    value={number}
                    onChange={(e) => { setNumber(e.target.value) }}
                    onFocus={e=>setFocus(e.target.name)}
                />
                <TextField
                    label="Name"
                    name='name'
                    required
                    fullWidth
                    variant="filled"
                    size="small"
                    value={name}
                    onChange={(e) => { setName(e.target.value) }}
                    onFocus={e=>setFocus(e.target.name)}
                />
                <TextField
                    label="MM/YY"
                    name='expiry'
                    required
                    fullWidth
                    variant="filled"
                    size="small"
                    value={expiry}
                    onChange={(e) => { setExpiry(e.target.value) }}
                    onFocus={e=>setFocus(e.target.name)}
                />
                <TextField
                    label="CVC"
                    name='cvc'
                    required
                    fullWidth
                    variant="filled"
                    size="small"
                    value={cvc}
                    onChange={(e) => { setCvc(e.target.value) }}
                    onFocus={e=>setFocus(e.target.name)}
                />
            </form>
            <div className={styles.terms}>
                <Checkbox name="checkedB" color="primary" />
                <div>I AGREE TO THE TERMS AND CONDITIONS</div>
            </div>
            <div className={styles.confirm}>
            <button>CONFIRM BOOKING</button>
            </div>
        </div>
    )
}
