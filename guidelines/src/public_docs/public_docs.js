/*
===============================================
definição de documentos
===============================================
*/
const documentos = [
  {
    "id": 1, 
    "tag": ["Developer Guideline"],
    "title": "Arquitetura em 3 Camadas",
    "prelude": "Ao incorporar esses princÃ­pios de arquitetura em 3 camadas, vocÃª estarÃ¡ promovendo uma estrutura mais coesa, escalÃ¡vel e de fÃ¡cil manutenÃ§Ã£o para seu projeto. Esses princÃ­pios sÃ£o fundamentais para o desenvolvimento de sistemas robustos e flexÃ­veis.",
    "url_header": "https://images.pexels.com/photos/9436715/pexels-photo-9436715.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "section": [
      {
        "sub_title": "Front-End",
        "paragraph": [
          "SegregaÃ§Ã£o de conceitos: Mantenha a lÃ³gica de apresentaÃ§Ã£o separada da lÃ³gica de negÃ³cios."
        ]
      },
      {
        "sub_title": "Camada de NegÃ³cio",
        "paragraph": [
          "ServiÃ§os e Entidades: Organize a lÃ³gica de negÃ³cios em serviÃ§os que manipulam entidades. Evite lÃ³gica desnecessÃ¡ria na camada de persistÃªncia.",
          "ValidaÃ§Ã£o de Dados: Realize validaÃ§Ãµes de dados na camada de negÃ³cios para garantir integridade.",
          "Utilize exceÃ§Ãµes para lidar com condiÃ§Ãµes excepcionais."
        ]
      },
      {
        "sub_title": "Camada de PersistÃªncia",
        "paragraph": [
          "ORM (Mapeamento Objeto-Relacional): Utilize ORM para mapear objetos para o modelo de banco de dados. Evite consultas complexas diretamente na camada de negÃ³cios."
        ]
      }
    ]
  },
  {
    "id": 2, 
    "tag": ["Developer Guideline"],
    "title": "Boas PrÃ¡ticas para Desenvolvimento",
    "prelude": "Ao incorporar esses princÃ­pios de OrientaÃ§Ã£o a Objetos, vocÃª estarÃ¡ promovendo uma estrutura mais coesa, escalÃ¡vel e de fÃ¡cil manutenÃ§Ã£o para seu projeto. Esses princÃ­pios sÃ£o fundamentais para o desenvolvimento de sistemas robustos e flexÃ­veis.",
    "url_header": "https://images.pexels.com/photos/430207/pexels-photo-430207.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "section": [
      {
        "sub_title": "Nomes Significativos",
        "paragraph": [
          "Escolha nomes descritivos para variÃ¡veis, funÃ§Ãµes e classes.",
          "Evite nomes genÃ©ricos, seja especÃ­fico sobre a funÃ§Ã£o."
        ]
      },
      {
        "sub_title": "FunÃ§Ãµes Pequenas e Concisas",
        "paragraph": [
          "Mantenha funÃ§Ãµes pequenas e focadas em uma Ãºnica responsabilidade. Evite funÃ§Ãµes com muitos parÃ¢metros."
        ]
      },
      {
        "sub_title": "OrganizaÃ§Ã£o LÃ³gica",
        "paragraph": [
          "Agrupe funÃ§Ãµes relacionadas. Mantenha uma estrutura hierÃ¡rquica fÃ¡cil de entender."
        ]
      },
      {
        "sub_title": "Evite CÃ³digos Duplicados",
        "paragraph": [
          "Refatore trechos duplicados para funÃ§Ãµes ou classes reutilizÃ¡veis. Utilize heranÃ§a ou composiÃ§Ã£o para promover a reutilizaÃ§Ã£o."
        ]
      },
      {
        "sub_title": "Linguagem UbÃ­qua",
        "paragraph": [
          "Use uma linguagem comum entre desenvolvedores e especialistas do domÃ­nio. Evite ambiguidades na comunicaÃ§Ã£o sobre o domÃ­nio."
        ]
      },
      {
        "sub_title": "Contexto Limitado",
        "paragraph": [
          "Defina limites claros entre contextos delimitados para evitar conflitos. Utilize contextos delimitados para garantir consistÃªncia e isolamento."
        ]
      },
      {
        "sub_title": "Modelo Rico",
        "paragraph": [
          "Desenvolva modelos ricos em comportamento, nÃ£o apenas em dados. Utilize agregados para garantir consistÃªncia e transaÃ§Ãµes."
        ]
      },
      {
        "sub_title": "Event-Driven Architecture",
        "paragraph": [
          "Implemente arquiteturas orientadas a eventos para reagir a mudanÃ§as no estado. Utilize eventos e validaÃ§Ãµes para desinstanciar componentes."
        ]
      },
      {
        "sub_title": "RefatoraÃ§Ã£o ContÃ­nua",
        "paragraph": [
          "Esteja disposto a refatorar cÃ³digo para melhorar a qualidade e a manutenibilidade. Utilize padrÃµes de design quando apropriado."
        ]
      },
      {
        "sub_title": "ComunicaÃ§Ã£o Eficiente",
        "paragraph": [
          "Promova a comunicaÃ§Ã£o eficiente entre as camadas, evitando acoplamento excessivo."
        ]
      }
    ]
  },
  {
      "id": 3, 
    "tag": ["Developer Guideline"]
    , "title": "PrincÃ­pios de OrientaÃ§Ã£o a Objetos"
    , "prelude": "Siga os princÃ­pios SOLID (Single Responsibility, Open/Closed, Liskov Substitution, Interface Segregation, Dependency Inversion) para criar cÃ³digo modular e flexÃ­vel."
    , "url_header": "https://images.pexels.com/photos/323645/pexels-photo-323645.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    , "section": [
        {
            "sub_title": "Encapsulamento"
            , "paragraph": [
                "LimitaÃ§Ã£o de Acesso: Encapsule os detalhes internos das classes, expondo apenas o necessÃ¡rio. Utilize modificadores de acesso para controlar a visibilidade."
                , "CoerÃªncia Interna: Mantenha a consistÃªncia interna da classe, encapsulando comportamento e dados."
            ]
        }
        , {
            "sub_title": "HeranÃ§a"
            , "paragraph": [
                "FaÃ§a sempre uso de uma HeranÃ§a Significativa, utilize heranÃ§a apenas quando houver uma relaÃ§Ã£o clara. Evite heranÃ§a apenas por conveniÃªncia."
            ]
        }
        , {
            "sub_title": "Polimorfismo"
            , "paragraph": [
                "Explore o polimorfismo para tratar objetos de maneira genÃ©rica. Use interfaces e classes abstratas para definir contratos."
            ]
        }
        , {
            "sub_title": "ComposiÃ§Ã£o"
            , "paragraph": [
                "FavoreÃ§a ComposiÃ§Ã£o sobre HeranÃ§a, prefira composiÃ§Ã£o para criar relaÃ§Ãµes entre objetos. Isso promove maior flexibilidade e reutilizaÃ§Ã£o de cÃ³digo."
            ]
        }
        , {
            "sub_title": "InjeÃ§Ã£o de DependÃªncia"
            , "paragraph": [
                "Utilize injeÃ§Ã£o de dependÃªncia para reduzir acoplamento. Facilite a substituiÃ§Ã£o de implementaÃ§Ãµes em tempo de execuÃ§Ã£o."
            ]
        }
    ]
  },
  {
      "id": 4, 
    "tag": ["Reviewer Guideline"],
    "title": "Reviewer Guideline",
    "prelude": "Familiarize-se com o contexto da alteraÃ§Ã£o. Leia as especificaÃ§Ãµes e compreenda o propÃ³sito da mudanÃ§a.",
    "url_header": "https://images.pexels.com/photos/5668858/pexels-photo-5668858.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "section": [
      {
        "sub_title": "Clareza e Legibilidade",
        "paragraph": [
          "Verifique se o cÃ³digo Ã© claro, legÃ­vel e segue as boas prÃ¡ticas de codificaÃ§Ã£o. Analise se os nomes de variÃ¡veis, funÃ§Ãµes e classes sÃ£o significativos."
        ]
      },
      {
        "sub_title": "Conformidade com PadrÃµes",
        "paragraph": [
          "Certifique-se de que o cÃ³digo estÃ¡ em conformidade com os padrÃµes de codificaÃ§Ã£o estabelecidos."
        ]
      },
      {
        "sub_title": "DivisÃ£o LÃ³gica",
        "paragraph": [
          "Avalie a divisÃ£o lÃ³gica do cÃ³digo em funÃ§Ãµes e classes. Garanta que cada componente tenha uma responsabilidade clara."
        ]
      },
      {
        "sub_title": "LÃ³gica de NegÃ³cios",
        "paragraph": [
          "Avalie se a lÃ³gica de negÃ³cios estÃ¡ correta e atende aos requisitos."
        ]
      },
      {
        "sub_title": "Tratamento de Erros",
        "paragraph": [
          "Verifique se o cÃ³digo lida adequadamente com possÃ­veis cenÃ¡rios de erro."
        ]
      },
      {
        "sub_title": "EficiÃªncia e Desempenho",
        "paragraph": [
          "Avalie se o cÃ³digo Ã© eficiente e considera questÃµes de desempenho quando aplicÃ¡vel."
        ]
      },
      {
        "sub_title": "Encapsulamento e CoesÃ£o",
        "paragraph": [
          "Analise o uso adequado de encapsulamento e a coesÃ£o das classes e funÃ§Ãµes."
        ]
      },
      {
        "sub_title": "HeranÃ§a e ComposiÃ§Ã£o",
        "paragraph": [
          "Verifique se a heranÃ§a Ã© utilizada adequadamente e se a composiÃ§Ã£o Ã© preferida quando apropriado."
        ]
      },
      {
        "sub_title": "DivisÃ£o em Camadas",
        "paragraph": [
          "Garanta que o cÃ³digo esteja organizado em camadas (front-end, camada de negÃ³cios, camada de persistÃªncia) de acordo com as melhores prÃ¡ticas."
        ]
      },
      {
        "sub_title": "Clareza e ConvenÃ§Ãµes",
        "paragraph": [
          "Verifique se as mensagens de commit sÃ£o claras, concisas e seguem convenÃ§Ãµes estabelecidas."
        ]
      },
      {
        "sub_title": "ReferÃªncia a Problemas",
        "paragraph": [
          "Certifique-se de que as mensagens de commit referenciam problemas ou tarefas relacionadas."
        ]
      },
      {
        "sub_title": "Feedback Construtivo",
        "paragraph": ["ForneÃ§a feedback construtivo e sugestÃµes para melhorias."]
      },
      {
        "sub_title": "Perguntas para o Autor",
        "paragraph": [
          "FaÃ§a perguntas para esclarecer intenÃ§Ãµes ou decisÃµes de design."
        ]
      },
      {
        "sub_title": "Elogios e Reconhecimento",
        "paragraph": ["ReconheÃ§a o bom trabalho quando apropriado."]
      }
    ]
  }   
];
/*
===============================================
definição de documentos
===============================================
*/

module.exports = documentos;
