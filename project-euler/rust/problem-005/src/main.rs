fn main() {
    let mut number: i64 = 1;
    let k = 20;
    let mut factors: Vec<i32> = (2..k).collect();
    let mut i = 0;
    while i < factors.len() {
        let a = factors[i];
        factors.retain(|j| !(*j != a && j % a == 0));
        let mut power = 1;
        while factors[i].pow(power + 1) < k {
            power += 1;
        }
        number *= factors[i].pow(power) as i64;

        i += 1;
    }
    println!("{}", number);
}
