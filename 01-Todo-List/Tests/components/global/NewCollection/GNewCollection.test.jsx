import { fireEvent, render, screen } from '@testing-library/react';
import { GNewCollection } from '../../../../src/components/global/NewCollection/GNewCollection';
import { categories } from '../../../../src/components/global/NewCollection/data/catgories';

describe('Test on <GNewCollection /> component', () => { 

    test('Must style the input border using the next hexadecimal color: (#ff4662) when a value is empty', () => {

        const setCollection = jest.fn();
        const setCollectionState = jest.fn();
        const borderColor = '#ff4662';

        render(

            <GNewCollection 
                setCollection={ setCollection }
                setCollectionState={ setCollectionState }
            />
        )

        const button = screen.getByTestId('addCollection');
        const input = screen.getByRole('textbox');

        fireEvent.click( button );
        expect( input.style.borderColor ).toBe(borderColor);

    })

    test('Must have the next categories available', () => {
        
        const setCollection = jest.fn();
        const setCollectionState = jest.fn();

        render(
            <GNewCollection 
                setCollection={ setCollection }
                setCollectionState={ setCollectionState }
            />
        )
        categories.forEach( ({ title }) => {
            expect( screen.getByText( title ).textContent ).toBe( title )
        })

    })
 
})