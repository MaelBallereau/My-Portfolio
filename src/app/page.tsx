"use client";

import Image from "next/image";

import {
  listOutils,
  listFrameworks,
  listLangage,
  ListORM,
  listLibrairie,
} from "../../data";

const SkillCard: React.FC<{
  name: string;
  svgPath: string;
  description: string;
  highlight?: boolean;
  className?: string;
}> = ({ name, svgPath, description, highlight, className }) => (
  <div
    className={`flex flex-col items-center p-4 rounded-lg transition-all duration-300 hover:scale-110 relative ${className}`}
  >
    <Image src={svgPath} alt={name} width={48} height={48} className="mb-2" />
    <h3 className="font-semibold text-gray-800">{name}</h3>
    <p className="text-sm text-gray-500 text-center">{description}</p>

    <div className="absolute inset-0 rounded-lg bg-blue-500 opacity-0 transition-opacity duration-300 hover:opacity-10"></div>
    {highlight && (
      <Image
        src="/icons/svg/bookmark.svg"
        alt="bookmark"
        width={24}
        height={24}
        className="absolute inset-0 rounded-lg"
      />
    )}
  </div>
);

const Portfolio: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-indigo-50 py-12 px-4 sm:px-6 lg:px-8">
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
            Développeur Full Stack | Passionné par l&apos;innovation
          </p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
          <h2 className="text-2xl font-bold text-gray-800 mb-4 border-b-2 border-indigo-500 pb-2">
            Langages
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            {listLangage
              .sort((a, b) => (b.highlight ? 1 : 0) - (a.highlight ? 1 : 0))
              .map((lang, index) => (
                <SkillCard
                  key={index}
                  name={lang.name}
                  svgPath={lang.svgPath}
                  description={lang.description}
                  highlight={lang.highlight}
                />
              ))}
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
          <h2 className="text-2xl font-bold text-gray-800 mb-4 border-b-2 border-indigo-500 pb-2">
            Frameworks
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
            {listFrameworks
              .sort((a, b) => (b.highlight ? 1 : 0) - (a.highlight ? 1 : 0))
              .map((fw, index) => (
                <SkillCard
                  key={index}
                  name={fw.name}
                  svgPath={fw.svgPath}
                  description={fw.description}
                  highlight={fw.highlight}
                />
              ))}
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
          <h2 className="text-2xl font-bold text-gray-800 mb-4 border-b-2 border-indigo-500 pb-2">
            Outils
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
            {listOutils
              .sort((a, b) => (b.highlight ? 1 : 0) - (a.highlight ? 1 : 0))
              .map((outil, index) => (
                <SkillCard
                  key={index}
                  name={outil.name}
                  svgPath={outil.svgPath}
                  description={outil.description}
                  highlight={outil.highlight}
                />
              ))}
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
          <h2 className="text-2xl font-bold text-gray-800 mb-4 border-b-2 border-indigo-500 pb-2">
            ORM
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {ListORM.sort(
              (a, b) => (b.highlight ? 1 : 0) - (a.highlight ? 1 : 0)
            ).map((orm, index) => (
              <SkillCard
                key={index}
                name={orm.name}
                svgPath={orm.svgPath}
                description={orm.description}
                highlight={orm.highlight}
              />
            ))}
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
          <h2 className="text-2xl font-bold text-gray-800 mb-4 border-b-2 border-indigo-500 pb-2">
            Librairies
          </h2>
          <div className="grid grid-cols-1 gap-4">
            {listLibrairie
              .sort((a, b) => (b.highlight ? 1 : 0) - (a.highlight ? 1 : 0))
              .map((lib, index) => (
                <SkillCard
                  key={index}
                  name={lib.name}
                  svgPath={lib.svgPath}
                  description={lib.description}
                  highlight={lib.highlight}
                  className="librairies"
                />
              ))}
          </div>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow h-[180px]">
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
      </div>

      <div className="flex justify-center align-center my-10">
        <button
          onClick={() => {
            window.open("https://github.com/MaelBallereau", "_blank");
          }}
          className="cursor-pointer group flex justify-center items-center gap-2 group-hover:before:duration-500 group-hover:after:duration-500 after:duration-500 hover:border-neutral-900 duration-500 hover:duration-500 underline underline-offset-2 hover:underline hover:underline-offset-4 origin-left hover:decoration-2 hover:text-neutral-300 relative bg-neutral-900 px-10 py-4 border text-left p-3 text-gray-50 text-base font-bold rounded-lg overflow-hidden after:absolute after:z-10 after:w-12 after:h-12 after:content[''] after:bg-sky-900 after:-left-8 after:top-8 after:rounded-full after:blur-lg hover:after:animate-pulse"
        >
          <svg
            className="w-6 h-6 fill-neutral-50"
            height="100"
            preserveAspectRatio="xMidYMid meet"
            viewBox="0 0 100 100"
            width="100"
            x="0"
            xmlns="http://www.w3.org/2000/svg"
            y="0"
          >
            <path
              className="svg-fill-primary"
              d="M50,1.23A50,50,0,0,0,34.2,98.68c2.5.46,3.41-1.09,3.41-2.41s0-4.33-.07-8.5c-13.91,3-16.84-6.71-16.84-6.71-2.28-5.77-5.55-7.31-5.55-7.31-4.54-3.1.34-3,.34-3,5,.35,7.66,5.15,7.66,5.15C27.61,83.5,34.85,81.3,37.7,80a10.72,10.72,0,0,1,3.17-6.69C29.77,72.07,18.1,67.78,18.1,48.62A19.34,19.34,0,0,1,23.25,35.2c-.52-1.26-2.23-6.34.49-13.23,0,0,4.19-1.34,13.75,5.13a47.18,47.18,0,0,1,25,0C72.07,20.63,76.26,22,76.26,22c2.72,6.89,1,12,.49,13.23a19.28,19.28,0,0,1,5.14,13.42c0,19.21-11.69,23.44-22.83,24.67,1.8,1.55,3.4,4.6,3.4,9.26,0,6.69-.06,12.08-.06,13.72,0,1.34.9,2.89,3.44,2.4A50,50,0,0,0,50,1.23Z"
            ></path>
          </svg>
          MaelBallereau
        </button>
      </div>

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
        </div>

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
  );
};

export default Portfolio;
