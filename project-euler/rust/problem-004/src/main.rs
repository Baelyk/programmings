fn main() {
    let mut palindrome = 0;
    for a in 100..999 {
        for b in 100..999 {
            if a * b > palindrome {
                let c: String = (a * b).to_string();
                if &c[0..1] == &c[5..] && &c[1..2] == &c[4..5] && &c[2..3] == &c[3..4] {
                    palindrome = a * b;
                }
            }
        }
    }
    println!("{}", palindrome)
}
