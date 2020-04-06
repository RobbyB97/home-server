export {}

/* Libraries */
import * as React from 'react'


/* Component */
export class DesktopNavigation extends React.Component<{}, {}> {
    public render() {
        return (
            <div id="DesktopNavigation">
                <ul>
                    <li>
                        <a href="#about">about</a>
                    </li>
                    <li>
                        <a href="#services">services</a>
                    </li>
                    <li>
                        <a href="#skills">skills</a>
                    </li>
                    <li>
                        <a href="#experience">experience</a>
                    </li>
                    <li>
                        <a href="#projects">projects</a>
                    </li>
                </ul>
            </div>
        )
    }
}


export default DesktopNavigation;