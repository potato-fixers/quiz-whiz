# pull the PostgreSQL image from Docker
FROM postgres:latest

# copy the config file to the container
RUN cat /usr/share/postgresql/postgresql.conf.sample > my-postgres.conf

# allow all containers to access the database
RUN echo "listen_addresses = '*'" >> my-postgres.conf
RUN echo "max_wal_size = '3072'" >> my-postgres.conf
RUN cat my-postgres.conf

# create database + tables
ADD db/init/schema.sql /docker-entrypoint-initdb.d

