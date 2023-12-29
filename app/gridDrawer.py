"""To be run when there need to be changes made in the grid of the app."""

from math import ceil
import json
from PIL import Image

# Get Data Object from DATA.JSON
file = open(r"C:\Users\Carlos Andres\Code\Projects\IMOGI\app\data.json")
data = json.load(file)

# Measured in pixels
SCREEN_WIDTH = data["screen"]["width"]
SCREEN_HEIGHT = data["screen"]["height"]
BROWSER_HEIGHT = data["browser"]["height"]
GRID_UNIT_WIDTH = data["grid"]["unit-width"]
GRID_UNIT_HEIGHT = data["grid"]["unit-height"]

# Grid Generation
grid_unit = Image.open(r"C:\Users\Carlos Andres\Code\Projects\IMOGI\app\images\Grid Unit.png")
grid_unit = grid_unit.crop((0, 0, GRID_UNIT_WIDTH, GRID_UNIT_HEIGHT))

# Only height varies between screen and browser, width is the same
units_in_width = GRID_UNIT_WIDTH * ceil(SCREEN_WIDTH/GRID_UNIT_WIDTH)
units_in_height = GRID_UNIT_HEIGHT * ceil(BROWSER_HEIGHT/GRID_UNIT_HEIGHT)
full_grid = Image.new("RGBA", (units_in_width, units_in_height))

# Repeatedly paste the Grid Unit on the output image
for x in range(units_in_width):
    x_pos = GRID_UNIT_WIDTH * x
    for y in range(units_in_height):
        y_pos = GRID_UNIT_HEIGHT * y
        full_grid.paste(grid_unit, (x_pos, y_pos))

print("Completed Processing.\n")

full_grid.save(r"C:\Users\Carlos Andres\Code\Projects\IMOGI\app\images\Grid.png")
print("The Grid image has been successfully created.\n\
(saved as \"app/images/Grid.png\")")
