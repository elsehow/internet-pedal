let lowerLeftS =
    require('..').lowerLeftS

const manageWifi =
      require('manage-wifi');

function off () {
  console.log("wifi off")
  return manageWifi.off()
}

function on () {
  console.log("wifi on")
  return manageWifi.on()
}

function handle (state) {
  // if pedal down, wifi is on
  if (state == 1)
    return on()
  // otherwise, it's off
  return off()
}

// set up keybindings
lowerLeftS
  .throttle(1000) // one reading per second, don't want to fry my wifi card
  .flatMap(handle)
  .log()

// turn wifi off to begin
off()
