import { fireEvent, render, screen } from '@testing-library/react';
import { GCollection } from '../../../src/components/global/GCollection';

describe('Test on <GCollection /> component', () => {

    const collection = { 
        id: 123, 
        icon: 'code.svg', 
        title: 'Code', 
        style: 'bg-green-200', 
        collectionTasks: [
            { 
                id: 1689098350482, 
                taskName: "Learning Mongo DB", 
                date: "7/11/2023",
                status: true
            },
            { 
                id: 1683438350482, 
                taskName: "Learning React JS", 
                date: "7/11/2023",
                status: true
            },
        ],
        setState: jest.fn()
    }

    test('Must contain a title', () => {

        render(
            <GCollection 
                {...collection}
            />
        )

        const title = screen.getByText(collection.title);
        expect( title.textContent ).toBeTruthy();

    })

    test('Must call a function when collection is selected with specifics properties', () => {

        render(
            <GCollection 
                {...collection}
            />
        )

        const button = screen.getByTestId('collection');
        
        fireEvent.click( button );
        expect( collection.setState ). toHaveBeenCalled();
        expect( collection.setState ).toHaveBeenCalledTimes(1);

        expect( collection.setState ).toHaveBeenCalledWith({ status: true, collection: { id: collection.id, title: collection.title, collectionTasks: collection.collectionTasks} })
        
    })

})