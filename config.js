/*
  PIRATETOKEN SITE CONFIGURATION
  Replace YOUR-GITHUB-USERNAME with your GitHub username after creating the Release.
  The EXE files are hosted separately in GitHub Releases, not in this website repository.
*/
window.PIRATETOKEN_CONFIG = {
  products: {
    chanceChecker: {
      downloadUrl: "https://github.com/YOUR-GITHUB-USERNAME/piratetoken-site/releases/latest/download/FortnitePirateTokenTool.exe",
      version: "01.0",
      platform: "Windows"
    },
    cannonCheat: {
      downloadUrl: "https://github.com/YOUR-GITHUB-USERNAME/piratetoken-site/releases/latest/download/Cannon%20cheat.exe",
      platform: "Windows"
    }
  },
  updates: [
    {
      date: "2026-11-19",
      title: "PirateToken website launch",
      description: "The redesigned download site is ready. Both Windows downloads are hosted through GitHub Releases.",
      type: "SITE"
    },
    {
      date: "2026-11-19",
      title: "Fortnite Pirate Token Tool",
      description: "The supplied Fortnite Pirate Token Tool executable is available to download.",
      type: "RELEASE"
    },
    {
      date: "2026-11-19",
      title: "Cannon Cheat",
      description: "The supplied Cannon Cheat executable is available. MAY NOT WORK!",
      type: "WARNING"
    }
  ]
};
