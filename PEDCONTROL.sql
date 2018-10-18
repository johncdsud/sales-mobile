CREATE DATABASE PEDCONTROL;
USE PEDCONTROL;
-- Estrutura para tabela `USUARIO - USER`
--
create table USUARIO(
	user_codigo int primary key AUTO_INCREMENT not null ,
    user_nome varchar(100),
    user_usuario varchar(100) ,
    user_senha varchar(50),
    user_email varchar(100) 
) ;--
-- Fazendo dump de dados para tabela `USUARIO`
--

INSERT INTO USUARIO ( user_nome, user_usuario, user_senha, user_email) VALUES
( 'JOHN CLEBER DELFINO', 'john', 'john123', 'johncleberlp@gmail.com'),
( 'CELIO MULE BIANCHI', 'celio', 'celio123', 'celio@gmail.com');
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
( 'Iogurteria', 'Linha de iogurtes, requeijão, bebidas lacteas'),
( 'Doce Sabor', 'Linha de iogurtes, requeijão, bebidas lacteas'),
( 'Democratila', 'Calçados em geral'),
( 'Side Walker', 'Calcados tops de linha');

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
    prod_custo decimal(7,2),
    prod_venda decimal(7,2),
    prod_tipo2 varchar(30),
    prod_unidade varchar(30),    
    marca_codigo int,
    constraint  FK_PRODUTO_MARCA foreign key (marca_codigo)references MARCA (marca_codigo)
) ; 

alter table PRODUTO alter column prod_ativoinativo set default 'Não';
alter table PRODUTO alter column prod_movestoque set default 'Não';
alter table PRODUTO alter column prod_movestoque set default 'Não';
--
-- Fazendo dump de dados para tabela `PRODUTO`

INSERT INTO PRODUTO(prod_nome, prod_descricao, prod_tipo, prod_ativoinativo, prod_movestoque, prod_ncm,
 prod_custo, prod_venda, prod_tipo2, prod_unidade, marca_codigo) VALUES

('Iogurte 900g Ameixa','Iogurte parcialmente desnatado sabor Ameixa','Produto', 'Sim' ,'Sim' ,04031000,
3,6,'Produto Acabado','Unidade',1),

('Iogurte 175g Ameixa','Iogurte parcialmente desnatado sabor Ameixa','Produto', 'Sim' ,'Sim' ,04031000,
1,2,'Produto Acabado','Unidade',1),

('Iogurte 900g Abacaxi','Iogurte parcialmente desnatado sabor Abacaxi','Produto', 'Sim' ,'Sim' ,04031000,
3,6,'Produto Acabado','Unidade',1),

('Iogurte  175g Abacaxi','Iogurte parcialmente desnatado sabor Abacaxi','Produto', 'Sim' ,'Sim' ,04031000,
1,2,'Produto Acabado','Unidade',1),

('Iogurte 900g Coco','Iogurte parcialmente desnatado sabor Coco','Produto', 'Sim' ,'Sim' ,04031000,
3,6,'Produto Acabado','Unidade',1),

('Iogurte 175g Coco','Iogurte parcialmente desnatado sabor Coco','Produto', 'Sim' ,'Sim' ,04031000,
1,2,'Produto Acabado','Unidade',1),

('Iogurte 900g Frutas Vermelhas.','Iogurte parcialmente desnatado sabor Frutas Vermelhas','Produto', 'Sim' ,'Sim' ,04031000,
3,6,'Produto Acabado','Unidade',1),

('Iogurte 175g Frutas Vermelhas.','Iogurte parcialmente desnatado sabor Frutas Vermelhas','Produto', 'Sim' ,'Sim' ,04031000,
1,2,'Produto Acabado','Unidade',1),

('Iogurte 900g Salada','Iogurte parcialmente desnatado sabor Salada','Produto', 'Sim' ,'Sim' ,04031000,
3,6,'Produto Acabado','Unidade',1),

('Iogurte 175g Salada','Iogurte parcialmente desnatado sabor Salada','Produto', 'Sim' ,'Sim' ,04031000,
1,2,'Produto Acabado','Unidade',1),

('Iogurte 900g Pessego','Iogurte parcialmente desnatado sabor morango','Produto', 'Sim' ,'Sim' ,04031000,
3,6,'Produto Acabado','Unidade',1),

