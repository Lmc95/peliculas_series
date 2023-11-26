// PELICULAS
let peliculas = [
    {
        bg: '/assets/peliculas/bg_peliculas/bg_jw1.png',
        img: '/assets/peliculas/img/john_wick.avif',
        titulo: 'John Wick',
        sipnosis: 'La ciudad de Nueva York se convierte en el patio acribillado a balazos de un ex-asesino mientras él elimina a los gánsteres que destruyeron todo lo que él quería.',
        actores: 'Keanu Reeves, Michael Nyqvist, Ian McShane, John Leguizamo, Willem Dafoe, Alfie Allen, Dean Winters, Adrianne Palicki, Lance Reddick, Bridget Moynahan, David Patrick Kelly, Randall Duk Kim, Munro M. Bonnell, Omer Barnea, Toby Leonard Moore',
        genero: 'Acción, Suspenso',
        estreno: 2014
    },
    {
        bg: '/assets/peliculas/bg_peliculas/bg_iron-man.png',
        img: '/assets/peliculas/img/iron_man.avif',
        titulo: 'Iron Man',
        sipnosis: 'El multimillonario fabricante de armas Tony Stark (Robert Downey Jr.) debe enfrentarse a su turbio pasado después de sufrir un accidente con una de sus armas. Equipado con una armadura de última generación tecnológica, se convierte en “El hombre de hierro”, un héroe que se dedica a combatir el mal en todo el mundo',
        actores: 'Robert Downey Jr., Terrence Howard, Jeff Bridges, Gwyneth Paltrow, Leslie Bibb, Bill Smitrovich, Paul Bettany, Jon Favreau, Shaun Toub, Faran Tahir, Clark Gregg, Peter Billingsley, Sayed Badreya, Tim Guinee, Will Lyman',
        genero: 'Acción, Ciencia ficción, Aventura',
        estreno: 2008
    },
    {
        bg: '/assets/peliculas/bg_peliculas/bg_jurassic-park.png',
        img: '/assets/peliculas/img/jurassic_world.avif',
        titulo: 'Jurassic World: Mundo Jurásico',
        sipnosis: 'Veintidós años después de lo ocurrido en Jurassic Park, la isla Nublar ha sido transformada en un enorme parque temático, Jurassic Wold, con versiones «domesticadas» de algunos de los dinosaurios más conocidos. Cuando todo parece ir sobre ruedas y ser el negocio del siglo, un nuevo dinosaurio de especie desconocida, pues ha sido creado manipulando genéticamente su ADN, y que resulta ser mucho más inteligente de lo que se pensaba, se escapa de su recinto y comienza a causar estragos entre los visitantes del Parque',
        actores: 'Chris Pratt, Bryce Dallas Howard, Ty Simpkins, Nick Robinson, Vincent D Onofrio, BD Wong, Omar Sy, Jake Johnson, Irrfan Khan, Judy Greer, Lauren Lapkus, Brian Tee, Katie McGrath, Andy Buckley, Eric Edelstein',
        genero: 'Acción, Aventura, Ciencia ficción, Suspenso',
        estreno: 2015
    },
    {
        bg: '/assets/peliculas/bg_peliculas/bg_thor.png',
        img: '/assets/peliculas/img/thor.avif',
        titulo: 'Thor',
        sipnosis: 'El poderoso Thor es desterrado del fantástico reino de Asgard por su padre Odin debido a su arrogancia y es enviado a Midgard, la Tierra, para que viva entre los humanos. Ahí conocerá a Jane y sus amigos, y en donde aprenderá para convertirse en un gran defensor de este reino.',
        actores: 'Chris Hemsworth, Natalie Portman, Tom Hiddleston, Anthony Hopkins, Stellan Skarsgård, Kat Dennings, Clark Gregg, Colm Feore, Idris Elba, Ray Stevenson, Tadanobu Asano, Josh Dallas, Jaimie Alexander, Rene Russo, Adriana Barraza',
        genero: 'Aventura, Ciencia ficción, Acción',
        estreno: 2011
    },
    {
        bg: '/assets/peliculas/bg_peliculas/bg_ip-man.png',
        img: '/assets/peliculas/img/ip_man.avif',
        titulo: 'Ip Man',
        sipnosis: 'Foshan, años treinta. Ip Man, respetado maestro de Wing Chun, combina el estudio de las artes marciales con los combates ocasionales a los que se ve forzado por parte de sus admiradores. Son tiempos de prosperidad a los que la guerra con Japón amenaza con poner fin. Con la ocupación estallará la tragedia e Ip Man se verá obligado a defender el honor de su pueblo. Ip Man (o también conocido como Yip Man), fue maestro y mentor de Bruce Lee.',
        actores: 'Donnie Yen, Simon Yam, Lynn Hung, Hiroyuki Ikeuchi, Lam Ka-tung, Fan Siu-wong, Xing Yu, Wong Yau-Nam, Dennis To Yue-Hong, Calvin Cheng Ka-Sing, Chen Zhihui, Shibuya Tenma, Li Ze, Li Qilong, Zhang Bo',
        genero: 'Drama, Acción, Historia',
        estreno: 2008
    },
    {
        bg: '/assets/peliculas/bg_peliculas/bg_cars3.png',
        img: '/assets/peliculas/img/cars-3.avif',
        titulo: 'Cars 3',
        sipnosis: 'La elegante corredora Cruz Ramirez ayudará al veterano campeón Rayo McQueen a regresar a la pista enfrentando a una nueva generación de corredores de alta tecnología. Pronto, Rayo McQueen demostrará que sigue siendo el mejor del mundo.',
        genero: 'Animación, Aventura, Comedia',
        actores: 'Owen Wilson, Cristela Alonzo, Chris Cooper, Nathan Fillion, Armie Hammer, Larry the Cable Guy, Bonnie Hunt, Lea DeLaria, Kerry Washington, Tony Shalhoub, Guido Quaroni, Lloyd Sherr, Paul Dooley, Cheech Marin, Jenifer Lewis',
        estreno: 2017
    },
    {
        bg: '/assets/peliculas/bg_peliculas/bg_corazones-hierro.png',
        img: '/assets/peliculas/img/corazones-de-hierro.avif',
        titulo: 'Corazones de hierro',
        sipnosis: 'Abril de 1945, la guerra está a punto de acabar. Al mando del veterano sargento Wardaddy (Brad Pitt), una brigada de cinco soldados americanos a bordo de un tanque -el Fury- ha de luchar contra un ejército nazi al borde de la desesperación, pues los alemanes saben que su derrota estaba ya cantada por aquel entonces.',
        actores: 'Brad Pitt, Shia LaBeouf, Logan Lerman, Michael Peña, Jon Bernthal, Jim Parrack, Brad William Henke, Kevin Vance, Xavier Samuel, Jason Isaacs, Anamaria Marinca, Alicia von Rittberg, Scott Eastwood, Laurence Spellman, Daniel Betts',
        genero: 'Guerra, Drama, Acción',
        estreno: 2014
    },
    {
        bg: '/assets/peliculas/bg_peliculas/bg_lobo-wallstreet.png',
        img: '/assets/peliculas/img/lobo-wall-street.avif',
        titulo: 'El lobo de Wall Street',
        sipnosis: 'Película basada en hechos reales del corredor de bolsa neoyorquino Jordan Belfort (Leonardo DiCaprio). A mediados de los años 80, Belfort era un joven honrado que perseguía el sueño americano, pero pronto en la agencia de valores aprendió que lo más importante no era hacer ganar a sus clientes, sino ser ambicioso y ganar una buena comisión. Su enorme éxito y fortuna le valió el apodo de “El lobo de Wall Street”. Dinero, poder, mujeres, drogas. Las tentaciones abundaban y el temor a la ley era irrelevante. Jordan y su manada de lobos consideraban que la discreción era una cualidad anticuada; nunca se conformaban con lo que tenían.',
        actores: 'Leonardo DiCaprio, Jonah Hill, Margot Robbie, Matthew McConaughey, Kyle Chandler, Rob Reiner, Jon Bernthal, Jon Favreau, Jean Dujardin, Joanna Lumley, Cristin Milioti, Christine Ebersole, Shea Whigham, Katarina Čas, P.J. Byrne',
        genero: 'Crimen, Drama, Comedia',
        estreno: 2013
    },
    {
        bg: '/assets/peliculas/bg_peliculas/bg_masacre-texas.png',
        img: '/assets/peliculas/img/masacre-texas.avif',
        titulo: 'La Masacre de Texas',
        sipnosis: 'Chrissie (Jordana Brewster) y sus amigos (Matthew Bomer, Taylor Handley, Diora Baird) se preparan para realizar un viaje antes de enviar a uno de ellos a Vietnam. A lo largo del camino, unos motociclistas (Lee Tergesen, Cyia Batten) acosan a los amigos y provocan un accidente que expulsa a Chrissie del vehículo. El policía que llega al lugar mata a uno de los motociclistas y lleva a los amigos a la casa en donde el joven Leatherface (Andrew Bryniarski) está aprendiendo sobre el terror.',
        actores: 'Jordana Brewster, Taylor Handley, Diora Baird, Matt Bomer, R. Lee Ermey, Lew Temple, Andrew Bryniarski, Tim DeZarn, Lee Tergesen, Cyia Batten, Terrence Evans, Marietta Marich, L.A. Calkins, Allison Marich, Marcus H. Nelson',
        genero: 'Terror',
        estreno: 2006
    },
    {
        bg: '/assets/peliculas/bg_peliculas/bg_oppenheimer.png',
        img: '/assets/peliculas/img/oppenheimer.avif',
        titulo: 'Oppenheimer',
        sipnosis: 'Película sobre el físico J. Robert Oppenheimer y su papel como desarrollador de la bomba atómica. Basada en el libro (American Prometheus: The Triumph and Tragedy of J. Robert Oppenheimer) de Kai Bird y Martin J. Sherwin.',
        actores: 'Cillian Murphy, Emily Blunt, Matt Damon, Robert Downey Jr., Florence Pugh, Josh Hartnett, Casey Affleck, Rami Malek, Kenneth Branagh, Jason Clarke, Dylan Arnold, Tom Conti, James D Arcy, David Dastmalchian, Dane DeHaan',
        genero: 'Drama, Historia',
        estreno: 2023
    },
    {
        bg: '/assets/peliculas/bg_peliculas/bg_sangre-vikinga.png',
        img: '/assets/peliculas/img/sed-de-sangre-vikinga.avif',
        titulo: 'Sed de sangre Vikinga',
        sipnosis: 'Una banda de vikingos huye de un grupo de berserkers sedientos de sangre que quieren luchar hasta la muerte.',
        actores: 'Stephen Samson, Madalena Alberto, Jodyanne Richardson, Jamie Sordyl, Andrea Bechis, Julia Quayle, Steevan Glover, Gaston Alexander, Simon Ellis, Alister Hawke, Harrison Thomas Boxley',
        genero: 'Acción, Historia',
        estreno: 2023
    },
    {
        bg: '/assets/peliculas/bg_peliculas/bg_wall-e.png',
        img: '/assets/peliculas/img/wall-e.avif',
        titulo: 'Wall-E',
        sipnosis: 'En un futuro lejano, un pequeño robot recolector de residuos se embarca inadvertidamente en un viaje espacial que decidirá en última instancia el destino de la humanidad.',
        actores: 'Elissa Knight, Jeff Garlin, Fred Willard, John Ratzenberger, Kathy Najimy, Sigourney Weaver, Teddy Newton, Bob Bergen, John Cygan, Paul Eiding, Donald Fullilove, Teresa Ganzel, Mickie McGowan, Laraine Newman, Lori Alan',
        genero: 'Animación, Ciencia ficción',
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


export { peliculas, series };