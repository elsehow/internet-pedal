/*
  Connects to MPD. Retruns a Kefir stream representing whether or not the
  "pedal" (lower left pad) is pressed.

  1 means "pedal down"
  0 means "pedal up"
  */

let kefir = require('kefir')
let inputS = require('./mpd')

// filter for lower-left pedal
let lowerLeftS =
    inputS
    .filter(arr => arr[0] == 208)
// maps stream into 1 (pressed) or 0 (not pressed)
    .map(x => {
      const state = x[1]
      if (state > 0)
        return 1
      return 0
    })
    .skipDuplicates()

module.exports = lowerLeftS
