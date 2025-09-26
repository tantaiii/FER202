const person = {
    name: "Alice",
    address: {
        street: "123 Main St"
        // city bị thiếu để test giá trị mặc định
    }
};

// Destructuring object lồng nhau + giá trị mặc định
const { address: { street, city = "Unknown City" } } = person;

// In kết quả
console.log("street =", street); // 123 Main St
console.log("city =", city);     // Unknown City