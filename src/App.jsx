const luana = {
  cliente: 'Luana',
  idade: 27,
  compras: [
    { nome: 'Notebook', preco: 'R$ 2500' },
    { nome: 'Geladeira', preco: 'R$ 3000' },
    { nome: 'Smartphone', preco: 'R$ 1500' }
  ],
  ativa: true
}

const mario = {
  cliente: 'Mario',
  idade: 31,
  compras: [
    { nome: 'Notebook', preco: 'R$ 2500' },
    { nome: 'Geladeira', preco: 'R$ 3000' },
    { nome: 'Smartphone', preco: 'R$ 1500' },
    { nome: 'Guitarra', preco: 'R$ 3500' }
  ],
  ativa: false
}

const App = () => {

  function dados(pessoa) {
    const totalGasto = (pessoa.compras.map((item) => Number(item.preco.replace("R$ ", "")))).reduce((a, b) => a + b);
    return (
      <>
        <p>Nome: {pessoa.cliente}</p>
        <p>Idade: {pessoa.idade}</p>
        <p>Situação: <span style={{ color: pessoa.ativa ? "green" : "red" }}>{pessoa.ativa ? 'Ativo' : 'Inativo'}</span></p>
        <p>Total gasto: R${totalGasto}</p>
        {totalGasto > 10000 && <p>Você está gastando muito!</p>}
      </>
    )
  }

  return (
    dados(luana)
  )
}

export default App
