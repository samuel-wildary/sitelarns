# Usamos a imagem oficial do Nginx (uma das melhores e mais rápidas para sites estáticos)
FROM nginx:alpine

# Copiamos todos os ficheiros da nossa pasta para a pasta pública do Nginx
COPY . /usr/share/nginx/html/

# Expomos a porta 80, que é a porta padrão que o Easypanel vai ler
EXPOSE 80

# Iniciamos o servidor Nginx
CMD ["nginx", "-g", "daemon off;"]
