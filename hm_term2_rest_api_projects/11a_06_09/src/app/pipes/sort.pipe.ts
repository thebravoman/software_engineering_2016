import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sort'
})
export class SortPipe implements PipeTransform {
    compareJobs(leftJob, rightJob) {
        if (leftJob.title < rightJob.title)
            return -1;
        if (leftJob.title > rightJob.title)
            return 1;
        return 0;
    }

  transform(value: any[], sortBy?: string){
    if (sortBy) {
            if (sortBy.startsWith('-')) {
                sortBy = sortBy.substr(1);
                return value.sort(
                    (x, y) =>
                        y[sortBy].toString()
                            .localeCompare(x[sortBy].toString()));
            } else {
                sortBy = sortBy.startsWith('+')
                    ? sortBy.substr(1)
                    : sortBy;
                return value.sort(
                    (x, y) =>
                        x[sortBy].toString()
                            .localeCompare(y[sortBy].toString()));
            }
        } else {
            return value.sort(this.compareJobs);
        }
  }
}
