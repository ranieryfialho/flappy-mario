# Flappy Mario 🍄

![Status](https://img.shields.io/badge/status-concluído-green)
![Licença](https://img.shields.io/badge/licença-MIT-blue)

Um clone do popular jogo Flappy Bird, desenvolvido com HTML, CSS e JavaScript puros, utilizando a temática do Super Mario. Este projeto foi criado como um exercício prático para aprimorar habilidades em manipulação do DOM, animações CSS e lógica de jogo responsiva.

---

## ✨ Funcionalidades

* **Controles Duplos:** Jogue com qualquer tecla no teclado ou com toques na tela em dispositivos móveis.
* **Velocidade Adaptativa:** A velocidade dos canos se ajusta proporcionalmente à largura da tela, garantindo uma experiência de jogo consistente em qualquer dispositivo.
* **Ciclo de Jogo Completo:** Tela inicial para começar, detecção de colisão, tela de "Game Over" e botão para reiniciar instantaneamente sem recarregar a página.
* **Interface Completa:** Inclui tela de início, área de jogo e um rodapé informativo com instruções e um aviso de direitos autorais.
* **Animações Puras:** Todas as animações (personagem, canos, nuvens) foram criadas com `@keyframes` do CSS.

---

## 🛠️ Tecnologias Utilizadas

Este projeto foi construído do zero utilizando as tecnologias base da web:

* **HTML5:** Para a estrutura semântica dos elementos do jogo.
* **CSS3:** Para toda a estilização, layout e animações.
    * **Flexbox** para alinhamento.
    * **Animações com `@keyframes`** para dar vida ao jogo.
    * **Variáveis CSS (Custom Properties)** para o controle dinâmico da velocidade.
* **JavaScript (Vanilla):** Para toda a lógica do jogo, incluindo:
    * Manipulação do DOM.
    * Ouvintes de eventos (`keydown`, `touchstart`).
    * Lógica de colisão.
    * Cálculos de responsividade.

---

## 🚀 Como Executar o Projeto

Este é um projeto web estático, não necessitando de um processo de *build* ou compilação.

1.  **Clone o repositório** (se estiver no GitHub):
    ```bash
    git clone https://github.com/ranieryfialho/flappy-mario.git
    ```
2.  **Navegue até a pasta** do projeto:
    ```bash
    cd flappy-mario
    ```
3.  **Abra o arquivo `index.html`** diretamente no seu navegador de preferência.

Para uma melhor experiência de desenvolvimento, recomenda-se usar a extensão **Live Server** no Visual Studio Code, que recarrega a página automaticamente ao salvar alterações.

---

## 🧠 Objetivos e Aprendizados

O principal objetivo deste projeto foi solidificar conceitos fundamentais do desenvolvimento front-end sem o uso de frameworks ou bibliotecas externas. Os principais aprendizados incluem:

* A criação de um "game loop" com `setInterval` para verificação contínua do estado do jogo.
* A implementação de uma lógica de colisão baseada na posição dos elementos.
* O uso de `getComputedStyle` para ler propriedades CSS aplicadas por animações.
* A criação de uma experiência de usuário consistente entre desktop e mobile, adaptando tanto os controles quanto a física do jogo.
* A prática de estruturar o código de forma limpa e organizada em HTML, CSS e JavaScript.

---

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo `LICENSE.md` para mais detalhes.

As imagens e personagens da franquia Super Mario são propriedade intelectual da Nintendo©. Este projeto é uma homenagem e não possui fins comerciais.

---

<div align="center">
  <a href="[[LINK-PARA-SEU-GITHUB](https://github.com/ranieryfialho)]">GitHub</a> •
  <a href="[https://www.linkedin.com/in/raniery-fialho-910ab9100/]">LinkedIn</a>
</div>
