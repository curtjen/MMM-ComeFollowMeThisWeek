# MMM-ComeFollowMeThisWeek
A [MagicMirror²](https://github.com/MichMich/MagicMirror) module that shows the current "Come, Follow Me" lesson for the week (WIP). Forked from [MMM-TextPerWeek](https://github.com/retroflex/MMM-TextPerWeek).

Thanks to [eouia](https://github.com/eouia) for writing the actual code! My contribution was just to upload it here on GitHub in case anyone else finds it useful.

## Installation
1. Clone repo:
```
	cd MagicMirror/modules/
	git clone https://github.com/retroflex/MMM-ComeFollowMeThisWeek
```

2. Add the module to the ../MagicMirror/config/config.js.

## Examples
Example showing a letter each week, starting at week 7. For weeks other that 7-10, nothing ('') is shown.

Using the defaults (which are the rest of the lessons for 2023):
```js
{
  module: 'MMM-ComeFollowMeThisWeek',
  position: 'bottom_right',
  header: 'Come Follow Me This Week',
}
```

These can be overridden by passing the lessons into the the `config` property, such as:
```js
{
  module: 'MMM-ComeFollowMeThisWeek',
  position: 'bottom_right',
  header: 'Come Follow Me This Week',
  config: {
    text: {
      'default': 'Need to update lesson list...',
      1: 'December 26–January 1<br />We Are Responsible for Our Own Learning',
      2: 'January 2–8<br />Matthew 1; Luke 1',
      3: 'January 9–15<br />Matthew 2; Luke 2',
      // etc
    },
  },
}
```

Since there isn't an easy way to get the lists in the needed format, the lessons list will need to be created manually. I did this by copying text from the [LDS Library](https://www.churchofjesuschrist.org/study/manual/come-follow-me-for-individuals-and-families-new-testament-2023?lang=eng).

## TODOs

- Look into a way to make the lesson list more dynamic.
- Add Primary, Sunday School, and youth schedules
- Add next year's (2024) lesson schedule

## Disclaimer

This module is provided "as-is" and is intended for personal use. It really isn't very robust and fills a need that I personally had and it is public for my own convenience. Suggestions and/or pull requests to fix some of the TODOs are welcome.
