--
--
CREATE DATABASE SALES;
USE SALES;
-- Estrutura para tabela `USUARIO - USER`
--
create table USUARIO(
	user_codigo int primary key AUTO_INCREMENT not null ,
    user_nome varchar(100),
    user_usuario varchar(100) ,
    user_senha varchar(50),
    user_email varchar(100),
    user_celular numeric(20),
    user_codcelular numeric(10)
) ;
--
-- Fazendo dump de dados para tabela `USUARIO`
--

INSERT INTO USUARIO ( user_nome, user_usuario, user_senha, user_email, user_celular, user_codcelular) VALUES
( 'JOHN CLEBER DELFINO', 'john', 'john123', 'johncleberlp@gmail.com', 16992477224, 1234),
( 'CELIO MULE BIANCHI', 'celio', 'celio123', 'celio@gmail.com',16992505050, 4321);

select * from USUARIO;
--
-- Estrutura para tabela `MARCA - MARCA`
--
create table MARCA(
	marca_codigo int primary key AUTO_INCREMENT not null ,
    marca_nome varchar(50),
    marca_linha varchar(200)     
) ;
--
-- Fazendo dump de dados para tabela `MARCA`
--

INSERT INTO MARCA( marca_nome, marca_linha) VALUES
( 'DON DON', 'Linha de iogurtes, requeijão, bebidas lacteas'),
( 'SAPATORIA', 'Calcados tops de linha');

select * from MARCA;
--
-- Estrutura para tabela `PRODUTO - PROD`
--
create table PRODUTO(
	prod_codigo int primary key AUTO_INCREMENT not null  ,
    prod_nome varchar(100),
	prod_descricao varchar(150),
    prod_tipo varchar (15),
	prod_ativoinativo varchar(5) ,    
    prod_movestoque varchar(5) ,
    prod_ncm varchar(400),
    prod_custo decimal(5,2),
    prod_venda decimal(5,2),
    prod_tipo2 varchar(30),
    prod_unidade varchar(30),    
    marca_codigo int,
    constraint  FK_PRODUTO_MARCA foreign key (marca_codigo)references MARCA (marca_codigo)
) ; 

alter table PRODUTO alter column prod_ativoinativo set default 'Não';
alter table PRODUTO alter column prod_movestoque set default 'Não';


--
-- Fazendo dump de dados para tabela `PRODUTO`


INSERT INTO PRODUTO(prod_nome, prod_descricao, prod_tipo, prod_ativoinativo, prod_movestoque, prod_ncm,
 prod_custo, prod_venda, prod_tipo2, prod_unidade, marca_codigo) VALUES



('Iogurte Don Don 900g Ameixa','Iogurte parcialmente desnatado sabor morango','Produto', 'Sim' ,'Sim' ,04031000,
1,2,'Produto Acabado','Unidade',1),

('Iogurte Don Don 900g Abacaxi','Iogurte parcialmente desnatado sabor morango','Produto', 'Sim' ,'Sim' ,04031000,
1,2,'Produto Acabado','Unidade',1),

('Iogurte Don Don 900g Coco','Iogurte parcialmente desnatado sabor morango','Produto', 'Sim' ,'Sim' ,04031000,
1,2,'Produto Acabado','Unidade',1),

('Iogurte Don Don 900g Frutas','Iogurte parcialmente desnatado sabor morango','Produto', 'Sim' ,'Sim' ,04031000,
1,2,'Produto Acabado','Unidade',1),

('Iogurte Don Don 900g Salada','Iogurte parcialmente desnatado sabor morango','Produto', 'Sim' ,'Sim' ,04031000,
1,2,'Produto Acabado','Unidade',1),

('Iogurte Don Don 900g Pessego','Iogurte parcialmente desnatado sabor morango','Produto', 'Sim' ,'Sim' ,04031000,
1,2,'Produto Acabado','Unidade',1),

('Iogurte Don Don 900g Açai','Iogurte parcialmente desnatado sabor morango','Produto', 'Sim' ,'Sim' ,04031000,
1,2,'Produto Acabado','Unidade',1)


('SAPATO SIDEWALK','sapato confortavel','Produto', 'Sim' ,'Sim' ,64042000,100,200,'Produto Acabado','Unidade',2);

