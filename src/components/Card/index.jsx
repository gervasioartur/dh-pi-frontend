import './styles.css'
const Card = (props) => (
    <div className="card">
        <img  src={`${process.env.REACT_APP_API}/images/products/${props.imgUrl}`}
            alt={props.alt || 'Image'} />
        <div className="card-content">
            <h2>{props.title}</h2>
            <p>{props.content}</p>
        </div>
    </div>
);

export default Card