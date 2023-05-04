#!/bin/sh
sleep 3
cd /var/www/app
php artisan migrate
crontab /etc/cron.d/my-cron
cron
php-fpm

#composer install
#npm run build
#chmod 