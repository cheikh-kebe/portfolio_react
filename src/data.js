import Stacker from './assets/images/stack.gif'
import Jungler from './assets/images/jungler.gif'
import Logo from './assets/images/favicon.ico'
export const works = [
  {
    title: "Jungler",
    subtitle: "Ruby On Rails, HTML, CSS, Heroku",
    description:
      "Plateforme de matchmaking pour les joueurs de LEAGUE OF LEGEND. Le but étant de permettre aux joueurs de matcher selon leurs stats et leurs objectifs de jeu (peer-gaming, try-hard ou chill)",
    image: Jungler,
    link: "https://jungler-thp.herokuapp.com",
  },
  {
    title: "Stacker.io",
    subtitle: "Ruby On Rails API, React, MaterialUI, Heroku ",
    description:
      "SPA basée sur le référencement des entreprises selon leur stack afin daider les développeurs juniors dans leurs premières prospections d'emploi.",
    image: Stacker,
    link: "https://stacker-front.herokuapp.com",
  },
];

export const skills = [
  {
    name: 'HTML'
  },
  {
    name: 'PostgreSQL'
  },
  {
    name: 'Ruby'
  },
  {
    name: 'RubyOnRails'
  },
  {
    name: 'JavaScript'
  },
  {
    name: 'React'
  },
  {
    name: 'Git & Github'
  },
  {
    name: 'Heroku'
  },
];

export const testimonials = [
  {
    company: "Jungler",
    name: "Valentin B.",
    quote:
      "Humainement, je retiens de Cheikh, avant tout sa constance et sa force tranquille : toujours prêt, toujours d'une humeur égale, ce qui est très appréciable dans une intensité telle que celle de THP. Je retiens aussi son esprit d'équipe : le paradigme collectif est un élément fondamental dans sa façon de travailler, et l'on sent son authenticité dans l'expression du <<NOUS>>",
    image: Jungler,
  },
  {
    company: "Stacker.io",
    name: "Benoit F.",
    quote:
      "Techniquement, Cheikh est quelqu'un d'attaché aux conventions, il aime les choses bien faites. Je l'ai trouvé particulièrement polyvalent, autant à l'aise sur des sujets front ou des sujets backend, ce qui fait de lui quelqu'un avec un vrai potentiel full-stack.",
    image: Logo,
  }
];