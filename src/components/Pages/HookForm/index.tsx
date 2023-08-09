import Section from "../../Section";
import CodeBlock from '../../CodeBlock';
import { Box } from "@mui/material";
import { styled } from "@mui/system";

export default function HookForm(){
    const code= `import React from 'react';
    import { useForm } from 'react-hook-form';
    
    function MyForm() {
      const { register, handleSubmit, errors } = useForm();
    
      const onSubmit = (data) => {
        console.log(data);
      };
    
      return (
        <form onSubmit={handleSubmit(onSubmit)}>
          <input type="text" name="firstName" placeholder="First Name" ref={register({ required: true })} />
          {errors.firstName && <p>This field is required.</p>}
    
          <input type="email" name="email" placeholder="Email" ref={register({ required: true, pattern: /^\S+@\S+$/i })} />
          {errors.email && <p>Please enter a valid email address.</p>}
    
          <button type="submit">Submit</button>
        </form>
      );
    }
    
    export default MyForm;
    `;

    const OlBox = styled(Box)({
      padding: '1.25rem'
    })
    return(
        <>
        <Section 
        h1={'React Hook Form'} p={' O React Hook Form (RHF) é uma biblioteca de gerenciamento de formulários que se baseia nos conceitos dos hooks do React para simplificar e otimizar a criação e validação de formulários. Esses são os principais conceitos do React Hook Form:'}
       >
        <OlBox>
          <ol>
            <li><strong>Hooks Baseados em Funções:</strong> O RHF utiliza os hooks do React, como useState e useEffect, para gerenciar o estado e o comportamento dos formulários. Isso facilita o compartilhamento de lógica de gerenciamento de formulários entre componentes funcionais.</li>
            <li><strong>Mínima Re-Renders:</strong> O RHF minimiza a quantidade de re-renderizações desnecessárias, melhorando o desempenho e a experiência do usuário. Ele otimiza o uso de componentes controlados e não controlados para evitar re-renderizações excessivas.</li>
            <li><strong>Registros de Inputs:</strong> Em vez de controlar cada campo de entrada individualmente usando o estado, o RHF utiliza os conceitos de "registros" e "controladores" para acompanhar o estado e a validação dos campos.</li>
            <li><strong>Validação:</strong> A biblioteca oferece suporte a validação de forma eficiente. Você pode usar validadores internos ou criar seus próprios validadores personalizados para verificar os dados inseridos nos campos.</li>
            <li><strong>Formulário Assíncrono:</strong> O RHF lida bem com lógicas assíncronas, como validação ou envio de formulários. Ele permite que você controle ações assíncronas de maneira simples e clara.</li>
          </ol>
        </OlBox>
        <CodeBlock code={code} language="tsx" /><br />
        <p>Neste exemplo, estamos utilizando os hooks do React Hook Form para criar um formulário de cadastro simples. O useForm nos fornece funções para registrar campos, controlar validação e lidar com o envio do formulário.</p>
       </Section>
        </>
    )
}