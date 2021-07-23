import React from 'react';
import { CopyBlock, dracula } from 'react-code-blocks';

const CSS_CODE = `/* Default style for all challenges containers. */
.challenge-container {
  height: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;

  /* Overridden for this component */
  overflow: hidden;
}

.table {
  height: 0.5rem;
  width: 15rem;
  background: #ffffff;
  position: relative;
  animation: rotate 2.5s linear infinite;
}

.hexagon {
  height: 30px;
  width: 50px;
  position: absolute;
  left: 0;
  bottom: 1.5rem;
  background-color: #dd4b39;
  animation: spin 2.5s linear infinite;
}

.hexagon::before {
  content: '';
  height: 100%;
  width: 100%;
  position: absolute;
  transform: rotate(60deg);
  background-color: #dd4b39;
}

.hexagon::after {
  content: '';
  height: 100%;
  width: 100%;
  position: absolute;
  transform: rotate(-60deg);
  background-color: #dd4b39;
}

@keyframes rotate {
  0% {
    transform: rotate(30deg);
  }

  25% {
    transform: rotate(0deg);
  }

  50% {
    transform: rotate(-30deg);
  }

  75% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(30deg);
  }
}

@keyframes spin {
  0% {
    left: 0;
  }

  50% {
    left: calc(100% - 50px);
    transform: rotate(720deg);
  }

  100% {
    left: 0;
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
