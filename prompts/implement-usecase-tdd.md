# Standard Operating Procedure for Implementing Use Cases from Existing Tests

This document outlines the process for implementing use cases when tests are already written.

## Implementation Process

1. Review Existing Tests:

    - Understand test requirements
    - Note all test scenarios
    - Identify required dependencies
    - List expected behaviors
    - Document validation rules

2. Create Use Case Structure:

    - Create use case class file
    - Set up constructor with dependencies
    - Define execute method signature
    - Add required imports

3. Implement in Small Steps:

    - Start with simplest test case
    - Implement minimal code to pass
    - Run tests after each change
    - Move to next failing test
    - Repeat until all tests pass

4. Implementation Order:
    - Input validation
    - Business rules
    - Core logic
    - Repository calls
    - Error handling
    - Success response

## Implementation Guidelines

1. Use Case Structure:

    ```typescript
    export class UseCase {
        constructor(private readonly dependencies: Dependencies) {}

        async execute(input: InputDTO): Promise<OutputDTO> {
            // 1. Validate input
            // 2. Apply business rules
            // 3. Call repository
            // 4. Return result
        }
    }
    ```

2. Follow These Principles:

    - Implement only what tests require
    - Keep methods focused and small
    - Use early returns
    - Throw specific errors
    - Use dependency injection
    - Follow SOLID principles

3. Error Handling:
    - Use custom error classes
    - Add meaningful error messages
    - Include error context
    - Handle edge cases

## Steps Execution

1. Create Implementation Steps File:

    - Name: `implement-[usecase-name]-implementation-steps.md`
    - List steps with checkboxes
    - Reference existing test cases
    - Break down implementation tasks

2. Implementation Steps Should Include:

    - Creating use case class
    - Adding dependencies
    - Implementing validation
    - Adding business logic
    - Connecting repositories
    - Error handling
    - Running tests

3. Follow Order:

    - Wait for "write code" command
    - Execute steps in order
    - Run tests after each step
    - Refactor if needed
    - Verify all tests pass

4. Final Verification:
    - All tests passing
    - Code follows guidelines
    - No unnecessary code
    - Clean and readable
    - Properly documented
