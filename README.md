#Frontend-Angular-Lumx-Seed

Firstly, thanks to Angular-Seed and Peter Bacon for your good work.



##Previous requeriments (tested in Debian distributions)

###On your PC you must have installed: 
	
- *git*
- *nodejs(npm)*
- *bower*
- *compass & sass*
- *grunt-cli*

###Grunt

---

###Bower

---

###AngularJS

---

###Lumx

---



##Installation

Once downloaded the project and have executed **git clone** on our pc, run  **npm install** and **bower install** to install all the needed packages (maybe have to do with *sudo*).

##Use (in progress)

###Concat

https://github.com/gruntjs/grunt-contrib-concat

Concatenate and minify multiples JavaScript files.

---

###Connect

info about Connect

---

###JsHint

info about JsHint

---

###Compass

This task requires you to have *Ruby*, *Sass*, and *Compass* installed. Test with **ruby -v** in your terminal. When you've confirmed you have Ruby installed, run **gem update --system && gem install compass** to install Compass and Sass.

---

###Watch

Sometimes it can give the error *WATCH ENOSPC*, which is solved by putting in the terminal **'echo fs.inotify.max_user_watches = 524288 | sudo tee -a /etc/sysctl.conf && sudo sysctl-p'**. The reference error is **http://stackoverflow.com/questions/16748737/grunt-watch-Error-waiting-fatal-mistake-watch-ENOSPC**
