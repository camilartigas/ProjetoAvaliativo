import { Header } from "../components/header";
import { Footer } from "../components/footer";

function CadastroMedicamentos(){
    return(
        <>
        <Header />

        
        <p>Cadastro de um medicamento com todos os dados

a. Nome do medicamento (obrigatório)
b. Nome do laboratório (obrigatório)
c. Dosagem do medicamento (obrigatório)
d. Descrição do medicamento (opcional)
e. Preço unitário do medicamento (obrigatório)
f. Tipo do medicamento (obrigatório)
g. Realize o tratamento dos campos da seguinte forma:
    Para a descrição, utilize <textarea/> 
    Para o tipo, utilize <select/>
        Medicamento controlado ou Medicamento comum
h. Ao cadastrar um novo medicamento, mostrar uma mensagem de feedback de produto
cadastrado com sucesso. Dica: Utilize o método onSubmit com Try/Catch.
i. Salve os dados em localStorage para simular uma API.

verificar header e footer default para todas as pg.
        </p>
        <Footer />
        </>
        
    )
}

export { CadastroMedicamentos };