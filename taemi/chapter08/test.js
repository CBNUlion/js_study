// 구글 콘솔에서는 되지 않는 예제
const arr = [{name : "Suzanne"}, {name : "Jin"}, {name : "Trenor"},{name:"Amanda"},];

arr.sort((a,b)=> a.name>b.name);
console.log(arr);


// reduce를 이용한 통계 관련
// 데이터 셋의 평균과 분산을 계산하는 예제
const data = [3.3, 5, 7.2, 12, 4, 6, 10.3];
const stats = data.reduce((a, x) => {
    a.N++;
    let delta = x - a.mean;
    a.mean += delta/a.N;
    a.M2 += delta*(x - a.mean);
    return a;
}, {N:0, mean:0, M2:0});
if(stats.N > 2){
    stats.variance = stats.M2 / (stats.N -1);
    stats.stdev = Math.sqrt(stats.variance);
}


// 