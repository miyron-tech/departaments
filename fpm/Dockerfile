FROM php:8.0-fpm

COPY run.sh /tmp
RUN chmod 777 /tmp/run.sh
COPY php.ini /usr/local/etc/php/conf.d/docker-fpm.ini

RUN apt-get update && apt-get install -y git ssh zip nano iputils-ping libpq-dev curl cron && docker-php-ext-install pdo_pgsql && docker-php-ext-enable pdo_pgsql
COPY ./cron /etc/cron.d/my-cron

#composer
RUN php -r "copy('https://getcomposer.org/installer', 'composer-setup.php');" \
    && php -r "if (hash_file('sha384', 'composer-setup.php') === '55ce33d7678c5a611085589f1f3ddf8b3c52d662cd01d4ba75c0ee0459970c2200a51f492d557530c71c15d8dba01eae') { echo 'Installer verified'; } else { echo 'Installer corrupt'; unlink('composer-setup.php'); } echo PHP_EOL;" \
    && php composer-setup.php \
    && php -r "unlink('composer-setup.php');" \ 
    && mv composer.phar /usr/local/bin/composer

#nvm 
RUN curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.0/install.sh | bash \
    && export NVM_DIR="$HOME/.nvm" \
    && [ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh" \
    && nvm install 16 

RUN chmod 777 /etc/cron.d/my-cron && crontab /etc/cron.d/my-cron

ENTRYPOINT ["/tmp/run.sh"]