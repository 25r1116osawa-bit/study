FROM php:8.2-apache

# システムパッケージの更新と、WPに必要なライブラリのインストール
RUN apt-get update && apt-get install -y \
    libpng-dev libjpeg-dev libfreetype6-dev \
    && docker-php-ext-configure gd --with-freetype --with-jpeg \
    && docker-php-ext-install -j$(nproc) gd mysqli pdo_mysql \
    && apt-get clean && rm -rf /var/lib/apt/lists/*

# Apacheモジュール（Proxy/Rewrite）の有効化
RUN a2enmod proxy proxy_http rewrite

