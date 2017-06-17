export class Job {
        title: string;
        workHours: number;
        salary: number;
        description: string;
        dateCreated: Date;
        author: string;
        pictureUrl: string;
        id: number;

        constructor(title: string, workHours: number, salary: number, description: string, author: string, pictureUrl: string) {
                this.title = title;
                this.workHours = workHours;
                this.salary = salary;
                this.description = description;
                this.author = author;
                this.pictureUrl = pictureUrl;

                this.dateCreated = new Date();
        }
}