alphabet = "bcdefghijklmnopqrstuvwxyz"

File.open("a.txt", 'w'){|file|
    for counter1 in 0..24
        for counter2 in 0..24
            for counter3 in 0..24
                for counter4 in 0..24
                    for counter5 in 0..24
                        for counter6 in 0..24
                            result = alphabet[counter1] + alphabet[counter2] + alphabet[counter3] + alphabet[counter4] + alphabet[counter5] + alphabet[counter6] + "\n"

                            file.write(result)
                        end 
                    end 
                end 
            end
            print "." 
        end
    end 
}
