import { FaCheckCircle, FaTrash, FaRegSquare, FaPen } from "react-icons/fa";
export const SquareIcon = ({ onClick }) => (
  <FaRegSquare className="text-primary" onClick={onClick} />
);

export const CheckCircleIcon = ({ onClick }) => (
  <FaCheckCircle className="text-success" onClick={onClick} />
);

export const TrashIcon = ({ onClick }) => (
  <FaTrash className="text-danger" onClick={onClick} />
);

export const PenIcon = ({ onClick }) => (
  <FaPen className="text-primary" onClick={onClick} />
);
