import Section from "../../Section";
import CodeBlock from '../../CodeBlock';

export default function HookForm(){
    const code= `import React from 'react';
    import { useForm, Controller } from 'react-hook-form';
    
    function HookFormExample() {
      const { control, handleSubmit, formState: { errors } } = useForm();
    
      const onSubmit = (data) => {
        console.log(data);
      };
    
      return (
        <form onSubmit={handleSubmit(onSubmit)}>
          <Controller
            name="firstName"
            control={control}
            render={({ field }) => <input {...field} placeholder="First Name" />}
            rules={{ required: true }}
          />
          {errors.firstName && <p>This field is required.</p>}
    
          <Controller
            name="email"
            control={control}
            render={({ field }) => <input {...field} placeholder="Email" />}
            rules={{ required: true, pattern: /^\S+@\S+$/i }}
          />
          {errors.email && <p>Please enter a valid email address.</p>}
    
          <button type="submit">Submit</button>
        </form>
      );
    }
    
    export default HookFormExample;
    `;

    return(
        <>
        <Section 
        h1={'React Hook Form'} p={' O React Hook Form é uma biblioteca avançada que revoluciona a forma como criamos e gerenciamos formulários em aplicações React. Ele se baseia nos princípios dos hooks do React para simplificar e otimizar todo o processo de interação com formulários.'}
       >
        <p>Essencialmente, o React Hook Form elimina a necessidade de acompanhar manualmente o estado de cada campo, tornando a criação de formulários mais direta e eficiente. Ele apresenta uma abordagem inovadora ao introduzir conceitos como "registros" e "controladores", que reduzem a complexidade do código e melhoram o desempenho.</p>
        <br />
        <p>Ao usar o React Hook Form, você registra cada campo de entrada com um controlador que automaticamente se liga ao estado do formulário. Isso não apenas simplifica a captura de dados, mas também minimiza as re-renderizações desnecessárias, melhorando a performance geral do aplicativo.</p>
        <br />
        <p>Além disso, a biblioteca oferece validação embutida e personalizada, permitindo verificar a integridade dos dados inseridos antes de submeter o formulário. Também facilita a lógica assíncrona, como validações remotas, tornando a experiência de formulário mais robusta e interativa.</p>
        <br />
        <p>Embora o React Hook Form ofereça uma abordagem mais avançada, ele é projetado para ser flexível e altamente integrável com outras bibliotecas e frameworks. Com essa ferramenta, os desenvolvedores podem criar formulários reativos e eficientes, economizando tempo e esforço.</p><br />
        <p><strong>Veja um exemplo de uso:</strong></p>
        <CodeBlock code={code} language="tsx" /><br />
        <p><strong>Vantagens do React Hook Form:</strong> A abordagem inovadora do RHF reduz a complexidade do gerenciamento de formulários, resultando em código mais limpo e organizado. Ele otimiza o desempenho, melhorando a experiência do usuário ao minimizar re-renderizações. Além disso, a integração de validações e lógica assíncrona simplificam a criação de formulários avançados de maneira eficaz. O React Hook Form é uma opção poderosa para desenvolvedores que buscam formulários eficientes e de alta qualidade em aplicações React.</p>
       </Section>
        </>
    )
}