import React from 'react';
import { CopyBlock, dracula } from 'react-code-blocks';

const CSS_CODE = `/* Default style for all challenges containers. */
.challenge-container {
  height: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;

  /* Overridden for this component */
  width: 100%;
  justify-content: center;
}

.challenge-24-container {
  width: 100px;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  transform: rotate(45deg);
  animation: bounce 1s linear infinite;
}

.challenge-24-square {
  height: 50px;
  width: 50px;
  position: absolute;
  animation: rotate 1s linear infinite;
}

.challenge-24-square:nth-child(1) {
  top: 0;
  left: 0;
  background-color: #55acee;
}

.challenge-24-square:nth-child(2) {
  top: 0;
  right: 0;
  background-color: #dd4b39;
}

.challenge-24-square:nth-child(3) {
  bottom: 0;
  left: 0;
  background-color: #ffffff;
}

.challenge-24-square:nth-child(4) {
  bottom: 0;
  right: 0;
  background-color: #6fd0cf;
}

@keyframes rotate {
  0% {
    transform: rotate(0deg);
  }

  10% {
    transform: rotate(0deg);
  }

  50% {
    transform: rotate(90deg);
  }

  90% {
    transform: rotate(90deg);
  }

  100% {
    transform: rotate(90deg);
  }
}

@keyframes bounce {
  0% {
    width: 100px;
    height: 100px;
  }

  10% {
    width: 100px;
    height: 100px;
  }

  50% {
    width: 150px;
    height: 150px;
  }

  90% {
    width: 100px;
    height: 100px;
  }

  100% {
    width: 100px;
    height: 100px;
  }
}
`;

const Code: React.FC = () => {
  return (
    <div className="container-code">
      <CopyBlock
        text={CSS_CODE}
        language="css"
        showLineNumbers={false}
        theme={dracula}
        onCopy={false}
      />
    </div>
  );
};

export default Code;
