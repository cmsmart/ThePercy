import React, { Component } from 'react';
import moment from 'moment';

// Formats digits to two digits (e.g. 05)
const formatTimerDigit = digit => {
  if (digit < 0)
    return digit < -9 ? (-digit) : ('0' + -digit);
  return digit > 9 ? digit : '0' + digit;
  
}

// Format the countdownText to include labels and set to blank when value is 0 (strict)
// When strict is true, set the value to blank when digit is 0
const formatCountdownTextLabel = (digit, label, strict) => {
  if( strict ) return digit !== 0 ? formatTimerDigit(digit) + label : ''
  else return formatTimerDigit(digit) + label
}

class Timer extends Component {
  state = {
    countdownText: ''
  }

  timer = () => {
    // Set the time of the next race in Dawson in unix time
    // const eventTime = moment(1521741600);
    // Test past event - March 2017
    const eventTime = moment(1490205600);
    // Establish current time
    const now = moment().unix()
    // Work out the time until the next race
    const diffTime = eventTime - now
    // Convert that time into milliseconds
    const interval = 1000
    let duration = moment.duration(diffTime * interval, 'milliseconds')
    console.log('duration', duration)


    setInterval(() => {
      duration = moment.duration(duration.asMilliseconds() - interval, "milliseconds");
      // Format the months/days/hours/mins/secs with labels
      const months = formatCountdownTextLabel(duration.months(), "mo ", true);
      // console.log(months)
      const days = formatCountdownTextLabel(duration.days(), "d ", true);
      // console.log(days)
      const hours = formatCountdownTextLabel(duration.hours(), "h ", false);
      // console.log(hours)
      const mins = formatCountdownTextLabel(duration.minutes(), "m ", false);
      // console.log(mins)
      const secs = formatCountdownTextLabel(duration.seconds(), "s ", false);
      // console.log(secs)
      this.setState({countdownText: months + days + hours + mins + secs});
    }, interval);
  }

  componentDidMount() {
    // Call the timer function
    this.timer()
  }

  render() {
    const { countdownText } = this.state

    return (
      <div className="App">
        <h1>Race countdown: </h1>
        <h2>{ countdownText }</h2>
      </div>
    )
  }
}

export default Timer