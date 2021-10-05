
if __name__ == "__main__":
    print(" _______________________________________________________________ ")
    print("||                                                             ||")
    print("|| This a program to convert a 32-bit number to decimal number ||")
    print("|| and floating value                                          ||")
    print("||_____________________________________________________________||\n")
    # Example : 01000000101000000000000000000000
    userInput = str(input("Enter 32-bit number : "))
    
    # i32 = 0|10000001|01000000000000000000000
    i32 = userInput[0] + "|" + userInput[1:9] + "|" + userInput[9:]

    # signOfBit = 0
    # take the first element in list "i32"
    signOfBit = int(i32[0])
    
    # take the str type i32[index2 to index10] 
    # and put it in int built-in method
    # assign 2 as 2nd argument to make the binary
    # to dec
    # biasedExponent = 129
    biasedExponent = int(i32[2: 10], 2)

    # unbiasedExp = 129 - 127
    unbiasedExp = biasedExponent- 127

    # take the 11th or the rest number in the i32
    # strTypeMantissa= 01000000000000000000000
    strTypeMantissa = i32[11:]

    power_count = -1
    intTypeMantissa = 1

    for i in strTypeMantissa:
        intTypeMantissa += (int(i) * pow(2, power_count))

        power_count -= 1

    decimal = pow(-1, signOfBit) * intTypeMantissa * pow(2, unbiasedExp)

    # let's print
    print("_______________________________________________________________ ")
    print("\nFloating Number : " +
          str(intTypeMantissa) + "*2^" + str(unbiasedExp))
    print("Decimal Number: ", str(decimal))

    # 01000000101000000000000000000000
