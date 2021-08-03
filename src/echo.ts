import { prompt } from "enquirer";

(async () => {
  const response = await prompt<{ name: string }>({
    type: "input",
    name: "name",
    message: "What is your name?",
  });

  console.log(`Hi, ${response.name}! Nice to see you here 😊`);
})();

/**
 * You may run into a problem like "Cannot redeclare block scoped variable name"
 * Each exercise that you are solving in a new file must have an export present
 * Read more here - https://backbencher.dev/articles/typescript-solved-cannot-redeclare-block-scoped-variable-name
 */
export {};
