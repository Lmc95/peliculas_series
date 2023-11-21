// PELICULAS
let peliculas = [
    {
        imagen: '/assets/peliculas/john_wick.avif',
        titulo: 'John Wick',
        sipnosis: 'La ciudad de Nueva York se convierte en el patio acribillado a balazos de un ex-asesino mientras él elimina a los gánsteres que destruyeron todo lo que él quería.',
        actores: 'Keanu Reeves, Michael Nyqvist, Ian McShane, John Leguizamo, Willem Dafoe, Alfie Allen, Dean Winters, Adrianne Palicki, Lance Reddick, Bridget Moynahan, David Patrick Kelly, Randall Duk Kim, Munro M. Bonnell, Omer Barnea, Toby Leonard Moore',
        genero: 'Acción, Suspenso',
        estreno: 2014
    },
    {
        imagen: '/assets/peliculas/iron_man.avif',
        titulo: 'Iron Man',
        sipnosis: 'El multimillonario fabricante de armas Tony Stark (Robert Downey Jr.) debe enfrentarse a su turbio pasado después de sufrir un accidente con una de sus armas. Equipado con una armadura de última generación tecnológica, se convierte en “El hombre de hierro”, un héroe que se dedica a combatir el mal en todo el mundo',
        actores: 'Robert Downey Jr., Terrence Howard, Jeff Bridges, Gwyneth Paltrow, Leslie Bibb, Bill Smitrovich, Paul Bettany, Jon Favreau, Shaun Toub, Faran Tahir, Clark Gregg, Peter Billingsley, Sayed Badreya, Tim Guinee, Will Lyman',
        genero: 'Acción, Ciencia ficción, Aventura',
        estreno: 2008
    },
    {
        imagen: '/assets/peliculas/jurassic_world.avif',
        titulo: 'Jurassic World: Mundo Jurásico',
        sipnosis: 'Veintidós años después de lo ocurrido en Jurassic Park, la isla Nublar ha sido transformada en un enorme parque temático, Jurassic Wold, con versiones «domesticadas» de algunos de los dinosaurios más conocidos. Cuando todo parece ir sobre ruedas y ser el negocio del siglo, un nuevo dinosaurio de especie desconocida, pues ha sido creado manipulando genéticamente su ADN, y que resulta ser mucho más inteligente de lo que se pensaba, se escapa de su recinto y comienza a causar estragos entre los visitantes del Parque',
        actores: 'Chris Pratt, Bryce Dallas Howard, Ty Simpkins, Nick Robinson, Vincent D Onofrio, BD Wong, Omar Sy, Jake Johnson, Irrfan Khan, Judy Greer, Lauren Lapkus, Brian Tee, Katie McGrath, Andy Buckley, Eric Edelstein',
        genero: 'Acción, Aventura, Ciencia ficción, Suspenso',
        estreno: 2015
    },
    {
        imagen: '/assets/peliculas/thor.avif',
        titulo: 'Thor',
        sipnosis: 'El poderoso Thor es desterrado del fantástico reino de Asgard por su padre Odin debido a su arrogancia y es enviado a Midgard, la Tierra, para que viva entre los humanos. Ahí conocerá a Jane y sus amigos, y en donde aprenderá para convertirse en un gran defensor de este reino.',
        actores: 'Chris Hemsworth, Natalie Portman, Tom Hiddleston, Anthony Hopkins, Stellan Skarsgård, Kat Dennings, Clark Gregg, Colm Feore, Idris Elba, Ray Stevenson, Tadanobu Asano, Josh Dallas, Jaimie Alexander, Rene Russo, Adriana Barraza',
        genero: 'Aventura, Ciencia ficción, Acción',
        estreno: 2011
    },
    {
        imagen: '/assets/peliculas/ip_man.avif',
        titulo: 'Ip Man',
        sipnosis: 'Foshan, años treinta. Ip Man, respetado maestro de Wing Chun, combina el estudio de las artes marciales con los combates ocasionales a los que se ve forzado por parte de sus admiradores. Son tiempos de prosperidad a los que la guerra con Japón amenaza con poner fin. Con la ocupación estallará la tragedia e Ip Man se verá obligado a defender el honor de su pueblo. Ip Man (o también conocido como Yip Man), fue maestro y mentor de Bruce Lee.',
        actores: 'Donnie Yen, Simon Yam, Lynn Hung, Hiroyuki Ikeuchi, Lam Ka-tung, Fan Siu-wong, Xing Yu, Wong Yau-Nam, Dennis To Yue-Hong, Calvin Cheng Ka-Sing, Chen Zhihui, Shibuya Tenma, Li Ze, Li Qilong, Zhang Bo',
        genero: 'Drama, Acción, Historia',
        estreno: 2008
    }
]

