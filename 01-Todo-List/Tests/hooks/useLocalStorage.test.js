import { act, renderHook } from '@testing-library/react';
import { useLocalStorage } from '../../src/hooks/useLocalStorage';
import { collections } from '../../src/components/data/collections';

import bookSVGMocked from '../__mocks__/book';
import codeSVGMocked from '../__mocks__/code';
import personalSVGMocked from '../__mocks__/personal';
import shoppingSVGMocked from '../__mocks__/shopping';

const createMockedSVGComponent = () => ({
    ReactComponent: () => <div data-testid="mocked-svg" dangerouslySetInnerHTML={{ __html: bookSVGMocked }}  />
})

const createMockedSVGComponent2 = () => ({
    ReactComponent: () => <div data-testid="mocked-svg" dangerouslySetInnerHTML={{ __html: codeSVGMocked }}  />
})

const createMockedSVGComponent3 = () => ({
    ReactComponent: () => <div data-testid="mocked-svg" dangerouslySetInnerHTML={{ __html: personalSVGMocked }}  />
})

const createMockedSVGComponent4 = () => ({
    ReactComponent: () => <div data-testid="mocked-svg" dangerouslySetInnerHTML={{ __html: shoppingSVGMocked }}  />
})

jest.mock('../../src/assets/book.svg', () => createMockedSVGComponent);
jest.mock('../../src/assets/code.svg', () => createMockedSVGComponent2);
jest.mock('../../src/assets/personal.svg', () => createMockedSVGComponent3);
jest.mock('../../src/assets/shopping.svg', () => createMockedSVGComponent4);

// jest.mock('../../src/hooks/useLocalStorage', () => {

//     const originalModule = jest.requireActual('../../src/hooks/useLocalStorage');

//     return {
//         ...originalModule,
//         useLocalStorage: () => ({
//             ...originalModule.useLocalStorage(),
//             onUpdateLocalStorage: jest.fn(),
//         }),
//     }
    
// });

describe('Test on useLocalStorage Custom Hook', () => { 
    
    const idCollection = 3;

    test('should return an array of collections', () => { 
        
        const { result } = renderHook( () => useLocalStorage(idCollection));

        const { 
            onGetData, 
            onSetData
        } = result.current;

        onSetData( collections );
        const data = onGetData();
        
        expect( data.length ).toBeGreaterThan(0);

    })

    test('should return a default collection by Id', () => {

        const { result } = renderHook( () => useLocalStorage(idCollection));

        const { 
            onGetDataById
        } = result.current;


        const getCollection = onGetDataById(3);

        expect( getCollection ).toEqual({
            id: 3,
            title: 'Code',
            done: '0/0',
            style: 'bg-purple-400',
            collectionTasks: [
              {
                id: 1689098350482,
                taskName: 'Learning JavaScript 🔥💪🏼',
                date: '7/11/2023',
                status: true
              },
              {
                id: 1683438350482,
                taskName: 'Learning React JS 🔥💪🏼',
                date: '7/11/2023',
                status: true
              }
            ]
        })
    
    })

    test('By default should return 2 tasks inside of code collection, needs to be true', () => {

        const { result } = renderHook( () => useLocalStorage(idCollection));

        const { 
            onGetDataById
        } = result.current;


        const getCollection = onGetDataById(3);

        expect( getCollection.collectionTasks.length ).toBeGreaterThanOrEqual(2);
        const [task1, task2] = getCollection.collectionTasks;
        expect( task1.status ).toBeTruthy();
        expect( task2.status ).toBeTruthy();

    })

    test('Should update the tasks values using onUpdateLocalStorage function', () => {
        
        const { result } = renderHook( () => useLocalStorage(idCollection));

        const {
            onUpdateLocalStorage,
            onGetDataById,
        } = result.current;
        
        const updatedTasks = [
            {
                id: 1689098350482,
                taskName: 'Learning JavaScript 🔥💪🏼',
                date: '7/11/2023',
                status: true
            },
            {
                id: 1683438350482,
                taskName: 'Learning React JS 🔥💪🏼',
                date: '7/11/2023',
                status: true
            },
            {
                id: 1681909350482,
                taskName: 'Learning Mongo DB 🔥',
                date: '7/17/2023',
                status: true
            }
        ]
        
        act(() => {
            onUpdateLocalStorage(updatedTasks);
        })
        expect( onGetDataById(3).collectionTasks.length ).toBeGreaterThan(2);
    });

    test('should remove tasks using the onDeleteDataFromLocalStorage function', () => {

        const idTask = 1683438350482;

        const { result } = renderHook( () => useLocalStorage(idCollection));

        const { 
            onDeleteDataFromLocalStorage,
            onGetDataById
        } = result.current;


        act(() => {
            onDeleteDataFromLocalStorage(idTask);
        })

        expect( onGetDataById(3).collectionTasks.length ).toBeLessThan(3);
    });

})