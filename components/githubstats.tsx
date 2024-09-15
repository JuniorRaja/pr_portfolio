"use client";
import { useState, useEffect, FC } from "react";
import ProfileCard from "@/components/github/profile";
import RepoStats from "@/components/github/repostats";
import LanguageStats from "@/components/github/langstats";
import ContributionActivity from "@/components/github/contribution";
import ErrorComponent from "@/components/github/error";
import {
  fetchGitHubUser,
  fetchRepoStats,
  fetchLanguages,
} from "@/lib/fetchGitHubAPI";

const GithubStats: React.FC = () => {
  const [username, setUsername] = useState("");
  const [profile, setProfile] = useState<any>(null);
  const [repoStats, setRepoStats] = useState<any>(null);
  const [languages, setLanguages] = useState<any>(null);
  const [error, setError] = useState("");
  const handleSearch = async () => {
    try {
      const userData = await fetchGitHubUser(username);
      const repoData = await fetchRepoStats(username);
      const languageData = await fetchLanguages(username);

      setProfile(userData);
      setRepoStats(repoData);
      setLanguages(languageData);
      setError("");
    } catch (err: any) {
      setError(err.message);
    }
  };

  return (
    <div className="container mx-auto p-6">
      {/* Heading */}
      <h1 className="text-4xl font-extrabold text-center mb-8 tracking-wide text-gray-200">
        GitHub User Statistics Dashboard
      </h1>

      {/* Input and Search Button */}
      <div className="mb-8 flex justify-center items-center">
        <input
          type="text"
          placeholder="Enter GitHub username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="p-3 w-72 bg-gray-800 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 text-gray-300 placeholder-gray-500"
        />
        <button
          onClick={handleSearch}
          className="ml-4 p-3 bg-indigo-600 hover:bg-indigo-500 text-white rounded-lg shadow-lg transition-transform transform hover:scale-105"
        >
          Search
        </button>
      </div>

      {/* Error Component */}
      {error && <ErrorComponent message={error} onRetry={handleSearch} />}

      {/* Profile and Stats */}
      {profile && (
        <div className="space-y-8">
          <ProfileCard
            avatarUrl={profile.avatar_url}
            name={profile.name}
            bio={profile.bio}
            location={profile.location}
          />
          <RepoStats
            totalRepos={repoStats.totalRepos}
            totalStars={repoStats.totalStars}
            totalForks={repoStats.totalForks}
          />
          <LanguageStats languages={languages} />
          <ContributionActivity recentCommits={10} recentPRs={5} />
        </div>
      )}
    </div>
  );
};

export default GithubStats;
