Set WshShell = CreateObject("WScript.Shell")

' Get the Hoop DTM folder
WshShell.CurrentDirectory = Replace(WScript.ScriptFullName, "\start-hidden.vbs", "")

' Check if the server is already running
Set http = CreateObject("MSXML2.XMLHTTP")

serverRunning = False

On Error Resume Next

http.Open "GET", "http://localhost:3000/", False
http.Send

If Err.Number = 0 Then
    serverRunning = True
End If

Err.Clear
On Error GoTo 0

' Start the server only if it isn't already running
If Not serverRunning Then
    WshShell.Run "node server\server.js", 0, False
    WScript.Sleep 2000
End If

' Open the actual Hoop DTM website
WshShell.Run """" & WshShell.CurrentDirectory & "\index.html""", 1, False