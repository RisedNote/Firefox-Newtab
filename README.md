# Firefox-Newtab
*this video at {this time} (link) is the insrtuctions*
This can restore the option **browser.newtab.url** in the **about:config**.
With this option abavialble you can add your own local html file as a new tab

### Instructions
1. download repo:

`git clone https://github.com/RisedNote/Firefox-Newtab`

  this should create a directory called FireFox-Newtab:

`cd FireFox-Newtab`

2. now you need to put the contents of **firefoxScripts** in thier proper paths
> firefox can be installed in a different location but this is the default :arrow_down:

#### Linux:
copy **defaults/pref/config.js** to:

`sudo cp firefoxScripts/defaults/pref/config.js /usr/lib/firefox/`

then copy **config-prefs.js** to:

`sudo cp friefoxScripts/config-prefs.js /usr/lib/firefox/browser/defaults/preferences/`

#### Windows:
just put both contents ( **config-prefs.js** and **defaults** ) in: `C:\Program Files\Mozilla Firefox`

#### MacOS:
the **config-prefs.js** goes here:

`Firefox.app/Contents/Resources/defaults/pref/config-prefs.js`

and **config.js** goes here:

`Firefox.app/Contents/Resources/defaults/pref/config-prefs.js`

3. now in the url bar type **about:support**

  look for **Profile Directory** or **Profile Folder** and click on the **open** button right next it

  in here create a folder called **chrome**

  Now insert the **utils** folder AND **newtab-aboutconfig.uc.js** in the **chrome** folder you just made
  
4. now go back to the **about:support**
  
  click on the top right box where it says **Clear startup cache...** this will restart firefox

5. now type **about:config** in the url and this may warn you just click continue

  now search for **browser.newtab.url** and here you can enter your local file path

  ![screenshot on newtab option](.screenshots/localfileNewtab.png)
