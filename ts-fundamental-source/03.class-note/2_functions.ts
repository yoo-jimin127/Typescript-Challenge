// 함수의 파라미터에 타입을 정의하는 방식
function sum_func(a: number, b: number): number {
    return a + b;
}

sum(10, 20);

// 옵셔널 파라미터 - 함수의 선택적 파라미터
function log(a: string, b?: string, c?: string): void {
    console.log("optional parameter")
}