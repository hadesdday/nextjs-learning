export function getGithubUsername(githubUrl: string): string {
    return githubUrl.split("https://github.com/")[1];
}