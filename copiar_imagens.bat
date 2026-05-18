@echo off
echo Criando a pasta images...
mkdir "images" 2>nul

echo Copiando a imagem do Hero...
copy "C:\Users\Samuel Wildary\.gemini\antigravity\brain\2be3b71a-9175-4038-abe6-51905c248e8d\hero_elderly_care_1779111133084.png" "images\hero.png"

echo Copiando a imagem dos Idosos...
copy "C:\Users\Samuel Wildary\.gemini\antigravity\brain\fe991ec3-4e8b-4cdf-bc19-67f30537aa19\idosos_hands_1779126696509.png" "images\idosos_hands.png"

echo Copiando a imagem da Mediateca...
copy "C:\Users\Samuel Wildary\.gemini\antigravity\brain\fe991ec3-4e8b-4cdf-bc19-67f30537aa19\mediateca_photo_1779126722246.png" "images\mediateca.png"

echo.
echo ========================================================
echo TUDO PRONTO! Imagens copiadas com sucesso.
echo Podes fechar esta janela e o site ja deve carregar bem.
echo ========================================================
pause
