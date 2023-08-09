import MenuBase from '../MenuBase'

export default function Menu(){
    return(
        <>
        <MenuBase to='/'>Imutabilidade</MenuBase>
        <MenuBase to='/FormularioSimples'>Formulário Simples</MenuBase>
        <MenuBase to='/HookForm'>Hook Form</MenuBase>
        <MenuBase to='/ValidacaoYup'>Validação Yup</MenuBase>
        </>
    )
}