This is a standard operating procedure for creating a e2e test cases in the project.

## Steps

1. Always write the end-to-end test case for the API.
2. Always write the end-to-end test case in the `tests/e2e` directory.
3. Use the usecase name as the file name of end-to-end test case.
4. Use the jest framework to write the end-to-end test cases and axios for the API calls.
5. Write all the detail information about all the e2e test cases so that I can verify them.

**Always create the detailed steps file which you are going to execute under the `cursor-steps` directory with the usecase name. Format of this file will be markdown. Write all the steps using checkboxes. Do not check the checkboxes for the steps as they are not being executed yet. Write the required information in this file in a such way that it will be easy to understand and execute the steps for the LLM when I say "execute the steps". Do not write the code for the steps until I say "write the code".**
