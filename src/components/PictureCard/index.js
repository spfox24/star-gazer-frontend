import { useState } from 'react';
import PropTypes from 'prop-types';

import nasa from '../../assets/nasa.png';
import styles from './PictureCard.module.css';

// MUI import
import { ThemeProvider, styled } from '@mui/material/styles';

// MUI card styles
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardActions from '@mui/material/CardActions';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { createTheme } from '@mui/material/styles';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
// MODAL
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import CloseIcon from '@mui/icons-material/Close';

const theme = createTheme({
    palette: {
        primary: {
            main: '#ffffff'
        },
        secondary: {
            main: '#e54f34'
        },
    },
});

const cardTheme = createTheme({
    palette: {
        primary: {
            main: '#1d3e8c'
        },
        secondary: {
            main: '#e54f34'
        },
    }
});

const headingFont = createTheme({
    typography: {
        fontFamily: [
            'Russo One', 
            'sans-serif',
        ].join(','),
    },
});

const typoFont = createTheme({
    typography: {
        fontFamily: [
            'Economica', 
            'sans-serif',
        ].join(','),
        fontSize: 18,
        color: '#ffffff',
    }
});

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
    '& .MuDialogContent-root': {
        padding: theme.spacing(2),
    },
    '& .MuDialogActions-root': {
        padding: theme.spacing(1),
    },
}));

const BootstrapDialogTitle = (props) => {
    const { children, onClose, ...other } = props;
    
    return (
        <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
            {children}
            {onClose ? (
                <IconButton
                    aria-label="close"
                    onClick={onClose}
                    sx={{
                        position: 'absolute',
                        right: 8,
                        top: 8,
                        color: (theme) => theme.palette.grey[500],
                    }}
                >
                    <CloseIcon />
                </IconButton>
            ) : null}
        </DialogTitle>
    );
};

BootstrapDialogTitle.propTypes = {
    children: PropTypes.node,
    onClose: PropTypes.func.isRequired,
};

function PictureCard(props) {

    const [open, setOpen] = useState(false);
    const [like, setLike] = useState(true);

    const handleClickOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };

    const handleLikeClick = () => {
        setLike(!like);
    };

    return (
        <ThemeProvider theme={cardTheme}>
            <Card sx={{ maxWidth: 450, bgcolor: "primary.main", color: "white" }}>
                <ThemeProvider theme={headingFont}>

                    <CardHeader
                        title={props.picture.title}
                        subheader={<Typography className="subHeader">{props.picture.date}</Typography>}
                    />

                </ThemeProvider>
                <CardMedia 
                    component="img"
                    height="350"
                    image={props.picture.url}
                    alt={props.picture.title}
                />
                <CardActions disableSpacing sx={{ justifyContent: 'space-between' }}>

                    <IconButton aria-label="Add to Favorites" onClick={handleLikeClick}>
                        <FavoriteIcon 
                            variant="contained"
                            theme={theme}
                            color={like ? "primary" : "secondary" }
                        />
                    </IconButton>

                    <IconButton
                        onClick={handleClickOpen}
                        aria-label="show more"
                    >
                        <ExpandMoreIcon 
                            sx={{ color: "white"}}
                        />
                    </IconButton>

                </CardActions>

                    <ThemeProvider theme={typoFont}>
                        <BootstrapDialog
                            onClose={handleClose}
                            aria-labelledby={props.picture.title}
                            open={open}
                        >
                            <ThemeProvider theme={headingFont}>
                                <BootstrapDialogTitle className={styles.modalTitle} id={props.picture.title} onClose={handleClose}>
                                    {props.picture.title}
                                    <img 
                                        src={nasa}
                                        className={styles.modalImg}
                                        alt={props.picture.title}
                                    />
                                </BootstrapDialogTitle>
                            </ThemeProvider>

                            <DialogContent className={styles.modalContent} dividers>
                                <Typography gutterBottom>
                                    {props.picture.explanation}
                                </Typography>
                            </DialogContent>
                        </BootstrapDialog>
                    </ThemeProvider>

            </Card>
        </ThemeProvider>
    );
};

export default PictureCard;