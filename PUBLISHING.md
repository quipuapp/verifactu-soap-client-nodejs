# PUBLISHING

    echo "//registry.npmjs.org/:_authToken=${{ secrets.NPM_TOKEN }}" > ~/.npmrc
    # Build the project
    npm run build

    # Bump version (use patch, minor, or major)
    npm version patch  # Or `minor` or `major`

    # Publish to npm
    npm publish

    # Push changes and tags to GitHub
    git push && git push --tags
