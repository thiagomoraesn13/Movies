# Fluxo de trabalho



## Criando uma feature

* Criar a branch de trabalho a partir da `main`. (`main` > `feature/lorem-ipsum`)
* Ao finalizar a feature, enviar para a branch `develop` para validação do **desenvolvedor**. (`feature/lorem-ipsum` > `develop`)
* Estando a feature disponível no ambiente de `develop`  e pode ser usada para teste em uat .
* No momento do deploy, é criado uma branch `release-candidate (a partir da main)`, onde será feito o merge de todas as features referentes ao pacote. Ou seja, nao necessariamente subiremos todas as features de develop.
* Por fim a branch candidata é enviada para a `main`.  
![Frame 2](https://raw.githubusercontent.com/thiagomoraesn13/Movies/main/captura_de_tela_de_2023-09-20_10-41-38.png)

***

## Criando um hotfix

* Criar a branch de trabalho a partir da `main`. (`main` > `hotfix/lorem-ipsum`)
* Ao finalizar o hotfix, enviar para a branch `develop` para validação do **desenvolvedor**. (`hotfix/lorem-ipsum` > `develop`)
* Estando a feature disponível no ambiente de `develop`  e pode ser usada para teste em uat .
* A branch do hotfix é enviada para a `main`.
![Frame 3](https://github.com/thiagomoraesn13/Movies/blob/main/Captura%20de%20tela%20de%202023-09-28%2011-09-04.png?raw=true)


## Arquivo de changelog

## Version 1.0.0 (2023-09-29) 
* **Added:** ... [136860](https://dotzmkt.visualstudio.com/Tribos%20Dotz/_boards/board/t/Squad%20Web/Stories/?workitem=145058) Criar sessão de 'Descubra se sua loja favorita está aqui:'
