import { render, screen } from '@testing-library/react';
import { MHeader } from '../../../src/components/mobile/MHeader';

describe('Test on <Mheader /> component', () => { 

    test('should have the collection text inside of h2 tag', () => {

        const collection = 'Collections';

        render(
            <MHeader />
        )

        expect( screen.getByRole('heading', { level: 2 } ).textContent ).toBe( collection );

    })

})