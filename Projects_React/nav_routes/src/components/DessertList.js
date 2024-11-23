import React from 'react';
function DessertsList({ data }) {
    const filteredDesserts = data
        .filter(dessert => dessert.calories < 500)
        .sort((a, b) => a.calories - b.calories)
        .map(dessert => {
            return (
                <li key={dessert.name} >{dessert.name} - {dessert.calories} cal</li>
            )
        });

    return (
        <div className='dessertList'>
            <h2>List of low calorie desserts:</h2>
            <ul>
                {filteredDesserts}
            </ul>
        </div>
    );
}

export default DessertsList;