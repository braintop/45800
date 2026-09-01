import { useState } from 'react';


interface Student {
    id: number;
    firstName: string;
}
export default function StudentList() {

    const [students, setStudents] = useState<Student[]>([]);
    const [firstName, setFirstName] = useState<string>('');

    function handleStudentChange(e: React.ChangeEvent<HTMLInputElement>) {
        setFirstName(e.target.value);
    }
    function handleAddStudent() {
        //alert(firstName);
        let newStudent: Student = {
            id: Date.now(),
            firstName: firstName
        }
        let newArr = [...students, newStudent];
        setStudents(newArr);
        setFirstName('');
    }
    function handleDeleteStudent(id: number) {
        let newArr = students.filter((student) => student.id !== id);
        setStudents(newArr);
    }
    return (
        <div>
            <input type="text" value={firstName} onChange={handleStudentChange} />
            <button onClick={handleAddStudent}>Add Student</button>
            <h1>Student List</h1>
            <ul>
                {students.map((student) => {
                    return <li key={student.id}>{student.firstName}
                        <button onClick={() => handleDeleteStudent(student.id)}>
                            Delete</button>
                    </li>

                })}
            </ul>
        </div>
    )
}

