//# #if HAVE_VSCODE
import * as vscode from 'vscode';
import {registerMLIRExtensions} from './MLIR/mlir';
// https://github.com/neoclide/coc.nvim/discussions/4918
import {registerPDLLExtensions} from './PDLL/pdll';
//# #elif HAVE_COC_NVIM
//# import * as vscode from 'coc.nvim';
//# #endif

import {MLIRContext} from './mlirContext';

/**
 *  This method is called when the extension is activated. The extension is
 *  activated the very first time a command is executed.
 */
export function activate(context: vscode.ExtensionContext) {
  const outputChannel = vscode.window.createOutputChannel('MLIR');
  context.subscriptions.push(outputChannel);

  const mlirContext = new MLIRContext();
  context.subscriptions.push(mlirContext);

  // Initialize the commands of the extension.
  context.subscriptions.push(
      vscode.commands.registerCommand('mlir.restart', async () => {
        // Dispose and reactivate the context.
        mlirContext.dispose();
        await mlirContext.activate(outputChannel);
      }));
  //# #if HAVE_VSCODE
  registerMLIRExtensions(context, mlirContext);
  registerPDLLExtensions(context, mlirContext);
  //# #endif

  mlirContext.activate(outputChannel);
}