// SERIES
let series = [
    // BREAKING BAD - 1 TEMPORADA
    {
        titulo: 'Breaking Bad',
        sipnosis: 'Tras cumplir 50 años, Walter White , un profesor de química de un instituto de Albuquerque, Nuevo México, se entera de que tiene un cáncer de pulmón incurable. Casado con Skyler  y con un hijo discapacitado , la brutal noticia lo impulsa a dar un drástico cambio a su vida: decide, con la ayuda de un antiguo alumno , fabricar anfetaminas y ponerlas a la venta. Lo que pretende es liberar a su familia de problemas económicos cuando se produzca el fatal desenlace.',
        actores: 'Bryan Cranston, Aaron Paul, Anna Gunn, Dean Norris, Jonathan Banks, Bob Odenkirk, Betsy Brandt, RJ Mitte, Bryan Cranston',
        genero: 'Drama, Crimen',
        estreno: 2008,
        temporadas: [
            {
                numero: 1,
                capitulos: [
                    {
                        titulo: 'cap 1',
                        url: 'URL de video uno'
                    },
                    {
                        titulo: 'cap 2',
                        url: 'URL de video uno'
                    },
                    {
                        titulo: 'cap 3',
                        url: 'URL de video uno'
                    },
                    {
                        titulo: 'cap 4',
                        url: 'URL de video uno'
                    },
                    {
                        titulo: 'cap 5',
                        url: 'URL de video uno'
                    },
                    {
                        titulo: 'cap 6',
                        url: 'URL de video uno'
                    },
                    {
                        titulo: 'cap 7',
                        url: 'URL de video uno'
                    },
                    {
                        titulo: 'cap 8',
                        url: 'URL de video uno'
                    },
                    {
                        titulo: 'cap 9',
                        url: 'URL de video uno'
                    },
                    {
                        titulo: 'cap 10',
                        url: 'URL de video uno'
                    },
                ]
            }
        ]
    },
    // VIKINGS - 3 TEMPORADAS
    {
        titulo: 'Vikings',
        sipnosis: 'Vikingos es una serie que está basada en las leyendas sobre el vikingo Ragnar Lodbrok, (Travis Fimmel) uno de los héroes más famosos de la cultura nórdica que saqueó Northumbria, Francia y Bretaña. La serie retrata a Lodbrok como un guerrero curioso y navegante, tecnológicamente innovador, ambicioso y rebelde, que hace construir un barco a su amigo Floki, para lanzarse a explorar los territorios al oeste de Escandinavia desobedeciendo al jefe tribal, el Jarl (Conde) Haraldson, que ordena viajar hacia el este (orientación cardinal en la que se especulaba con gran riqueza en aquella época).',
        actores: 'Alex Høgh Andersen, Jordan Patrick Smith, Marco Ilsø, Peter Franzén, Danila Kozlovsky, Georgia Hirst',
        genero: 'Acción, Aventura, Drama, Guerra',
        estreno: 2013,
        temporadas: [
            {
                numero: 1,
                capitulos: [
                    {
                        titulo: 'cap 1',
                        url: 'URL de video uno'
                    },
                    {
                        titulo: 'cap 2',
                        url: 'URL de video uno'
                    },
                    {
                        titulo: 'cap 3',
                        url: 'URL de video uno'
                    },
                    {
                        titulo: 'cap 4',
                        url: 'URL de video uno'
                    },
                    {
                        titulo: 'cap 5',
                        url: 'URL de video uno'
                    }
                ]
            },
            {
                numero: 2,
                capitulos: [
                    {
                        titulo: 'cap 1',
                        url: 'URL de video uno'
                    },
                    {
                        titulo: 'cap 2',
                        url: 'URL de video uno'
                    },
                    {
                        titulo: 'cap 3',
                        url: 'URL de video uno'
                    },
                    {
                        titulo: 'cap 4',
                        url: 'URL de video uno'
                    },
                    {
                        titulo: 'cap 5',
                        url: 'URL de video uno'
                    }
                ]
            },
            {
                numero: 3,
                capitulos: [
                    {
                        titulo: 'cap 1',
                        url: 'URL de video uno'
                    },
                    {
                        titulo: 'cap 2',
                        url: 'URL de video uno'
                    },
                    {
                        titulo: 'cap 3',
                        url: 'URL de video uno'
                    },
                    {
                        titulo: 'cap 4',
                        url: 'URL de video uno'
                    },
                    {
                        titulo: 'cap 5',
                        url: 'URL de video uno'
                    }
                ]
            }
        ]
    },
    // PEAKY BLINDERS - 2 TEMPORADAS
    {
        titulo: 'Peaky Blinders',
        sipnosis: 'En Gran Bretaña, Reino Unido se recuperan de la desesperación de la Gran Guerra, las personas sobreviven a como pueden, y las bandas criminales proliferan en una nación sacudida económicamente. Es justamente aquí donde una familia de gánsteres irlandeses de origen nómada (a veces llamados gitanos o chatarreros) asentada en Birmingham (los Peaky Blinders) justo después de la Primera Guerra Mundial, dirigen un local de apuestas hípicas en la ciudad. Las acciones del ambicioso, respetado, temerario y peligroso jefe de la banda, Thomas Shelby, llaman la atención del Inspector jefe Chester Campbell, un detective de la Real Policía Irlandesa que es enviado por el mismo Winston Churchill desde Belfast donde había sido enviado a limpiar la ciudad del Ejército Republicano Irlandés (IRA), comunistas, pandillas y delincuentes comunes.',
        actores: 'Cillian Murphy, Paul Anderson, Sophie Rundle, Natasha O Keeffe',
        genero: 'Drama, Crimen',
        estreno: 2013,
        temporadas: [
            {
                numero: 1,
                capitulos: [
                    {
                        titulo: 'cap 1',
                        url: 'URL de video uno'
                    },
                    {
                        titulo: 'cap 2',
                        url: 'URL de video uno'
                    },
                    {
                        titulo: 'cap 3',
                        url: 'URL de video uno'
                    },
                    {
                        titulo: 'cap 4',
                        url: 'URL de video uno'
                    },
                    {
                        titulo: 'cap 5',
                        url: 'URL de video uno'
                    }
                ]
            },
            {
                numero: 2,
                capitulos: [
                    {
                        titulo: 'cap 1',
                        url: 'URL de video uno'
                    },
                    {
                        titulo: 'cap 2',
                        url: 'URL de video uno'
                    },
                    {
                        titulo: 'cap 3',
                        url: 'URL de video uno'
                    },
                    {
                        titulo: 'cap 4',
                        url: 'URL de video uno'
                    },
                    {
                        titulo: 'cap 5',
                        url: 'URL de video uno'
                    }
                ]
            }
        ]
    },
    // GAME OF THRONES - 4 TEMPORADAS
    {
        titulo: 'Game of Thrones',
        sipnosis: 'En un mundo fantástico y en un contexto medieval varias familias, relativas a la nobleza, se disputan el poder para dominar el territorio ficticio de Poniente (Westeros) y tomar el control de los Siete Reinos desde el Trono de Hierro, lugar donde el rey ejerce el poder.',
        actores: 'Peter Dinklage, Kit Harington, Nikolaj Coster-Waldau, Lena Headey, Emilia Clarke, Liam Cunningham, Maisie Williams, Isaac Hempstead-Wright, Sophie Turner, John Bradley, Rory McCann, Joe Dempsie, Gwendoline Christie, Jacob Anderson',
        genero: 'Ciencia ficción, Fantasía, Drama, Acción, Aventura',
        estreno: 2011,
        temporadas: [
            {
                numero: 1,
                capitulos: [
                    {
                        titulo: 'cap 1',
                        url: 'URL de video uno'
                    },
                    {
                        titulo: 'cap 2',
                        url: 'URL de video uno'
                    },
                    {
                        titulo: 'cap 3',
                        url: 'URL de video uno'
                    },
                    {
                        titulo: 'cap 4',
                        url: 'URL de video uno'
                    },
                    {
                        titulo: 'cap 5',
                        url: 'URL de video uno'
                    }
                ]
            },
            {
                numero: 2,
                capitulos: [
                    {
                        titulo: 'cap 1',
                        url: 'URL de video uno'
                    },
                    {
                        titulo: 'cap 2',
                        url: 'URL de video uno'
                    },
                    {
                        titulo: 'cap 3',
                        url: 'URL de video uno'
                    },
                    {
                        titulo: 'cap 4',
                        url: 'URL de video uno'
                    },
                    {
                        titulo: 'cap 5',
                        url: 'URL de video uno'
                    }
                ]
            },
            {
                numero: 3,
                capitulos: [
                    {
                        titulo: 'cap 1',
                        url: 'URL de video uno'
                    },
                    {
                        titulo: 'cap 2',
                        url: 'URL de video uno'
                    },
                    {
                        titulo: 'cap 3',
                        url: 'URL de video uno'
                    },
                    {
                        titulo: 'cap 4',
                        url: 'URL de video uno'
                    },
                    {
                        titulo: 'cap 5',
                        url: 'URL de video uno'
                    }
                ]
            },
            {
                numero: 4,
                capitulos: [
                    {
                        titulo: 'cap 1',
                        url: 'URL de video uno'
                    },
                    {
                        titulo: 'cap 2',
                        url: 'URL de video uno'
                    },
                    {
                        titulo: 'cap 3',
                        url: 'URL de video uno'
                    },
                    {
                        titulo: 'cap 4',
                        url: 'URL de video uno'
                    },
                    {
                        titulo: 'cap 5',
                        url: 'URL de video uno'
                    }
                ]
            }
        ]
    }
];

export { peliculas, series};

