import React from 'react';
import Item from './Item';

class ItemList extends React.Component{
    constructor(props)
    {
        super(props);
        this.state={}
    }
    render()
    {
        const listItems = this.props.items
        return (
            <div className="flex flex-col items-center justify-center min-h-screen">
              {listItems.map((item) => (
                <Item item={item} />
              ))}
            </div>
          );
    }
}
export default ItemList;