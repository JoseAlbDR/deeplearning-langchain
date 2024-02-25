import { HumanMessage } from '@langchain/core/messages';
import { ChatOpenAI } from '@langchain/openai';
import * as dotenv from 'dotenv';

dotenv.config();

(async () => {
  await languageModel();
})();

async function languageModel() {
  const model = new ChatOpenAI();

  const response = await model.invoke([new HumanMessage('Tell me a joke')]);

  console.log({ response });
}
