export class quiz{
  
    course_id!: number;
    ques_id!: number;
    quiz_id!: number;
    ques: any;
    option1: any;
    option2: any;
    option3: any;
    option4: any;
    ans: String | undefined;
    point!: number;
    total_marks: any;
    min_marks: any;
  toggleButton: boolean = false;
  lbl:String="Edit";

    // allProfiles = [
    //     new quiz('dev', 'Developer'),
    //     new quiz('man', 'Manager'),
    //     new quiz('dir', 'Director')
    // ] 
}