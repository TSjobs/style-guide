# Townsquared Style Guide

### Setup

Make sure you have node installed

0. Download and install [Github for Mac](https://mac.github.com/)
0. Create a Github account and authenticate with the App
0. `clone` [townsquared/style-guide](https://github.com/townsquared/style-guide) to your local machine
  0. Open github App
  0. Add your credentials
  0. Finish the wizard (don't worry about local repos)
  0. Press plus in top-left-corner
  0. Select `CLONE`
  0. Search for style-guide and hit `clone`
  0. Specify local folder to download to for working on (non dropbox folder)
0. Get to your project in Terminal
  0. Open Github App
  0. Right-click on the project in the left sidebar and choose `Open in Terminal`
0. Install a bunch of stuff:
  0. [brew](http://brew.sh/)
    1. Copy-paste this command into your terminal and run it:  
    `ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"`
    0. Just say yes to all steps in wizard (there are a bunch
  1. run `brew install node` in terminal
  2. run `npm install -g gulp bower` in terminal
  3. run `npm install` in terminal

### Developing

1. Run `gulp server` from the project folder in terminal to run the server
2. Review changes to the code in Github App, checking and unchecking files/lines you want to save
3. Write a note about what you changed in the textarea and hit the `commit` button
4. Hit the `sync` button in the top-right corner to send your changes to the server
