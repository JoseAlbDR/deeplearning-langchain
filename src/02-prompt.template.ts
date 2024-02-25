import { ChatPromptTemplate } from '@langchain/core/prompts';
import { ChatOpenAI } from '@langchain/openai';
import {
  SystemMessagePromptTemplate,
  HumanMessagePromptTemplate,
} from '@langchain/core/prompts';
import * as dotenv from 'dotenv';
dotenv.config();

export const promptTemplate = async () => {
  const prompt = ChatPromptTemplate.fromTemplate(
    `What are three good names for a company that makes {product}?`
  );

  const response = await prompt.format({
    product: 'colorful socks',
  });

  console.log(response);
  //"Human: What are three good names for a company that makes colorful socks?"

  const response2 = await prompt.formatMessages({
    product: 'colorful socks',
  });

  console.log(response2);
  /**
   * [
        HumanMessage {
          lc_serializable: true,
          lc_kwargs: {
            content: "What are three good names for a company that makes colorful socks?",
            additional_kwargs: {}
          },
          lc_namespace: [ "langchain_core", "messages" ],
          content: "What are three good names for a company that makes colorful socks?",
          name: undefined,
          additional_kwargs: {}
        }
      ]
   */

  const promptFromMessages = ChatPromptTemplate.fromMessages([
    SystemMessagePromptTemplate.fromTemplate(
      'You are an expert at picking company names'
    ),
    HumanMessagePromptTemplate.fromTemplate(
      'What are three good names for a company that makes: {product}?'
    ),
  ]);

  const response3 = await promptFromMessages.formatMessages({
    product: 'shiny objects',
  });

  console.log(response3);
  /**
   * [
        SystemMessage {
          lc_serializable: true,
          lc_kwargs: {
            content: "You are an expert at picking company names.",
            additional_kwargs: {}
          },
          lc_namespace: [ "langchain_core", "messages" ],
          content: "You are an expert at picking company names.",
          name: undefined,
          additional_kwargs: {}
        },
        HumanMessage {
          lc_serializable: true,
          lc_kwargs: {
            content: "What are three good names for a company that makes shiny objects?",
            additional_kwargs: {}
          },
          lc_namespace: [ "langchain_core", "messages" ],
          content: "What are three good names for a company that makes shiny objects?",
          name: undefined,
          additional_kwargs: {}
        }
      ]
   */

  const promptFromMessagesSimplified = ChatPromptTemplate.fromMessages([
    ['system', 'You are an expert at picking company names.'],
    ['human', 'What are three good names for a company that makes {product}?'],
  ]);

  const response4 = await promptFromMessagesSimplified.formatMessages({
    product: 'shiny objects',
  });

  console.log(response4);
  /**
   * [
        SystemMessage {
          lc_serializable: true,
          lc_kwargs: {
            content: "You are an expert at picking company names.",
            additional_kwargs: {}
          },
          lc_namespace: [ "langchain_core", "messages" ],
          content: "You are an expert at picking company names.",
          name: undefined,
          additional_kwargs: {}
        },
        HumanMessage {
          lc_serializable: true,
          lc_kwargs: {
            content: "What are three good names for a company that makes shiny objects?",
            additional_kwargs: {}
          },
          lc_namespace: [ "langchain_core", "messages" ],
          content: "What are three good names for a company that makes shiny objects?",
          name: undefined,
          additional_kwargs: {}
        }
      ]
   */
};
