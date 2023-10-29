# IMOGI
Math-Oriented Project
"***I*** ntuitive ***M*** athematical ***O*** bject ***G*** eneration ***I*** nterface"

App Name Ideas:

- $Sigmath \ (\Sigma  th)$

- $Mathwise$


# Philosophies

- ¿Could a piece of Software be a better, more intuitive and efficient medium than pen and paper when dealing with advanced mathematical concepts?

- Interactive ***Manim***-like software, as the ultimate teaching tool.


# Must-have's

- A grid-background. This is the general working space of the software. Maybe allow various grids (workspaces) to be created.

- Matrix generation and manipulation (with *Clever Notation*)

- Some form of recurrence representation: ¿How do i visualize $T(n) = f(T(n-1))$?

	- Maybe have a button to replace a term using given definitions?

		$T(n) = f(T(n-1))$ Stored Definition (maybe visible from a sidebar)

		$T(n) = f(f(T(n-2)))$ After pressing the button "Apply Definition Once"

- Third-Party modules/packages are supported, so the community can further extend the software's potential, e.g:

  - ```Bisection Method``` Package (or a more general ```Numerical Methods``` Package)

  - ```Complex Numbers``` Package

  - ```Recursively-defined Functions``` Package (or a more general ```Non-elemental Functions``` Package)

  - ```Linear Algebra``` Package

  and so on...

- Some way to make $\LaTeX$ content easy to Create and Edit:
  - The User creates a *Note Block* (like a textbox) on a page, types in the latex code and another block right next to it displays the output in real-time. When the *Note Block* is de-selected, the other block disappears and the first one becomes the Rendered Output. Double-Click on the Block to edit (repeating the process)

  These Blocks can work as explanatory notes and can be moved like other objects in the software


# Maybe's

- Integrated Computational Engine (***Wolfram|Alpha APIs*** accepts $\LaTeX$ source code) so the user can skip the process of doing calculations himself.

- Integrated Language Model (***ChatGPT***?) to help the user do something or use some tool that they're not comfortable with yet in the App

- Different grid styles, so it can look like a customized chalkboard


# Backlog

## ¿How to make the $\LaTeX$ components editable in real time (like ***Desmos*** can)?

- Easy Fix:

	- Not actual "live" $\LaTeX$ rendering

	- Just have an "Update Render" button to do it manually

	- Save recently edited textboxes in some data structure and only re-render those

- The Hard Way:

	- All $\LaTeX$ code is saved independently

	- Current input would be rendered after pressing Space (if the commands are recognized)

	- Would require a BNF of sorts (Context-Free Grammar)
