import { render, screen } from '@testing-library/react';
import { GifItem } from "../../src/components/GifItem";

describe('Pruebas a GifItem', () => {
    const title = "Titulo de imagen"
    const url = "http://gif.test/test"

    test('probar snapshot', () => {
        const {container} = render(< GifItem title= {title} url={url}/>)

        expect( container ).toMatchSnapshot();
    })

    test('debe de mostrar la imagen con el URL y el Alt indicado', () => {
        render(< GifItem title= {title} url={url}/>)

        // expect( screen.getByRole('img').src ).toBe( url );
        // expect( screen.getByRole('img').alt ).toBe( title );

        const { src, alt } = screen.getByRole('img');
        expect( src ).toBe( url );
        expect( alt ).toBe( title );
    })

    test('debe mostrar el titulo en el componente', () => {
        render(< GifItem title= {title} url={url}/>)
        expect( screen.getByText( title )).toBeTruthy();
    })
})