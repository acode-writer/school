import { FormGroup, ValidationErrors } from "@angular/forms";

export function ChoosedStudentClassroomValidator(group: FormGroup): ValidationErrors {
    const classroom = group.get('classroom')?.value;
    return (classroom != null ? null : { classroomError: true}) as ValidationErrors;
}