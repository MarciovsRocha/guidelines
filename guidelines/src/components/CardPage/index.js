import './index.css';

function CardPage(){
    let page = {
        tag: ["Developer Guideline"],
        title: "Arquitetura em 3 Camadas",
        prelude: "",
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
        <div class="reading-page">
            <h1>{ page.title }</h1>
            <p>{ page.prelude }</p>
            <hr/>
            {page.section.map((s) => {                
                return (
                <div>
                    <h3>{s.sub_title}</h3>
                    {s.paragraph.map((para) => {
                        return <p>{para}</p>;
                    })}
                </div>
                )
            })}
        </div>
    )
}

export default CardPage;
