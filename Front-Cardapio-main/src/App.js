// Importando React e os hooks useEffect e useState
import React, { useEffect, useState } from "react";

// Importando Axios para fazer requisições HTTP (GET, POST, DELETE)
import axios from "axios";

// Importando os estilos padrão do Bootstrap
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  // State para armazenar a lista de alimentos vinda do backend
  const [items, setItems] = useState([]);

  // State para controlar os campos do formulário
  const [form, setForm] = useState({ title: "", image: "", price: "" });

  // Função para buscar os itens (alimentos) do backend
  const fetchItems = () => {
    axios.get("http://localhost:8080/food")
      .then(response => setItems(response.data)) // Atualiza o state com os dados recebidos
      .catch(error => console.error("Erro ao buscar alimentos:", error)); // Caso dê erro na requisição
  };

  // useEffect: executa a função fetchItems uma única vez ao carregar o componente
  useEffect(() => {
    fetchItems();
  }, []);

  // Função para deletar um item específico (pelo id)
  const handleDelete = (id) => {
    axios.delete(`http://localhost:8080/food/${id}`)
      .then(() => fetchItems()) // Recarrega a lista após deletar
      .catch(error => console.error("Erro ao deletar:", error));
  };

  // Função para enviar (adicionar) um novo item ao backend
  const handleSubmit = (e) => {
    e.preventDefault(); // Impede o recarregamento da página ao enviar o formulário

    // Fazendo POST com os dados do formulário
    axios.post("http://localhost:8080/food", {
      title: form.title,
      image: form.image,
      price: parseFloat(form.price), // Converte o preço para número
    }).then(() => {
      // Após adicionar, limpa o formulário
      setForm({ title: "", image: "", price: "" });
      // Recarrega a lista de itens
      fetchItems();
    }).catch(error => console.error("Erro ao adicionar:", error));
  };

  // JSX que define o layout da aplicação
  return (
    <div className="container mt-5">
      {/* Título principal */}
      <h1 className="text-center mb-4">Cardápio Digital</h1>

      {/* Formulário para adicionar novos alimentos */}
      <form onSubmit={handleSubmit} className="mb-4">
        <div className="row">
          {/* Campo: URL da Imagem */}
          <div className="col-md-4">
            <input
              type="text"
              className="form-control"
              placeholder="URL da Imagem"
              value={form.image} // Valor controlado pelo state
              onChange={e => setForm({ ...form, image: e.target.value })} // Atualiza o campo 'image'
              required
            />
          </div>

          {/* Campo: Título */}
          <div className="col-md-3">
            <input
              type="text"
              className="form-control"
              placeholder="Título"
              value={form.title}
              onChange={e => setForm({ ...form, title: e.target.value })} // Atualiza o campo 'title'
              required
            />
          </div>

          {/* Campo: Preço */}
          <div className="col-md-2">
            <input
              type="number"
              step="0.01" // Permite valores com casas decimais
              className="form-control"
              placeholder="Preço"
              value={form.price}
              onChange={e => setForm({ ...form, price: e.target.value })} // Atualiza o campo 'price'
              required
            />
          </div>

          {/* Botão: Adicionar */}
          <div className="col-md-3">
            <button type="submit" className="btn btn-primary w-100">
              Adicionar
            </button>
          </div>
        </div>
      </form>

      {/* Lista de itens (alimentos) exibidos em cards */}
      <div className="row">
        {items.map(item => (
          <div className="col-md-4 mb-3" key={item.id}>
            <div className="card h-100">
              {/* Imagem do item */}
              <img src={item.image} className="card-img-top" alt={item.title} />

              <div className="card-body">
                {/* Título do item */}
                <h5 className="card-title">{item.title}</h5>

                {/* Preço */}
                <p className="card-text">
                  <strong>Preço:</strong> R$ {item.price}
                </p>

                {/* Botão para excluir o item */}
                <button
                  className="btn btn-danger mt-2"
                  onClick={() => handleDelete(item.id)} // Ao clicar, chama o delete
                >
                  Excluir
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// Exportando o componente App para ser usado na aplicação
export default App;
