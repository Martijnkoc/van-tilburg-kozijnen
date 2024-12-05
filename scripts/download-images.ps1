# Create directories if they don't exist
$projectsDir = "c:/Users/Martijn/Desktop/van-tilburg-kozijnen/public/images/projects"
$teamDir = "c:/Users/Martijn/Desktop/van-tilburg-kozijnen/public/images/team"

@($projectsDir, $teamDir) | ForEach-Object {
    if (-not (Test-Path $_)) {
        New-Item -ItemType Directory -Path $_ -Force
    }
}

# Project images
$projectImages = @{
    "villa-before.jpg" = "https://images.unsplash.com/photo-1518780664697-55e3ad937233?ixlib=rb-4.0.3"
    "villa-after.jpg" = "https://images.unsplash.com/photo-1523217582562-09d0def993a6?ixlib=rb-4.0.3"
    "nieuwbouw-before.jpg" = "https://images.unsplash.com/photo-1574959088538-a4c5c959477b?ixlib=rb-4.0.3"
    "nieuwbouw-after.jpg" = "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3"
    "historical-before.jpg" = "https://images.unsplash.com/photo-1464146072230-91cabc968266?ixlib=rb-4.0.3"
    "historical-after.jpg" = "https://images.unsplash.com/photo-1600585154363-67eb9e2e2099?ixlib=rb-4.0.3"
    "office-before.jpg" = "https://images.unsplash.com/photo-1497366811353-6870744d04b2?ixlib=rb-4.0.3"
    "office-after.jpg" = "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3"
}

# Team member images
$teamImages = @{
    "jan.jpg" = "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3"
    "peter.jpg" = "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3"
    "linda.jpg" = "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-4.0.3"
}

# Download project images
foreach ($image in $projectImages.GetEnumerator()) {
    $outputPath = Join-Path $projectsDir $image.Key
    Write-Host "Downloading project image: $($image.Key)..."
    try {
        Invoke-WebRequest -Uri "$($image.Value)&w=1200&q=80" -OutFile $outputPath
        Write-Host "Successfully downloaded $($image.Key)"
    } catch {
        Write-Host "Failed to download $($image.Key): $_"
    }
}

# Download team images
foreach ($image in $teamImages.GetEnumerator()) {
    $outputPath = Join-Path $teamDir $image.Key
    Write-Host "Downloading team image: $($image.Key)..."
    try {
        Invoke-WebRequest -Uri "$($image.Value)&w=800&q=80" -OutFile $outputPath
        Write-Host "Successfully downloaded $($image.Key)"
    } catch {
        Write-Host "Failed to download $($image.Key): $_"
    }
}

Write-Host "Image download process completed!"
