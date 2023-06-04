import { useState } from "react"

export const GifExpertApp = () => {

    const [categories, setCategories] = useState([ 'One Punch', 'Dragon Ball' ]); // Si dejamos un valor vacio este tendra un valor inicial de undefined

    console.log(categories);
    return (
        <>
        
            {/* titulo */}
            <h1>GifExpertApp</h1>
            
            {/* input */}
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
