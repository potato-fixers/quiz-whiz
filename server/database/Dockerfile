# pull the PostgreSQL image from Docker
FROM postgres:latest

# copy the config file to the container
RUN cat /usr/share/postgresql/postgresql.conf.sample > my-postgres.conf

# allow all containers to access the database
RUN echo "listen_addresses = '*'" >> my-postgres.conf
RUN cat my-postgres.conf

# create database + tables (uncomment when ready to set up the db)
# ADD schema.sql /docker-entrypoint-initdb.d
# ADD scripts/seed.sh /docker-entrypoint-initdb.d

ENTRYPOINT ["bin", "/bash"]