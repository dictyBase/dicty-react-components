import React from 'react';
import { render } from 'react-dom';
import { StyleRoot } from 'radium';
import {Responsive} from './Responsive';
import {Offset} from './Offset';
import {Justify} from './Justify';
import Container from '../../src/layout/container';

class ResponsiveApp extends React.Component {
    displayName = 'App to display the responsive layout'
    render() {
        return (
            <StyleRoot>
                <Container>
                    <h1>Responsive</h1>
                    <Responsive/>
                </Container>
            </StyleRoot>
        );
    }
}

class OffsetApp extends React.Component {
    displayName = 'App to display offset layout'
    render() {
        return (
            <StyleRoot>
                <Container>
                    <h1>Offset</h1>
                    <Offset/>
                </Container>
            </StyleRoot>
        );
    }
}

class JustifyApp extends React.Component {
    displayName = 'App to display offset layout'
    render() {
        return (
            <StyleRoot>
                <Container>
                    <h1>Alignment</h1>
                    <Justify/>
                </Container>
            </StyleRoot>
        );
    }
}

render(<ResponsiveApp/>, document.getElementById('responsive'));
render(<OffsetApp/>, document.getElementById('offset'));
render(<JustifyApp/>, document.getElementById('justify'));