('Iogurte 175g Pessego','Iogurte parcialmente desnatado sabor morango','Produto', 'Sim' ,'Sim' ,04031000,
1,2,'Produto Acabado','Unidade',1),

('Iogurte 900g Açai C/ Morango','Iogurte parcialmente desnatado sabor Açai com Morango','Produto', 'Sim' ,'Sim' ,04031000,
3,6,'Produto Acabado','Unidade',1),

('Iogurte 175g Açai C/ Morango','Iogurte parcialmente desnatado sabor Açai com Morango','Produto', 'Sim' ,'Sim' ,04031000,
1,2,'Produto Acabado','Unidade',1),

('Iogurte 900g Açai C/ Banana','Iogurte parcialmente desnatado sabor Açai com Banana','Produto', 'Sim' ,'Sim' ,04031000,
3,6,'Produto Acabado','Unidade',1),

('Iogurte 175g Açai C/ Banana','Iogurte parcialmente desnatado sabor Açai com Banana','Produto', 'Sim' ,'Sim' ,04031000,
1,2,'Produto Acabado','Unidade',1),

('Iogurte 900g Morango','Iogurte parcialmente desnatado sabor Morango','Produto', 'Sim' ,'Sim' ,04031000,
3,6,'Produto Acabado','Unidade',1),

('Iogurte 175g Morango','Iogurte parcialmente desnatado sabor Morango','Produto', 'Sim' ,'Sim' ,04031000,
1,2,'Produto Acabado','Unidade',1),

('Iogurte 900g Morango Light','Iogurte parcialmente desnatado sabor Morango','Produto', 'Sim' ,'Sim' ,04031000,
3,6,'Produto Acabado','Unidade',1),

('Iogurte Don Don 175g Morango Light','Iogurte parcialmente desnatado sabor Morango','Produto', 'Sim' ,'Sim' ,04031000,
1,2,'Produto Acabado','Unidade',1),

('Bebida Lactea  900g Morango','Bebida Lactea sabor Morango','Produto', 'Sim' ,'Sim' ,04039000,
3,5,'Produto Acabado','Unidade',2),

('Bebida Lactea  175g Morango','Bebida Lactea sabor Morango','Produto', 'Sim' ,'Sim' ,04039000,
1,2,'Produto Acabado','Unidade',2),

('Bebida Lactea  900g Coco','Bebida Lactea sabor Coco','Produto', 'Sim' ,'Sim' ,04039000,
3,5,'Produto Acabado','Unidade',2),

('Bebida Lactea  175g Coco','Bebida Lactea sabor Coco','Produto', 'Sim' ,'Sim' ,04039000,
1,2,'Produto Acabado','Unidade',2),

('Bebida Lactea  900g Salada','Bebida Lactea sabor Salada','Produto', 'Sim' ,'Sim' ,04039000,
3,5,'Produto Acabado','Unidade',2),

('Bebida Lactea  175g Salada','Bebida Lactea sabor Salada','Produto', 'Sim' ,'Sim' ,04039000,
1,2,'Produto Acabado','Unidade',2),

('Bebida Lactea 900g Ameixa','Bebida Lactea sabor Ameixa','Produto', 'Sim' ,'Sim' ,04039000,
3,5,'Produto Acabado','Unidade',2),

('Bebida Lactea  175g Ameixa','Bebida Lactea sabor Ameixa','Produto', 'Sim' ,'Sim' ,04039000,
1,2,'Produto Acabado','Unidade',2),

('Bebida Lactea  900g Frutas Vermelhas','Bebida Lactea sabor Frutas Vermelhas','Produto', 'Sim' ,'Sim' ,04039000,
3,5,'Produto Acabado','Unidade',2),

('Bebida Lactea  175g Frutas Vermelhas','Bebida Lactea sabor Frutas Vermelhas','Produto', 'Sim' ,'Sim' ,04039000,
1,2,'Produto Acabado','Unidade',2),

('Requeijão Copo 180G','Requeijão cremoso com Amido modificado','Produto', 'Sim' ,'Sim' ,04061090,
2,4,'Produto Acabado','Unidade',1),

