# mongo-indexes

Projeto para aprender mais sobre índices especificamente no MongoDB

## Checklist

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

### Consultando pedido pelo range de data e ID do usuário (composto)

1. Rodar uma consulta por um range de data e ID do usuário - mostrar explain no compass
1. Adicionar índice na data de compra do pedido e ID do usuário (composto)
1. Rodar consulta novamente por um range de data e ID do usuário - mostrar explain no compass
