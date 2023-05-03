# pull the PostgreSQL image from Docker
FROM postgres:latest

# copy the config file to the container
RUN cat /usr/share/postgresql/postgresql.conf.sample > my-postgres.conf

# allow all containers to access the database
RUN echo "listen_addresses = '*'" >> my-postgres.conf
RUN cat my-postgres.conf

# Add/run schema to pg container
ADD ./schema.sql /docker-entrypoint-initdb.d