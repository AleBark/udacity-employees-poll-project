import * as React from 'react';
import { render } from '@testing-library/react';
import NotFound from './components/NotFound';
import {BrowserRouter as Router} from "react-router-dom";


describe('NotFound page snapshots', () => {
    it('matches the not found snapshot when a text is passed', () => {
        const view = render(
            <Router>
                <NotFound text={'Page not found'}/>
            </Router>
        );
        expect(view).toMatchSnapshot();
    });

    it('matches the not found snapshot when no text is passed', () => {
        const view = render(
            <Router>
                <NotFound />
            </Router>
        );
        expect(view).toMatchSnapshot();
    });
});