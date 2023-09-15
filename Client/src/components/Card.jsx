import { Link } from 'react-router-dom'
import { addFav } from '../redux/actions';
import { useDispatch } from 'react-redux';


export default function Card(props) {
   const {id, onClose} = props;

   const dispatch = useDispatch();
   


   return (
      <div>
         <button onClick={() => onClose(id) }>
            X
         </button>
         
         <button onClick={() => {dispatch(addFav(id))}}>
            FAV
         </button>

         
         <h2>{props.name}</h2>
         

         <h2>
            {props.status}
         </h2>

         <h2>
            {props.species}
         </h2>

         <h2>
            {props.gender}
         </h2>

         <h2>
            {props.origin}
         </h2>
         <Link to={`/detail/${id}`}>
            <img src={props.image} alt={props.name} />
         </Link>
         
      </div>
   );
}
