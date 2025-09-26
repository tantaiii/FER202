// Hàm tính tổng
const sum = (...nums) => {
    let total = 0;
    for (let n of nums) {
        let value = Number(n);      // Ép về số
        if (!isNaN(value)) {        // Nếu hợp lệ thì cộng
            total += value;
        }
    }
    return total;
};


const sum1 = (...nums) => 
    nums
      .filter(num => typeof num === 'number' && !isNaN(num))
      .reduce((acc, num) => acc + num, 0);

console.log(sum1(1, 2, 3, "abc", 4));
// Hàm tính trung bình
const avg = (...nums) => {
    let total = 0;
    let count = 0;

    for (let n of nums) {
        let value = Number(n);      // Ép về số
        if (!isNaN(value)) {        // Nếu hợp lệ
            total += value;
            count++;
        }
    }

    if (count === 0) return 0;      // Không có số hợp lệ
    return (total / count).toFixed(2); // 2 chữ số thập phân
};

// In kết quả
console.log("sum(1,2,3) =", sum(1, 2, 3));       // 6
console.log("sum(1,'x',4) =", sum(1, 'x', 4));   // 5
console.log("avg(1,2,3,4) =", avg(1, 2, 3, 4));  // 2.50
console.log("avg() =", avg());                  // 0
