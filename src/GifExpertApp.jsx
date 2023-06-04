import { useState } from "react"

export const GifExpertApp = () => {

    const [categories, setCategories] = useState([ 'One Punch', 'Dragon Ball' ]); // Si dejamos un valor vacio este tendra un valor inicial de undefined

    const onAddCategory = () => {
        setCategories([...categories, 'Valorant']);
        // setCategories( cat => [ ...cat, 'Valorant']);
    }

    console.log(categories);
    return (
        <>
        
            {/* titulo */}
            <h1>GifExpertApp</h1>
            
            {/* input */}
            <button
                onClick={onAddCategory}
            >Agregar</button>
            <ol>
                {
                    categories.map( category => {
                        return <li key={ category }>{category}</li>
                    })
                }
            </ol>
            
            {/* Listado de Gif */}
                {/* Git Item */}

        </>
    )
}
