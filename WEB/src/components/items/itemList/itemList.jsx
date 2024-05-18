import './itemList.css'
import { useState } from 'react';
import ItemSingle from '../item-single/itemSingle';
import bebidasData from '../../../data/bebidas.json';


function ItemList() {
  const [items, setItems] = useState(bebidasData);

  const handleTooggle = (event) => {
    setItems(items.map((e) => {
      if (e.id === event.id) {
        e = {...e};
        e.fav = !e.fav
        return e;
      } else {
        return e;
      }
    }));

  }

  return (
    <div className="row row-cols-4 g-2">
        {items.map((event) => (
          <div key={event.id} className="col">
            <ItemSingle event={event}  onTooggle={handleTooggle}/>
          </div>
        ))}
      </div>

    )
}

export default ItemList