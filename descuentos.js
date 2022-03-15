// const coupons = [
//     {
//         name: "bajo",
//         discount: 15,
//     },
//     {
//         name: "alto",
//         discount: 30,
//     },
//     {
//         name: "medio",
//         discount: 25,
//     },
// ];

// function calcularPrecioConDescuento(precio, descuento){
//     const porcentajePrecioConDescuento = 100 - descuento
//     const precioConDescuento = (precio * porcentajePrecioConDescuento) / 100;
    
//     return precioConDescuento 
// }
 
// function onClickButtonPriceDiscount(){

//     const isCouponValueValid = function (coupon) {
//         return coupon.name === couponValue;
//     };
    
//     const userCoupon = coupons.find(isCouponValueValid);

//     if (!userCoupon) {
//         alert("El cupón " + userCouponValue + "no es válido");
//     } else {
//         const descuento = userCoupon.discount;
//         const precioConDescuento = calcularPrecioConDescuento(priceValue, descuento);
//     1
//         const aPagar = document.getElementById("aPagar");
//         aPagar.innerText = "El precio con descuento son: $" + precioConDescuento;
//     }

//     const inputPrice = document.getElementById("inputPrice")
//     const priceValue = inputPrice.value;

//     const inputCoupon = document.getElementById("inputCoupon")
//     const couponValue = inputCoupon.value;

//     const precioConDescuento = calcularPrecioConDescuento(priceValue, couponValue);
    
//     const aPagar = document.getElementById("aPagar");
//     aPagar.innerText = "El precio con descuento son: $" + precioConDescuento;
// }


function calcularPrecioConDescuento(precio, descuento){
    const porcentajeDelPrecioConDescuento = 100 - descuento;
    const precioConDescuento = (precio * porcentajeDelPrecioConDescuento)/ 100;
  
    return precioConDescuento;
  
  }
  
  function onClickButtonPriceDiscount() {
      const inputPrice = document.getElementById("InputPrice");
      const priceValue = inputPrice.value;
      
      const inputCoupon = document.getElementById("inputCoupon");
      const couponValue = inputCoupon.value;
  
      const resultCoupon = document.getElementById("priceWithCoupon")
    
      let descuento;
      let precioConDescuento; 
    
      switch(true) {
        case couponValue === "bajo":
          descuento = 15;
          precioConDescuento = calcularPrecioConDescuento(priceValue,descuento);
          resultCoupon.innerText =`Cupón es valido el precio con descuento es de: $${precioConDescuento} dolores`
        break;
        case couponValue === "alto":
          descuento = 30;
          precioConDescuento = calcularPrecioConDescuento(priceValue,descuento);
          resultCoupon.innerText =`Cupón es valido el precio con descuento es de: $${precioConDescuento} dolores`
        break;
        case couponValue === "medio":
          descuento = 25;
          precioConDescuento = calcularPrecioConDescuento(priceValue,descuento);
          resultCoupon.innerText =`Cupón es valido el precio con descuento es de: $${precioConDescuento} dolores`
        break;
        default:
          resultCoupon.innerText = "el cupón ingresado no es valido"
      }
  }
  