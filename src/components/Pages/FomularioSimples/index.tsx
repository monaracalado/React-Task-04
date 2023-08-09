import Section from "../../Section";
import CodeBlock from '../../CodeBlock';

export default function FormularioSimples(){
    const code= `import React, { useState } from 'react';

    function SimpleForm() {
      const [name, setName] = useState('');
    
      const handleSubmit = (event) => {
        event.preventDefault();
        console.log('Name:', name);
      };
    
      return (
        <form onSubmit={handleSubmit}>
          <label>
            Name:
            <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
          </label>
          <button type="submit">Submit</button>
        </form>
      );
    }
    
    export default SimpleForm;
    `;

    return(
        <>
        <Section 
        h1={'Formulário Simples'} p={' Formulários desempenham um papel crucial na interação entre usuários e aplicativos web. No contexto do React, eles continuam sendo uma parte fundamental, mas com uma abordagem mais dinâmica e reativa.'}
       >
        <p>Ao construir formulários em React, você cria uma interface que permite aos usuários inserir informações, como textos, números ou seleções, e transmitir esses dados para o aplicativo. Para isso, você utiliza elementos HTML, como form, input, e select, mas com uma abordagem mais integrada à lógica do React.</p>
        <br />
        <p>A utilização de estados, com o auxílio dos hooks, permite que os dados dos campos de entrada sejam mantidos e atualizados conforme o usuário interage. A manipulação de eventos, como onChange e onSubmit, desempenha um papel fundamental para capturar as mudanças nos campos e processar os dados quando o formulário é enviado.</p>
        <br />
        <p>A coleta, validação e processamento dos dados podem ocorrer de maneira síncrona ou assíncrona, dependendo das necessidades do aplicativo. Isso possibilita desde a verificação de campos obrigatórios até a realização de chamadas a API para validações remotas.</p>
        <br />
        <p><strong>Veja um exemplo de uso:</strong></p>
        <CodeBlock code={code} language="tsx" /><br />
        <p><strong>Vantagens do Uso de Formulários no React:</strong> Os formulários no React permitem interações dinâmicas e coleta de dados dos usuários. Eles ajudam a criar interfaces responsivas e amigáveis, sendo essenciais para muitos aplicativos web. Com o uso de estado, manipuladores de eventos e elementos HTML, você pode criar formulários robustos que atendam às necessidades do seu aplicativo.</p>
       </Section>
        </>
    )
}