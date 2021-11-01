import React, {FunctionComponent} from 'react'

const Footer: FunctionComponent<{openShowRulesHandler: any}> = (props: {openShowRulesHandler: any}) => {
    
    return (
        <div className="footer" onClick={props.openShowRulesHandler}>
            Rules
        </div>
    )
}

export default Footer