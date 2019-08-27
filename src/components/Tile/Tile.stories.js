// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react'

import { storiesOf, addDecorator } from '@storybook/react'
import CssBaseline from '@material-ui/core/CssBaseline'

// eslint-disable-next-line no-unused-vars
import styles from '../../stories/story.module.css'
import Tile from '../../components/Tile/Tile'

addDecorator(storyFn => <CssBaseline>{storyFn()}</CssBaseline>)

storiesOf('Tile', module)
    .add('with alternating themes', () => (
        <>
            <Tile theme="light">Light themed</Tile>
            <Tile theme="dark">Dark themed</Tile>
            <Tile theme="light">Light themed</Tile>
        </>
    ))
    .add('with dark theme', () => <Tile theme="dark">Dark themed</Tile>)
    .add('with light theme', () => <Tile theme="light">Light themed</Tile>)
