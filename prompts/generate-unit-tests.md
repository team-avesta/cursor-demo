# Standard Operating Procedure for Creating Unit Tests

This document outlines the process for creating unit tests in the project.

## Steps and Guidelines

1. Always write unit tests for each public function in Use Cases.
2. Place unit test files in the same directory as the use case they're testing.
3. Use the use case name followed by `.test.ts` as the file name for the unit test.
4. Utilize the Jest framework for writing unit tests.
5. If a jest.config.js file doesn't exist in the project root, create one with appropriate TypeScript settings.
6. Follow the Arrange-Act-Assert (AAA) pattern for structuring tests.
7. Mock all dependencies for true unit isolation:
    - Use Jest's mocking capabilities (jest.fn(), jest.mock(), etc.) for creating mocks.
    - Reset mocks between tests using beforeEach() or afterEach() hooks if necessary.
8. Focus on testing behavior, not implementation details:
    - Test the outcomes and side effects of methods, not their internal workings.
    - Avoid asserting on specific method calls unless absolutely necessary for the test's purpose.
9. Aim for high code coverage (e.g., above 80%).
10. Write detailed descriptions for each test case.
11. Keep tests focused and concise.
12. Test both positive and negative scenarios.
13. Use meaningful variable names (e.g., inputX, mockX, actualX, expectedX).
14. Avoid testing private methods directly.
15. Don't test third-party libraries unless absolutely necessary.
16. Ensure that placing tests near use cases doesn't clutter the directory structure.
17. Do not write the code for the steps until I say "write the code".
18. Never include meta-instructions or comments about the process itself in the step files.
19. Do not include any code coverage related steps in the step file.

## Naming Conventions

-   Test files: `[UseCaseName].test.ts` (in the same directory as the use case)
-   Test suites: Describe the class or function being tested
-   Test cases: Describe the specific scenario and expected outcome

**Always create the detailed steps file which you are going to execute under the `cursor-steps` directory with the usecase name. Format of this file will be markdown. Write all the steps using checkboxes. Do not check the checkboxes for the steps as they are not being executed yet. Write the required information in this file in a such way that it will be easy to understand and execute the steps for the LLM when I say "execute the steps". Do not write the code for the steps until I say "write the code".**
