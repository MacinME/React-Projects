import { render, screen } from '@testing-library/react';
import { CTasks } from '../../../../src/components/global/collectionTasks/CTasks';

import plusSVGContent from '../../../__mocks__/plus';
import aleftSVGContent from '../../../__mocks__/aleft';
import closeSVGContent from '../../../__mocks__/imageMocked';

const createMockedSVGComponent = () => ({
    ReactComponent: () => <div data-testid="mocked-svg-2" dangerouslySetInnerHTML={{ __html: aleftSVGContent }}  />
})

const createMockedSVGComponent2 = () => ({
    ReactComponent: () => <div data-testid="mocked-svg" dangerouslySetInnerHTML={{ __html: plusSVGContent }}  />
})

const createMockedSVGComponent3 = () => ({
    ReactComponent: () => <div data-testid="mocked-svg-3" dangerouslySetInnerHTML={{ __html: closeSVGContent }}  />
})

jest.mock('../../../../src/components/global/assets/close.svg', () => createMockedSVGComponent3);

jest.mock('../../../../src/assets/smallPlus.svg', () => createMockedSVGComponent2);

jest.mock('../../../../src/components/global/assets/aLeft.svg', () => createMockedSVGComponent);

describe('Test on <CTasks /> component', () => { 


    test('Input element should call a function when the value is greather than one', () => {

    });

})