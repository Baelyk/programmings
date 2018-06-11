fn main() {
    let mut big_bad_num: u64 = 600851475143;
    let mut i = 3;
    while big_bad_num % 2 == 0 {
        big_bad_num /= 2;
    }
    while big_bad_num > 1 {
        if big_bad_num % i == 0 {
            big_bad_num /= i;
        } else {
            i += 2;
        }
    }
    println!("{}", i)
}
