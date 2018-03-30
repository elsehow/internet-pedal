/*
  Connect to the MPD.

  Exposes a Kefir stream of messages from the MPD.
  */

// let text = require('..')
// console.log(text)
const midi = require('midi')
const kefir = require('kefir')

const inputS = kefir.stream(emitter => {

  // Set up a new input.
  let input = new midi.input()
  // Count the available input ports.
  let ports = input.getPortCount()

  // Get the name of a specified input port.
  let name = input.getPortName(0)
  if (name === 'Akai MPD24') {
    console.log('connected to MPD24')
    input.on('message', (deltaTime, message) =>
             emitter.emit(message))
    input.on('error', err =>
             emitter.error(err))
    input.openPort(0)
  } else {
    // if there is no AKAI MPD24 plugged in,
    // emit an error
    console.log("No MPD24 found!")
    emitter.emit('No MPD')
  }
})

module.exports = inputS
