import React from 'react';
function DessertsList({ data }) {
    const filteredDesserts = data
        .filter(allDesserts => allDesserts.calories < 500 && allDesserts.calories > 0 )
        .sort((a, b) => a.calories - b.calories)
        .map(desserts => {
            return (
                <li key={desserts.name} >{desserts.name} - {desserts.calories} cal</li>
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