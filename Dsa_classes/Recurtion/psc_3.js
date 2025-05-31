function check(start,end,str){
        
        if (end<start){
            return ""
        }
        mid=parseInt((start+end)/2)
        console.log(mid)
        return str[mid] + check(start,mid-1,str) +check(mid+1,end,str)
    }
    

console.log(check(0,10,'abcdefgfhijk'))

// console.log(parseInt((7+8)/2))