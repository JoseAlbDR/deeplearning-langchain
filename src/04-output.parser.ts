import { RunnableSequence } from '@langchain/core/runnables';
import { StringOutputParser } from '@langchain/core/output_parsers';
import { ChatPromptTemplate } from '@langchain/core/prompts';
import { ChatOpenAI } from '@langchain/openai';
import * as dotenv from 'dotenv';
dotenv.config();

export const outputParser = async () => {
  const model = new ChatOpenAI();

  const stringParser = new StringOutputParser();

  const prompt = ChatPromptTemplate.fromTemplate(
    `What are three good names for a company that makes {product}?`
  );

  const chain = prompt.pipe(model).pipe(stringParser);

  const response = await chain.invoke({
    product: 'painful pants',
  });

  console.log(response);

  /**
   *  1. Agony Apparel
      2. Throb Threads
      3. Torture Trousers
   */

  const nameGenerationChain = RunnableSequence.from([
    prompt,
    model,
    stringParser,
  ]);

  const response2 = await nameGenerationChain.invoke({
    product: 'fancy drinks',
  });

  console.log(response2);

  /**
   *  1. Elite Elixirs    
      2. Luxe Libations   
      3. Opulent Beverages
   */
};
