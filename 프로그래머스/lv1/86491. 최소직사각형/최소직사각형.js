function solution(sizes) {
    let arr = sizes.map(x => x.sort((a,b) => a-b)).reduce((a, b) => {
        if(a[0] < b[0]) a[0] = b[0]
        if(a[1] < b[1]) a[1] = b[1]
        return a;
    }, [0, 0])
    return arr[0] * arr[1];
}
