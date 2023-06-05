import { useState } from "react"
import { AddCategory } from "./components/AddCategory";

export const GifExpertApp = () => {

    const [categories, setCategories] = useState([ 'One Punch', 'Dragon Ball' ]); // Si dejamos un valor vacio este tendra un valor inicial de undefined

    const onAddCategory = () => {
        setCategories([ ...categories, 'Valorant' ]);
        // setCategories( cat => [ ...cat, 'Valorant']);
    }

    console.log(categories);
    return (
        <>
        
            {/* titulo */}
            <h1>GifExpertApp</h1>
            
            {/* input */}
            <AddCategory
                setCategories={setCategories}
            />

            {/* Listado de Gif */}
            <ol>
                {
                    categories.map( category => {
                        return <li key={ category }>{category}</li>
                    })
                }
            </ol>
                {/* Git Item */}

        </>
    )
}
