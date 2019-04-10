--creating database
CREATE DATABASE crudsaa;
--using DATABASE
use crudsaa;
--create table
CREATE TABLE comunicacion (
    com_id NOT NULL,
    name VARCHAR(255) NOT NULL,
    start_date DATE,
    resume TEXT,
    PRIMARY KEY (com_id)
);

SHOW TABLES;

describe comunicacion;
