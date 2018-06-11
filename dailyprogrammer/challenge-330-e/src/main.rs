    use std::fs::File;
    use std::io::prelude::*;

    fn main() {
        struct Circle {
            x: f32,
            y: f32,
            radius: f32,
        };
        let mut circles = vec![];
        let mut bounds = [0_f32; 4]; // 0: top, 1: left, 2: bottom, 3: right

        /* input.txt:
            1,1,2
            2,2,0.5
            -1,-3,2
            5,2,1
        */
        let mut input = String::new();
        File::open("input.txt").expect("File not found (input.txt)").read_to_string(&mut input).expect("../input.txt reading error");
        for line in input.lines() {
            let circle_parts: Vec<&str> = line.split(',').collect();
            circles.push(Circle {
                x: circle_parts[0].parse().unwrap(),
                y: circle_parts[1].parse().unwrap(),
                radius: circle_parts[2].parse().unwrap(),
            })
        }

        for circle in circles {
            bounds[0] = match bounds[0] < circle.y + circle.radius {
                true => circle.y + circle.radius,
                false => bounds[0],
            };
            bounds[1] = match bounds[1] > circle.x - circle.radius {
                true => circle.x - circle.radius,
                false => bounds[1],
            };
            bounds[2] = match bounds[2] > circle.y - circle.radius {
                true => circle.y - circle.radius,
                false => bounds[2],
            };
            bounds[3] = match bounds[3] < circle.x + circle.radius {
                true => circle.x + circle.radius,
                false => bounds[3],
            };
        }
        println!("({1}, {2}), ({1}, {0}), ({3}, {0}), ({3}, {2})", bounds[0], bounds[1], bounds[2], bounds[3]);
    }
