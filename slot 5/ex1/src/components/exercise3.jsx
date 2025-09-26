const companies = [
    { name: "Company One", category: "Finance", start: 1981, end: 2003 },
    { name: "Company Two", category: "Retail", start: 1992, end: 2008 },
    { name: "Company Three", category: "Auto", start: 1999, end: 2007 },
    { name: "Company Four", category: "Retail", start: 1989, end: 2010 },
    { name: "Company Five", category: "Technology", start: 2009, end: 2014 },
    { name: "Company Six", category: "Finance", start: 1987, end: 2010 },
  ];
  
  // Tạo bản sao đã sort theo end tăng dần (không mutate mảng gốc)
  const sortedCompanies = [...companies].sort((a, b) => a.end - b.end);
  
  // Cắt lấy 3 công ty đầu
  const top3 = sortedCompanies.slice(0, 3);
  
  // In ra theo định dạng "Company - EndYear"
  top3.forEach(c => console.log(`${c.name} - ${c.end}`));

  
  
  // 🔹 Spread để tạo object mới (bất biến)
  const company0New = { 
    ...companies[0],     // copy toàn bộ thuộc tính
    start: companies[0].start + 1 // ghi đè start + 1
  };
  
  // 🔹 Rest để gom mảng tham số thành 1 biến arrays
  function concatAll(...arrays) {
    return arrays.flat();   // gộp các mảng con thành 1 mảng
  }
  
  // 🖨️ In ra kết quả
  console.log("companies[0] =", companies[0]);
  console.log("company0New =", company0New);
  
  console.log("concatAll([1,2],[3],[4,5]) =", concatAll([1,2],[3],[4,5]));
  const ages = [12, 17, 20, 25, 15, 32, 40, 18, 19, 22];

// Dùng reduce để tính toán tổng, min, max, và bucket
const result = ages.reduce(
  (acc, age) => {
    // cộng dồn tổng
    acc.total += age;

    // cập nhật min, max
    if (age < acc.min) acc.min = age;
    if (age > acc.max) acc.max = age;

    // phân loại bucket
    if (age >= 13 && age <= 19) {
      acc.buckets.teen++;
    } else if (age >= 20) {
      acc.buckets.adult++;
    }

    return acc;
  },
  {
    total: 0,
    min: Infinity,
    max: -Infinity,
    buckets: { teen: 0, adult: 0 }
  }
);

// 🖨️ In kết quả
console.log(`Total: ${result.total}, Min: ${result.min}, Max: ${result.max}`);
console.log("Buckets:", result.buckets);
  
  