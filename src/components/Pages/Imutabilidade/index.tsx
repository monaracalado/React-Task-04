import Section from "../../Section";
import CodeBlock from '../../CodeBlock';

export default function Imutabilidade(){
    const code= `import React, { useState } from 'react';

    function Counter() {
      const [count, setCount] = useState(0);
    
      const increment = () => {
        setCount(count + 1); // Errado! Não segue imutabilidade
      };
    
      const incrementImmutably = () => {
        setCount(prevCount => prevCount + 1); // Correto! Usa função para manter imutabilidade
      };
    
      return (
        <div>
          <p>Count: {count}</p>
          <button onClick={increment}>Increment</button>
          <button onClick={incrementImmutably}>Increment Immutably</button>
        </div>
      );
    }
    
    export default Counter;
    `
    return(
        <>
        <Section 
        h1={'Imutabilidade de Estado'} p={' No React, useState é um hook que permite que você adicione o estado a um componente de função. Ele oferece uma maneira de adicionar e manipular o estado de um componente sem precisar usar classes. Um conceito importante relacionado ao useState é a imutabilidade.'}
       >
        <p>Imutabilidade se refere à característica de que, uma vez que um objeto (como um array ou um objeto JavaScript) é criado, ele não pode ser alterado. Em vez disso, sempre que você deseja modificar o objeto, uma cópia modificada é criada, preservando o objeto original. Isso é fundamental para o funcionamento correto do sistema de atualização de estado no React.</p><br />
        <p>Quando você utiliza useState, você está essencialmente criando um "estado" que pode ser atualizado, mas deve ser feito de forma imutável. Isso significa que, quando você atualiza um valor do estado, não deve modificar o valor existente, mas sim criar um novo valor baseado no valor anterior e nas alterações desejadas.</p><br />
        <p>Quando você utiliza useState, você está essencialmente criando um "estado" que pode ser atualizado, mas deve ser feito de forma imutável. Isso significa que, quando você atualiza um valor do estado, não deve modificar o valor existente, mas sim criar um novo valor baseado no valor anterior e nas alterações desejadas. Veja o exemplo a seguir:</p><br />
        <CodeBlock code={code} language="tsx" /><br />
        <p>No exemplo acima, o segundo botão usa a abordagem correta, onde o estado anterior é passado para a função de atualização, permitindo que você faça alterações no estado sem modificar diretamente o valor anterior. Isso garante que o React possa rastrear as mudanças e atualizar adequadamente a interface do usuário.

        Lembrando, a imutabilidade é uma prática importante para evitar comportamentos inesperados e erros difíceis de rastrear em suas aplicações React.</p>
       </Section>
        </>
    )
}