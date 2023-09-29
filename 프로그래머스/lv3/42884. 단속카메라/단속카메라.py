def solution(routes):
    routes = sorted(routes)
    cameras = []
    for [x, y] in routes:
        if len(cameras) == 0:
            cameras.append([x, y])
        else:
            for i in range(0, len(cameras) + 1):
                if i == len(cameras): 
                    cameras.append([x, y])
                    break
                elif cameras[i][0] > y or cameras[i][1] < x: continue
                elif cameras[i][0] <= x or cameras[i][1] >= y:
                    if cameras[i][0] < x: cameras[i][0] = x
                    if cameras[i][1] > y: cameras[i][1] = y
                    break
    return len(cameras)