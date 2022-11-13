def palindrome(str):
    if(str == str[::-1]):
        return True
    else:
        return False

palindrome('123456789') # Retourne False
palindrome('123454321') # Retourne True