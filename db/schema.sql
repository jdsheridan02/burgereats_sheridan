### Schema

DROP IF DATABASE EXISTS burgereats;
CREATE DATABASE burgereats;
USE burgereats;

CREATE TABLE burger 
(
    id INT auto_increment NOT NULL,
    burger_name VARCHAR(255) NOT NULL, 
    devoured BOOLEAN NOT NULL,
    createdAt TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    PRIMARY KEY (id)
);