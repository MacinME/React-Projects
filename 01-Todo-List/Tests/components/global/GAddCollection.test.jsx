import { fireEvent, render, screen } from '@testing-library/react';
import { GAddCollection } from '../../../src/components/global/GAddCollection';

describe('Test on <GACollection /> component', () => { 

    test('The setCollection function have to be called', () => {

        const setCollection = jest.fn();

        render(
            <GAddCollection 
                setCollection={ setCollection }
            />
        )

        const button = screen.getByRole('button');

        fireEvent.click( button )
        expect( setCollection ).toHaveBeenCalled();

    })
})