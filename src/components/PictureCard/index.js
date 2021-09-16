import styles from './PictureCard.module.css';

function PictureCard(props) {

    return (
        <div>
            <h3>{props.picture.title}</h3>
            <img 
             src={props.picture.url}
             atl={props.picture.title}
            />
            <p>{props.picture.explanation}</p>
        </div>
    );
};

export default PictureCard;