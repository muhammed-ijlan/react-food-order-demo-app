import React, { Fragment } from 'react'
import classes from './Model.module.css'
import ReactDOM from 'react-dom'

const Backdrop = props => {
    return <div className={classes.backdrop} onClick={props.onClose} />
}
const ModelOverlay = props => {
    return <div className={classes.modal}>
        return <div className={classes.content}>{props.children}</div>
    </div>
}

const portalElement = document.getElementById('overlays')

function Model(props) {
    return <Fragment>
        {ReactDOM.createPortal(<Backdrop onClose={props.onClose} />, portalElement)}
        {ReactDOM.createPortal(<ModelOverlay>{props.children}</ModelOverlay>, portalElement)}
    </Fragment>
}

export default Model