import { ChatPromptTemplate } from '@langchain/core/prompts';
import { ChatOpenAI } from '@langchain/openai';
import * as dotenv from 'dotenv';
dotenv.config();

export const langchainExpressionLanguage = async () => {
  const model = new ChatOpenAI();
  const prompt = ChatPromptTemplate.fromTemplate(
    `What are three good names for a company that makes {product}?`
  );

  const chain = prompt.pipe(model);

  const response = await chain.invoke({
    product: 'colorful socks',
  });

  console.log(response);
  /**
   *  AIMessage {
        lc_serializable: true,
        lc_kwargs: {
          content: "1. Rainbow Socks Co.\n2. ChromaSock Inc.\n3. Colorful Feet Creations",
          additional_kwargs: { function_call: undefined, tool_calls: undefined }
        },
        lc_namespace: [ "langchain_core", "messages" ],
        content: "1. Rainbow Socks Co.\n2. ChromaSock Inc.\n3. Colorful Feet Creations",
        name: undefined,
        additional_kwargs: { function_call: undefined, tool_calls: undefined }
      }
   */
};
