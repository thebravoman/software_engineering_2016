изискват  " CSV "

файл =  ARGV [ 0 ]
task_num =  ARGV [ 1 ] .to_i

задача =  Hash . Новият

CSV .foreach (файл) направи | ред |
    при task_num.to_i
        когато  един  след 
            задача [ред [ 1 ]] = (задача [ред [ 1 ]]). to_f + ред [ 2 ] .to_f  
        
        когато  2  след
            задача [ред [ 1 ]] = (задача [ред [ 1 ]]). to_i +  1
        
        когато  3  след това 
            задача [ред [ 0 ]] = (задача [ред [ 0 ]]). to_f + ред [ 2 ] .to_f
        
        когато  4  след това
            задача [ред [ 0 ]] = (задача [ред [ 0 ]]). to_i +  1
           
    край
  край
  
  ако task_num.to_i ==  1  || task_num.to_i ==  3
        ФОРМАТ ( " % S,%. 2е \ Н " , task.key (task.values.max), task.values.max)
    край 
  ако task_num.to_i ==  2  || task_num.to_i ==  4
        ФОРМАТ ( " % S,% г \ Н " , task.key (task.values.max), task.values.max)
    край
