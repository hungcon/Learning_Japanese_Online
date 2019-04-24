Run BACKEND
======================
## Config
+ Open xampp
+ Open phpMyadmin create database "learning_japanese" with utf8-general-ci
+ Open Folder Laravel -> config -> database -> roll mouse to section:
	```php
	'mysql' => [
            'driver' => 'mysql',
            'host' => env('DB_HOST', '127.0.0.1'),
            'port' => env('DB_PORT', '3306'),
            'database' => env('DB_DATABASE', 'learning_japanese'),
            'username' => env('DB_USERNAME', 'root'),
            'password' => env('DB_PASSWORD', ''),
            'unix_socket' => env('DB_SOCKET', ''),
            'charset' => 'utf8',
            'collation' => 'utf8_general_ci',
            'prefix' => '',
            'prefix_indexes' => true,
            'strict' => true,
            'engine' => null,
        ]
	```
     	 Change your username, pasword, charset, collection  
+ Open file Laravel -> .evn change:
	```php
	DB_CONNECTION=mysql
	DB_HOST=127.0.0.1
	DB_PORT=3306
	DB_DATABASE=learning_japanese
	DB_USERNAME=root
	DB_PASSWORD=
	```

## Create database
+ Open Laravel Folder
+ Open Termital (Ubuntu) or Git Bash Here (Window) 
+ Run command "_php artisan migrate_" (Run command "_php artisan migrate:rollback_" to delete all in database)
+ Run command "_php artisan db:seed_" to create data for usersTable. 

## Run server
+ Open Laravel folder
+ Open Termital (Ubuntu) or Git Bash Here (Window) 
+ Run command "_php artisan serve_" (Run command "_php artisan serve --port=8000_" to run server with port 8000)
+ If success, console will display:
```
	Laravel development server started: <http://127.0.0.1:8000>
```


Run FRONTEND
======================
## Install package
+ Open FRONT_END folder
+ Open Termital (Ubuntu) or Git Bash Here (Window) 
+ Run command "_npm install_" (wait until install successfully)

## Run server
+ Open FRONT_END folder
+ Open Termital (Ubuntu) or Git Bash Here (Window) 
+ Run command "_npm start_"
+ If success, console will display content such as:
```
	Compiled successfully!

	You can now view 20182_cnwtt in the browser.

	  Local:            http://localhost:3000/
	  On Your Network:  http://10.0.2.17:3000/

	Note that the development build is not optimized.
	To create a production build, use npm run build.
```
