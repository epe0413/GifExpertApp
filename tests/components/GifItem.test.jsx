import { render } from '@testing-library/react';
import { GifItem } from "../../src/components/GifItem";

describe('Pruebas a GifItem', () => {
    const title = "Titulo de imagen"
    const url = "test de url"

    test('probar snapshot', () => {
        const {container} = render(< GifItem title= {title} url={url}/>)

        expect( container ).toMatchSnapshot();
    })
})