('Requeijão Bisnaga 1800G','Requeijão Culinário com Amido modificado','Produto', 'Sim' ,'Sim' ,04061090,
12,18,'Produto Acabado','Unidade',1),

('Requeijão Bisnaga 240G','Requeijão Culinário com Amido modificado','Produto', 'Sim' ,'Sim' ,04061090,
2,3,'Produto Acabado','Unidade',1),

('Bebida Lactea Morango 850G','Bebida Lactea sabor Morango','Produto', 'Sim' ,'Sim' ,04039000,
2,3,'Produto Acabado','Unidade',1),

('Bebida Lactea Coco 850G','Bebida Lactea sabor Coco','Produto', 'Sim' ,'Sim' ,04039000,
2,3,'Produto Acabado','Unidade',1),

('Bebida Lactea Salada 850G','Bebida Lactea sabor Salada','Produto', 'Sim' ,'Sim' ,04039000,
2,3,'Produto Acabado','Unidade',1),

('Bandeja c 6 uni Morango 540G','Bebida Lactea sabor Morango','Produto', 'Sim' ,'Sim' ,04039000,
2,4,'Produto Acabado','Unidade',1),

('Sapato Jazz Flex Preto','sapato confortavel','Produto', 'Sim' ,'Sim' ,64042000,100,200,'Produto Acabado','Unidade',3),

('Sandália Anabele Madri','Sandalia macia','Produto', 'Sim' ,'Sim' ,64042000,80,180,'Produto Acabado','Unidade',4);

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
-- Fazendo dump de dados para tabela `PESSOA` INSERINDO FORNECEDORES E CLIENTES PJ
--
INSERT INTO PESSOA (pessoa_nome_raz, pessoa_tipo, pessoa_ape_fan, pessoa_cpf_cnpj,pessoa_rg_ins, pessoa_fone,
                    pessoa_cel, pessoa_email, pessoa_cep, pessoa_end, 
                    pessoa_num, pessoa_bairro, pessoa_uf, pessoa_cidade) VALUES                 


('Laticinios Galils Ltda','PJ', 'Galba', 07085362000142, 484775552,37252525,993817175,
'financeirogalils@gmail.com',14405393, 'Rua Doutor Braulio Andrade Junqueira',3670,'Jardim Maria Rosa','SP','Franca'),

('Laticinios Toler ltda','FORN', 'Tio Don Don', 07084352000111, 445447469,38200500,993817072,
'toler@gmail.com',14405670, 'Estrada municipal',001,'Zona Rural','SP','Nuporanga');


INSERT INTO PESSOA (pessoa_nome_raz, pessoa_tipo, pessoa_ape_fan, pessoa_cpf_cnpj,pessoa_rg_ins,pessoa_emissor ,pessoa_sexo, pessoa_fone,
                    pessoa_cel, pessoa_email, pessoa_cep, pessoa_end, 
                    pessoa_num, pessoa_bairro, pessoa_uf, pessoa_cidade) VALUES 
                    
('Joao da Silva','PF', 'joao cliente', 36429099815, 487755621, 'SSP-SP', 'M',37254025,993827584,
'joao@gmail.com',14405393, 'Rua Doutor Bãozim',3480,'Jardim Miramontes','SP','Franca'),

('Anne karine Fernandes','PF', 'anne', 36429099815, 487755621, 'SSP-SP', 'M',37254425,993827764,
'annekarine@gmail.com',14405394, 'Avenida Brasil',380,'Cidade Nova','SP','Franca');

--
-- Estrutura para tabela `GRADE - GRADE`
--
create table GRADE(
	grade_codigo int primary key AUTO_INCREMENT not null ,
    grade_descricao varchar(70),
    grade_ativoinativo varchar(10)
) ;

create table ITEMGRADE(
    cod_item_grade int primary key AUTO_INCREMENT not null ,
    grade_codigo int not null,
    constraint FK_GRADE_CODIGO foreign key (grade_codigo) references GRADE (grade_codigo),
    grade_tamanho char(2) not null
);

-

-- Estrutura para tabela `MOVIMENTO DE ESTOQUE - MOVEST`
--

