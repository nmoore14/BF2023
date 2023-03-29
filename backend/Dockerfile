FROM php:7.4-apache
RUN apt-get update && apt-get upgrade -y && apt-get install vim -y
RUN docker-php-ext-install pdo pdo_mysql \
    && a2enmod headers \
    && sed -ri -e 's/^([ \t]*)(<\/VirtualHost>)/\1\tHeader set Access-Control-Allow-Origin "*"\n\1\2/g' /etc/apache2/sites-available/*.conf

EXPOSE 80
