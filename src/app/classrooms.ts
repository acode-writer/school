export type Student = {
    firstname: string,
    lastname: string,
    email: string,
    phone: string,
    address: string,
    info: string,
    classroom: Classroom,
};
export type Classroom = {
    name: string,
    students: Student[],
}

export const classrooms: Classroom[] = [
    {
        name: 'Terminal S1',
        students: []
    },
    {
        name: 'Terminal S2',
        students: []
    },
    {
        name: 'Terminal L1a',
        students: []
    },
    {
        name: 'Terminal L1b',
        students: []
    },
]