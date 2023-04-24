import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';

interface Student {
  id: string;
  name: string;
}
const students: Student[] = [
  { id: '1', name: 'Pablo Isaac' },
  { id: '2', name: 'Alejandra Santos' },
  { id: '3', name: 'Diego Galan' },
  { id: '4', name: 'Vinicio Ricci' },
  { id: '5', name: 'Alison Caarolina' },
];
export default function StudentPage() {
  const router = useRouter();
  const { id } = router.query;
  const [name, setName] = useState<string>('');

  useEffect(() => {
    if (id) {
      const student = students.find(s => s.id === id);

      if (student) {
        setName(student.name);
      } else {
        // mostrar aqui
        router.push('/404');
      }
    }
  }, [id]);

  return (
    <section>
      <h1>Student {id}</h1>
      <h2>{name}</h2>
    </section>
  );
}
