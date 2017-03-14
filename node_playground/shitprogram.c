#include <stdio.h>
#include <pthread.h>
#include <stdlib.h>

int gold = 0;

void *miners(void *thread_id)
{
    int tid;
    tid = (int)thread_id;
    printf("Hello %d\n", tid);
    while(1)
    {
        gold += 10;
        printf("Miner %d digged 10 gold\n", tid);
        sleep(2);
    }
    pthread_exit(NULL);
}

void *traders(void *thread_id)
{
    int tid;
    tid = (int)thread_id;
    printf("Hello trader %d\n", tid);
    while(1)
    {
        if (gold < 10)
            printf("The warehouse is empty, cannot sell!");
        else
            gold -= 10;
        printf("Trader %d digged 10 gold\n", tid);
        sleep(2);
    }
    pthread_exit(NULL);
}

int main(int argc, char **argv))
{
    if (argc == 2)
    {
        miner_c = atoi(argv[1]);

    }
    int t;
    pthread_t threads[miner_c + trader_c];
    for (t=0; t < miner_c; t++)
    {
        printf("creating miner %d\n", t);
        int rc = pthread_create(&threads[t], NULL,
                                miners, (void *)t);
        if(rc)
        {
            printf("pthread create return %d\n", rc);
        }
    }

    for (; t < (miner_c + trader_c); t++)
    {
        printf("creating miner %d\n", t);
        int rc = pthread_create(&threads[t], NULL,
                                traders, (void *)t);
        if(rc)
        {
            printf("pthread create return %d\n", rc);
        }
    }

    printf("END\n");
    pthread_exit(NULL);
    return 0;
}

