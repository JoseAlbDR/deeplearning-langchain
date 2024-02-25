import { languageModel } from './01-language.model';
import { promptTemplate } from './02-prompt.template';
import { langchainExpressionLanguage } from './03-langchain.expression.language';
import { outputParser } from './04-output.parser';

(async () => {
  //* 01-Language Model
  // await languageModel();

  //* 02-Prompt Templates
  // await promptTemplate();

  //* 03-LangChain Expression Language (LCEL)
  //await langchainExpressionLanguage()

  //* 04-Output Parser
  await outputParser();
})();
