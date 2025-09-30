"use client";

import Image from "next/image";



// Types pour les compétences
type Outils = {
  name: string;
  svgPath: string;
  description: string;
};

type Frameworks = {
  name: string;
  svgPath: string;
  description: string;
};

type Languages = {
  name: string;
  svgPath: string;
  description: string;
};

type ORM = {
  name: string;
  svgPath: string;
  description: string;
};

type Librairie = {
  name: string;
  svgPath: string;
  description: string;
};

// Données des compétences
export const listOutils: Outils[] = [
  {
    name: "Git",
    svgPath: "/icons/outils/git.svg",
    description: "Git est un logiciel de gestion de versions décentralisé.",
  },
  {
    name: "Docker",
    svgPath: "/icons/outils/docker.svg",
    description:
      "Docker est un logiciel libre permettant de lancer des applications dans des conteneurs.",
  },
  {
    name: "Postman",
    svgPath: "/icons/outils/postman.svg",
    description: "Postman est un logiciel permettant de tester des API.",
  },
  {
    name: "GitHub",
    svgPath: "/icons/outils/github-light.svg",
    description: "GitHub est une plateforme de développement collaboratif.",
  },
  {
    name: "GitHub Copilot",
    svgPath: "/icons/outils/copilot.svg",
    description:
      "GitHub Copilot est une extension pour VSCode qui permet de générer du code.",
  },
  {
    name: "VSCode",
    svgPath: "/icons/outils/vscode.svg",
    description: "VSCode est un éditeur de code open-source.",
  },
  {
    name: "IntelliJ",
    svgPath: "/icons/outils/intellijidea.svg",
    description:
      "IntelliJ est un environnement de développement intégré pour Java.",
  },
  {
    name: "MySQL",
    svgPath: "/icons/outils/mysql.svg",
    description: "MySQL est un système de gestion de base de données.",
  },
  {
    name: "SQLite",
    svgPath: "/icons/outils/sqlite.svg",
    description:
      "SQLite est un système de gestion de base de données relationnelle.",
  },
];

export const listFrameworks: Frameworks[] = [
  {
    name: "Flutter",
    svgPath: "/icons/frameworks/flutter.svg",
    description:
      "Flutter est un framework Dart pour créer des applications mobiles rapidement.",
  },
  {
    name: "NextJs",
    svgPath: "/icons/frameworks/nextjs.svg",
    description:
      "NextJs est un framework React pour créer des applications web rapidement.",
  },
  {
    name: "AngularJS",
    svgPath: "/icons/frameworks/angularjs.svg",
    description:
      "AngularJS est un framework JavaScript pour créer des applications web rapidement.",
  },
  {
    name: "Symfony",
    svgPath: "/icons/frameworks/symfony.svg",
    description:
      "Symfony est un framework PHP pour créer des applications web rapidement.",
  },
  {
    name: "TailwindCss",
    svgPath: "/icons/frameworks/tailwindcss.svg",
    description:
      "TailwindCss est un framework CSS pour créer des interfaces web rapidement.",
  },
  {
    name: "ExpressJs",
    svgPath: "/icons/frameworks/expressjs.svg",
    description:
      "ExpressJs est un framework NodeJs pour créer des applications web rapidement.",
  },
  {
    name: "React Native",
    svgPath: "/icons/frameworks/reactnative.svg",
    description:
      "React Native est un framework JavaScript pour créer des applications mobiles rapidement.",
  },
];

