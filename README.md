# internet-pedal

turns your wifi off unless you hold down a pedal

currently uses the lower-left pad of an akai mpd 24

## use

plug in your MPD24, clone this repository and `npm i` to install

```
npm start
```

## docs

to not fry your wifi card, this makes sure not to switch the chip more than once per second

if an MPD24 is not plugged in when the daemon starts, wifi will be off

- **TODO** use `manageWifi.isOn()` to keep wifi in desired state

- **TODO** prevent hack where you unplug MPD while pedal depressed to keep wifi on

<!-- pull apart 'desired state' from execution-->
