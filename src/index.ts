import inquirer from 'inquirer';
import chalk from 'chalk';



function generatePassword(length: number, includeNumbers: boolean, includeSymbols: boolean): string {
  const letters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const numbers = '0123456789';
  const symbols = '!@#$%^&*()_+[]{}|;:,.<>?';

  let characters = letters;
  if (includeNumbers) characters += numbers;
  if (includeSymbols) characters += symbols;

  let password = '';
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    password += characters[randomIndex];
  }
  return password;
}

async function main() {
  console.log(chalk.blue('🔒 Gerador de Senhas CLI'));

  const answers = await inquirer.prompt([
    {
      type: 'number',
      name: 'length',
      message: 'Qual o tamanho da senha?',
      default: 12,
    },
    {
      type: 'confirm',
      name: 'includeNumbers',
      message: 'Incluir números?',
      default: true,
    },
    {
      type: 'confirm',
      name: 'includeSymbols',
      message: 'Incluir símbolos?',
      default: true,
    },
  ]);

  const password = generatePassword(answers.length, answers.includeNumbers, answers.includeSymbols);
  console.log(chalk.green(`Sua senha gerada é: ${password}`));
}

main();
