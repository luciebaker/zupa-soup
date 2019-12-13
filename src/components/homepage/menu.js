import React from 'react'

const menu = () => {
    return (
        <div id="menu" className="container-fluid menu-container pt-4 pb-4">
       
            <div className="container text-center">
            <h1>Today's Soup Menu</h1>
            </div>
            <div className="container">
            <div className="row">
            <div className="col-6">
                <h2>Beef Goolash</h2>
                <p>Prime beef cut stewed in the paprika, loaded with vegetables</p>
                <h2>Boston Clam Chowder</h2>
                <p>Juicy sweet razor clams are cooked to a rich creamy finish, thickened with butter roux, potatoes and celery for that added flourish.</p>
                <h2>Meatless Minestrone</h2>
                <p>A wonderful burst of colors and flavors in every spoonful, with zucchinis, kidney beans and plump tomatoes</p>
            </div>
            <div className="col-6">
                <h2>Roasted PumpKin Soup</h2>
                <p>Pumpkins roasted to perfection with a blend of spices.</p>
                <h2>Tangy Tomato with Basil</h2>
                <p>This soup is creamy with the smell of freshly roasted tomatoes blended to perfection.</p> 
                <h2>Chicken & Mushroom Soup</h2>
                <p>Rich, creamy soup filled with chunks of marinated chicken, herbs and mushrooms</p>
            </div>
            </div>

            </div>
        </div>
    )
}

export default menu