export const listLangage: Languages[] = [
  {
    name: "HTML",
    svgPath: "/icons/langages/html5.svg",
    description: "HTML est un langage de balisage.",
  },
  {
    name: "CSS",
    svgPath: "/icons/langages/css-3.svg",
    description: "CSS est un langage de style.",
  },
  {
    name: "SCSS",
    svgPath: "/icons/langages/sass-1.svg",
    description: "SCSS est un préprocesseur CSS.",
  },
  {
    name: "Javascript",
    svgPath: "/icons/langages/javascript.svg",
    description: "JavaScript est un langage de programmation côté client.",
  },
  {
    name: "PHP",
    svgPath: "/icons/langages/php.svg",
    description: "PHP est un langage de programmation côté serveur.",
  },
  {
    name: "Java",
    svgPath: "/icons/langages/java.svg",
    description: "Java est un langage de programmation orienté objet.",
  },
  {
    name: "SQL",
    svgPath: "/icons/langages/sql.svg",
    description: "SQL est un langage de requête structurée.",
  },
  {
    name: "Python",
    svgPath: "/icons/langages/python.svg",
    description: "Python est un langage de programmation interprété.",
  },
  {
    name: "C#",
    svgPath: "/icons/langages/csharp.svg",
    description: "C# est un langage de programmation orienté objet.",
  },
  {
    name: "Typescript",
    svgPath: "/icons/langages/typescript.svg",
    description: "Typescript est un sur-ensemble de JavaScript.",
  },
  {
    name: "Dart",
    svgPath: "/icons/langages/dart.svg",
    description: "Dart est un langage de programmation développé par Google.",
  },
  {
    name: "Twig",
    svgPath: "/icons/langages/twig.svg",
    description: "Twig est un moteur de templates pour PHP.",
  },
  {
    name: "JSON",
    svgPath: "/icons/langages/json.svg",
    description: "JSON est un format de données léger.",
  },
];

export const ListORM: ORM[] = [
  {
    name: "Doctrine",
    svgPath: "/icons/orm/doctrine.svg",
    description:
      "Doctrine est un ORM pour PHP qui permet de gérer les bases de données.",
  },
  {
    name: "Prisma",
    svgPath: "/icons/orm/prisma.svg",
    description:
      "Prisma est un ORM pour Node.js qui permet de gérer les bases de données.",
  },
];

export const listLibrairie: Librairie[] = [
  {
    name: "JQuery",
    svgPath: "/icons/librairies/jquery.svg",
    description:
      "JQuery est une librairie JavaScript pour faciliter la manipulation du DOM.",
  },
];

// Composant SkillCard
const SkillCard: React.FC<{
  name: string;
  svgPath: string;
  description: string;
}> = ({ name, svgPath, description }) => (
  <div className="flex flex-col items-center p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
    <Image src={svgPath} alt={name} width={48} height={48} className="w-12 h-12 mb-2" />
    <h3 className="font-semibold text-gray-800">{name}</h3>
    <p className="text-sm text-gray-500 text-center">{description}</p>
  </div>
);

