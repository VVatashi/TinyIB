FROM php:7.4.2-fpm-alpine
RUN apk add --no-cache --virtual .build-deps $PHPIZE_DEPS \
  && apk add --no-cache postgresql-libs postgresql-dev \
  && docker-php-ext-install pgsql pdo_pgsql \
  && pecl install xdebug \
  && docker-php-ext-enable xdebug \
  && apk del -f .build-deps
COPY composer.lock composer.json /var/www/
WORKDIR /var/www
RUN curl -sS https://getcomposer.org/installer | php -- --install-dir=/usr/local/bin --filename=composer
COPY . /var/www
EXPOSE 9000
CMD ["php-fpm"]
