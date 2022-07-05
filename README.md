# mongo-indexes

Projeto para aprender mais sobre índices especificamente no MongoDB

## Checklist

### Introdução teórica sobre índices

// TODO

### Setup

1. Criar 1 milhão de usuários na base
1. Criar 500k de pedidos na base apenas para 3 usuários

### Consultando usuário pelo nome

1. Rodar uma consulta pelo nome do usuário - mostrar explain no compass
1. Adicionar índice no nome do usuário
1. Rodar consulta novamente pelo nome do usuário - mostrar explain no compass

### Consultando pedido pelo range de data

1. Rodar uma consulta por um range de data - mostrar explain no compass
1. Adicionar índice na data de compra do pedido
1. Rodar consulta novamente por um range de data - mostrar explain no compass

### Consultando pedido pelo ID do usuário e método de pagamento (composto)

1. Rodar uma consulta por um ID do usuário e método de pagamento - mostrar explain no compass
1. Adicionar índice no ID do usuário e método de pagamento (composto)
1. Rodar consulta novamente por um ID do usuário e método de pagamento - mostrar explain no compass

### BONUS 1: Full text search

1. Quero filtrar usuários que contenham um termo tanto no nome quanto no email
1. Primeira forma de fazer isso seria colocando um $or
1. Forma mais elegante seria usando full text search
1. Criar índice de fulltext
1. Filtrar por "limoni"
1. Mostrar resultado
1. Mostrar explain

### BONUS 2: Configurando índices direto no mongoose

1. Índice no nome do usuário
1. Índice na data do pedido
1. Índice composto - ID do usuário + método de pagamento
