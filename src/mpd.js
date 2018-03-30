/*
  Connect to the MPD.

  Exposes a Kefir stream of messages from the MPD.
  */

// let text = require('..')
// console.log(text)
const midi = require('midi')
const kefir = require('kefir')

// Set up a new input.
const input = new midi.input()
// Count the available input ports.
const ports = input.getPortCount()

// Get the name of a specified input port.
const name = input.getPortName(0)

const inputS = kefir.stream(emitter => {
  input.on('message', (deltaTime, message) => emitter.emit(message))
  input.on('error', err => emitter.error(err))
})

// Open the first available input port.
input.openPort(0);

module.exports = inputS
