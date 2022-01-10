import React from 'react'

export default function ShadowBox(props) {
    return (
        <div style={{    
            flex: 1,
            boxShadow: '0px 0px 9px -1px #6f6f6f',
            padding: '20px',
            marginRight: "20px",
            borderRadius: "10px",
            }}>
            {props.children}
        </div>
    )
}
