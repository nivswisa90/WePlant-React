import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import SaveIcon from '@material-ui/icons/Save';
import Button from '@material-ui/core/Button';
import axios from "axios";
import { Link, NavLink } from "react-router-dom";


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
            .post(`http://localhost:3000/api/plants`, values, {
                withCredentials: true,
            })
            .then((res) => {
                if (res.data === "Successfully added plant!") {
                    alert('Plant added to data base');
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
                    />
                </div>
                {/* <NavLink to="/Login"> */}
                <Button
                    type="submit"
                    variant="contained"
                    color="primary"
                    size="large"
                    className={classes.button}
                    startIcon={<SaveIcon />}
                >
                    Save
                </Button>
                {/* </NavLink> */}
            </form>

        </Container>
    );
}
export default AdminAddPlant;