import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Students() {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    fetch("/data/students.json")
      .then((res) => res.json())
      .then((data) => setStudents(data));
  }, []);

  return (
    <div>
      <h1>Students Page</h1>

      <div style={{ display: "flex", gap: "20px", flexWrap: "wrap" }}>
        {students.map((student) => (
          <div
            key={student.id}
            style={{
              border: "1px solid black",
              borderRadius: "10px",
              padding: "15px",
              width: "200px"
            }}
          >
            <h3>{student.name}</h3>
            <p>Age: {student.age}</p>

            <Link to={`/students/${student.id}`}>
              View Details
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
