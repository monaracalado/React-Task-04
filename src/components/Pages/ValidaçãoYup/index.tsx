import Section from "../../Section";
import CodeBlock from '../../CodeBlock';

export default function ValidacaoYup(){
    const code= `import React from 'react';
    import { useForm } from 'react-hook-form';
    import { yupResolver } from '@hookform/resolvers/yup';
    import * as Yup from 'yup';
    
    const validationSchema = Yup.object().shape({
      firstName: Yup.string().required('O nome é obrigatório'),
      email: Yup.string().email('E-mail inválido').required('O e-mail é obrigatório'),
      password: Yup.string().min(6, 'A senha deve ter pelo menos 6 caracteres').required('A senha é obrigatória'),
    });
    
    function RegistrationForm() {
      const { handleSubmit, register, formState: { errors } } = useForm({
        resolver: yupResolver(validationSchema),
      });
    
      const onSubmit = (data) => {
        console.log(data);
      };
    
      return (
        <form onSubmit={handleSubmit(onSubmit)}>
          <div>
            <label>Nome:</label>
            <input {...register('firstName')} />
            {errors.firstName && <p>{errors.firstName.message}</p>}
          </div>
    
          <div>
            <label>E-mail:</label>
            <input {...register('email')} />
            {errors.email && <p>{errors.email.message}</p>}
          </div>
    
          <div>
            <label>Senha:</label>
            <input type="password" {...register('password')} />
            {errors.password && <p>{errors.password.message}</p>}
          </div>
    
          <button type="submit">Registrar</button>
        </form>
      );
    }
    
    export default RegistrationForm;
    `;

    return(
        <>
        <Section 
        h1={'Validação Yup'} p={'A utilização da validação Yup no React é uma abordagem poderosa para garantir a integridade dos dados inseridos nos formulários antes de serem processados. Com a biblioteca Yup, você estabelece um conjunto de regras criteriosas para verificar se os dados atendem aos requisitos específicos definidos por você.'}
       >
        <p>Imagine que você está construindo uma aplicação com formulários de cadastro, como inscrição em eventos ou criação de contas. Para garantir que as informações inseridas sejam precisas e válidas, você pode usar o Yup.</p>
        <br />
        <p>Primeiramente, você instala o Yup no seu projeto. Em seguida, cria um esquema de validação que descreve os critérios para cada campo do formulário. Por exemplo, você pode especificar que um campo "Nome" é obrigatório, que um campo "E-mail" precisa ter um formato válido e que um campo "Idade" deve ser maior do que 18.</p>
        <br />
        <p>Depois de criar o esquema de validação, você o integra ao seu componente de formulário. Ao inserir os dados e tentar enviar o formulário, o Yup entra em ação. Ele verifica os dados de acordo com as regras definidas e fornece mensagens de erro claras e personalizadas caso algo não esteja correto.</p>
        <br />
        <p>Essa abordagem de validação traz confiabilidade aos seus formulários, impedindo que dados incorretos sejam processados e comprometam a funcionalidade do aplicativo. Com o Yup, você cria uma camada de segurança que assegura que somente informações válidas e esperadas sejam aceitas.</p><br />
        <p><strong>Veja um exemplo de uso:</strong></p>
        <CodeBlock code={code} language="tsx" /><br />
        <p>Neste exemplo, o Yup é usado para criar um esquema de validação que especifica as regras para cada campo: nome obrigatório, e-mail válido e senha com pelo menos 6 caracteres. O yupResolver do react-hook-form integra o esquema de validação com o gerenciamento de formulários.</p><br />
        <p>À medida que o usuário interage com os campos e tenta enviar o formulário, o Yup valida automaticamente os dados inseridos e exibe mensagens de erro personalizadas caso necessário. Isso garante que apenas dados válidos sejam submetidos, melhorando a confiabilidade dos registros na aplicação.</p>
       </Section>
        </>
    )
}