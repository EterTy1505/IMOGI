n = 6  # Number of columns

lowercase_greek = [
    r'\alpha', r'\beta', r'\gamma', r'\delta', r'\epsilon', r'\zeta',
    r'\eta', r'\theta', r'\iota', r'\kappa', r'\lambda', r'\mu',
    r'\nu', r'\xi', r'\pi', r'\rho', r'\sigma', r'\tau',
    r'\upsilon', r'\phi', r'\chi', r'\psi', r'\omega'
]

uppercase_greek = [
    r'\Gamma', r'\Delta', r'\Theta', r'\Lambda', r'\Xi', r'\Pi',
    r'\Sigma', r'\Upsilon', r'\Phi', r'\Psi', r'\Omega'
]

all_greek = lowercase_greek + uppercase_greek

# Generate LaTeX code
latex_code = r'\begin{bmatrix}'
for i, symbol in enumerate(all_greek, start=1):
    latex_code += symbol
    if i % n == 0:
        latex_code += r' \\ '
    else:
        latex_code += ' & '

latex_code += r'\end{bmatrix}'

print(latex_code)
