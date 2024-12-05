# Create the partners directory if it doesn't exist
$partnersDir = "public/images/partners"
if (-not (Test-Path $partnersDir)) {
    New-Item -ItemType Directory -Path $partnersDir -Force
}

# Partner logo URLs - updated with more reliable sources
$partnerLogos = @{
    "skg-ikob" = "https://www.kiwa.com/globalassets/netherlands/merken/skg-ikob-keurmerk.png"
    "komo" = "https://www.kiwa.com/globalassets/netherlands/merken/komo-keurmerk.png"
    "fsc" = "https://www.fsc.nl/preview.fsc-logo-groen.a-76.png"
    "bouwgarant" = "https://www.bouwgarant.nl/globalassets/bouwgarant/logo-bouwgarant.png"
    "vca" = "https://www.vca.nl/media/1027/vca-logo.png"
    "vmrg" = "https://www.vmrg.nl/media/1001/vmrg-logo.png"
}

# Download each logo
foreach ($partner in $partnerLogos.GetEnumerator()) {
    $fileName = "$($partner.Key).png"
    $filePath = Join-Path $partnersDir $fileName
    Write-Host "Downloading partner logo: $fileName..."
    
    try {
        $webClient = New-Object System.Net.WebClient
        $webClient.Headers.Add("User-Agent", "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36")
        $webClient.DownloadFile($partner.Value, $filePath)
        Write-Host "Successfully downloaded $fileName"
    }
    catch {
        Write-Host "Failed to download $fileName`: $($_.Exception.Message)"
        
        # Alternative URLs as fallback
        $fallbackUrls = @{
            "skg-ikob" = "https://www.bouwkwaliteit.nl/wp-content/uploads/2019/01/SKG-IKOB.png"
            "komo" = "https://www.bouwkwaliteit.nl/wp-content/uploads/2019/01/komo.png"
            "fsc" = "https://www.fsc.org/sites/default/files/styles/scale_width_1024/public/2019-07/FSC_AC_Logo_Landscape_WhiteBG.png"
            "bouwgarant" = "https://www.bouwendnederland.nl/media/6076/bouwgarant-logo.png"
            "vca" = "https://www.ssvv.nl/wp-content/uploads/2018/03/VCA-logo.png"
            "vmrg" = "https://www.vmrg.nl/media/1002/vmrg-logo-rgb.png"
        }
        
        if ($fallbackUrls.ContainsKey($partner.Key)) {
            Write-Host "Trying fallback URL for $($partner.Key)..."
            try {
                $webClient.DownloadFile($fallbackUrls[$partner.Key], $filePath)
                Write-Host "Successfully downloaded $fileName using fallback URL"
            }
            catch {
                Write-Host "Failed to download $fileName using fallback URL: $($_.Exception.Message)"
                
                # Create a placeholder colored rectangle with text if all downloads fail
                $placeholderHtml = @"
                <svg xmlns="http://www.w3.org/2000/svg" width="200" height="100">
                    <rect width="100%" height="100%" fill="#f0f0f0"/>
                    <text x="50%" y="50%" font-family="Arial" font-size="14" fill="#666" text-anchor="middle" dy=".3em">$($partner.Key)</text>
                </svg>
"@
                $placeholderPath = Join-Path $partnersDir $fileName
                [System.IO.File]::WriteAllText($placeholderPath, $placeholderHtml)
                Write-Host "Created placeholder image for $fileName"
            }
        }
    }
}

Write-Host "Partner logo download process completed!"
