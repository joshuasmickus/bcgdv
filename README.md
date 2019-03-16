# Hello

Thank you for taking the time to review my tech test.

## Instructions

This was built on a machine using:
- node v10.13.0
- yarn v0.21.3
- npm v6.4.1

So if you notice anything wrong, check your local configuration matches,

Run `yarn` or `npm install` to get going
Then `yarn start:all` to run the node server and the dev server

## Things I did

- I added a variety of test cases to show how I would handle different scenarios of unit testing. I always strive for 100% test coverage but felt that the functionality of this tech test was more important than upping the test coverage.
- I started designing the "new idea" form in a bit of an old school way (modal) until I read point 3 a bit more, and then decided to go for the "double click to edit" which I realise wasn't asked for but from the way the question was written I felt it was a nice interpretation.
- I didn't get to test on IE etc but did my best to use the prefixes where required. I was going to make use of an autoprefixer but didn't want to get side tracked going down the webpack plugin hole so I just added where I thought they were necessary.
- I haven't done programming at home on my computer for a little while and it helped me fall back in love with programming again, this is the first tech test I have done in a number of years :)
- I added redux-persist for keeping the state in local storage, and took an interpretation of the 'server' that you described, it is a little bit smart but not very and always defaults back to the same 3 ideas when you delete all of the current ideas.

## Things I could have improved

- I could have done more of the stretch tasks
- I could have added more test cases
- More manual testing on other browsers, I only managed the ones installed on my Mac as I didn't have time to get a VM up and running.
- I could have added some colour or made it look pretty...
- If you add multiple ideas it horizontally scrolls, I could have fixed that so the blocks dropped down
- I could have changed the editable state so it didn't apply it to all ideas, or maybe have it so you can only have one editable idea at a time and disable the add button.

Cheers for reading.

Josh
