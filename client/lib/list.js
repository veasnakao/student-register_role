List = {
    getAllSubject(){
        var listSubject = [{label: '(Select One)', value: ''}];
        var subjects = Collection.Subject.find();
        //[{}]
        subjects.forEach((subject)=> {
            listSubject.push({label: `${subject._id} | ${subject.subjectName}`, value: subject._id});
        });
        return listSubject;
    },
    getAllTeacher(){
        var listTeacher = [{label:'(Select One)',value:''}];
        var teachers = Collection.Teacher.find();
        teachers.forEach((teacher)=>{
            listTeacher.push({label:`${teacher._id} | ${teacher.teacherName}`,value:teacher._id});
        })
        return listTeacher;
    },
    getAllStudent(){
        var listStudent = [{label:'(Select One)',value:''}];
        var students = Collection.Student.find();
        students.forEach((student)=>{
            listStudent.push({label:`${student._id} | ${student.studentName}`,value:student._id});
        })
        return listStudent;
    },
    timeStudy(){

    }
}