fn main() {
    let mut fibs = [0, 1];
    let mut sum = 0;
    while fibs[1] < 4000000 {
        let fib = fibs[0] + fibs[1];
        fibs[0] = fibs[1];
        fibs[1] = fib;
        if fib % 2 == 0 {
            sum += fib;
        }
    }
    println!("{}", sum);
}
