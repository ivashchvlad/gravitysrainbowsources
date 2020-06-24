import * as React from 'react'
import * as ReactDom from 'react-dom'
import './scss/base.scss'

const ReactElement = () => {
    return <div>Hello ZA WARUDO
        <h1>Omae wa mou shindeiru</h1>
        <h1>Nani?!</h1>
    </div>
}

ReactDom.render(<ReactElement/>, document.getElementById('root'));

