import React, { Component } from "react";
import moment from "moment";

// Formats digits to two digits (e.g. 05)
const formatTimerDigit = digit => {
  if (digit < 0) return digit < -9 ? -digit : "0" + -digit;
  return digit > 9 ? digit : "0" + digit;
};

// Format the countdownText to include labels and set to blank when value is 0 (strict)
// When strict is true, set the value to blank when digit is 0
const formatCountdownTextLabel = (digit, strict) => {
  if (strict) return digit !== 0 ? formatTimerDigit(digit) : "";
  else return formatTimerDigit(digit);
};

class Timer extends Component {
  state = {
    // months: "",
    days: "",
    hours: "",
    minutes: "",
    seconds: ""
  };

  timer = () => {
    // Set the time of the next race in Dawson in unix time for ease of working across timezones
    const eventTime = moment(1521741600);
    // Test past event - March 2017
    // const eventTime = moment(1490205600);
    const now = moment().unix();
    const countdown = eventTime - now;
    // Convert time until event into milliseconds
    const interval = 1000;
    let duration = moment.duration(countdown * interval, "milliseconds");

    setInterval(() => {
      duration = moment.duration(
        duration.asMilliseconds() - interval,
        "milliseconds"
      );

      // const months = formatCountdownTextLabel(duration.months(), true);
      const asDays = formatCountdownTextLabel(duration.asDays(), true);
      const days = Math.floor(asDays)

      const hours = formatCountdownTextLabel(duration.hours(), false);
      const minutes = formatCountdownTextLabel(duration.minutes(), false);
      const seconds = formatCountdownTextLabel(duration.seconds(), false);

      this.setState({
        // months: months,
        days: days,
        hours: hours,
        minutes: minutes,
        seconds: seconds
      });
    }, interval);
  };

  componentDidMount() {
    this.timer();
  }

  render() {
    const { days, hours, minutes, seconds } = this.state;

    return (
      <div className="timer">
        <h4>Race Start</h4>
        {/* <p>{months}</p>
        <p>mo</p> */}
        <p>{days} d</p>
        <p>{hours} h</p>
        <p>{minutes} m</p>
        <p>{seconds} s</p>
      </div>
    );
  }
}

export default Timer;
