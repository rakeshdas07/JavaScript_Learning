//nested function to understand scope


function teacher(){
    const teacherName="Nishan"

    function student(){
        const studentName="Student1"
        console.log(teacherName) // can access the teacherName as it becomes global variable to this function
    }

    //console.log(studentName);     //can't access since it's scope has been over inside the student() only 

    student() //worked fine
    
}
teacher() // it won't run student()




