//
// Chord intervals used by abcjs
//
// Moved out of the main abcjs codebase because of JS code minification corruption issues
//
var gChordIntervals = {
    // diminished (all flat 5 chords)
    'dim': [0, 3, 6],
    '°': [0, 3, 6],
    '˚': [0, 3, 6],
    'dim7': [0, 3, 6, 9],
    '°7': [0, 3, 6, 9],
    '˚7': [0, 3, 6, 9],
    'ø7': [0, 3, 6, 10],
    'm7(b5)': [0, 3, 6, 10],
    'm7b5': [0, 3, 6, 10],
    'm7♭5': [0, 3, 6, 10],
    '-7(b5)': [0, 3, 6, 10],
    '-7b5': [0, 3, 6, 10],
    '7b5': [0, 4, 6, 10],
    '7(b5)': [0, 4, 6, 10],
    '7♭5': [0, 4, 6, 10],
    '7(b9,b5)': [0, 4, 6, 10, 13],
    '7b9,b5': [0, 4, 6, 10, 13],
    '7(#9,b5)': [0, 4, 6, 10, 15],
    '7#9b5': [0, 4, 6, 10, 15],
    'maj7(b5)': [0, 4, 6, 11],
    'maj7b5': [0, 4, 6, 11],
    '13(b5)': [0, 4, 6, 10, 14, 21],
    '13b5': [0, 4, 6, 10, 14, 21],
    // minor (all normal 5, minor 3 chords)
    'm': [0, 3, 7],
    '-': [0, 3, 7],
    'm6': [0, 3, 7, 9],
    '-6': [0, 3, 7, 9],
    'm7': [0, 3, 7, 10],
    '-7': [0, 3, 7, 10],
    '-(b6)': [0, 3, 7, 8],
    '-b6': [0, 3, 7, 8],
    '-6/9': [0, 3, 7, 9, 14],
    '-7(b9)': [0, 3, 7, 10, 13],
    '-7b9': [0, 3, 7, 10, 13],
    '-maj7': [0, 3, 7, 11],
    '-9+7': [0, 3, 7, 11, 13],
    '-11': [0, 3, 7, 11, 14, 17],
    'm11': [0, 3, 7, 11, 14, 17],
    '-maj9': [0, 3, 7, 11, 14],
    '-∆9': [0, 3, 7, 11, 14],
    'mM9': [0, 3, 7, 11, 14],
    // major (all normal 5, major 3 chords)
    'M': [0, 4, 7],
    '6': [0, 4, 7, 9],
    '6/9': [0, 4, 7, 9, 14],
    '6add9': [0, 4, 7, 9, 14],
    '69': [0, 4, 7, 9, 14],
    '7': [0, 4, 7, 10],
    '9': [0, 4, 7, 10, 14],
    '11': [0, 7, 10, 14, 17],
    '13': [0, 4, 7, 10, 14, 21],
    '7b9': [0, 4, 7, 10, 13],
    '7♭9': [0, 4, 7, 10, 13],
    '7(b9)': [0, 4, 7, 10, 13],
    '7(#9)': [0, 4, 7, 10, 15],
    '7#9': [0, 4, 7, 10, 15],
    '(13)': [0, 4, 7, 10, 14, 21],
    '7(9,13)': [0, 4, 7, 10, 14, 21],
    '7(#9,b13)': [0, 4, 7, 10, 15, 20],
    '7(#11)': [0, 4, 7, 10, 14, 18],
    '7#11': [0, 4, 7, 10, 14, 18],
    '7(b13)': [0, 4, 7, 10, 20],
    '7b13': [0, 4, 7, 10, 20],
    '9(#11)': [0, 4, 7, 10, 14, 18],
    '9#11': [0, 4, 7, 10, 14, 18],
    '13(#11)': [0, 4, 7, 10, 18, 21],
    '13#11': [0, 4, 7, 10, 18, 21],
    'maj7': [0, 4, 7, 11],
    '∆7': [0, 4, 7, 11],
    'Δ7': [0, 4, 7, 11],
    'maj9': [0, 4, 7, 11, 14],
    'maj7(9)': [0, 4, 7, 11, 14],
    'maj7(11)': [0, 4, 7, 11, 17],
    'maj7(#11)': [0, 4, 7, 11, 18],
    'maj7(13)': [0, 4, 7, 14, 21],
    'maj7(9,13)': [0, 4, 7, 11, 14, 21],
    '7sus4': [0, 5, 7, 10],
    'm7sus4': [0, 3, 7, 10, 17],
    'sus4': [0, 5, 7],
    'sus2': [0, 2, 7],
    '7sus2': [0, 2, 7, 10],
    '9sus4': [0, 5, 7, 10, 14],
    '13sus4': [0, 5, 7, 10, 14, 21],
    // augmented (all sharp 5 chords)
    'aug7': [0, 4, 8, 10],
    '+7': [0, 4, 8, 10],
    '+': [0, 4, 8],
    '7#5': [0, 4, 8, 10],
    '7♯5': [0, 4, 8, 10],
    '7+5': [0, 4, 8, 10],
    '9#5': [0, 4, 8, 10, 14],
    '9♯5': [0, 4, 8, 10, 14],
    '9+5': [0, 4, 8, 10, 14],
    '-7(#5)': [0, 3, 8, 10],
    '-7#5': [0, 3, 8, 10],
    '7(#5)': [0, 4, 8, 10],
    '7(b9,#5)': [0, 4, 8, 10, 13],
    '7b9#5': [0, 4, 8, 10, 13],
    'maj7(#5)': [0, 4, 8, 11],
    'maj7#5': [0, 4, 8, 11],
    'maj7(#5,#11)': [0, 4, 8, 11, 18],
    'maj7#5#11': [0, 4, 8, 11, 18],
    '9(#5)': [0, 4, 8, 10, 14],
    '13(#5)': [0, 4, 8, 10, 14, 21],
    '13#5': [0, 4, 8, 10, 14, 21]
};