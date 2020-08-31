import React from 'react'
import './NameWithHandle.css'

export default function NameWithHandle() {
    return (
        <span className="name-with-handle">
            <span className="name">Your Name</span>
            <span className="handle">@yourhandle</span>
        </span>
    )
}
