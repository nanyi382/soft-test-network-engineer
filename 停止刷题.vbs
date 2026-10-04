' Stop the quiz app server (kills the PID recorded by server.js).
Set fso = CreateObject("Scripting.FileSystemObject")
Set ws = CreateObject("WScript.Shell")
dir = fso.GetParentFolderName(WScript.ScriptFullName)
pidFile = dir & "\server.pid"
If fso.FileExists(pidFile) Then
    pid = Trim(fso.OpenTextFile(pidFile, 1).ReadAll)
    ws.Run "cmd /c taskkill /f /pid " & pid, 0, True
    fso.DeleteFile pidFile
End If