// Composant principal
const Portfolio: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-indigo-50 py-12 px-4 sm:px-6 lg:px-8">
      {/* Header avec photo de profil */}
      <div className="max-w-6xl mx-auto text-center mb-12">
        <div className="flex flex-col items-center">
          <div className="relative w-32 h-32 mb-4 rounded-full overflow-hidden border-4 border-indigo-100 shadow-lg">
            <Image
              src="https://avatars.githubusercontent.com/u/157124771?v=4"
              alt="Mael Ballereau"
              fill
              className="object-cover"
              sizes="128px"
            />
          </div>
          <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl">
            Mael Ballereau
          </h1>
          <p className="mt-3 text-xl text-indigo-600">
            Développeur Full Stack | Passionné par l'innovation
          </p>
        </div>
      </div>

      {/* Grille principale */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* À propos */}
        <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
          <h2 className="text-2xl font-bold text-gray-800 mb-4 border-b-2 border-indigo-500 pb-2">
            À propos de moi
          </h2>
          <p className="text-gray-600">
            Développeur polyvalent et motivé, je crée des solutions logicielles
            efficaces et innovantes. Mon objectif est de contribuer à des
            projets ambitieux tout en continuant à apprendre et à me
            perfectionner.
          </p>
        </div>

        {/* Soft Skills */}
        <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
          <h2 className="text-2xl font-bold text-gray-800 mb-4 border-b-2 border-indigo-500 pb-2">
            Soft Skills
          </h2>
          <ul className="space-y-2 text-gray-600">
            {[
              "Travail d'équipe",
              "Communication efficace",
              "Résolution de problèmes",
              "Adaptabilité",
              "Créativité",
            ].map((skill, index) => (
              <li key={index} className="flex items-center">
                <svg
                  className="w-5 h-5 text-indigo-500 mr-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                {skill}
              </li>
            ))}
          </ul>
        </div>

        {/* Hard Skills : Langages */}
        <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
          <h2 className="text-2xl font-bold text-gray-800 mb-4 border-b-2 border-indigo-500 pb-2">
            Langages
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            {listLangage.map((lang, index) => (
              <SkillCard
                key={index}
                name={lang.name}
                svgPath={lang.svgPath}
                description={lang.description}
              />
            ))}
          </div>
        </div>

        {/* Hard Skills : Frameworks */}
        <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
          <h2 className="text-2xl font-bold text-gray-800 mb-4 border-b-2 border-indigo-500 pb-2">
            Frameworks
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
            {listFrameworks.map((fw, index) => (
              <SkillCard
                key={index}
                name={fw.name}
                svgPath={fw.svgPath}
                description={fw.description}
              />
            ))}
          </div>
        </div>

        {/* Hard Skills : Outils */}
        <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
          <h2 className="text-2xl font-bold text-gray-800 mb-4 border-b-2 border-indigo-500 pb-2">
            Outils
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
            {listOutils.map((outil, index) => (
              <SkillCard
                key={index}
                name={outil.name}
                svgPath={outil.svgPath}
                description={outil.description}
              />
            ))}
          </div>
        </div>

        {/* Hard Skills : ORM */}
        <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
          <h2 className="text-2xl font-bold text-gray-800 mb-4 border-b-2 border-indigo-500 pb-2">
            ORM
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {ListORM.map((orm, index) => (
              <SkillCard
                key={index}
                name={orm.name}
                svgPath={orm.svgPath}
                description={orm.description}
              />
            ))}
          </div>
        </div>

        {/* Hard Skills : Librairies */}
        <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
          <h2 className="text-2xl font-bold text-gray-800 mb-4 border-b-2 border-indigo-500 pb-2">
            Librairies
          </h2>
          <div className="grid grid-cols-1 gap-4">
            {listLibrairie.map((lib, index) => (
              <SkillCard
                key={index}
                name={lib.name}
                svgPath={lib.svgPath}
                description={lib.description}
              />
            ))}
          </div>
        </div>

        {/* Diplômes */}
        <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
          <h2 className="text-2xl font-bold text-gray-800 mb-4 border-b-2 border-indigo-500 pb-2">
            Diplômes
          </h2>
          <ul className="space-y-3 text-gray-600">
            <li>
              <p className="font-semibold">Bachelor (CDWF)</p>
              <p className="text-sm text-gray-500">
                3IL Ingénieurs Limoges (Actuellement - 2026)
              </p>
            </li>
            <li>
              <p className="font-semibold">BTS SIO</p>
              <p className="text-sm text-gray-500">
                Lycée Suzanne Valadon Limoges 87000 (2023-2025)
              </p>
            </li>
            <li>
              <p className="font-semibold">BAC STI2D (SIN)</p>
              <p className="text-sm text-gray-500">
                Lycée Blaise Pascal Chateauroux 36000 (2022)
              </p>
            </li>
          </ul>
        </div>

        {/* Contact */}
        <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow lg:col-span-2">
          <h2 className="text-2xl font-bold text-gray-800 mb-4 border-b-2 border-indigo-500 pb-2">
            Contact
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-gray-600">
            <div>
              <p className="font-semibold">Email</p>
              <a
                href="mailto:maelballereau363@gmail.com"
                className="text-indigo-500 hover:underline"
              >
                maelballereau363@gmail.com
              </a>
            </div>
            <div>
              <p className="font-semibold">Téléphone</p>
              <p>+33 7 68 93 63 82</p>
            </div>
            <div className="flex items-center">
              <Image
                src="/linkedin.svg"
                alt="LinkedIn"
                width={24}
                height={24}
                className="w-6 h-6 mr-2"
              />
              <a
                href="https://www.linkedin.com/in/mael-ballereau-320042298"
                className="text-indigo-500 hover:underline"
              >
                linkedin.com/in/maelballereau
              </a>
            </div>
            <div className="flex items-center">
              <Image
                src="/github_light.svg"
                alt="GitHub"
                width={24}
                height={24}
                className="w-6 h-6 mr-2"
              />
              <a
                href="https://github.com/MaelBallereau"
                className="text-indigo-500 hover:underline"
              >
                github.com/MaelBallereau
              </a>
            </div>
          </div>
          {/* Bouton Télécharger CV */}
          <div className="mt-6 flex justify-center">
            <a
              href="/MaelBallereauCV.pdf"
              download="Mael_Ballereau_CV.pdf"
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-colors"
            >
              <svg
                className="w-5 h-5 mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                />
              </svg>
              Télécharger mon CV
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
