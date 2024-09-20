"use client";
import React from "react";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  Star,
  GitCommit,
  GitPullRequest,
  AlertCircle,
  GitFork,
  Activity,
  Flame,
  Calendar,
  Users,
  UserPlus,
  Book,
  Code,
} from "lucide-react";
import Image from "next/image";
import { fetchGitHubDetails, User } from "@/lib/githubAPI";
import { FaStar, FaCodeBranch, FaExclamationCircle } from "react-icons/fa";
import ErrorComponent from "./github/error";

const getIconClass = (language: string) => {
  switch (language) {
    case "JavaScript":
      return "devicon-javascript-plain";
    case "Python":
      return "devicon-python-plain";
    case "Java":
      return "devicon-java-plain";
    case "HTML":
      return "devicon-html5-plain";
    case "CSS":
      return "devicon-css3-plain";
    case "SCSS":
      return "devicon-sass-original";
    case "Shell":
      return "devicon-bash-plain";
    default:
      return "";
  }
};

interface iUserData {
  id: string;
  login: string;
  name: string;
  bio: string;
  company: string;
  location: string;
  email: string;
  websiteUrl: string;
  twitterUsername: string;
  avatarUrl: string;
  createdAt: string;
  updatedAt: string;
}

interface iUserStats {
  id: number;
  labelname: string;
  count: string | number;
  icon: JSX.Element;
}

