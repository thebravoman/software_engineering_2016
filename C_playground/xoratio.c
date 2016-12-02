#include <stdio.h>
#include <unistd.h>
#include <sys/types.h>
#include <sys/stat.h>
#include <fcntl.h>
#include <stdlib.h>
#include <sys/types.h>
#include <sys/wait.h>



int main(int argc, char** ARGV) {
	int status = atoi(ARGV[1]);
	int kuasdr;
	int l,i;
	int result;
	pid_t pid;
	char * string[] = {"/bin/sleep", "20", NULL};
	for(l = 0; l < status; l++) {
		pid = fork();
		if(pid < 0) {
			perror("fork");
		}
		else if (pid == 0) {
			result = execvp("/bin/sleep" , string);
			if(result < 0) {
				perror("execvp");
				return 2;
			}
			return 1;
		}
	}
	for(i = 0; i < status; i++) {
		wait(&kuasdr);
	}
	return 0;
}
