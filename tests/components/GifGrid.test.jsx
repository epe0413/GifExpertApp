import { render, screen } from '@testing-library/react'
import { GifGrid } from '../../src/components'


describe('Pruebas GifGrid', () => {
    const category = 'One Punch';

    test('debe de mostrar el loading inicialmente', () => {
        render (<GifGrid category= {category}/>)
        expect( screen.getByText('Cargando...'));
        expect( screen.getByText(category));
    });

    test('debe de mostrar items cuando se cargan las imagenes useFetchGifs', () => {
        
    })

})