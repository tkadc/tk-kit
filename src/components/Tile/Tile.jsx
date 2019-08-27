import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import styles from './tile.module.css'

const themes = {
    light: styles.light,
    dark: styles.dark
}

/**
 * A site Tile for layout visual color alternation
 * @param {*} props
 */
const Tile = ({ classes, className, children, theme, ...rest }) => {
    return (
        <div className={cx(className, themes[theme], styles.tile)} {...rest}>
            {children}
        </div>
    )
}

Tile.propTypes = {
    classes: PropTypes.shape({}),
    className: PropTypes.string,
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    ]).isRequired,
    theme: PropTypes.string,
}

Tile.defaultProps = {
    classes: {},
    theme: 'light',
}

export default Tile
