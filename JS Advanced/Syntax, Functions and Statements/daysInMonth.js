function solve(month,year) {
    return new Date(year,month,0).getDate()
}
solve(1,2001)