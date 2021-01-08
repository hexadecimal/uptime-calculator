/*
* Adapted from: https://tryhexadecimal.com/sla-uptime-calculator
* Copyright (c) Forty Two Technologies, Inc.
*/

'use strict';

const uptime = (uptimeTarget = 99.9, daysPerMonth = 30, daysPerQuarter = 90, daysPerYear= 365) => {
  const secondsPerDay     = 60 * 60 * 24;
  const secondsPerWeek    = 60 * 60 * 24 * 7;

  let secondsPerMonth     = 60 * 60 * 24 * daysPerMonth;
  let secondsPerQuarter   = 60 * 60 * 24 * daysPerQuarter;
  let secondsPerYear      = 60 * 60 * 24 * daysPerYear;

  // dodging the floating point math
  const allowedDowntime = (100 * 100 - uptimeTarget * 100) / (100 * 100);

  return {
    secondsPerDay: secondsToWords(allowedDowntime * secondsPerDay),
    secondsPerWeek: secondsToWords(allowedDowntime * secondsPerWeek),
    secondsPerMonth: secondsToWords(allowedDowntime * secondsPerMonth),
    secondsPerQuarter: secondsToWords(allowedDowntime * secondsPerQuarter),
    secondsPerYear: secondsToWords(allowedDowntime * secondsPerYear)
  };
};

// Adapted from: https://stackoverflow.com/a/52387803
const secondsToWords = (seconds) => {
  const totalDays    = Math.floor(seconds / (3600 * 24));
  const totalHours   = Math.floor(seconds % (3600 * 24) / 3600);
  const totalMinutes = Math.floor(seconds % 3600 / 60);
  const totalSeconds = Math.floor(seconds % 60);

  const daysInWords    = totalDays > 0 ? totalDays + (totalDays === 1 ? ' day, ' : ' days, ') : '';
  const hoursInWords   = totalHours > 0 ? totalHours + (totalHours === 1 ? ' hour, ' : ' hours, ') : '';
  const minutesInWords = totalMinutes > 0 ? totalMinutes + (totalMinutes === 1 ? ' minute, ' : ' minutes, ') : '';
  const secondsInWords = totalSeconds > 0 ? totalSeconds + (totalSeconds === 1 ? ' second' : ' seconds') : '';

  const finalResult = (daysInWords + hoursInWords + minutesInWords + secondsInWords).replace(/\, $/, '');

  if (finalResult === '') {
    return "less than a second";
  } else {
    return finalResult;
  }
};
