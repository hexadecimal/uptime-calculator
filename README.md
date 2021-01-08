# Uptime Calculator

Calculate allowed downtime per your Service Level Agreements (SLA).

Adopted from Hexadecimal's [SLA Uptime Calculator](https://tryhexadecimal.com/sla-uptime-calculator).

## Usage

Let's say you want to find out how long a system can be down to meet the five-nines availability requirement (99.999%):

```javascript
console.log(uptime(99.999))
```

Voilà!

```javascript
{
  secondsPerDay: 'less than a second',
  secondsPerWeek: '6 seconds',
  secondsPerMonth: '25 seconds',
  secondsPerQuarter: '1 minute, 17 seconds',
  secondsPerYear: '5 minutes, 15 seconds'
}
```
