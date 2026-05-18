@echo off
echo ========================================================
echo Iniciando o envio do site para o teu GitHub...
echo ========================================================
echo.

git init
git config user.email "samuel.wildary@github.com"
git config user.name "Samuel Wildary"
git add .
git commit -m "Deploy final do site"
git branch -M main
git remote add origin git@github.com:samuel-wildary/sitelarns.git 2>nul
git push -u origin main

echo.
echo ========================================================
echo FEITO! Se a mensagem acima disser algo como "branch main set up to track", 
echo o teu site ja esta no GitHub e podes fazer o deploy no Easypanel!
echo Podes fechar esta janela.
echo ========================================================
pause
