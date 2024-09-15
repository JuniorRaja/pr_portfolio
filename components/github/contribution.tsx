type ContributionActivityProps = {
  recentCommits: number;
  recentPRs: number;
};

const ContributionActivity: React.FC<ContributionActivityProps> = ({
  recentCommits,
  recentPRs,
}) => {
  return (
    <div className="bg-gray-800 shadow-lg rounded-lg p-6 text-gray-200">
      <h3 className="text-xl font-bold text-indigo-400">
        Contribution Activity
      </h3>
      <ul className="mt-4 space-y-2">
        <li className="text-gray-300">Recent Commits: {recentCommits}</li>
        <li className="text-gray-300">Recent Pull Requests: {recentPRs}</li>
      </ul>
    </div>
  );
};

export default ContributionActivity;
