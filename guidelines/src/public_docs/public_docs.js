/*
===============================================
defini��o de documentos
===============================================
*/
const documentos = [
  {
    "id": 1, 
    "tag": ["Developer Guideline"],
    "title": "Arquitetura em 3 Camadas",
    "prelude": "Ao incorporar esses princípios de arquitetura em 3 camadas, você estará promovendo uma estrutura mais coesa, escalável e de fácil manutenção para seu projeto. Esses princípios são fundamentais para o desenvolvimento de sistemas robustos e flexíveis.",
    "url_header": "https://images.pexels.com/photos/9436715/pexels-photo-9436715.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "section": [
      {
        "sub_title": "Front-End",
        "paragraph": [
          "Segregação de conceitos: Mantenha a lógica de apresentação separada da lógica de negócios."
        ]
      },
      {
        "sub_title": "Camada de Negócio",
        "paragraph": [
          "Serviços e Entidades: Organize a lógica de negócios em serviços que manipulam entidades. Evite lógica desnecessária na camada de persistência.",
          "Validação de Dados: Realize validações de dados na camada de negócios para garantir integridade.",
          "Utilize exceções para lidar com condições excepcionais."
        ]
      },
      {
        "sub_title": "Camada de Persistência",
        "paragraph": [
          "ORM (Mapeamento Objeto-Relacional): Utilize ORM para mapear objetos para o modelo de banco de dados. Evite consultas complexas diretamente na camada de negócios."
        ]
      }
    ]
  },
  {
    "id": 2, 
    "tag": ["Developer Guideline"],
    "title": "Boas Práticas para Desenvolvimento",
    "prelude": "Ao incorporar esses princípios de Orientação a Objetos, você estará promovendo uma estrutura mais coesa, escalável e de fácil manutenção para seu projeto. Esses princípios são fundamentais para o desenvolvimento de sistemas robustos e flexíveis.",
    "url_header": "https://images.pexels.com/photos/430207/pexels-photo-430207.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "section": [
      {
        "sub_title": "Nomes Significativos",
        "paragraph": [
          "Escolha nomes descritivos para variáveis, funções e classes.",
          "Evite nomes genéricos, seja específico sobre a função."
        ]
      },
      {
        "sub_title": "Funções Pequenas e Concisas",
        "paragraph": [
          "Mantenha funções pequenas e focadas em uma única responsabilidade. Evite funções com muitos parâmetros."
        ]
      },
      {
        "sub_title": "Organização Lógica",
        "paragraph": [
          "Agrupe funções relacionadas. Mantenha uma estrutura hierárquica fácil de entender."
        ]
      },
      {
        "sub_title": "Evite Códigos Duplicados",
        "paragraph": [
          "Refatore trechos duplicados para funções ou classes reutilizáveis. Utilize herança ou composição para promover a reutilização."
        ]
      },
      {
        "sub_title": "Linguagem Ubíqua",
        "paragraph": [
          "Use uma linguagem comum entre desenvolvedores e especialistas do domínio. Evite ambiguidades na comunicação sobre o domínio."
        ]
      },
      {
        "sub_title": "Contexto Limitado",
        "paragraph": [
          "Defina limites claros entre contextos delimitados para evitar conflitos. Utilize contextos delimitados para garantir consistência e isolamento."
        ]
      },
      {
        "sub_title": "Modelo Rico",
        "paragraph": [
          "Desenvolva modelos ricos em comportamento, não apenas em dados. Utilize agregados para garantir consistência e transações."
        ]
      },
      {
        "sub_title": "Event-Driven Architecture",
        "paragraph": [
          "Implemente arquiteturas orientadas a eventos para reagir a mudanças no estado. Utilize eventos e validações para desinstanciar componentes."
        ]
      },
      {
        "sub_title": "Refatoração Contínua",
        "paragraph": [
          "Esteja disposto a refatorar código para melhorar a qualidade e a manutenibilidade. Utilize padrões de design quando apropriado."
        ]
      },
      {
        "sub_title": "Comunicação Eficiente",
        "paragraph": [
          "Promova a comunicação eficiente entre as camadas, evitando acoplamento excessivo."
        ]
      }
    ]
  },
  {
      "id": 3, 
    "tag": ["Developer Guideline"]
    , "title": "Princípios de Orientação a Objetos"
    , "prelude": "Siga os princípios SOLID (Single Responsibility, Open/Closed, Liskov Substitution, Interface Segregation, Dependency Inversion) para criar código modular e flexível."
    , "url_header": "https://images.pexels.com/photos/323645/pexels-photo-323645.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    , "section": [
        {
            "sub_title": "Encapsulamento"
            , "paragraph": [
                "Limitação de Acesso: Encapsule os detalhes internos das classes, expondo apenas o necessário. Utilize modificadores de acesso para controlar a visibilidade."
                , "Coerência Interna: Mantenha a consistência interna da classe, encapsulando comportamento e dados."
            ]
        }
        , {
            "sub_title": "Herança"
            , "paragraph": [
                "Faça sempre uso de uma Herança Significativa, utilize herança apenas quando houver uma relação clara. Evite herança apenas por conveniência."
            ]
        }
        , {
            "sub_title": "Polimorfismo"
            , "paragraph": [
                "Explore o polimorfismo para tratar objetos de maneira genérica. Use interfaces e classes abstratas para definir contratos."
            ]
        }
        , {
            "sub_title": "Composição"
            , "paragraph": [
                "Favoreça Composição sobre Herança, prefira composição para criar relações entre objetos. Isso promove maior flexibilidade e reutilização de código."
            ]
        }
        , {
            "sub_title": "Injeção de Dependência"
            , "paragraph": [
                "Utilize injeção de dependência para reduzir acoplamento. Facilite a substituição de implementações em tempo de execução."
            ]
        }
    ]
  },
  {
      "id": 4, 
    "tag": ["Reviewer Guideline"],
    "title": "Reviewr Guideline",
    "prelude": "Familiarize-se com o contexto da alteração. Leia as especificações e compreenda o propósito da mudança.",
    "url_header": "https://images.pexels.com/photos/5668858/pexels-photo-5668858.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "section": [
      {
        "sub_title": "Clareza e Legibilidade",
        "paragraph": [
          "Verifique se o código é claro, legível e segue as boas práticas de codificação. Analise se os nomes de variáveis, funções e classes são significativos."
        ]
      },
      {
        "sub_title": "Conformidade com Padrões",
        "paragraph": [
          "Certifique-se de que o código está em conformidade com os padrões de codificação estabelecidos."
        ]
      },
      {
        "sub_title": "Divisão Lógica",
        "paragraph": [
          "Avalie a divisão lógica do código em funções e classes. Garanta que cada componente tenha uma responsabilidade clara."
        ]
      },
      {
        "sub_title": "Lógica de Negócios",
        "paragraph": [
          "Avalie se a lógica de negócios está correta e atende aos requisitos."
        ]
      },
      {
        "sub_title": "Tratamento de Erros",
        "paragraph": [
          "Verifique se o código lida adequadamente com possíveis cenários de erro."
        ]
      },
      {
        "sub_title": "Eficiência e Desempenho",
        "paragraph": [
          "Avalie se o código é eficiente e considera questões de desempenho quando aplicável."
        ]
      },
      {
        "sub_title": "Encapsulamento e Coesão",
        "paragraph": [
          "Analise o uso adequado de encapsulamento e a coesão das classes e funções."
        ]
      },
      {
        "sub_title": "Herança e Composição",
        "paragraph": [
          "Verifique se a herança é utilizada adequadamente e se a composição é preferida quando apropriado."
        ]
      },
      {
        "sub_title": "Divisão em Camadas",
        "paragraph": [
          "Garanta que o código esteja organizado em camadas (front-end, camada de negócios, camada de persistência) de acordo com as melhores práticas."
        ]
      },
      {
        "sub_title": "Clareza e Convenções",
        "paragraph": [
          "Verifique se as mensagens de commit são claras, concisas e seguem convenções estabelecidas."
        ]
      },
      {
        "sub_title": "Referência a Problemas",
        "paragraph": [
          "Certifique-se de que as mensagens de commit referenciam problemas ou tarefas relacionadas."
        ]
      },
      {
        "sub_title": "Feedback Construtivo",
        "paragraph": ["Forneça feedback construtivo e sugestões para melhorias."]
      },
      {
        "sub_title": "Perguntas para o Autor",
        "paragraph": [
          "Faça perguntas para esclarecer intenções ou decisões de design."
        ]
      },
      {
        "sub_title": "Elogios e Reconhecimento",
        "paragraph": ["Reconheça o bom trabalho quando apropriado."]
      }
    ]
  }   
];
/*
===============================================
defini��o de documentos
===============================================
*/

module.exports = documentos;
