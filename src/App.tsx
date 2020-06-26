import React from 'react';
import { Switch, Route } from 'react-router-dom';

import { MainPageContainer } from './domains/pages/main';
import { NotFound } from './domains/pages/404';

const App: React.FC = () => {
    return (
        <Switch>
            <Route exact path='/' render={() => <MainPageContainer />} />
            <Route path='*' children={<NotFound />} />
        </Switch>
    );
};

export default App;
