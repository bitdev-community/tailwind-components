# tailwind-components
Bit UI library of tailwind components. The demo contains the following UI components

- `ui/button` - [component](https://bit.cloud/learnbit-react/tailwind-library/ui/button)
- `ui/textfield` - [component](https://bit.cloud/learnbit-react/tailwind-library/ui/textfield)
- `ui/switch` - [component](https://bit.cloud/learnbit-react/tailwind-library/ui/switch)

Tailwind Library Demo in Bit Cloud: [Scope](https://bit.cloud/learnbit-react/tailwind-library)

## How to Use

1. Fork this repository or create a new repository with its code
2. Create your scope in [bit.cloud](https://bit.cloud) to store tailwind library
3. Find and replace `learnbit-react.tailwind-library` in the source code to your newly created scope name
4. Configure the repository, GitHub Action variable secrets `GIT_USER_NAME`, `GIT_USER_EMAIL`, `BIT_CONFIG_ACCESS_TOKEN`.

## Important Points
- The demo project is used to demonstrate the use of tailwind components. You can modify it accordingly.
- If you are going to use a different directory than `tailwind-library` for new components, you need to modify `tailwind-components/tailwind-library/demo/tailwind.config.ts` components value.
- GitHub Action workflow is already configured to support pull request builds. You can create a new branch and commit the modified components. GitHub Actions will takecare of building the components and tagging and exporting them once the Pull Request is merged.