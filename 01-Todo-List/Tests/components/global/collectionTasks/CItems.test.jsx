import { render } from '@testing-library/react';
import { CItems } from '../../../../src/components/global/collectionTasks/CItems';

import mockedSVGContent from '../../../__mocks__/imageMocked';

jest.mock('../../../../src/components/global/assets/close.svg', () => ({
    ReactComponent: () => <div data-testid="mocked-svg" dangerouslySetInnerHTML={{ __html: mockedSVGContent }}  />
}));

describe('Test on <CItems /> component', () => {

    // Arrange
    const task = {
        id: 12345,
        taskName: 'Learning Testing with React Library',
        date: new Date().toLocaleDateString(),
        status: false,
        onDeleteDataFromLocalStorage: jest.fn(),
        tasks: [],
        onUpdateLocalStorage: jest.fn()
    }
    
    test('should have the task an date strings ', () => { 

        // Act
        const { container } = render(
            <CItems 
                {...task}
            />
        )

        // Assert
        expect( container.getElementsByTagName('p').length ).toBeGreaterThanOrEqual( 2 );
        const [ taskName, taskDate ] = container.getElementsByTagName('p');
        expect( taskName.innerHTML ).toBe( task.taskName );
        expect( taskDate.textContent ).toContain( task.date );
     })

     test('should match with the snapshot', () => {

        const { container} = render(
            <CItems 
                {...task}
            />
        )

        expect( container ).toMatchSnapshot();

     })
});