select * from PRODUTO;
--
-- Estrutura para tabela `CLIENTE PF - CLIPF`
--
create table PESSOA(
   pessoa_codigo int primary key AUTO_INCREMENT  ,
   pessoa_tipo varchar(15),
   pessoa_nome_raz varchar(100),
   pessoa_ape_fan varchar(100) ,
   pessoa_cpf_cnpj numeric(50),
   pessoa_rg_ins numeric(50),
   pessoa_emissor varchar(20),
   pessoa_sexo varchar (10),
   pessoa_fone NUMERIC(30),
   pessoa_cel NUMERIC(30),
   pessoa_email varchar(100),
   pessoa_cep varchar(30),
   pessoa_end varchar(200),
   pessoa_num numeric(10),
   pessoa_bairro varchar(100),
   pessoa_uf varchar(10),
   pessoa_cidade varchar(200)
) ;
--
-- Fazendo dump de dados para tabela `USUARIO`
--
INSERT INTO PESSOA (pessoa_nome_raz, pessoa_tipo, pessoa_ape_fan, pessoa_cpf_cnpj,pessoa_rg_ins, pessoa_fone, pessoa_cel, pessoa_email, pessoa_cep, pessoa_end, 
                    pessoa_num, pessoa_bairro, pessoa_uf, pessoa_cidade) VALUES


('COMERCIAL JM','PJ', 'JM alimentos', 07084352000180, 484775562,37252525,999999999,
'comercial@gmail.com',14405394, 'Rua Doutor Braulio Andrade Junqueira',3680,'Jardim Maria Rosa','SP','Franca'),

('Laticinios Tio Don Don ltda','FORN', 'Tio Don Don', 07084352000111, 445447469,38200500,988899999,
'dondone@gmail.com',14405670, 'Estrada municipal',001,'Zona Rural','SP','Nuporanga'),


('Joao Cliente da Silva','PF', 'joao cliente', 36429099815, 48775562, 'SSP-SP', 'M',37257025,998899999,
'joaocliente@gmail.com',14405393, 'Rua Doutor Bãozim',3480,'Jardim Miramontes','SP','Franca');


--
select * from PESSOA;
-- Estrutura para tabela `GRADE - GRADE`
--
create table GRADE(
	grade_codigo int primary key AUTO_INCREMENT not null ,
    grade_descricao varchar(70),
    grade_numeracao varchar(300),
    grade_ativoinativo varchar(10)
) ;
--
-- Fazendo dump de dados para tabela `GRADE`
--
INSERT INTO GRADE(grade_descricao, grade_numeracao, grade_ativoinativo) VALUES
('feminina', '33-34-35-36-37','Sim'),
('masculina','38-39-40-41-42-43-44','Sim');
--
select * from GRADE;
-- Estrutura para tabela `MOVIMENTO DE ESTOQUE - MOVEST`
--
create table MOVESTOQUE(
	movest_codigo int primary key AUTO_INCREMENT not null,
    movest_motivo varchar(20),
    movest_dataent date,
    movest_pedido numeric(6) not null    
);

--
select * from MOVESTOQUE;

create table ITEMESTOQUE(
	item_codigo int primary key auto_increment not null,
    prod_codigo int,
    constraint FK_ITEMESTOQUE_PRODUTO foreign key(prod_codigo) references PRODUTO(prod_codigo),
    
    movest_codigo int,
    constraint FK_ITEM_MOV foreign key (movest_codigo) references MOVESTOQUE(movest_codigo),    
    
    item_custo numeric,    
    qtde int not null
);
 
 select * from MOVESTOQUE

ALTER TABLE ITEMESTOQUE
-- ADD constraint FK_ITEMESTOQUE_PRODUTO foreign key(prod_codigo) references PRODUTO(prod_codigo)
ADD constraint FK_ITEMESTOQUE_MOVESTOQUE foreign key(movest_codigo) references MOVESTOQUE(movest_codigo);
-- drop column movest_codigo,
-- add movest_codigo int not null

-- Estrutura para tabela `EMPRESA - EMP`
--
create table EMPRESA(
	emp_codigo int primary key AUTO_INCREMENT not null ,
    emp_razao varchar(500),
    emp_fantasia varchar(200),
    emp_cep numeric(50),
    emp_cidade varchar(1000),
    emp_bairro varchar(200),
    emp_end varchar(500),
    emp_num numeric(10),
    emp_estado varchar(10),
    emp_cnpj numeric(30),
    emp_inscEst numeric(30),    
    emp_fone numeric(30),
    emp_celular numeric(30),
    emp_email varchar(80),
    emp_banco varchar(300),
    emp_agencia numeric(10),
    emp_conta numeric(30),
    emp_favorecido varchar(100)
    
) ;
--
-- Fazendo dump de dados para tabela `EMPRESA`
--
INSERT INTO EMPRESA (emp_razao, emp_fantasia, emp_cep, emp_cidade, emp_bairro, emp_end, emp_num, emp_estado,
 emp_cnpj, emp_inscEst, emp_fone, emp_celular, emp_email, emp_banco, emp_agencia, emp_conta, emp_favorecido ) VALUES

