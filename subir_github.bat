@echo off
echo ========================================================
echo Iniciando o envio do site para o teu GitHub (MODO HTTPS)...
echo ========================================================
echo.

git init
git config user.email "samuel.wildary@github.com"
git config user.name "Samuel Wildary"
git add .
git commit -m "Deploy final do site"
git branch -M main

:: Removemos o link antigo que usava SSH (que pode dar erro de password)
git remote remove origin 2>nul

:: Adicionamos o link novo via HTTPS, que é muito mais facil para Windows
git remote add origin https://github.com/samuel-wildary/sitelarns.git

:: Envia para o servidor
git push -u origin main

echo.
echo ========================================================
echo FEITO! 
echo Se o Windows te pediu para fazeres Login no GitHub, e tu fizeste, 
echo o codigo ja la deve estar! 
echo.
echo Se houver letras vermelhas acima com a palavra "error" ou "fatal", copia e mostra-me!
echo ========================================================
pause
