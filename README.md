
# Reddit like Redux App
This is a Reddit like, react, redux based application, created as practice.


## Folder Structure & Architecture Decisions
Besides the standard redux folders structure (actions, reducers, etc... )
I have decided to stick to one file components & inline \ styled components.

By concept the idea was that most inline styling will happen on the base components only,
and maybe some inlineStyles will leak into regular presentation components (definitely shouldn't be inside container components), due to time limitations I did cut some corners, and added inline styles in inappropriate way that do not follow above rule. (but on overall the project structured in a way to support this division)

### I have divided the components to 3 different levels:

* `components/base` - the base building blocks, here all the inline styling should occur, ideally the rest of the applications will use only comments from here rather than regular html elements.
* `components` app presentation components, contain the functional businesses related prersnaiton components
* `containers` Smart components that connect the presentation components to redux store, ideally no presentation implementation should be here (again due to time limits I sometimes did cut corners)

### Middleware

* `user` - the user middleware attaches the authenticated user to all actions, to make sure all reducers
have idiomatic access to the current user, without violating the pure function principal

### Usage of libraries
As a concept whenever I found a suitable library that could match my needs
I would have preferred to use it rather then writing code from scratch.

## TODOs
* **TESTS** due to lack of time I didn't add tests, but in real project, I would have started from tests, not the other way around.
* Enforce single votes (didn't get to yet)
* Refactor all the shortcuts to make sure all the code matches the components layers as described above.
* Make it pretty

## How To Run

To Run the project, just clone it, and run `npm start`
### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.


Feel free to contact me with any questions :)
