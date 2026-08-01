# Contributing to TypeScript for Beginner

Thank you for helping improve this learning repository.

## Principles

Contributions should be beginner-friendly, accurate, runnable, and aligned with the documented TypeScript version policy.

- Prefer strict typing and explain important type decisions.
- Preserve clear examples and detailed comments where they aid learning.
- Keep lessons focused on one concept at a time.
- Validate external data at runtime when examples cross an API or user-input boundary.
- Never include secrets, personal data, or confidential organizational information.
- Do not copy substantial copyrighted material.

## Workflow

1. Review the README and the relevant lesson.
2. Make one focused change.
3. Run applicable checks.
4. Update documentation and examples together.
5. Explain compatibility, security, and learning impact in the pull request.

## Quality Checks

```bash
npm install
npm run check
npm run lint
npm test
npm run build
```

Use only commands available in the affected project. Confirm that paths, imports, expected output, and links are correct.

## Lesson Standard

A lesson should normally include learning objectives, core concepts, a runnable example, code comments, common mistakes, an exercise or checkpoint, and references when external facts are used.

## Commit Messages

Use concise messages such as:

```text
Add union type exercise
Clarify generic constraints
Fix API validation example
Update TypeScript version notes
```

## License

By contributing, you confirm that the material may be distributed under the repository's MIT License.
