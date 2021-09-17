import { useState } from 'react';

// MUI import
import { styled } from '@mui/material/styles';

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
            main: '#9e9e9e'
        },
        secondary: {
            main: '#f44336'
        },
    },
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
        <Card sx={{ maxWidth: 450 }}>
            <CardHeader
                title={props.picture.title}
                subheader={props.picture.date}
            />
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
                    <ExpandMoreIcon />
                </ExpandMore>
            </CardActions>
            <Collapse in={expanded} timeout="auto" unmountOnExit>
                <CardContent>
                    <Typography variant="body2" color="text.secondary">
                        {props.picture.explanation}
                    </Typography>
                </CardContent>
            </Collapse>
        </Card>
    );
};

export default PictureCard;