export function Exercise2(){
    let numbers = [1, 2, 3, 4, 5];
    let names = ["An", "Tình", "Mi", "lung"];
    const people = [
        { id: 1, name: "An", age: 20 },
        { id: 2, name: "Bình", age: 22 },
        { id: 3, name: "Chi", age: 19 },
        { id: 4, name: "Dung", age: 21 },
        { id: 5, name: "Hải", age: 23 },
        { id: 6, name: "Hương", age: 20 },
        { id: 7, name: "Khánh", age: 24 },
        { id: 8, name: "Lan", age: 22 },
        { id: 9, name: "Minh", age: 13 },
        { id: 10, name: "Tuấn", age: 16 }
      ];
    
      const sum = numbers.reduce((acc, val) => acc + val, 0);
      const sortedPeople = [...names].sort();
      const teenagers = people.filter(
        (person) => person.age >= 13 && person.age <= 19
      );
      const totalAge = people.reduce((acc, person) => acc + person.age, 0);
      const averageAge = (totalAge / people.length).toFixed(2);
    return(
        <div>
        <h2>Danh sách số nguyên:</h2>
        <ul>
          {numbers.map((n, index) => (
            <li key={index}>{n}</li>
          ))}
       </ul>
        <p>  Tong cac so nguyen = {sum}</p>
        <p>so luong phan tu la : {numbers.length}</p>
        <p>hien thi danh sach ten tang dan </p>
        <ul>
        {sortedPeople.map((name, index) => (
          <li key={index}>{name}</li>
        ))}
      </ul>
      <ul>
      {teenagers.map((person) => (
          <li key={person.id}>
            {person.name} (Age: {person.age})
          </li>
        ))}
      </ul>
      <p> trung binh tuoi la : {averageAge}</p>
        </div>
    )
}