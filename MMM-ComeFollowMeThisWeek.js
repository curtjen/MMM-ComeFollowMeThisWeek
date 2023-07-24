/* Magic Mirror
 * Module: MMM-ComeFollowMeThisWeek
 * Copied from MMM-TextPerWeek
 * By Johan Persson, https://github.com/retroflex
 * MIT Licensed.
 */

Module.register('MMM-ComeFollowMeThisWeek', {
	// Default configuration.
	defaults: {
		texts: {
			  'default': 'Need to update lesson list...',
        30: "July 24–30<br />Acts 16–21",
        31: "July 31–August 6<br />Acts 22–28",
        32: "August 7–13<br />Romans 1–6",
        33: "August 14–20<br />Romans 7–16",
        34: "August 21–27<br />1 Corinthians 1–7",
        35: "August 28–September 3<br />1 Corinthians 8–13",
        36: "September 4–10<br />1 Corinthians 14–16",
        37: "September 11–17<br />2 Corinthians 1–7",
        38: "September 18–24<br />2 Corinthians 8–13",
        39: "September 25–October 1<br />Galatians",
        40: "October 2–8<br />Ephesians",
        41: "October 9–15<br />Philippians; Colossians",
        42: "October 16–22<br />1 and 2 Thessalonians",
        43: "October 23–29<br />1 and 2 Timothy; Titus; Philemon",
        44: "October 30–November 5<br />Hebrews 1–6",
        45: "November 6–12<br />Hebrews 7–13",
        46: "November 13–19<br />James",
        47: "November 20–26<br />1 and 2 Peter",
        48: "November 27–December 3<br />1–3 John; Jude",
        49: "December 4–10<br />Revelation 1–5",
        50: "December 11–17<br />Revelation 6–14",
        51: "December 18–24<br />Christmas",
        52: "December 25–31<br />Revelation 15–22<br />",
    },
	},

	getScripts: function() {
		return ["moment.js"]
	},

	getStyles: function() {
		return ["custom.css"];
	},

	// Override dom generator.
	getDom: function () {
		var getText = () => {
			var thisWeek = moment().week();
			var txt = (this.config.texts.hasOwnProperty(thisWeek))
				? this.config.texts[thisWeek]
				: this.config.texts["default"];
			return txt;
		};
		var dom = document.createElement("div");
		dom.innerHTML = getText();
		return dom;
	},

	notificationReceived: function(noti, payload) {
		if (noti == "DOM_OBJECTS_CREATED") {
			this.refresh();
		}
	},

	refresh: function() {
		this.updateDom();
		setTimeout( () => {
			this.refresh();
		}, 1000*60*60*3);  // In millisecs, refresh every 3 hours.
  }
});
