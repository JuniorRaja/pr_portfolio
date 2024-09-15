export const fetchGitHubUser = async (username: string) => {
  const res = await fetch(`https://api.github.com/users/${username}`);
  if (!res.ok) throw new Error("User not found");
  return res.json();
};

export const fetchRepoStats = async (username: string) => {
  const res = await fetch(`https://api.github.com/users/${username}/repos`);
  if (!res.ok) throw new Error("Repositories not found");
  const repos = await res.json();

  let totalStars = 0,
    totalForks = 0;
  repos.forEach((repo: any) => {
    totalStars += repo.stargazers_count;
    totalForks += repo.forks_count;
  });

  return { totalRepos: repos.length, totalStars, totalForks };
};

export const fetchLanguages = async (username: string) => {
  const res = await fetch(`https://api.github.com/users/${username}/repos`);
  if (!res.ok) throw new Error("Repositories not found");
  const repos = await res.json();

  const languageStats: { [key: string]: number } = {};

  for (const repo of repos) {
    const languagesRes = await fetch(repo.languages_url);
    const languages = await languagesRes.json();
    for (const [key, value] of Object.entries(languages)) {
      const numericValue = value as number; // Ensure value is treated as a number
      if (languageStats[key]) {
        languageStats[key] += numericValue;
      } else {
        languageStats[key] = numericValue;
      }
    }
  }

  return languageStats;
};
