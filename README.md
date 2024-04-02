# Node_Fastify_Postegre

refazer em casa 

tabela sql 

-- Table: public.produtos
-- DROP TABLE IF EXISTS public.produtos;

CREATE TABLE produtos (
    id SERIAL PRIMARY KEY,
    nome VARCHAR(100) NOT NULL,
    descricao TEXT,
    desconto NUMERIC(10, 2) DEFAULT 0,
    preco NUMERIC(10, 2) NOT NULL,
    ativo BOOLEAN DEFAULT true,
    categoria VARCHAR(50),
    data_cadastro TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

INSERT INTO produtos (nome, descricao, desconto, preco, ativo, categoria, data_cadastro) VALUES
('Smartphone Galaxy S22', 'O mais recente lançamento da linha Galaxy, com câmera de alta resolução e desempenho excepcional', 100.00, 999.99, true, 'Smartphone', '2024-03-01 08:00:00'),
('Laptop UltraBook X1', 'Design elegante e desempenho poderoso, perfeito para trabalho e entretenimento', 0.00, 1499.99, true, 'Laptop', '2024-03-02 10:15:00'),
('Smart TV 4K UHD 55"', 'Imagens nítidas e cores vibrantes para uma experiência de visualização imersiva', 50.00, 799.99, true, 'TV', '2024-03-03 11:30:00'),
('Fone de Ouvido Bluetooth', 'Conforto excepcional e qualidade de som premium', 10.00, 129.99, true, 'Acessório', '2024-03-04 13:45:00'),
('Console de Jogos PS6', 'Gráficos de última geração e jogabilidade imersiva', 0.00, 499.99, true, 'Console', '2024-03-05 15:00:00'),
('Monitor Gaming Curvo 27"', 'Taxa de atualização ultra-rápida e resolução de alta definição para uma experiência de jogo incrível', 20.00, 399.99, true, 'Monitor', '2024-03-06 16:15:00'),
('Câmera DSLR Profissional', 'Captura imagens de alta qualidade com controle total sobre as configurações da câmera', 100.00, 1999.99, true, 'Câmera', '2024-03-07 17:30:00'),
('Tablet Android 12"', 'Design fino e leve com desempenho rápido e tela de alta resolução', 30.00, 299.99, true, 'Tablet', '2024-03-08 18:45:00'),
('Impressora Multifuncional Wi-Fi', 'Impressão rápida e fácil, cópia e digitalização sem fio', 20.00, 149.99, true, 'Impressora', '2024-03-09 20:00:00'),
('Drone Profissional 4K', 'Captura imagens aéreas deslumbrantes com câmera 4K e estabilização avançada', 50.00, 899.99, true, 'Drone', '2024-03-10 21:15:00');
