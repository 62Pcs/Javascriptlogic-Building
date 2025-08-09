function smallest (a, b, c){
    if(a < b &&  a < c){
        return a;
    }
    else if (b < a && b < c){
        return b;
    }
    else if(c < a && c < b){
        return c;
    }
    return a;
}

console.log("smallest(-1, -6, 9 )", smallest(-1, -6, 9));
console.log("smallest(3, 3, 3 )", smallest(3, 3, 3));
console.log("smallest(3, 3, 1 )", smallest(3, 3, 1));
