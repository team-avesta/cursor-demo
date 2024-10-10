# Express.js REST API Project Setup with TypeScript and Swagger

## Steps

1. Initialize project

    - Create project directory
    - Run `npm init -y`

2. Install dependencies

    - Express.js: `npm i express`
    - TypeScript: `npm i -D typescript @types/node @types/express`
    - Swagger: `npm i swagger-ui-express swagger-jsdoc`
    - TypeScript types for Swagger: `npm i -D @types/swagger-ui-express @types/swagger-jsdoc`

3. Configure TypeScript

    - Create `tsconfig.json`

4. Set up project structure

    - Create directories as per the structure below

5. Create main application file

    - Set up Express app
    - Configure Swagger

6. Implement basic routes

7. Set up middleware

8. Create sample entity and use case

9. Implement repository layer

10. Set up error handling

11. Configure environment variables

12. Add scripts to package.json

    - Build
    - Start
    - Dev (with nodemon)

13. Set up testing environment

    - Install Jest and related packages
    - Configure Jest

14. Write sample tests

15. Set up linting and formatting

    - Install ESLint and Prettier
    - Configure ESLint and Prettier

16. Create README.md with project information and setup instructions

## Folder Structure

src/
├── domain/
│ ├── entities/
│ ├── interfaces/
│ │ ├── dtos/
│ │ └── repos/
│ └── useCases/
├── gateways/
├── infrastructure/
│ ├── repository/
│ │ ├── implementation/
│ │ ├── mappers/
│ │ ├── redis/
│ │ └── sequelize/
│ │ ├── config/
│ │ ├── migrations/
│ │ └── models/
│ └── utils/
├── presentation/
│ ├── middleware/
│ └── routes/
├── app.ts
└── server.ts
