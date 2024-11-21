**📋 Projeto Polaroid Card com Modo Claro/Escuro**

Este projeto é uma aplicação React que implementa um componente Polaroid para exibir uma imagem e um texto associados, demonstrando o uso básico de componentes React para criar uma interface visual estruturada e interativa. e proporcionar uma experiência agradável ao usuário com a troca de temas.
______________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________

**O que é o REACT?**

O React é uma biblioteca JavaScript de código aberto usada para construir interfaces de usuário (UI) de forma eficiente e interativa. Ele é amplamente utilizado no desenvolvimento de aplicações web modernas e segue o paradigma de componentes reutilizáveis, o que facilita a organização e manutenção do código. É utilizado para aplicações web como sistemas de gestão, dashboards e sites dinâmicos.

______________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________

**⚙ Estrutura do Projeto**

A estrutura do projeto inclui os seguintes elementos principais:

**Components/polaroid.js:** Contém a implementação do componente Polaroid, que é um componente reutilizável para renderizar imagens e textos.
**Componente Home:** O componente principal que utiliza o Polaroid.

**Explicação do código**

1. Importando dependências:
   
![image](https://github.com/user-attachments/assets/b2230130-b705-4d29-8c81-8b1344dab5c3)


Nessa parte do código (pasta page.tsx) o componente Polaroid é importado da pasta components. Essa abordagem modular melhora a organização e facilita a reutilização do código.

2. Criação do Componente Home:

![image](https://github.com/user-attachments/assets/3a3f06ef-089a-4454-9b4c-54c41f918298)


O Home é um componente funcional. Ele serve como o ponto de entrada para renderizar o conteúdo da aplicação.

Renderizando o Componente Polaroid:
   -> Um único componente Polaroid é renderizado com dois props:
   
         url: Os dados da imagem em formato Base64.
         text: A legenda da imagem, que neste caso é "Imagem 1".

3. Componente Polaroid

Este arquivo descreve o componente React Polaroid, responsável por renderizar uma imagem com estilo de polaroid, incluir uma legenda e permitir alternar entre modos claro e escuro.

3.1 Importação:

![image](https://github.com/user-attachments/assets/3c9f2495-3ef8-4271-81e8-a629657ed3d9)

-> "use client": Indica que este arquivo React será executado no cliente, no contexto de frameworks como Next.js.

-> styles: Importa o arquivo CSS para aplicar estilos específicos ao componente.

3.2 Função Polaroid:

![image](https://github.com/user-attachments/assets/dfb425e8-0426-4582-8f16-065946d866e7)

Props: Recebe dois parâmetros:
   -> url: URL da imagem (ou em Base64) a ser exibida.
   -> text: Texto para a legenda da imagem.



