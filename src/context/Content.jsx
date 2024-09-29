import { createContext, useState } from 'react';
import PropTypes from 'prop-types';
import runChat from '../config/Gemini';

export const Context = createContext();

const YourComponent = ({ children }) => {
  return <div>{children}</div>;
};

YourComponent.propTypes = {
  children: PropTypes.node.isRequired,
};

const ContextProvider = (props) => {
  const [input, setInput] = useState('');
  const [recentPrompt, setRecentPrompt] = useState('');
  const [prevPrompts, setPrevPrompts] = useState([]);
  const [showResult, setShowResult] = useState(false);
  const [loading, setLoading] = useState(false);
  const [resultData, setResultData] = useState('');

  const delayPara = (index, nextWord) => {
    setTimeout(() => {
      setResultData((prev) => prev + nextWord);
    }, 75 * index);
  };

  const newChat = () => {
    setLoading(false);
    setShowResult(false);
  };

  const onSent = async (prompt) => {
    setResultData('');
    setLoading(true);
    setShowResult(true);

    const actualPrompt = prompt !== undefined ? prompt : input;
    setPrevPrompts((prev) => [...prev, actualPrompt]);
    setRecentPrompt(actualPrompt);

    const chatResponse = await runChat(actualPrompt);
    let responseArray = chatResponse.split('**');
    let newResponse = '';

    for (let i = 0; i < responseArray.length; i++) {
      if (i === 0 || i % 2 !== 1) {
        newResponse += responseArray[i];
      } else {
        newResponse += `<b>${responseArray[i]}</b>`;
      }
    }

    let newResponse2 = newResponse.split('*').join('</br>');
    let newResponseArray = newResponse2.split(' ');

    for (let i = 0; i < newResponseArray.length; i++) {
      let nextWord = newResponseArray[i];
      delayPara(i, nextWord + ' ');
    }

    setLoading(false);
    setInput('');
  };

  const contextValue = {
    onSent,
    input,
    setInput,
    recentPrompt,
    setRecentPrompt,
    prevPrompts,
    setPrevPrompts,
    showResult,
    setShowResult,
    loading,
    setLoading,
    resultData,
    setResultData,
    newChat,
  };

  return (
    <Context.Provider value={contextValue}>{props.children}</Context.Provider>
  );
};

ContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ContextProvider;
