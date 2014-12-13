#Frontend-Angular-Lumx-Seed

##Previous requeriments (tested in Debian distributions)

###On your PC you must have installed: 
	
- *git*
- *nodejs(npm)*
- *bower*
- *compass & sass*
- *grunt-cli*

###Grunt

http://gruntjs.com/

The JavaScript task runner.

---

###Bower

http://bower.io/

A package manager for the web.

---

###AngularJS

https://angularjs.org/

JavaScript Framework.

---

###Lumx

http://ui.lumapps.com/

The first responsive front-end framework based on AngularJS & Google Material Design specifications.

---


##Installation

Once downloaded the project and have executed **git clone** on our pc, run  **npm install** and **bower install** to install all the needed packages (maybe have to do with *sudo*).

##Use and references

###Concat

https://github.com/gruntjs/grunt-contrib-concat

Concatenate and minify multiples JavaScript files.

---

###Concurrent

https://github.com/sindresorhus/grunt-concurrent

Run grunt tasks concurrently

---

###Connect & Open

https://github.com/gruntjs/grunt-contrib-connect
https://github.com/jsoverson/grunt-open

Start a 'connect' web server and 'open' urls and files from a grunt task.

---

###JsHint

https://github.com/gruntjs/grunt-contrib-jshint

Validate files with JSHint.

---

###Compass

https://github.com/gruntjs/grunt-contrib-compass

Compile Sass to CSS using Compass.

This task requires you to have *Ruby*, *Sass*, and *Compass* installed. Test with **ruby -v** in your terminal. When you've confirmed you have Ruby installed, run **gem update --system && gem install compass** to install Compass and Sass.

---

###Shell

https://github.com/sindresorhus/grunt-shell

Run shell commands

---

###Uglify

https://github.com/gruntjs/grunt-contrib-uglify

Minify files with UglifyJS.

---

###Watch

https://github.com/gruntjs/grunt-contrib-watch

Run predefined tasks whenever watched file patterns are added, changed or deleted.

Sometimes it can give the error *WATCH ENOSPC*, which is solved by putting in the terminal **'echo fs.inotify.max_user_watches = 524288 | sudo tee -a /etc/sysctl.conf && sudo sysctl-p'**. The reference error is **http://stackoverflow.com/questions/16748737/grunt-watch-Error-waiting-fatal-mistake-watch-ENOSPC**
