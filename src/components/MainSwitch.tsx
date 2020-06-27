import * as React from 'react'
import { Switch } from 'react-router-dom'
import Page from './Page'
import GR from './GR'

function MainSwitch() {
    return (
        <Switch>
            <Page path="/" exact component={GR} title='Main' />
        </Switch>
    )
    
}

export default MainSwitch
