# MLIR

Ported from [vscode-mlir](https://github.com/llvm/vscode-mlir).

Because some APIs of [vscode](github.com/microsoft/vscode) are missing in
[coc.nvim](https://github.com/neoclide/coc.nvim), disable some features
temporarily:

- command `mlir.viewPDLLOutput`: miss
  `vscode.workspace.openTextDocument({language, content})`
- custom editor `mlir.bytecode`: miss
  `vscode.window.registerCustomEditorProvider()`
- filesystem `mlir.bytecode-mlir`: miss `vscode.workspace.registerFileSystemProvider()`
- use `chokidar.watch()` to detect the changes of the paths of language
  servers: miss `vscode.Disposable.constructor()`

## Install

- [coc-marketplace](https://github.com/fannheyward/coc-marketplace)
- [npm](https://www.npmjs.com/package/coc-mlir)
- vim:

```vim
" command line
CocInstall coc-mlir
" or add the following code to your vimrc
let g:coc_global_extensions = ['coc-mlir', 'other coc-plugins']
```

## Usage

Refer [vscode-mlir](https://github.com/llvm/vscode-mlir).
