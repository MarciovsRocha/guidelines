import './index.css';

function Card(){
    let page = {
        tag: ["Developer Guideline"],
        title: "Arquitetura em 3 Camadas",
        "prelude": "Ao incorporar esses princípios de Orientação a Objetos e considerações específicas sobre a arquitetura em 3 camadas, você estará promovendo uma estrutura mais coesa, escalável e de fácil manutenção para seu projeto. Esses princípios são fundamentais para o desenvolvimento de sistemas robustos e flexíveis.",
        url_header: "",
        section: [
          {
            sub_title: "Front-End",
            paragraph: [
              "Segregação de conceitos: Mantenha a lógica de apresentação separada da lógica de negócios."
            ]
          },
          {
            sub_title: "Camada de Negócio",
            paragraph: [
              "Serviços e Entidades: Organize a lógica de negócios em serviços que manipulam entidades. Evite lógica desnecessária na camada de persistência.",
              "Validação de Dados: Realize validações de dados na camada de negócios para garantir integridade.",
              "Utilize exceções para lidar com condições excepcionais."
            ]
          },
          {
            sub_title: "Camada de Persistência",
            paragraph: [
              "ORM (Mapeamento Objeto-Relacional): Utilize ORM para mapear objetos para o modelo de banco de dados. Evite consultas complexas diretamente na camada de negócios."
            ]
          }
        ]
      }    

    return (
        <div className="card">
            <h1>{ page.title }</h1>
            <p className="code">{ page.prelude }</p>
        </div>
    )
}

export default Card;
