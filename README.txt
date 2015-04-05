Sudoku Application

How to run: 
Sudoku application can be run by opening index.html file present in main directory in the browser. Also the application is hosted at
vinroop2003.github.io url and can be accessed from any browser or phone.

Basic Structure: 
For building this application I have used HTML, JavaScript, JQuery and CSS.
The basic page structure uses HTML. The grid parent table and 3 buttons below are displayed using HTML, index.html contains ths basic page html.
Sudoku.css file contains the css used in the project. It contains all classes, tags and ids used in the application.

Sudoku.js file contains the javaScript code for the project. So initially when document is loaded, the 9X9 Sudoku board is generated dynamically.
This 9X9 board is divided into sub 9 (3X3) tables which contains each of the 9 boxes of Sudoku. This is done in order to contrast individual box and if advanced validation needs to be performed on the each box (where individual box is validated against 0-9 numbers, point 2 in things to improve). Once the basic html for the box is rendered, all event handlers are bound to the buttons. There are 3 buttons:

1. Submit: This button checks the final solution and makes sure all entries match the correct solution.
2. Clear: This button resets the game state by clearing out all the entries entered by the user.
3. Hint: This is like a hint button, if user clicks on this button it tells the user whether entries entered by him/her so far are correct or wrong. This can be used if user wants to know whether he/she is going in the right direction.

After rendering the board and binding events to buttons, the board is filled with initial partial state of the game.

Now when user clicks any of the submit/hint button, the board state is compared against the known unique solution and accordingly user is notified by displaying success or failure message at the bottom of the page.

Technologies used: 
I have used HTML, CSS JavaScript and JQuery. I generally use MVVM knockout by creating view, model and viewModel, but instructions restricted the use of frameworks like backbone etc. so i didn't use it. since knockout supports 2 way binding, it provides a better user experience and it improves code readeability. For css I would have used LESS (because of time constraint, didn't use it) , it helps organize code in a cleaner way, we can add nested of classes and ids to specifically targets html elements, in css one has to use long nested names which affects code readability.

Things to improve (Additional time permits):
1. Right now the game only supports one board (static). It can be improved to have a board generator which generates new sudoku board state.
2. Right now on validation, I compare the entire board state with the correct solution and user is not notified of the wrong entries entered. Validation can be improved to show user which entries are wrong in which column/row/box after highlighting them.