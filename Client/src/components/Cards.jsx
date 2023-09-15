import Card from './Card';

export default function Cards(props) {
   const {characters, onClose} = props;

   return (
      <>
         {
            characters.map(e => {
               return (
                  <Card 
                     name={e.name}
                     id={e.id}
                     status={e.status}
                     species={e.species}
                     gender={e.gender}
                     origin={e.origin.name}
                     image={e.image}
                     key={e.id}
                     onClose={onClose}
                  />
               )
            })
         }
      </>
   )
}
