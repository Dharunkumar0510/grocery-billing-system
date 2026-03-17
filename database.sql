CREATE DATABASE grocery_shop;
USE grocery_shop;

CREATE TABLE products (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100),
    price DECIMAL(10,2),
    stock INT
);

INSERT INTO products (name, price, stock) VALUES
('Rice', 50, 100),
('Dhal', 80, 50),
('Bath Soap', 35, 200),
('Washing Soap', 25, 150),
('Masala Powder', 60, 75);

CREATE TABLE bills (
    id INT AUTO_INCREMENT PRIMARY KEY,
    total DECIMAL(10,2),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
