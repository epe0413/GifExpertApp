import { useState } from "react"
import { AddCategory } from "./components/AddCategory";
import { GifGrid } from "./components/GifGrid";

export const GifExpertApp = () => {

    const [categories, setCategories] = useState([ 'One Punch', 'Dragon Ball' ]); // Si dejamos un valor vacio este tendra un valor inicial de undefined

    const onAddCategory = (newCategory) => {

        if ( categories.includes(newCategory) ) return;
        setCategories([ newCategory, ...categories ]);
        // setCategories( cat => [ ...cat, 'Valorant']);
    }

    console.log(categories);
    return (
        <>
            <h1>GifExpertApp</h1>
            
            <AddCategory
                onNewCategory={ (value) => onAddCategory(value) }
            />

            {
                categories.map( (category) => (
                    <GifGrid
                        key={ category }
                        category={ category }/>
                ))
            }
        </>
    )
}
