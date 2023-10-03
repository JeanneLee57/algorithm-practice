def solution(n, t, m, timetable):
    def toNum(str):
        result = 0
        result += int(str[0:2]) * 60
        result += int(str[3:5])
        return result
    
    def toStr(num):
        result = ''
        result += str(num // 60).zfill(2) + ':' + str(num % 60).zfill(2)
        return result
    
    timetable = [toNum(time) for time in timetable]
    timetable.sort()
    buses = [9 * 60 + t * i for i in range(n)]
    
    answer = 0
    i = 0
    for time in buses:
        count = 0
        while count < m and i < len(timetable) and timetable[i] <= time:
            count += 1
            i += 1
        if count < m: answer = time
        else: answer = timetable[i-1] - 1
        
    return toStr(answer)