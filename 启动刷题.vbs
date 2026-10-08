' Start the quiz app without a console window.
Set fso = CreateObject("Scripting.FileSystemObject")
Set ws = CreateObject("WScript.Shell")
dir = fso.GetParentFolderName(WScript.ScriptFullName)
ws.CurrentDirectory = dir

' Launch the local server in a hidden window, with NO_OPEN=1 so server.js
' does not try to open the browser itself (its "start" command is unreliable
' from a hidden context). This script opens the browser instead.
ws.Run "cmd /c set NO_OPEN=1&& node server.js", 0, False

' Give the server a moment to start listening (it stays running after that).
WScript.Sleep 1200

' Open the app in the default browser.
ws.Run "http://localhost:8000", 1, False
