import type {
  Outils,
  Frameworks,
  Languages,
  ORM,
  Librairie,
  Methode,
} from "./types";

export const listOutils: Outils[] = [
  {
    name: "Git",
    svgPath: "/icons/outils/git.svg",
    description: "J'utilise Git pour gérer la majorité de mes projets.",
    highlight: true,
  },
  {
    name: "Docker",
    svgPath: "/icons/outils/docker.svg",
    description: "J'utilise Docker pour containeriser mes applications.",
  },
  {
    name: "Postman",
    svgPath: "/icons/outils/postman.svg",
    description: "J'utilise POSTMAN pour tester mes API.",
    highlight: true,
  },
  {
    name: "GitHub",
    svgPath: "/icons/outils/github-light.svg",
    description: "GitHub est la plateforme ou je depose mes projets.",
    highlight: true,
  },
  {
    name: "VSCode",
    svgPath: "/icons/outils/vscode.svg",
    description: "VSCode est l'éditeur de code que j'utilise le plus.",
    highlight: true,
  },
  {
    name: "IntelliJ",
    svgPath: "/icons/outils/intellijidea.svg",
    description:
      "IntelliJ est l'ide que j'ai utilisé lors de l'apprentissage de Java en BTS SIO.",
  },
  {
    name: "MySQL",
    svgPath: "/icons/outils/mysql.svg",
    description: "J'utilise MySQL dans presque tous mes projets.",
    highlight: true,
  },
];

export const listFrameworks: Frameworks[] = [
  {
    name: "Flutter",
    svgPath: "/icons/frameworks/flutter.svg",
    description:
      "Flutter est mon framework préféré pour du développement mobile.",
    highlight: true,
  },
  {
    name: "NextJs",
    svgPath: "/icons/frameworks/nextjs.svg",
    description:
      "Nextjs est le framework que j'utilise le plus pour le frontend web.",
    highlight: true,
  },
  {
    name: "Symfony",
    svgPath: "/icons/frameworks/symfony.svg",
    description:
      "Symfony est mon framework préférée pour du développement web.",
    highlight: true,
  },
  {
    name: "TailwindCss",
    svgPath: "/icons/frameworks/tailwindcss.svg",
    description:
      "J'utilise souvent tailwindcss dans mes projets React et NextJs",
  },
  {
    name: "ExpressJs",
    svgPath: "/icons/frameworks/expressjs.svg",
    description:
      "ExpressJs est mon framework NodeJs préféré que j'utilise pour créer des applications web.",
    highlight: true,
  },
  {
    name: "React Native",
    svgPath: "/icons/frameworks/reactnative.svg",
    description: "j'utilise React Native pour créer des applications personnel",
  },
];

export const listLangage: Languages[] = [
  {
    name: "HTML",
    svgPath: "/icons/langages/html5.svg",
    description: "J'ai appris HTML et je l'utilise quotidiennement.",
  },
  {
    name: "CSS",
    svgPath: "/icons/langages/css-3.svg",
    description: "J'ai appris CSS et je l'utilise quotidiennement.",
  },
  {
    name: "SCSS",
    svgPath: "/icons/langages/sass-1.svg",
    description: "J'utilise SCSS dans la majorité de mes projets",
    highlight: true,
  },
  {
    name: "Javascript",
    svgPath: "/icons/langages/javascript.svg",
    description: "J'utilise souvent Javascript pour le développement web.",
    highlight: true,
  },
  {
    name: "PHP",
    svgPath: "/icons/langages/php.svg",
    description: "PHP est mon language préféré pour le développement web.",
    highlight: true,
  },
  {
    name: "Java",
    svgPath: "/icons/langages/java.svg",
    description: "J'utilise Java pour de la programmation orientée objet.",
  },
  {
    name: "SQL",
    svgPath: "/icons/langages/sql.svg",
    description:
      "J'utilise SQL dans presque tout mes projets pour stocker des données",
  },
  {
    name: "C#",
    svgPath: "/icons/langages/csharp.svg",
    description: "j'utilise C# pour de la programmation orientée objet.",
  },
  {
    name: "Typescript",
    svgPath: "/icons/langages/typescript.svg",
    description: "Lors que j'utilise NextJs ou React, j'utilise Typescript",
    highlight: true,
  },
  {
    name: "Dart",
    svgPath: "/icons/langages/dart.svg",
    description: "J'utilise Dart lors de mes projets Flutter",
  },
  {
    name: "Twig",
    svgPath: "/icons/langages/twig.svg",
    description: "J'utilise Twig dans mes projets symfony",
  },
  {
    name: "JSON",
    svgPath: "/icons/langages/json.svg",
    description: "J'utilise Json",
  },
];

export const ListORM: ORM[] = [
  {
    name: "Doctrine",
    svgPath: "/icons/orm/doctrine.svg",
    description:
      "J'ai utilisé Doctrine lors de mon projet de BTS avec l'utilisation de Symfony",
  },
  {
    name: "Prisma",
    svgPath: "/icons/orm/prisma.svg",
    description: "J'utilise Prisma dans des projets personnels",
    highlight: true,
  },
];

export const listLibrairie: Librairie[] = [
  {
    name: "JQuery",
    svgPath: "/icons/librairies/jquery.svg",
    description:
      "J'ai utilisé JQuery lors de mon stage de 2ème année de BTS SIO.",
  },
  {
    name: "React",
    svgPath: "/icons/librairies/react_light.svg",
    description:
      "J'ai utilisé React lors de mon bachelor ainsi que pour des projets personnels.",
    highlight: true,
  },
];
export const listMethode: Methode[] = [
  {
    name: "Agile",
    svgPath: "/icons/methode/agile.svg",
    description:
      "J'ai utilisé Agile lors de mon stage de 2ème année de BTS SIO.",
  },
  {
    name: "Scrum",
    svgPath: "/icons/methode/scrum.svg",
    description:
      "J'ai utilisé Scrum lors de mon stage de 2ème année de BTS SIO.",
  },
  {
    name: "Kanban",
    svgPath: "/icons/methode/kanban.svg",
    description:
      "J'ai utilisé Kanban lors de mon stage de 2ème année de BTS SIO.",
  },
  {
    name: "CI/CD",
    svgPath: "/icons/methode/ci-cd.svg",
    description: "J'ai utilisé CI/CD lors de projets personnels",
  },
];
