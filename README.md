# MLIR

Provides [MLIR](https://mlir.llvm.org/) language IDE features for VS code:

*   Syntax highlighting for .mlir files and `mlir` markdown blocks
*   go-to-definition and cross references
*   Detailed information when hovering over IR entities
*   Outline and navigation of symbols and symbol tables
*   Live parser and verifier diagnostics

## Setup

This extension requires the
[`mlir-lsp-server` language server](https://mlir.llvm.org/docs/Tools/MLIRLSP/).
If not found in your path, you must specify the path of the server in the
settings of this extension.

## Contributing

This extension is actively developed within the
[LLVM monorepo](https://github.com/llvm/llvm-project/tree/main/mlir/utils/vscode),
at `mlir/utils/vscode`. As such, contributions should follow the
[normal LLVM guidelines](https://llvm.org/docs/Contributing.html), with code
reviews sent to
[phabricator](https://llvm.org/docs/Contributing.html#how-to-submit-a-patch).

When developing or deploying this extension within the LLVM monorepo, a few
extra setup steps are required:

*   Copy `mlir/utils/textmate/mlir.json` to the extension directory and rename
    to `grammar.json`.
*   Copy
    `https://mlir.llvm.org//LogoAssets/logo/PNG/full_color/mlir-identity-03.png`
    to the extension directory and rename to `icon.png`.

Please follow the existing code style when contributing to the extension, we
recommend to run `npm run format` before sending a patch.

## Features

### Diagnostics

The language server runs actively runs verification on the IR as you type,
showing any generate diagnostics in-place.

![IMG](https://mlir.llvm.org/mlir-lsp-server/diagnostics.png)

### Cross-references

Cross references allow for navigating the use/def chains of SSA values (i.e.
operation results and block arguments), [Symbols](../SymbolsAndSymbolTables.md),
and Blocks.

#### Find definition

Jump to the definition of the IR entity under the cursor. A few examples are
shown below:

*   SSA Values

![SSA](https://mlir.llvm.org/mlir-lsp-server/goto_def_ssa.gif)

*   Symbol References

![Symbols](https://mlir.llvm.org/mlir-lsp-server/goto_def_symbol.gif)

The definition of an operation will also take into account the source location
attached, allowing for navigating into the source file that generated the
operation.

![External Locations](https://mlir.llvm.org/mlir-lsp-server/goto_def_external.gif)

#### Find references

Show all references of the IR entity under the cursor.

![IMG](https://mlir.llvm.org/mlir-lsp-server/find_references.gif)

### Hover

Hover over an IR entity to see more information about it. The exact information
displayed is dependent on the type of IR entity under the cursor. For example,
hovering over an `Operation` may show its generic format.

![IMG](https://mlir.llvm.org/mlir-lsp-server/hover.png)

### Navigation

The language server will also inform the editor about the structure of symbol
tables within the IR. This allows for jumping directly to the definition of a
symbol, such as a `func`, within the file.

![IMG](https://mlir.llvm.org/mlir-lsp-server/navigation.gif)

