import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import SaveIcon from '@material-ui/icons/Save';
import Button from '@material-ui/core/Button';
import axios from "axios";
import { NavLink } from "react-router-dom";
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

const useStyles = makeStyles((theme) => ({
    root: {
        '& .MuiTextField-root': {
            margin: theme.spacing(1),
            width: '25ch',
        },
    },
    button: {
        margin: theme.spacing(1),
        marginLeft: '24vh',
        marginTop: '5vh',
    },
    container: {
        marginLeft: '50vh',
        border: '1px solid black',
        borderRadius: '5px',
        width: '70vh',
        background: 'rgba(250, 235, 215, 0.39)',
    },
    title: {
        marginLeft: '12vh',
    },
    subTitle: {
        marginLeft: '12vh',
    }
}));

const AdminAddPlant = () => {
    const classes = useStyles();
    const [values, setValues] = useState({
        plantName: "",
        specie: "",
        imageUrl: "",
        family: "",
        description: "",
        light: '',
        water: '',
        feed: '',
        temperature: ''
    });

    const [open, setOpen] = useState(false);

    const handleClickOpen = () => {
        if (values.plantName !== "" && values.specie !== "" && values.temperature !== "" && values.imageUrl !== "" && values.description !== "" && values.family !== "" && values.light !== "" && values.water !== "" && values.feed !== "") {
            setOpen(true);
        }
        else {
            alert('Please fill all the form');
        }
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleChange = (e) => {

        const { name, value } = e.target;
        setValues({
            ...values,
            [name]: value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        axios
            .post(`https://weplants.herokuapp.com/api/plants`, values, {
                withCredentials: true,
            })
            .then((res) => {
                if (res.data === "Successfully added plant!") {
                    console.log('Plant added to DB');
                }
                else {
                    console.log("Error");
                }
            })
            .catch((err) => {
                console.log(err);
            });
    };

    return (
        <Container className={classes.container}>
            <Typography variant="h2" gutterBottom className={classes.title}>
                Add new plant
            </Typography>
            <form className={classes.root} noValidate autoComplete="off" onSubmit={handleSubmit}>
                <div className={classes.subTitle}>
                    <Typography variant="overline" gutterBottom className={classes.title}>
                        Plant properties:
            </Typography>
                </div>
                <div>
                    <TextField
                        id="outlined-multiline-flexible"
                        label="Plant name"
                        multiline
                        type="text"
                        name="plantName"
                        rowsMax={4}
                        value={values.plantName}
                        onChange={handleChange}
                        variant="outlined"
                        required
                    />
                </div>
                <div>
                    <TextField
                        id="outlined-multiline-flexible"
                        label="Specie"
                        multiline
                        type="text"
                        name="specie"
                        rowsMax={4}
                        value={values.specie}
                        onChange={handleChange}
                        variant="outlined"
                        required
                    />
                </div>
                <div>
                    <TextField
                        id="outlined-multiline-flexible"
                        label="Family"
                        multiline
                        type="text"
                        name="family"
                        rowsMax={4}
                        value={values.family}
                        onChange={handleChange}
                        variant="outlined"
                        required
                    />
                </div>
                <div>
                    <TextField
                        id="outlined-multiline-flexible"
                        label="URL"
                        multiline
                        type="text"
                        name="imageUrl"
                        rowsMax={4}
                        value={values.imageUrl}
                        onChange={handleChange}
                        variant="outlined"
                        required
                    />
                </div>
                <div>
                    <TextField
                        id="outlined-multiline-flexible"
                        label="Description"
                        multiline
                        type="text"
                        name="description"
                        rowsMax={4}
                        value={values.description}
                        onChange={handleChange}
                        variant="outlined"
                        required
                    />
                </div>
                <div className={classes.subTitle}>
                    <Typography variant="overline" gutterBottom className={classes.title}>
                        Way of care:
            </Typography>
                </div>
                <div>
                    <TextField
                        id="outlined-multiline-flexible"
                        label="Water"
                        multiline
                        type="text"
                        name="water"
                        rowsMax={4}
                        value={values.water}
                        onChange={handleChange}
                        variant="outlined"
                        required
                    />
                    <TextField
                        id="outlined-multiline-flexible"
                        label="Feed"
                        multiline
                        type="text"
                        name="feed"
                        rowsMax={4}
                        value={values.feed}
                        onChange={handleChange}
                        variant="outlined"
                        required
                    />
                    <TextField
                        id="outlined-multiline-flexible"
                        label="Light"
                        multiline
                        type="text"
                        name="light"
                        rowsMax={4}
                        value={values.light}
                        onChange={handleChange}
                        variant="outlined"
                        required
                    />
                    <TextField
                        id="outlined-multiline-flexible"
                        label="Temperature"
                        multiline
                        type="text"
                        name="temperature"
                        rowsMax={4}
                        value={values.temperature}
                        onChange={handleChange}
                        variant="outlined"
                        required
                    />
                </div>
                <Button
                    type="submit"
                    variant="contained"
                    color="primary"
                    size="large"
                    className={classes.button}
                    startIcon={<SaveIcon />}
                    onClick={handleClickOpen}
                >
                    Add
                </Button>
                <Dialog
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="alert-dialog-title"
                    aria-describedby="alert-dialog-description"
                >
                    <DialogTitle id="alert-dialog-title">{"Added Plant"}</DialogTitle>
                    <DialogContent>
                        <DialogContentText id="alert-dialog-description">
                            {`Successfuly added the plant - ${values.plantName}!`}
                        </DialogContentText>
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={handleClose} color="primary">
                            Add another
                        </Button>
                        <NavLink to='/login'>
                            <Button onClick={handleClose} color="primary" autoFocus>
                                Done
                        </Button>
                        </NavLink>
                    </DialogActions>
                </Dialog>
            </form>

        </Container>
    );
}
export default AdminAddPlant;