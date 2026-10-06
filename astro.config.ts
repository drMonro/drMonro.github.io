import { defineConfig } from 'astro/config';

const repository = process.env.GITHUB_REPOSITORY;
const [owner, repositoryName] = repository?.split('/') ?? [];
const isUserPage = repositoryName?.endsWith('.github.io') ?? false;

export default defineConfig({
  output: 'static',
  site: owner ? `https://${owner}.github.io` : 'http://localhost:4321',
  base: repositoryName && !isUserPage ? `/${repositoryName}` : '/',
  server: {
    host: '127.0.0.1',
  },
});
