# Software Ideas

These are ideas I come up with that I think would be cool to have in the product. This differs from the Todoist Project List in that it describes the little details needed for an ideal and polished final product.

## Ideas

- *Workspaces*: Any notes or objects created will be stored in *workspaces*. When the User first opens the app, they will be looking at an automatically created workspace called `Unnamed Workspace`. Any *workspace* could be imported/exported as a special type of file

- *Objects Sidebar*: Common structures representing mathematical objects such as Matrices, Functions, etc.

- *Symbols Sidebar*: Common complex symbols such as Integrals, Sigma Notation, etc., with pre-defined structures ("Math Snippets", *IntelliSense* style, as from *VSC*), and maybe other simpler symbols such as the commonly used greek letters.

- *Documentation* for both these collections of objects. There should be a general description for how each of these 2 types of elements works (syntax), and also a description for each individual symbol/object.

- *Variables*: To create a variable, select the sequence of characters representing its name (if no selection is made, the last character will be used), and press `Ctrl + A` to store it in the list of workspace variables. The following cases may also occur:
  
  - If there exists a variable with the selected name already, using the previous hotkey lets the program know you are talking about said variable in the expression being written.
  
  - If the selection contains the equal sign (e.g. `x = 1`), this will be interpreted as a declaration and assignation at the same time, storing the value with name corresponding to the left side, and with the value on the right side.
  
  On default settings, every appearance of a variable will be indicated by its name being displayed in bold format, this could be changed to other forms of highlighting (or no highlighting whatsoever) in the Settings Menu.

- *Variables Sidebar*: List of all created variables in the Workspace, denoting its type (what object it is), name and value.

- Integrated Computational Engine: This should allow the app to automatically perform computations if the user ever needs to simplify mathematical expressions in the workspace. Consider using the *Wolfram|Alpha API*.

- Have an option for Toggling highlighting/coloring of special objects such as the ones in the *Object Sidebar* or constants/variables.

- 