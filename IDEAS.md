# Software Ideas

These are ideas I come up with that I think would be cool to have in the product. This differs from the Todoist Project List in that it describes the little details needed for an ideal and polished final product.

## Ideas

- *Workspaces*: Any notes or objects created will be stored in *workspaces*. When the User first opens the app, they will be looking at an automatically created workspace called `Unnamed Workspace`. Any *workspace* could be imported/exported as a special type of file

- *Objects Sidebar*: Common structures representing mathematical objects such as Matrices, Functions, etc. These have their own section because they have a lot of dynamic properties that need to be tracked down during runtime.
  
  - *Function*: ...
  
  - *Matrix*: When selected from the **Objects Sidebar**, a $1 \times 1$ empty matrix will appear in the center of the workspace, and the cursor will be placed in the 1 slot of the matrix. If clicked on once, the matrix can be moved around the workspace, or have one of its entries edited if clicked once again; and if there's a double click, it can be re-dimensioned in 8 different directions (horizontally, vertically or diagonally).
    
    One can also define an entire matrix by one single formula, by having a $1 \times 1$ matrix and define its only entry as a function in terms of the matrix `row` and `col` (column). This is "Clever Notation".

- *Symbols Sidebar*: Its purpose is to help find advanced symbols if the user has trouble writing down any of them. There can be a section for common complex symbols that can be seen as mathematical structures, such as Integrals, Summations, etc., with their corresponding placeholder parameters ("Math Snippets", *IntelliSense* style, as from *VSC*), all listed just like in the **Objects Sidebar**; the other section is for simpler symbols such as the commonly used greek letters, which should look like a table or pool of all the symbols available in the program, and when hovering over a specific symbol, an alternate text should appear displaying the symbol name and its $\LaTeX$ command.

- *Documentation* for both these collections of objects. There should be a general description for how each of these 2 types of elements works (syntax), and also a description for each individual symbol/object.

- *Variables*: To create a variable, select the sequence of characters representing its name (if no selection is made, the last character will be used), and press `Ctrl + R` to store it in the list of workspace variables. The following cases may also occur:
  
  - If there exists a variable with the selected name already, using the previous hotkey lets the program know you are talking about said variable in the expression being written.
  
  - If the selection contains the equal sign (e.g. `x = 1`), this will be interpreted as a declaration and assignation at the same time, storing the value with name corresponding to the left side, and with the value on the right side.
  
  On default settings, every appearance of a variable will be indicated by its name being displayed in bold format, this could be changed to other forms of highlighting (or no highlighting whatsoever) in the Settings Menu.

- *Variables Sidebar*: List of all created variables in the Workspace, denoting its type (what object it is), name and value. The `value` displayed will be the exact expression assigned to it, and when hovering over a particular variable box, this value will be replaced with its numerical value (or its approximation for that matter).
  
  ***NOTE*: Every sidebar element should preferably be comprised of an icon (for $\LaTeX$ based icons use [this online editor](https://latex.codecogs.com/eqneditor/editor.php?lang=es-es)) representing the elementing, and then its name.**

- Integrated Computational Engine: This should allow the app to automatically perform computations if the user ever needs to simplify mathematical expressions in the workspace. Consider using the *Wolfram|Alpha API*.

- *SETTINGS PAGE*:
  
  - *Account*
  
  - *Hotkeys Manual* (an overlay showing a list of all integrated key shortcuts with a brief description on its function)
  
  - *Theme* (Light/Dark)

- Have an option for Toggling highlighting/coloring of special objects such as the ones in the *Object Sidebar* or constants/variables.

- *COMMAND WINDOW*: Have a set of commands that allow you to do anything you can do dynamically, with lines of code instead, this would allow automation.

- *DYNAMIC ANIMATION-MAKING ADD-ON*: Another motivator for this project was the idea of developing a more intuitive interface for achieving the same things you could with `Manim`, the Python library. It would be a really big part of the project if it were to be implemented as well, but it can not be without the base imagined in the previous bullet points, so it should be a sort of "extension" or plugin to the program

- *Other Add-on's (`WORKSHOP`)*: All the possibilities of dynamic mathematical object manipulation can not be covered in the very limited set of elements the base app can offer (and handle, since there's already a lot of operations for these in mind), so an extension/package workshop could come in handy, for whether you wish to work on topics belonging to probability, numerical methods, real analysis, and so on. A lot of advanced math techniques should be covered this way, for instance:
  
  - A **Linear Regression** workspace, where you can input your desired setup, and have it display all the required computations needed to arrive to a solution, with the involving matrices, systems of equations, and its changes, all being shown on screen. This would serve both as an explainer AND solver. It could come as a pre-built downloadable add-on, to set the standard for the use of the workshop in the community.

- *Recording Feature*: Have a tool to record a section of the current workspace screen, and allow to paste and display that same recording anywhere inside the grid.

- *Special Variables*: Have a list of variables, that when created, and after pressing a specific hotkey, come to represent actual aspects of the application such as the current grid position, or theme.
  
  - [currentGridPos = (x, y), theme, ...]