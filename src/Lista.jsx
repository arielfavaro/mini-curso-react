import { useState } from "react"

/**
 * Componente funcional que renderiza uma lista de tarefas
 *
 * @returns Componente funcional que renderiza uma lista de tarefas
 */
function Lista() {
    /**
     * Estado para armazenar os itens da lista
     * Inicialmente, a lista está vazia
     *
     * useState retorna um array de 2 posições.
     * A primeira posição é o valor do estado (itens)
     * A segunda posição é uma função para atualizar o estado (setItens)
     */
    const [itens, setItens] = useState([]);

    /**
     * Estado para armazenar o nome da nova tarefa
     * Inicialmente, o nome da tarefa está vazio
     *
     * useState retorna um array de 2 posições.
     * A primeira posição é o valor do estado (nomeTarefa)
     * A segunda posição é uma função para atualizar o estado (setNomeTarefa)
     */
    const [nomeTarefa, setNomeTarefa] = useState("");

    /**
     * Função para adicionar uma nova tarefa à lista
     * Verifica se o nome da tarefa não está vazio
     * Se não estiver vazio, adiciona a tarefa à lista e limpa o campo de entrada
     *
     * Usa o operador spread (...) para criar um novo array com os itens existentes e a nova tarefa
     * Atualiza o estado da lista com a função setItens
     * Atualiza o estado do nome da tarefa com a função setNomeTarefa
     */
    const adicionarTarefa = () => {
        if (nomeTarefa.trim() !== "") {
            // Adiciona a nova tarefa à lista
            setItens([...itens, nomeTarefa]);

            // Limpa o campo de entrada
            setNomeTarefa("");
        }
    }

    /**
     * Retorna o JSX que será renderizado
     * O uso de () permite quebrar o código em múltiplas linhas para melhor legibilidade
     */
    return (
        <div>
            <h1>Lista de tarefas</h1>

            <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '1rem' }}>
                {
                    /**
                     * No input devemos usar o onChange para atualizar o estado do nome da tarefa
                     * O valor do input é controlado pelo estado nomeTarefa
                     * Quando o valor do input muda, a função setNomeTarefa é chamada com o novo valor
                     *
                     * O botão chama a função adicionarTarefa quando clicado
                     */
                }
                <input type="text" value={nomeTarefa} onChange={(e) => setNomeTarefa(e.target.value)} placeholder="Nome tarefa" />
                <button onClick={adicionarTarefa}>Adicionar</button>
            </div>

            <ul style={{ listStyleType: 'none', padding: 0, textAlign: 'left' }}>
                {
                    /**
                     * Dentro do JSX, podemos usar chaves {} para inserir expressões JavaScript
                     * Aqui, usamos o método map para iterar sobre o array de itens e renderizar cada item como um <li>
                     * Cada <li> precisa de uma prop "key" única para ajudar o React a identificar quais itens mudaram, foram adicionados ou removidos
                     * Usamos o índice do array como key, mas em aplicações reais, é melhor usar um identificador único
                     *
                     * Itera os itens no array e retorna um novo array de elementos <li>.
                     * Podemos retornar direto o elemento <li> sem usar chaves {} e return, pois é uma função de seta com retorno implícito.
                     * Ou podemos retornar o elemento <li> usando chaves {} e return, se quisermos adicionar mais lógica antes do retorno.
                     */
                }

                {itens.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
        </div>
    )
}

export default Lista