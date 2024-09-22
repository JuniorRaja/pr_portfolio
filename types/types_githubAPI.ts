export interface iGitHubUserStatus {
  emoji: string;
  message: string | null;
  indicatesLimitedAvailability: boolean;
}

export interface iGitHubUserInfo {
  id: string;
  login: string;
  name: string;
  bio: string;
  avatarUrl: string;
  company: string;
  location: string;
  email: string;
  websiteUrl: string;
  twitterUsername: string;
  isBountyHunter: boolean;
  isCampusExpert: boolean;
  isDeveloperProgramMember: boolean;
  isEmployee: boolean;
  isHireable: boolean;
  isSiteAdmin: boolean;
  isViewer: boolean;
  status?: iGitHubUserStatus;
}

export interface iGutHubStatistics {
  createdAt: string;
  updatedAt: string;
  followers: number;
  following: number;
  repositories: number;
  gists?: number;
  starredRepositories: number;
  watching: number;
  pullRequests: number;
  issues: number;
  commitComments: number;
}
