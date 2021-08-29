import { Box, Container, TextField } from "@material-ui/core";
import styles from './newResList.module.css';
export default function NewResList() {
    return <Container maxWidth='sm' className={styles.container}>
          <Box m={4} p={5}>
            <TextField variant='outlined' label="Title" spacing={3} margin='dense' fullWidth={true} className={ styles.textField}/>
            <TextField variant='outlined' label="title" margin='dense' fullWidth={true} />
           </Box>
    </Container>
}