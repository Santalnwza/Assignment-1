let productName: string = "Notebook";
let pricePerUnit: number = 250;
let quantity: number = 5;
let isMember: boolean = true; 

let totalPrice: number = pricePerUnit * quantity;

let hasDiscount: boolean = totalPrice > 1000 || isMember;


let discountAmount: number = hasDiscount ? totalPrice * 0.10 : 0;


let finalPrice: number = totalPrice - discountAmount;


console.log(`
    ===== รายงานสรุปการซื้อสินค้า =====
ชื่อสินค้า: ${productName}
จำนวนที่ซื้อ: ${quantity} ชิ้น
ราคารวมทั้งหมด: ${totalPrice} บาท
ได้รับส่วนลด: ${hasDiscount}
ราคาที่ต้องจ่ายจริง: ${finalPrice} บาท
====================================
`);   