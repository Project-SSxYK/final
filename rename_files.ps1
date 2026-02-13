$modelsDir = "c:\Users\HP\Documents\app-original-main\app-main\frontend\public\Models"
$videosDir = "c:\Users\HP\Documents\app-original-main\app-main\frontend\public\Videos"

# Rename files in Models directory
Get-ChildItem -LiteralPath $modelsDir -File | ForEach-Object {
    $newName = ($_.Name -replace '\s+', '-').ToLower()
    if ($_.Name -ne $newName) {
        # Two-step rename to handle case-only changes on Windows
        $tempName = "_temp_$newName"
        Rename-Item -LiteralPath $_.FullName -NewName $tempName -Force
        Rename-Item -LiteralPath (Join-Path $modelsDir $tempName) -NewName $newName -Force
        Write-Output "Models: $($_.Name) -> $newName"
    }
}

# Rename files in Videos directory
Get-ChildItem -LiteralPath $videosDir -File | ForEach-Object {
    $newName = ($_.Name -replace '\s+', '-').ToLower()
    if ($_.Name -ne $newName) {
        $tempName = "_temp_$newName"
        Rename-Item -LiteralPath $_.FullName -NewName $tempName -Force
        Rename-Item -LiteralPath (Join-Path $videosDir $tempName) -NewName $newName -Force
        Write-Output "Videos: $($_.Name) -> $newName"
    }
}

Write-Output "Done!"