create table MOVESTOQUE(
	movest_codigo int primary key AUTO_INCREMENT not null,
    movest_motivo varchar(20),
    movest_dataent date,
    movest_pedido numeric(6) not null    
);

alter table movestoque change column movest_pedido movest_pedido numeric(6) null;
--

create table ITEMESTOQUE(
	item_codigo int primary key auto_increment not null,
    prod_codigo int,
    constraint FK_ITEMESTOQUE_PRODUTO foreign key(prod_codigo) references PRODUTO(prod_codigo),
    
    movest_codigo int,
    constraint FK_ITEM_MOV foreign key (movest_codigo) references MOVESTOQUE(movest_codigo),    
    
    item_custo numeric,    
    qtde int not null
);
 

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

('Comercial e Tecnologia ', 'Comercial ', 14404260, 'Franca', 'Jardim Santa Barbará', 'Rua Madre Maria Villac',2160,'SP',
07084352000180, 484775562,37252525,999995555,'comercial@gmail.com',756,43214, 20045268, 'Comercial ' );
--

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
(0),
(1),
(2),
(3),
(4),
(5),
(6),
(7),
(8),
(9),
(10),
(11),
(12),
(13),
(14),
(15),
(16),
(17),
(18),
(19),
(20),
(21),
(22),
(23),
(24),
(25),
(26),
(27),
(28),
(29),
(30),
(31),
(32),
(33),
(34),
(35);
--

-- Estrutura para tabela `PEDIDO COMUM E LATICINIOS -PED_PEDLAT`
--
create table PEDIDOGLOBAL(
	pedGlobalCod int primary key AUTO_INCREMENT,
    pedGlobal_data date not null,
    pessoa_codigo int not null,
    constraint FKPEDGLOBALPESSOA foreign key (pessoa_codigo) references PESSOA(pessoa_codigo),    
    condpag_codigo int not null,
    constraint FKPEDGLOBALCONDPAG foreign key (condpag_codigo ) references CONDPAG(condpag_codigo),
    totalPedGlobal float not null,
    pedGlobal_dataVencimento date not null
) ;
  
select * from PEDIDOGLOBAL where pedGlobal_data  between  '2018-10-02'  and  '2018-10-03';

create table ITEMPEDGLOBAL(
	itemPedGlobal_cod int primary key auto_increment not null,
	pedGlobalCod int not null,
    constraint FK_ITEMPEDGLOBAL_CODPED foreign key (pedGlobalCod) references PEDIDOGLOBAL(pedGlobalCod),    
    prod_codigo int not null,
    constraint FK_ITEMPEDGLOBAL_PRODUTO foreign key(prod_codigo) references PRODUTO(prod_codigo),    
    qtdePedGlobal int not null,   
    unitarioPedGlobal float
    
) ;

create table PEDIDOCALCADO(
	pedcalc_codigo int primary key AUTO_INCREMENT not null ,        
    dataped date,
    data_entrega date not null,
    
    condpag_codigo int not null,
    constraint FK_PED_PEDLAT2_CONDPAG foreign key(condpag_codigo)references CONDPAG(condpag_codigo),
    
    pessoa_codigo int,
    constraint FK_PESSOA foreign key(pessoa_codigo)references PESSOA(pessoa_codigo)
);


create table ITEM_PEDCALC(	
	item_pedcalc_cod int primary key AUTO_increment not null,
    
    pedcalc_codigo int,
    constraint FK_ITEM_PEDCALC2 foreign key(pedcalc_codigo)references PEDIDOCALCADO(pedcalc_codigo),  
    
    prod_codigo int,
    constraint FK_ITEM_PEDCALC_PROD foreign key(prod_codigo)references PRODUTO(prod_codigo),
    
    cod_grade int,
    constraint FK_GRADE foreign key(cod_grade)references GRADE(grade_codigo),
    
    item_pedcalc_preco float not null,
    
    item_pedcalc_qtde int not null
);


create table ITEM_PED_GRAD(
	codigo_item_pg int primary key auto_increment not null,
    
    item_pedcalc_cod int not null,
    constraint FK_ITEM_PEDC foreign key (item_pedcalc_cod) references ITEM_PEDCALC (item_pedcalc_cod),
    
    tamanho varchar(5) not null,
    quantidade int not null
);

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
 