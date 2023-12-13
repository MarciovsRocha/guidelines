import './index.css';

function CardPage(){
    let page = {
        tag: ["Developer Guideline"],
        title: "Arquitetura em 3 Camadas",
        "prelude": "Ao incorporar esses princípios de Orientação a Objetos e considerações específicas sobre a arquitetura em 3 camadas, você estará promovendo uma estrutura mais coesa, escalável e de fácil manutenção para seu projeto. Esses princípios são fundamentais para o desenvolvimento de sistemas robustos e flexíveis.",
        url_header: "https://images.pexels.com/photos/9436715/pexels-photo-9436715.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
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
        <div className="reading-page">
            <img alt="three objects" className="reading-header" src={page.url_header} />
            <h1>{ page.title }</h1>
            <p className="prelude">{ page.prelude }</p>

            {page.section.map((s) => {                
                return (
                <div key={s.sub_title}>
                    <h3>{s.sub_title}</h3>
                    {s.paragraph.map((para) => {
                        return <p key={para}>{para}</p>;
                    })}
                </div>
                )
            })}
        </div>
    )
}

export default CardPage;
