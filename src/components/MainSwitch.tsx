import * as React from 'react'
import { Switch } from 'react-router-dom'
import Page from './Page'
import GR from './GR'
import MainBoard from './MainBoard'
import Page404 from './Page404'

function MainSwitch() {
    return (
        <Switch>
            <Page path="/" exact component={MainBoard} title='Main' />
            <Page path="/GR" exact component={GR} title='What Happened' />
            <Page component={Page404} title="404 NOT FOUND"></Page>
        </Switch>
    )
    
}

export default MainSwitch
