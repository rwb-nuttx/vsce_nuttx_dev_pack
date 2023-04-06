// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';

// This method is called when your extension is activated
// Your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {

	// Use the console to output diagnostic information (console.log) and errors (console.error)
	// This line of code will only be executed once when your extension is activated
	console.log('Congratulations, your extension "nuttx-dev-pack.run" is now active!');

	// The command has been defined in the package.json file
	// Now provide the implementation of the command with registerCommand
	// The commandId parameter must match the command field in package.json
	let disposable = vscode.commands.registerCommand('nuttx-dev-pack.run', () => {
		// The code you place here will be executed every time your command is executed
		// Display a message box to the user
		vscode.window.showInformationMessage('NuttX Dev Pack run!');
		// const configuration = vscode.workspace.getConfiguration("editor");
		// configuration.update("fontSize", 16, false).then(() => {
		// 	// take action here
		// 	vscode.window.showInformationMessage('Update configuration successfully');
		// });
		if (vscode.workspace.workspaceFolders) {
			const folder = vscode.workspace.workspaceFolders[0];
			const setting_git = vscode.workspace.getConfiguration("git", folder.uri);
			setting_git.update("alwaysSignOff", true, vscode.ConfigurationTarget.WorkspaceFolder).then(() => {
				// take action here
				// vscode.window.showInformationMessage('Update configuration successfully');
			});
			const setting_files = vscode.workspace.getConfiguration("", folder.uri);
			const associations = setting_files.get('files.associations') as { [key: string]: string };
			associations['*.defs'] = 'makefile';
			console.log(associations);
			setting_files.update("files.associations", associations, vscode.ConfigurationTarget.Workspace).then(() => {
				// take action here
				vscode.window.showInformationMessage('Update configuration successfully');
			});

		}
	});
	let disposable_sort_align = vscode.commands.registerCommand('nuttx-dev-pack.align_sort', async () => {
		try {
			await vscode.commands.executeCommand('vscode-better-align.align');
			await vscode.commands.executeCommand('editor.action.sortLinesAscending');
			// vscode.window.showInformationMessage('Commands executed successfully!');
		} catch (error) {
			vscode.window.showErrorMessage(`Failed to execute commands: ${error}`);
		}
	});
	context.subscriptions.push(disposable, disposable_sort_align);
}

// This method is called when your extension is deactivated
export function deactivate() { }
