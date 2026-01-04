class Student{
    int roll_no;
    String name;
    int marks;
}

public class array_class {
    public static void main(String a[]){

        Student s1 = new Student();
        s1.roll_no = 1;
        s1.name = "Arif";
        s1.marks =88;

        Student s2 = new Student();
        s2.roll_no = 2;
        s2.name = "Adil";
        s2.marks =89;
        
        Student s3 = new Student();
        s3.roll_no = 3;
        s3.name = "Abdul";
        s3.marks =88;

        Student student[] = new Student[3];
        student[0] =s1;
        student[1] =s2;
        student[2] =s3;

        for(int i=0;i<student.length;i++){
            System.out.println(student[i].name+' '+student[i].roll_no+' '+student[i].marks);
        }

        //forEach or Enhance for loop
        for(Student stud: student){
            System.out.println(stud.name+' '+stud.roll_no+' '+stud.marks);
        }
    }
}
