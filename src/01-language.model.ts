import { HumanMessage } from '@langchain/core/messages';
import { ChatOpenAI } from '@langchain/openai';
import * as dotenv from 'dotenv';
dotenv.config();

export async function languageModel() {
  // Define Model
  const model = new ChatOpenAI();

  // Invoke Model with HumanMessage
  const response = await model.invoke([new HumanMessage('Tell me a joke')]);

  console.log(response);

  /**
   *{
      response: AIMessage {
        lc_serializable: true,
        lc_kwargs: {
          content: "Why don't scientists trust atoms?\n\nBecause they make up everything!",
          additional_kwargs: [Object]
        },
        lc_namespace: [ 'langchain_core', 'messages' ],
        content: "Why don't scientists trust atoms?\n\nBecause they make up everything!",  
        name: undefined,
        additional_kwargs: { function_call: undefined, tool_calls: undefined }
      }
    }
   */
}
