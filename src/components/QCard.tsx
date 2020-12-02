import React from 'react';

type Props = {
  question: string;
  answers: string[];
  callback: any;
  userAnswer: any;
  qnumber: number;
  totalQs: number;
};
const QCard: React.FC<Props> = ({
  question,
  answers,
  callback,
  userAnswer,
  qnumber,
  totalQs,
}) => {
  return (
    <div>
      <p className="number">
        QUESTION: {qnumber} / {totalQs}
      </p>
      <p dangerouslySetInnerHTML={{ __html: question }}></p>
      <div>
        {answers.map(answer => (
          <div>
            <button disabled={userAnswer} onClick={callback}>
              <span dangerouslySetInnerHTML={{__html: answer}} />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default QCard;
