export interface ApiScoreIssue {
  severity: string;
  location: string;
  recommendation: string;
  path: string;
}

export interface ApiScore {
  name: string;
  source: string;
  action: string;
  issues: ApiScoreIssue[]
}

