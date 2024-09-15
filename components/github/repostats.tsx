type RepoStatsProps = {
  totalRepos: number;
  totalStars: number;
  totalForks: number;
};

const RepoStats: React.FC<RepoStatsProps> = ({
  totalRepos,
  totalStars,
  totalForks,
}) => {
  return (
    <div className="bg-gray-800 shadow-lg rounded-lg p-6 text-gray-200">
      <h3 className="text-xl font-bold text-indigo-400">
        Repository Statistics
      </h3>
      <ul className="mt-4 space-y-2">
        <li className="text-gray-300">Total Repositories: {totalRepos}</li>
        <li className="text-gray-300">Total Stars: {totalStars}</li>
        <li className="text-gray-300">Total Forks: {totalForks}</li>
      </ul>
    </div>
  );
};

export default RepoStats;
