import * as React from 'react'
import { Switch } from 'react-router-dom'
import Page from './Page'
import GR from './GR'
import MainBoard from './MainBoard'

function MainSwitch() {
    return (
        <Switch>
            <Page path="/" exact component={GR} title='What Happened' />
            <Page path="/main" exact component={MainBoard} title='Main' />
        </Switch>
    )
    
}

export default MainSwitch
