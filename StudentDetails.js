import { useParams, useNavigate } from "react-router-dom";
export default function StudentDetails() {
  const { id } = useParams();
  const navigate = useNavigate();

  return (
    <div>
      <h1>Student Details</h1>
      <p>Student ID: {id}</p>

      <button onClick={() => navigate(-1)}>
        Back
      </button>
    </div>
  );
}