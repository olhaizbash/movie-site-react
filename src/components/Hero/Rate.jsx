import { FaStar, FaStarHalfAlt } from "react-icons/fa";
import { AiOutlineStar } from "react-icons/ai";
const Rate = ({ currentRate }) => {
  const result = Array.from({ length: 5 }, (_, index) => {
    let number1 = index + 0.5;
    let number2 = index + 1;

    return (
      <span key={index}>
        {currentRate >= number2 ? (
          <FaStar size={20} color="#f87719" />
        ) : currentRate >= number1 ? (
          <FaStarHalfAlt size={20} color="#f87719" />
        ) : (
          <AiOutlineStar size={20} color="#f87719" />
        )}
      </span>
    );
  });
  return <>{result}</>;
};

export default Rate;