('EMPRESA BOA', 'top 10', 14405394, 'Franca', 'Jardim Maria Rosa', 'Rua Doutor Braulio Andrade Junqueira',3680,'SP',
07084352000180, 484775562,37252525,999995555,'comercial@gmail.com',756,43214, 20059655, 'empresaboa' );
--
select * from EMPRESA;
-- Estrutura para tabela `CONDIÇÃO DE PAGAMENTO - CONDPAG`
--
create table CONDPAG(
	condpag_codigo int primary key AUTO_INCREMENT not null ,
    condpag_descricao numeric(5)
) ;
--
-- Fazendo dump de dados para tabela `CONDPAG`
--
INSERT INTO CONDPAG(condpag_descricao) VALUES
(7),
(14),
(21),
(28),
(35),
(0); 
--
select * from CONDPAG;
-- Estrutura para tabela `PEDIDO COMUM E LATICINIOS -PED_PEDLAT`
--
create table PEDIDOGLOBAL(
	pedGlobalCod int primary key AUTO_INCREMENT,
    pedGlobal_data date,
    pessoa_codigo int,
    constraint FKPEDGLOBALPESSOA foreign key (pessoa_codigo) references PESSOA(pessoa_codigo),    
    condpag_codigo int,
    constraint FKPEDGLOBALCONDPAG foreign key (condpag_codigo ) references CONDPAG(condpag_codigo)
    
) ;
  

create table ITEMPEDGLOBAL(
	itemPedGlobal_cod int primary key auto_increment not null,
	pedGlobalCod int,
    constraint FK_ITEMPEDGLOBAL_CODPED foreign key (pedGlobalCod) references PEDIDOGLOBAL(pedGlobalCod),    
    prod_codigo int,
    constraint FK_ITEMPEDGLOBAL_PRODUTO foreign key(prod_codigo) references PRODUTO(prod_codigo),    
    qtdePedGlobal int not null,
    vendaPedGlobal int,
    unitarioPedGlobal float
    
) ;   

create table PEDIDOLATICINIO(
	pedLaticinioCod int primary key AUTO_INCREMENT,
    pedLaticinio_data date,
    pessoa_codigo int,
    constraint FKPEDLATICINIOPESSOA foreign key (pessoa_codigo) references PESSOA(pessoa_codigo),    
    condpag_codigo int,
    constraint FKPEDLATICINIOCONDPAG foreign key (condpag_codigo ) references CONDPAG(condpag_codigo)
    
) ;
  

create table ITEMPEDLATICINIO(
	itemPedLaticinio_cod int primary key auto_increment not null,
	pedLaticinioCod int,
    constraint FK_ITEMPEDLATICINIO_CODPED foreign key (pedLaticinioCod) references PEDIDOLATICINIO(pedLaticinioCod),    
    prod_codigo int,
    constraint FK_ITEMPEDLATICINIO_PRODUTO foreign key(prod_codigo) references PRODUTO(prod_codigo),    
    qtdePedLaticinio int not null,
    vendaPedLaticinio int,
    unitarioPedLaticinio float
    
) ;  
create table INFO(	
    info_codigo int,   
    info_descricao varchar(65000)    
) ;

INSERT INTO INFO(info_descricao) VALUES

("A gestão de vendas é uma das formas usadas pelas empresas para encontrar no mercado os recursos necessários para suprir
 suas despesas e atingir seus objetivos financeiros. Diante da importância de se obter ótimos resultados com tais operações
 de vendas e, visando aproveitar a tecnologia do dia-a-dia para executar as tarefas do seu gerenciamento, foi elaborado um 
 software para auxiliar nas atividades de planejamento, direção e controle de vendas. O uso da tecnologia Mobile para o 
 desenvolvimento de aplicações pode trazer vantagens competitivas, uma vez que a mobilidade pode ser um fator diferencial 
 para as empresas, além de que, para o produto proposto neste trabalho, não é necessário uso de servidores próprios para 
 o armazenamento dos dados e os recursos necessários para a interação com o sistema são pequenos. O mercado pode aproveitar
 os benefícios que este tipo de plataforma oferece para facilitar a gestão do atendimento aos seus clientes, sem que haja
 a necessidade de aquisição de grandes estruturas de hardware e software.");

create table LOGIN(	
    login_codigo int,   
    login_usuario varchar(200),
    login_senha varchar (200)
) ; 
 