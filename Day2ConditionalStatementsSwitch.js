function getLetter(s) {
    // Write your code here
    switch(s.charAt(0)){
        case('a' || 'e' || 'i' || 'o' || 'u'):
            return 'A';
        case('b' || 'c' || 'd' || 'f' || 'g'):
            return 'B';
        case('h' || 'j' || 'k' || 'l' || 'm'):
            return 'C';
        case('z' || 'n' || 'p' || 'q' || 'r' || 's' || 't' || 'v' || 'w' || 'x' || 'y'):
            return 'D';
    }
}