# Learning_Japanese_Online
#BACKEND   
Setting
1.Open xampp
2.Open phpMyadmin create database "learning_japanese" with utf8-general-ci
3.Open Folder Laravel -> config -> database -> roll mouse to section:
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
        ],
     	-> change username, pasword, charset, collection  
4. Open file Laravel -> .evn change:
	DB_CONNECTION=mysql
	DB_HOST=127.0.0.1
	DB_PORT=3306
	DB_DATABASE=learning_japanese
	DB_USERNAME=root
	DB_PASSWORD=
---------------------------------------------------------------
Update database:
1.Open Laravel Folder
2.Open Terminal or Git Bash Here
3.Run command "php artisan migrate" (Run command "php artisan migrate:rollback" to delete all in database)
4.Run command "php artisan db:seed" to create data for usersTable. 
------------------------------------------------------------------
Run Laravel Backend
1.Open Laravel folder
2.Open termital(ubtuntu) or Git Bash Here(window) 
3.Run command "php artisan serve" (Run command "php artisan serve --port=8000" to run server with port 8000)

#FRONTEND
1. Open folder FRONTEND
2. Open Terminal or Git Bash Here
3. Run command "npm install" (wait until install successfully)
4. Run command "npm start"

==> Open browser, type: localhost:3000
