# Security Policy

## Scope

This repository is an educational TypeScript project. Security reports should concern repository-owned examples, configuration, workflows, dependencies, and documentation.

## Reporting

Do not publish credentials, exploit details, or sensitive data in a public issue. Report privately to the repository owner with the affected file, reproduction steps, impact, and suggested mitigation.

## Security Baseline

- Never commit `.env`, API keys, tokens, passwords, certificates, or private keys.
- Validate external data at runtime; TypeScript types do not validate network or user input.
- Avoid `any` where it hides trust boundaries.
- Encode output for its destination and prevent unsafe HTML rendering.
- Use least-privilege permissions for APIs, CI workflows, files, and services.
- Review dependency and lockfile changes before merging.
- Do not expose stack traces or internal configuration in production examples.
- Use supported Node.js and TypeScript versions documented by the repository.

## Recommended Checks

```bash
npm audit
npm run check
npm run lint
npm test
npm run build
```

Educational examples require additional threat modeling and environment-specific hardening before production use.
