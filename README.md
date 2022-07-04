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

### Consultando pedido pelo range de data e valor do pedido (composto)

1. Rodar uma consulta por um range de data e valor do pedido - mostrar explain no compass
1. Adicionar índice na data de compra do pedido e valor do pedido (composto)
1. Rodar consulta novamente por um range de data e valor do pedido - mostrar explain no compass

### BONUS 1: Configurando índices direto no mongoose

1. Índice no nome do usuário
1. Índice na data do pedido
1. Índice composto - data do pedido + valor do pedido

### BONUS 2: Full text search

// TODO...
