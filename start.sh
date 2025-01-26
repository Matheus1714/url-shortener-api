#!/bin/bash

# Aguarda o banco de dados estar pronto
./wait-for-it.sh database:5432 --timeout=30 --strict -- echo "Database is up"

# Executa as migrações (dependendo da sua ferramenta de migração)
npm run migration:run

# Inicia a API
npm start
