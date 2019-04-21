export default {
    settings: {
        gridlines: true,
        snapToGrid: false,
        gridSize: 25
    },
    sidebar: {
        width: '35rem',
        theme: 'dark'
    },
    canvas: {
        width: 500,
        height: 500
    },
    commandOptions: {
        'M': { name: 'Move To' },
        'm': { name: 'Relative Move To' },
        'L': { name: 'Line To' },
        'l': { name: 'Relative Line To' },
        'H': { name: 'Horizontal Line To' },
        'h': { name: 'Relative Horizontal Line To' },
        'V': { name: 'Vertical Line To' },
        'v': { name: 'Relative Vertical Line To' },
        'C': { name: 'Curve To' },
        'c': { name: 'Relative Curve To' },
        'S': { name: 'Smooth Curve To' },
        's': { name: 'Relative Smooth Curve To' },
        'Q': { name: 'Quadratic Bézier Curve To' },
        'q': { name: 'Relative Quadratic Bézier Curve To' },
        'T': { name: 'Smooth Quadratic Bézier Curve To' },
        't': { name: 'Relative Quadratic Bézier Curve To' },
        'A': { name: 'Elliptical Arc' },
        'a': { name: 'Relative Elliptical Arc' },
        'Z': { name: 'Cloth Path' }
    }
};