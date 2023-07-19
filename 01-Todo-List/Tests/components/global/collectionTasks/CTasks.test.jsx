import { fireEvent, render, screen } from '@testing-library/react';
import { CTasks } from '../../../../src/components/global/collectionTasks/CTasks';

describe('Test on <CTasks /> component', () => { 

    const state ={
        status: true ,
        collection:{
            id: 3,
            title: 'Code',
            collectionTasks: []
        }
    }

    const setState = jest.fn();
    
    test('Should call onSubmit function if a string is greather than 1', () => { 

        const task = 'JavaScript';

        render(
            <CTasks 
                state={ state }
                setState={ setState }
            />
        )

        const form = screen.getByRole('form');
        const input = screen.getByRole('textbox');

        fireEvent.input( input, { target: { value: task }  } );
        fireEvent.submit( form );
        expect( input.value ).toBe('');
    })

    test('Should call the setState function when I go back', () => { 

        render(
            <CTasks 
                state={ state }
                setState={ setState }
            />
        )

        const backButton = screen.getByTestId('back');
        
        fireEvent.click( backButton );
        expect( setState ).toHaveBeenCalled();
        expect( setState ).toHaveBeenCalledTimes(1);

    })

})