import { useState } from 'react';
import './PictureCard.module.css';

// MUI import
import { ThemeProvider, styled } from '@mui/material/styles';

// MUI card styles
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { createTheme } from '@mui/material/styles';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

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

const ExpandMore = styled((props) => {
    const {expand, ...other } = props;
    return <IconButton {...other} />;
})(({ theme, expand }) => ({
    transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
    }),
}));

function PictureCard(props) {
    const [expanded, setExpanded] = useState(false);
    const [like, setLike] = useState(true);

    const handleExpandClick = () => {
        setExpanded(!expanded);
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
                <CardActions disableSpacing>
                    <IconButton aria-label="Add to Favorites">
                        <FavoriteIcon 
                            onClick={handleLikeClick}
                            variant="contained"
                            theme={theme}
                            color={like ? "primary" : "secondary" }
                        />
                    </IconButton>
                    <ExpandMore
                        expand={expanded}
                        onClick={handleExpandClick}
                        aria-expanded={expanded}
                        aria-label="show more"
                    >
                        <ExpandMoreIcon 
                            sx={{ color: "white"}}
                        />
                    </ExpandMore>
                </CardActions>
                <Collapse in={expanded} timeout="auto" unmountOnExit>
                    <ThemeProvider theme={typoFont}>
                        <CardContent>
                            <Typography variant="body1">
                                {props.picture.explanation}
                            </Typography>
                        </CardContent>
                    </ThemeProvider>
                </Collapse>
            </Card>
        </ThemeProvider>
    );
};

export default PictureCard;