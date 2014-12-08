<span style="font-size:14pt;font-weight:bold;">Inu - Man and His Best Friend, Together</span><br/>
A public resource of dog friendly areas in Boulder, Colorado<br/>

<b>Website is live at:</b> http://www.memorygain.info

========

<b>Authors:</b> Matthew Thompson, Christina Matteis, Anna Yudina, Joe Cosenza

========

Repository environment consists of all source code for the website, database schema, auto-doc documents, and unit test cases.  Branches are setup to reflect specific requirements outlined in our tracking software, Trello.  Team members work on their designated branch and merge with the master branch once their code is ready.

<b>How to use this repository:</b> All files should be uploaded to a webserver except auto-doc documents, unit test cases and database setup information.  Database setup is described below.  

<b>How to run the code:</b> Ensure PHP and mySQL are installed on your desired webserver.  Use the database schema provided in the 'db' file to create your database.  Edit php/dbconfig.php to match your database credentials.  Once the files are uploaded to a webserver and the database is setup, the website should run. 