const CardsComponent = () => {
  const [username, setUsername] = useState<string>("");
  const [error, setError] = useState<string>("");
  const [fetchState, setFetchState] = useState<string>("Before");

  // State to hold the array of card items
  const [userData, setUserData] = useState<iUserData[]>([
    {
      id: "",
      name: "",
      bio: "",
      avatarUrl: "",
      company: "",
      createdAt: "",
      email: "",
      location: "",
      login: "",
      twitterUsername: "",
      updatedAt: "",
      websiteUrl: "",
    },
  ]);

  const [userStats, setUserStats] = useState<iUserStats[]>([
    { id: 1, labelname: "Followers", count: 0, icon: <Activity /> },
    { id: 2, labelname: "Following", count: 0, icon: <Flame /> },
    { id: 3, labelname: "Since", count: 0, icon: <Calendar /> },
    { id: 4, labelname: "Last Active", count: 0, icon: <Calendar /> },
  ]);

  const [userStatsDetailed, setUserStatsDetailed] = useState<iUserStats[]>([
    { id: 1, labelname: "Total Repository", count: 0, icon: <Users /> },
    { id: 2, labelname: "Total Commits", count: 0, icon: <GitCommit /> },
    {
      id: 3,
      labelname: "Total PRs",
      count: 0,
      icon: <GitPullRequest />,
    },
    { id: 4, labelname: "Total Issue", count: 0, icon: <AlertCircle /> },
    { id: 5, labelname: "Starred Repos", count: 0, icon: <Star /> },
    { id: 6, labelname: "Watching", count: 0, icon: <Users /> },
  ]);

  useEffect(() => {}, []);

  const fetchData = async (username: string) => {
    try {
      const result = await fetchGitHubDetails(username);

      if (result) {
        const userStatsDetailed: iUserStats[] = [
          {
            id: 1,
            labelname: "Total Repository",
            icon: <FaStar />,
            count: result.repositories,
          },
          {
            id: 2,
            labelname: "Total Commits",
            icon: <FaCodeBranch />,
            count: result.commitComments.toString(),
          },
          {
            id: 3,
            labelname: "Total PRs",
            icon: <FaExclamationCircle />,
            count: result.pullRequests.toString(),
          },
          {
            id: 4,
            labelname: "Total Issue",
            icon: <FaExclamationCircle />,
            count: result.issues.toString(),
          },
          {
            id: 5,
            labelname: "Starred Repos",
            icon: <FaExclamationCircle />,
            count: result.starredRepositories.toString(),
          },
          {
            id: 6,
            labelname: "Watching",
            icon: <FaExclamationCircle />,
            count: result.watching.toString(),
          },
        ];

        const updatedUserData: iUserData[] = [
          {
            id: result.id,
            login: result.login,
            name: result.name,
            bio: result.bio,
            avatarUrl: result.avatarUrl,
            company: result.company,
            location: result.location,
            email: result.email,
            websiteUrl: result.websiteUrl,
            twitterUsername: result.twitterUsername,
            createdAt: result.createdAt,
            updatedAt: result.updatedAt,
          },
        ];

        const updatedatedUserStats: iUserStats[] = [
          {
            id: 1,
            labelname: "Followers",
            count: result.followers,
            icon: <Activity className="w-5 h-5" />,
          },
          {
            id: 2,
            labelname: "Following",
            count: result.following,
            icon: <Flame className="w-5 h-5" />,
          },
          {
            id: 3,
            labelname: "Since",
            count: result.createdAt,
            icon: <Calendar className="w-5 h-5" />,
          },
          {
            id: 3,
            labelname: "Last Active",
            count: result.updatedAt,
            icon: <Calendar className="w-5 h-5" />,
          },
        ];

        setUserData(updatedUserData);
        setUserStats(updatedatedUserStats);
        setUserStatsDetailed(userStatsDetailed);
        setFetchState("After");
      }
    } catch (error: any) {
      console.error("fetchData -log: Error fetching data", error);
    }
  };

  const handleSearch = async () => {
    try {
      if (username) fetchData(username);
      setError("");
    } catch (err: any) {
      setError(err.message);
    }
  };

  return (
    <>
      <h1 className="text-4xl font-extrabold text-center mb-8 tracking-wide text-gray-200">
        GitHub <span className="text-purple">User Statistics</span> Dashboard
      </h1>
      {error && <ErrorComponent message={error} onRetry={handleSearch} />}
      {fetchState === "Before" ? (
        <div>
          {/* Heading */}

          {/* Input and Search Button */}
          <div className="mb-8 flex justify-center items-center">
            <input
              type="text"
              placeholder="Enter GitHub username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="p-3 w-72 bg-gray-800 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-violet-400 text-gray-300 placeholder-gray-500"
            />
            <button
              onClick={handleSearch}
              className="ml-4 p-3 bg-violet-600 hover:bg-violet-500 text-white rounded-lg shadow-lg transition-transform transform hover:scale-105"
            >
              Search
            </button>
          </div>
        </div>
      ) : (
        <>
          <div className="bg-gray-900 text-white p-6 rounded-lg shadow-lg max-w-4xl mx-auto">
            {userData && userData[0].name !== "" && (
              <Header userData={userData} userStats={userStats} />
            )}
            <div className="mt-8">
              <h2 className="text-2xl font-bold mb-4 text-violet-400">
                GitHub Stats
              </h2>
              <div className="grid grid-cols-2 gap-4 mb-6">
                {userStatsDetailed.map((stat, index) => (
                  <StatItem
                    key={index}
                    icon={<Star className="w-5 h-5" />}
                    label={stat.labelname}
                    value={stat.count}
                  />
                ))}
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

function Header({
  userData,
  userStats,
}: {
  userData: iUserData[];
  userStats: iUserStats[];
}) {
  console.log(userData);
  return (
    <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-6">
      {/* avatar image */}
      <div className="flex-col items-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="relative w-32 h-32 rounded-full overflow-hidden border-4 border-fuchsia-400"
        >
          <Image
            src={userData[0].avatarUrl}
            alt={userData[0].name}
            layout="fill"
            objectFit="cover"
          />
        </motion.div>
        <div className="text-sm font-semibold text-gray-300 mt-2 text-center">
          @{userData[0].login}
        </div>
      </div>
      {/* header details */}
      <div className="flex-1">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-4xl font-bold mb-2 bg-gradient-to-r from-fuchsia-300 to-blue-500 text-transparent bg-clip-text"
        >
          <div className="flex items-center">
            {userData[0].name}
            <div className="text-sm font-semibold text-gray-600 ml-3">
              #{userData[0].id}
            </div>
          </div>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-gray-300 mb-4"
        >
          {userData[0].bio}
        </motion.p>
        <div>{userData[0].company}</div>
        <div>{userData[0].email}</div>
        <div>{userData[0].location}</div>
        <div>{userData[0].websiteUrl}</div>
        <div>{userData[0].twitterUsername}</div>
        {/* stats */}
        <div className="flex space-x-4">
          {userStats.map((stat) => (
            <InfoCard
              icon={stat.icon}
              label={stat.labelname}
              value={stat.count}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

function InfoCard({
  icon,
  label,
  value,
}: {
  icon: React.ReactNode;
  label: string;
  value: number | string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay: 0.4 }}
      className="bg-gray-800 p-3 rounded-lg flex items-center space-x-2"
    >
      {icon}
      <div>
        <div className="text-xs text-gray-400">{label}</div>
        <div className="font-bold">{value}</div>
      </div>
    </motion.div>
  );
}

function StatItem({
  icon,
  label,
  value,
}: {
  icon: React.ReactNode;
  label: string;
  value: string | number;
}) {
  return (
    <div className="flex items-center space-x-2">
      {icon}
      <div>
        <div className="text-sm text-gray-400">{label}:</div>
        <motion.div
          className="font-bold"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {value}
        </motion.div>
      </div>
    </div>
  );
}

function ContributionCard({
  icon,
  label,
  value,
  sublabel,
  color,
}: {
  icon: React.ReactNode;
  label: string;
  value: number;
  sublabel: string;
  color: "blue" | "orange" | "green";
}) {
  const colorClasses = {
    blue: "from-blue-500 to-blue-600",
    orange: "from-orange-500 to-orange-600",
    green: "from-green-500 to-green-600",
  };

  return (
    <motion.div
      className={`bg-gradient-to-br ${colorClasses[color]} p-4 rounded-lg shadow-lg`}
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex items-center justify-between mb-2">
        {icon}
        <div className="text-xs font-medium uppercase">{label}</div>
      </div>
      <motion.div
        className="text-4xl font-bold mb-2"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        {value}
      </motion.div>
      <div className="text-xs opacity-75">{sublabel}</div>
    </motion.div>
  );
}

export default React.memo(CardsComponent);

// <div className="grid grid-cols-3 gap-6 mb-6">
//         <ContributionCard
//           icon={<Activity className="w-6 h-6 text-blue-400" />}
//           label="Total Contributions"
//           value={stats.totalContributions}
//           sublabel="Mar 30, 2022 - Present"
//           color="blue"
//         />
//         <ContributionCard
//           icon={<Flame className="w-6 h-6 text-orange-400" />}
//           label="Current Streak"
//           value={stats.currentStreak}
//           sublabel="Sep 14"
//           color="orange"
//         />
//         <ContributionCard
//           icon={<Calendar className="w-6 h-6 text-green-400" />}
//           label="Longest Streak"
//           value={stats.longestStreak}
//           sublabel="Apr 7, 2023 - Apr 26, 2023"
//           color="green"
//         />
//       </div>

// <LanguagesUsed languages={stats.languages} />
//<RepositoryList repositories={userData.repositories.nodes} />

// function LanguagesUsed({ languages }: { languages: Language[] }) {
//   return (
//     <div className="bg-gray-800 p-4 rounded-lg mb-6">
//       <h3 className="text-xl font-semibold mb-4 text-green-400">
//         Most Used Languages
//       </h3>
//       <div className="grid grid-cols-3 gap-4">
//         {languages.map((lang, index) => (
//           <motion.div
//             key={lang.name}
//             className="flex flex-col items-center bg-gray-700 p-4 rounded-lg"
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.5, delay: index * 0.1 }}
//           >
//             <i
//               className={`devicon ${getIconClass(lang.name)} fa-2x`}
//               title={lang.name}
//             ></i>
//             <div className="text-xs text-gray-300 mb-1">{lang.name}</div>
//             <motion.div
//               className="text-2xl font-bold"
//               initial={{ scale: 0 }}
//               animate={{ scale: 1 }}
//               transition={{
//                 type: "spring",
//                 stiffness: 260,
//                 damping: 20,
//                 delay: 0.5 + index * 0.1,
//               }}
//             >
//               {lang.percentage.toFixed(1)}%
//             </motion.div>
//           </motion.div>
//         ))}
//       </div>
//     </div>
//   );
// }

// function RepositoryList({ repositories }: { repositories: Repository[] }) {
//   return (
//     <div className="bg-gray-800 p-4 rounded-lg">
//       <h3 className="text-xl font-semibold mb-4 text-green-400">
//         Top Repositories
//       </h3>
//       <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//         {repositories.map((repo, index) => (
//           <motion.div
//             key={repo.name}
//             className="bg-gray-700 p-4 rounded-lg"
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.5, delay: index * 0.1 }}
//           >
//             <h4 className="text-lg font-semibold mb-2">{repo.name}</h4>
//             <div className="flex items-center space-x-4 text-sm">
//               <div className="flex items-center">
//                 <Star className="w-4 h-4 mr-1" />
//                 <span>{repo.stargazerCount}</span>
//               </div>
//               <div className="flex items-center">
//                 <GitFork className="w-4 h-4 mr-1" />
//                 <span>{repo.forkCount}</span>
//               </div>
//               {repo.primaryLanguage && (
//                 <div className="flex items-center">
//                   <Code className="w-4 h-4 mr-1" />
//                   <span>{repo.primaryLanguage.name}</span>
//                 </div>
//               )}
//             </div>
//           </motion.div>
//         ))}
//       </div>
//     </div>
//   );
// }
