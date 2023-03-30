#!/usr/bin/env bash
apt-get -y update
apt-get -y upgrade

# Install libraries and headers
apt-get -y update && apt-get install -y \
    libssl-dev \
    libmagick++-dev \
    libxml2-dev \
    imagemagick \
    libv8-dev \
    curl \
    nano \
    vim \
    zip

apt-get -y update

# Install R packages
echo "options(repos = '$CRAN')" >> /root/.Rprofile
R -e "install.packages('openssl', dependencies=TRUE)"
R -e "install.packages('sys', dependencies=TRUE)"
R -e "install.packages('zip', dependencies=TRUE)"
R -e "install.packages('ini', dependencies=TRUE)"
R -e "install.packages('curl', dependencies=TRUE)"
R -e "install.packages('purrr', dependencies=TRUE)"
R -e "install.packages('shinyjs', dependencies=TRUE)"
# R -e "install.packages('', dependencies=TRUE)"
