let bookTitle: string = "TypeScript Programming";
let isbn: string = "978-616-123456-7";
let price: number = 650;

let bookSummary: [string, number] = [bookTitle, price];


let isAvailable: boolean = true;

let discountPrice: number = price - (price * 15 / 100);


let isPremium: boolean = price > 500;


let canDisplay: boolean = isPremium && isAvailable;

console.log(`
========== รายงานข้อมูลหนังสือ ==========
ชื่อหนังสือ : ${bookTitle}
ISBN : ${isbn}

ข้อมูลจาก Tuple
- ชื่อหนังสือ : ${bookSummary[0]}
- ราคา : ${bookSummary[1]} บาท

ราคาก่อนลด : ${price} บาท
ราคาหลังลด 15% : ${discountPrice} บาท

เป็นหนังสือ Premium : ${isPremium}
สถานะว่างให้ยืม : ${isAvailable}
สามารถจัดแสดงหน้าตู้โชว์ได้ : ${canDisplay}
=========================================
`);