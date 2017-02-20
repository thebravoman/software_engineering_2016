#include <stdio.h>
#include <unistd.h>
#include <sys/types.h>
#include <sys/stat.h>
#include <fcntl.h>
int main() {
	int result;
	int wresult;
	int written_bytes;
	int i, lines = 0;
	char buffer[100];
	char first_ten[100];
	int fd = open("a.txt",O_RDONLY);
	if(fd < 0) {
		perror("open");
		return 1;
	}
	while(result = read(fd, buffer, 100)) {
		for ( i = 0; i < result ; i++) {
			if(buffer[i]=='\n') lines++;
			if(lines < 10) {
				first_ten[i] = buffer[i];	
			} else {
				first_ten[i] = '\n';
				break;
			}
		}
		if(result < 0) {
			perror("read");
			return 2;
		} 
		written_bytes = 0;
		while(written_bytes <= i){		
				wresult = write(STDOUT_FILENO, first_ten+written_bytes, 1);
				if(wresult < 0) {
					perror("write");
					return 3;
				}
				
				written_bytes += wresult;
		}
	}
	result = close( fd );
	if(result < 0) {
		perror("close");
		return 4;
	}
return 0;
}
