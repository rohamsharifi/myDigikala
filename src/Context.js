import React, { createContext, useState } from "react";

import mobileCover1 from './images/products/DigitalProducts/mobileCovers/mobileCover1.jpg'
import mobileCover2 from './images/products/DigitalProducts/mobileCovers/mobileCover2.jpg'
import mobileCover3 from './images/products/DigitalProducts/mobileCovers/mobileCover3.jpg'
import mobileCover4 from './images/products/DigitalProducts/mobileCovers/mobileCover4.jpg'
import mobileCover5 from './images/products/DigitalProducts/mobileCovers/mobileCover5.jpg'
import mobileCover6 from './images/products/DigitalProducts/mobileCovers/mobileCover6.jpg'
import mobileCover7 from './images/products/DigitalProducts/mobileCovers/mobileCover7.jpg'
import mobileCover8 from './images/products/DigitalProducts/mobileCovers/mobileCover8.jpg'
import mobileCover9 from './images/products/DigitalProducts/mobileCovers/mobileCover9.jpg'
import mobileCover10 from './images/products/DigitalProducts/mobileCovers/mobileCover10.jpg'

import powerBank1 from './images/products/DigitalProducts/powerBanks/powerBank1.jpg'
import powerBank2 from './images/products/DigitalProducts/powerBanks/powerBank2.jpg'
import powerBank3 from './images/products/DigitalProducts/powerBanks/powerBank3.jpg'
import powerBank4 from './images/products/DigitalProducts/powerBanks/powerBank4.jpg'
import powerBank5 from './images/products/DigitalProducts/powerBanks/powerBank5.jpg'
import powerBank6 from './images/products/DigitalProducts/powerBanks/powerBank6.jpg'
import powerBank7 from './images/products/DigitalProducts/powerBanks/powerBank7.jpg'
import powerBank8 from './images/products/DigitalProducts/powerBanks/powerBank8.jpg'
import powerBank9 from './images/products/DigitalProducts/powerBanks/powerBank9.jpg'
import powerBank10 from './images/products/DigitalProducts/powerBanks/powerBank10.jpg'

import phoneHolder1 from './images/products/DigitalProducts/phoneHolders/phoneHolder1.jpg'
import phoneHolder2 from './images/products/DigitalProducts/phoneHolders/phoneHolder2.jpg'
import phoneHolder3 from './images/products/DigitalProducts/phoneHolders/phoneHolder3.jpg'
import phoneHolder4 from './images/products/DigitalProducts/phoneHolders/phoneHolder4.jpg'
import phoneHolder5 from './images/products/DigitalProducts/phoneHolders/phoneHolder5.jpg'
import phoneHolder6 from './images/products/DigitalProducts/phoneHolders/phoneHolder6.jpg'
import phoneHolder7 from './images/products/DigitalProducts/phoneHolders/phoneHolder7.jpg'
import phoneHolder8 from './images/products/DigitalProducts/phoneHolders/phoneHolder8.jpg'
import phoneHolder9 from './images/products/DigitalProducts/phoneHolders/phoneHolder9.jpg'
import phoneHolder10 from './images/products/DigitalProducts/phoneHolders/phoneHolder10.jpg'

import VR1 from './images/products/DigitalProducts/VR/VR1.jpg'
import VR2 from './images/products/DigitalProducts/VR/VR2.jpg'
import VR3 from './images/products/DigitalProducts/VR/VR3.jpg'
import VR4 from './images/products/DigitalProducts/VR/VR4.jpg'
import VR5 from './images/products/DigitalProducts/VR/VR5.jpg'

import gamingAccessory1 from './images/products/DigitalProducts/gamingAccessories/gamingAccessory1.jpg'
import gamingAccessory2 from './images/products/DigitalProducts/gamingAccessories/gamingAccessory2.jpg'
import gamingAccessory3 from './images/products/DigitalProducts/gamingAccessories/gamingAccessory3.jpg'
import gamingAccessory4 from './images/products/DigitalProducts/gamingAccessories/gamingAccessory4.jpg'
import gamingAccessory5 from './images/products/DigitalProducts/gamingAccessories/gamingAccessory5.jpg'
import gamingAccessory6 from './images/products/DigitalProducts/gamingAccessories/gamingAccessory6.jpg'

import monitor1 from './images/products/DigitalProducts/monitor/monitor1.jpg'
import monitor2 from './images/products/DigitalProducts/monitor/monitor2.jpg'
import monitor3 from './images/products/DigitalProducts/monitor/monitor3.jpg'
import monitor4 from './images/products/DigitalProducts/monitor/monitor4.jpg'
import monitor5 from './images/products/DigitalProducts/monitor/monitor5.jpg'
import monitor6 from './images/products/DigitalProducts/monitor/monitor6.jpg'
import monitor7 from './images/products/DigitalProducts/monitor/monitor7.jpg'

import carAccessory1 from './images/products/VehicleProducts/carAccessories/carAccessory1.jpg'
import carAccessory2 from './images/products/VehicleProducts/carAccessories/carAccessory2.jpg'
import carAccessory3 from './images/products/VehicleProducts/carAccessories/carAccessory3.jpg'
import carAccessory4 from './images/products/VehicleProducts/carAccessories/carAccessory4.jpg'
import carAccessory5 from './images/products/VehicleProducts/carAccessories/carAccessory5.jpg'
import carAccessory6 from './images/products/VehicleProducts/carAccessories/carAccessory6.jpg'
import carAccessory7 from './images/products/VehicleProducts/carAccessories/carAccessory7.jpg'
import carAccessory8 from './images/products/VehicleProducts/carAccessories/carAccessory8.jpg'
import carAccessory9 from './images/products/VehicleProducts/carAccessories/carAccessory9.jpg'

import carCleaning1 from './images/products/VehicleProducts/carCleaning/carCleaning1.jpg'
import carCleaning2 from './images/products/VehicleProducts/carCleaning/carCleaning2.jpg'
import carCleaning3 from './images/products/VehicleProducts/carCleaning/carCleaning3.jpg'
import carCleaning4 from './images/products/VehicleProducts/carCleaning/carCleaning4.jpg'
import carCleaning5 from './images/products/VehicleProducts/carCleaning/carCleaning5.jpg'
import carCleaning6 from './images/products/VehicleProducts/carCleaning/carCleaning6.jpg'
import carCleaning7 from './images/products/VehicleProducts/carCleaning/carCleaning7.jpg'
import carCleaning8 from './images/products/VehicleProducts/carCleaning/carCleaning8.jpg'
import carCleaning9 from './images/products/VehicleProducts/carCleaning/carCleaning9.jpg'

import automotiveLighting1 from './images/products/VehicleProducts/automotiveLighting/automotiveLighting1.jpg'
import automotiveLighting2 from './images/products/VehicleProducts/automotiveLighting/automotiveLighting2.jpg'
import automotiveLighting3 from './images/products/VehicleProducts/automotiveLighting/automotiveLighting3.jpg'
import automotiveLighting4 from './images/products/VehicleProducts/automotiveLighting/automotiveLighting4.jpg'
import automotiveLighting5 from './images/products/VehicleProducts/automotiveLighting/automotiveLighting5.jpg'
import automotiveLighting6 from './images/products/VehicleProducts/automotiveLighting/automotiveLighting6.jpg'

export const Context = createContext();

export const Provider = props => {
  const digitalProduct = [{
      name: "کاور مدل SLCN مناسب برای گوشی موبایل سامسونگ Galaxy A51",
      price: 47000,
      number: 16,
      image: mobileCover1,
      mainCategory: "phoneAccessories", 
      mainCategory2: "لوازم جانبی گوشی",
      subCategory: "mobileCover",
      subCategory2: "کیف و کاور گوشی",
      discount: 0.05,
      discount2: "5%",
    },
    {
      name: "کاور کینگ پاور مدل KD21 مناسب برای گوشی موبایل شیائومی Poco X3 NFC / Poco X3 Pro",
      price: 83900,
      number: 8,
      image: mobileCover2,
      mainCategory: "phoneAccessories", 
      mainCategory2: "لوازم جانبی گوشی",
      subCategory: "mobileCover",
      subCategory2: "کیف و کاور گوشی",
      discount: 0,
      discount2: 0

    },
    {
      name: "قاب مدل سیلیکونی مناسب برای گوشی موبایل اپل  iphone ۱۲ Pro Max",
      price: 46000,
      number: 2,
      image: mobileCover3,
      mainCategory: "phoneAccessories", 
      mainCategory2: "لوازم جانبی گوشی",
      subCategory: "mobileCover",
      subCategory2: "کیف و کاور گوشی",
      discount: 0.14,
      discount2: "14%"

    },
    {
      name: "کاور مدل XM326 مناسب برای گوشی موبایل شیائومی Poco X3 / Poco X3 NFC",
      price: 67900,
      number: 3,
      image: mobileCover4,
      mainCategory: "phoneAccessories", 
      mainCategory2: "لوازم جانبی گوشی",
      subCategory: "mobileCover",
      subCategory2: "کیف و کاور گوشی",
      discount: 0,
      discount2: 0

    },
    {
      name: "کاور کی-دوو مدل Aress مناسب برای گوشی موبایل اپل IPhone 12 pro Max",
      price: 30000,
      number: 56,
      image: mobileCover5,
      mainCategory: "phoneAccessories", 
      mainCategory2: "لوازم جانبی گوشی",
      subCategory: "mobileCover",
      subCategory2: "کیف و کاور گوشی",
      discount: 0,
      discount2: 0

    },
    {
      name: "کاور مدل Eouro مناسب برای گوشی موبایل اپل iPhone 11",
      price: 37290,
      number: 34,
      image: mobileCover6,
      mainCategory: "phoneAccessories", 
      mainCategory2: "لوازم جانبی گوشی",
      subCategory: "mobileCover",
      subCategory2: "کیف و کاور گوشی",
      discount: 0,
      discount2: 0

    },
    {
      name: "کاور مدل سیلیکونی مناسب برای گوشی موبایل شیائومی Poco X3",
      price: 37000,
      number: 0,
      image: mobileCover7,
      mainCategory: "phoneAccessories", 
      mainCategory2: "لوازم جانبی گوشی",
      subCategory: "mobileCover",
      subCategory2: "کیف و کاور گوشی",
      discount: 0,
      discount2: 0

    },
    {
      name: "کاور مدل سیلیکونی کد S3880 مناسب برای گوشی موبایل سامسونگ Galaxy A12",
      price: 44500,
      number: 1,
      image: mobileCover8,
      mainCategory: "phoneAccessories", 
      mainCategory2: "لوازم جانبی گوشی",
      subCategory: "mobileCover",
      subCategory2: "کیف و کاور گوشی",
      discount: 0,
      discount2: 0

    },
    {
      name: "کاور مدکاور لیکگاس مدل Borderline مناسب برای گوشی موبایل اپل iphone 13 pro max",
      price: 380000,
      number: 8,
      image: mobileCover9,
      mainCategory: "phoneAccessories", 
      mainCategory2: "لوازم جانبی گوشی",
      subCategory: "mobileCover",
      subCategory2: "کیف و کاور گوشی",
      discount: 0.15,
      discount2: "15%"

    },
    {
      name: "کاور مدل LNZ مناسب برای گوشی موبایل سامسونگ Galaxy A12",
      price: 31000,
      number: 20,
      image: mobileCover10,
      mainCategory: "phoneAccessories", 
      mainCategory2: "لوازم جانبی گوشی",
      subCategory: "mobileCover",
      subCategory2: "کیف و کاور گوشی",
      discount: 0,
      discount2: 0
    },
    {
      name: "شارژر همراه لیتو مدل LP-8 ظرفیت 20000 میلی‌آمپر ساعت",
      price: 1790000,
      number: 23,
      image: powerBank1,
      mainCategory: "phoneAccessories", 
      mainCategory2: "لوازم جانبی گوشی",
      subCategory: "powerBank",
      subCategory2: "پاور بانک (شارژر همراه)",
      discount: 0.5,
      discount2: "50%"
    },
    {
      name: "شارژر همراه لیتو مدل LP-16 ظرفیت 20000 میلی‌آمپر ساعت",
      price: 1090000,
      number: 46,
      image: powerBank2,
      mainCategory: "phoneAccessories", 
      mainCategory2: "لوازم جانبی گوشی",
      subCategory: "powerBank",
      subCategory2: "پاور بانک (شارژر همراه)",
      discount: 0.2,
      discount2: "20%"
    },
    {
      name: "شارژر همراه انرجایزر مدل UE20009 ظرفیت 20000 میلی آمپر ساعت",
      price: 559000,
      number: 16,
      image: powerBank3,
      mainCategory: "phoneAccessories", 
      mainCategory2: "لوازم جانبی گوشی",
      subCategory: "powerBank",
      subCategory2: "پاور بانک (شارژر همراه)",
      discount: 0.22,
      discount2: "22%"
    },
    {
      name: "شارژر همراه شیائومی مدل Redmi ظرفیت 20000 میلی آمپرساعت به همراه کابل تبدیل microUSB",
      price: 510000,
      number: 17,
      image: powerBank4,
      mainCategory: "phoneAccessories", 
      mainCategory2: "لوازم جانبی گوشی",
      subCategory: "powerBank",
      subCategory2: "پاور بانک (شارژر همراه)",
      discount: 0.06,
      discount2: "6%"
    },
    {
      name: "شارژر همراه انکر مدل A1214 PowerCore ظرفیت 10400 میلی آمپر ساعت",
      price: 312000,
      number: 32,
      image: powerBank5,
      mainCategory: "phoneAccessories", 
      mainCategory2: "لوازم جانبی گوشی",
      subCategory: "powerBank",
      subCategory2: "پاور بانک (شارژر همراه)",
      discount: 0,
      discount2: 0
    },
    {
      name: "شارژر همراه انکر مدل A1271 PowerCore ظرفیت 20100 میلی آمپر ساعت",
      price: 505000,
      number: 20,
      image: powerBank6,
      mainCategory: "phoneAccessories", 
      mainCategory2: "لوازم جانبی گوشی",
      subCategory: "powerBank",
      subCategory2: "پاور بانک (شارژر همراه)",
      discount: 0,
      discount2: 0
    },
    {
      name: "شارژر همراه ریمکس مدل RPP-195 ظرفیت 20000 میلی آمپر ساعت",
      price: 790000,
      number: 59,
      image: powerBank7,
      mainCategory: "phoneAccessories", 
      mainCategory2: "لوازم جانبی گوشی",
      subCategory: "powerBank",
      subCategory2: "پاور بانک (شارژر همراه)",
      discount: 0,
      discount2: 0
    },
    {
      name: "پاور بانک مدل Mi ظرفیت 10400 میلی آمپر ساعت",
      price: 483000,
      number: 100,
      image: powerBank8,
      mainCategory: "phoneAccessories", 
      mainCategory2: "لوازم جانبی گوشی",
      subCategory: "powerBank",
      subCategory2: "پاور بانک (شارژر همراه)",
      discount: 0.18,
      discount2: "18%"
    },
    {
      name: "شارژر همراه شیائومی مدل Redmi PB200LZM ظرفیت 20000 میلی آمپر ساعت",
      price: 18000,
      number: 27,
      image: powerBank9,
      mainCategory: "phoneAccessories", 
      mainCategory2: "لوازم جانبی گوشی",
      subCategory: "powerBank",
      subCategory2: "پاور بانک (شارژر همراه)",
      discount: 0,
      discount2: 0
    },
    {
      name: "پاور بانک یوسمز مدلpower bank PB9 Mini با ظرفیت 10000میلی آمپر ساعت",
      price: 325000,
      number: 20,
      image: powerBank10,
      mainCategory: "phoneAccessories", 
      mainCategory2: "لوازم جانبی گوشی",
      subCategory: "powerBank",
      subCategory2: "پاور بانک (شارژر همراه)",
      discount: 0,
      discount2: 0
    },
    {
      name: "پایه نگهدارنده گوشی موبایل و تبلت چرم جانتا مدل 143",
      price: 81000,
      number: 20,
      image: phoneHolder1,
      mainCategory: "phoneAccessories", 
      mainCategory2: "لوازم جانبی گوشی",
      subCategory: "phoneHolder",
      subCategory2: "پایه نگهدارنده گوشی",
      discount: 0.26,
      discount2: "26%"
    },
    {
      name: "سه پایه نگهدارنده گوشی موبایل یونیمات مدل D909",
      price: 45900,
      number: 12,
      image: phoneHolder2,
      mainCategory: "phoneAccessories", 
      mainCategory2: "لوازم جانبی گوشی",
      subCategory: "phoneHolder",
      subCategory2: "پایه نگهدارنده گوشی",
      discount: 0,
      discount2: 0
    },
    {
      name: "حلقه نگهدارنده گوشی موبایل ال جی دی مدل F-19",
      price: 69500,
      number: 4,
      image: phoneHolder3,
      mainCategory: "phoneAccessories", 
      mainCategory2: "لوازم جانبی گوشی",
      subCategory: "phoneHolder",
      subCategory2: "پایه نگهدارنده گوشی",
      discount: 0.29,
      discount2: "29%"
    },
    {
      name: "پایه نگهدارنده گوشی موبایل پاپ سوکت آکام مدل APS0749",
      price: 11500,
      number: 5,
      image: phoneHolder4,
      mainCategory: "phoneAccessories", 
      mainCategory2: "لوازم جانبی گوشی",
      subCategory: "phoneHolder",
      subCategory2: "پایه نگهدارنده گوشی",
      discount: 0,
      discount2: 0
    },
    {
      name: "حلقه نگهدارنده گوشی موبایل ال جی دی مدل F-18",
      price: 69500,
      number: 41,
      image: phoneHolder5,
      mainCategory: "phoneAccessories", 
      mainCategory2: "لوازم جانبی گوشی",
      subCategory: "phoneHolder",
      subCategory2: "پایه نگهدارنده گوشی",
      discount: 0.29,
      discount2: "29%"
    },
    {
      name: "پایه نگهدارنده گوشی موبایل و تبلت چرم جانتا مدل 133",
      price: 65000,
      number: 27,
      image: phoneHolder6,
      mainCategory: "phoneAccessories", 
      mainCategory2: "لوازم جانبی گوشی",
      subCategory: "phoneHolder",
      subCategory2: "پایه نگهدارنده گوشی",
      discount: 0.26,
      discount2: "26%"
    },
    {
      name: "پایه نگهدارنده گوشی موبایل و تبلت یونیورسال مدل 270 درجه",
      price: 13400,
      number: 6,
      image: phoneHolder7,
      mainCategory: "phoneAccessories", 
      mainCategory2: "لوازم جانبی گوشی",
      subCategory: "phoneHolder",
      subCategory2: "پایه نگهدارنده گوشی",
      discount: 0,
      discount2: 0
    },
    {
      name: "سه پایه نگهدارنده گوشی موبایل ویفینگ مدل 3110A",
      price: 130000,
      number: 0,
      image: phoneHolder8,
      mainCategory: "phoneAccessories", 
      mainCategory2: "لوازم جانبی گوشی",
      subCategory: "phoneHolder",
      subCategory2: "پایه نگهدارنده گوشی",
      discount: 0,
      discount2: 0
    },
    {
      name: "پایه نگهدارنده گوشی و تبلت مدل OK Stand",
      price: 7880,
      number: 4,
      image: phoneHolder9,
      mainCategory: "phoneAccessories", 
      mainCategory2: "لوازم جانبی گوشی",
      subCategory: "phoneHolder",
      subCategory2: "پایه نگهدارنده گوشی",
      discount: 0,
      discount2: 0
    },
    {
      name: "سه پایه نگهدارنده گوشی موبایل مدل پاناسون 805-M2",
      price: 269000,
      number: 32,
      image: phoneHolder10,
      mainCategory: "phoneAccessories", 
      mainCategory2: "لوازم جانبی گوشی",
      subCategory: "phoneHolder",
      subCategory2: "پایه نگهدارنده گوشی",
      discount: 0,
      discount2: 0
    },
    {
      name: "هدست واقعیت مجازی ایکس پی پروداکت مدل VR BOX",
      price: 175000,
      number: 15,
      image: VR1,
      mainCategory: "VR", 
      mainCategory2: "واقعیت مجازی",
      subCategory: "car-cleaning",
      discount: 0,
      discount2: 0
    },
    {
      name: "هدست واقعیت مجازی ایکس پی پروداکت مدل VR BOX به همراه ریموت کنترل",
      price: 456000,
      number: 23,
      image: VR2,
      mainCategory: "VR", 
      mainCategory2: "واقعیت مجازی",
      subCategory: "car-cleaning",
      discount: 0,
      discount2: 0
    },
    {
      name: "هدست واقعیت مجازی وی آر باکس مدل VR Box 2",
      price: 157000,
      number: 6,
      image: VR3,
      mainCategory: "VR", 
      mainCategory2: "واقعیت مجازی",
      subCategory: "car-cleaning",
      discount: 0,
      discount2: 0
    },
    {
      name: "هدست عینک واقعیت مجازی وی آر باکس مدل zx534",
      price: 270000,
      number: 27,
      image: VR4,
      mainCategory: "VR", 
      mainCategory2: "واقعیت مجازی",
      subCategory: "car-cleaning",
      discount: 0,
      discount2: 0
    },
    {
      name: "هدست واقعیت مجازی فوجی پاور مدل VR Box",
      price: 176000,
      number: 26,
      image: VR5,
      mainCategory: "VR", 
      mainCategory2: "واقعیت مجازی",
      subCategory: "car-cleaning",
      discount: 0,
      discount2: 0
    },
    {
      name: "دسته بازی اکسل مدل X-101",
      price: 185000,
      number: 23,
      image: gamingAccessory1,
      mainCategory: "computerParts", 
      mainCategory2: "کامپیوتر و تجهیزات جانبی",
      subCategory: "GamingAccessory",
      subCategory2: "تجهیزات مخصوص بازی",
      discount: 0,
      discount2: 0
    },
    {
      name: "دسته بازی شوک دار اکسل مدل X-202 بسته 2 عددی",
      price: 177000,
      number: 14,
      image: gamingAccessory2,
      mainCategory: "computerParts", 
      mainCategory2: "کامپیوتر و تجهیزات جانبی",
      subCategory: "GamingAccessory",
      subCategory2: "تجهیزات مخصوص بازی",
      discount: 0,
      discount2: 0
    },
    {
      name: "دسته بازی موبایل پاوان مدل L1R1",
      price: 20000,
      number: 4,
      image: gamingAccessory3,
      mainCategory: "computerParts", 
      mainCategory2: "کامپیوتر و تجهیزات جانبی",
      subCategory: "GamingAccessory",
      subCategory2: "تجهیزات مخصوص بازی",
      discount: 0,
      discount2: 0
    },
    {
      name: "دسته بازی تسکو مدل TG 135W",
      price: 626600,
      number: 13,
      image: gamingAccessory4,
      mainCategory: "computerParts", 
      mainCategory2: "کامپیوتر و تجهیزات جانبی",
      subCategory: "GamingAccessory",
      subCategory2: "تجهیزات مخصوص بازی",
      discount: 0,
      discount2: 0
    },
    {
      name: "دسته بازی PubG ممو مدل AK66 به همراه آستین کنترل کننده انگشت",
      price: 69500,
      number: 30,
      image: gamingAccessory5,
      mainCategory: "computerParts", 
      mainCategory2: "کامپیوتر و تجهیزات جانبی",
      subCategory: "GamingAccessory",
      subCategory2: "تجهیزات مخصوص بازی",
      discount: 0,
      discount2: 0
    },
    {
      name: "فرمان و پدال بازی تراستمستر مدل T-GT",
      price: 19900000,
      number: 19,
      image: gamingAccessory6,
      mainCategory: "computerParts", 
      mainCategory2: "کامپیوتر و تجهیزات جانبی",
      subCategory: "GamingAccessory",
      subCategory2: "تجهیزات مخصوص بازی",
      discount: 0,
      discount2: 0
    },
    {
      name: "مانیتور جی پلاس مدل GDM-245JN سایز 24 اینچ",
      price: 4940000,
      number: 21,
      image: monitor1,
      mainCategory: "computerParts", 
      mainCategory2: "کامپیوتر و تجهیزات جانبی",
      subCategory: "monitor",
      subCategory2: "مانیتور",
      discount: 0.03,
      discount2: "3%"
    },
    {
      name: "مانیتور مخصوص بازی سامسونگ مدل LF27T350FH-M سایز 27 اینچ",
      price: 6769000,
      number: 31,
      image: monitor2,
      mainCategory: "computerParts", 
      mainCategory2: "کامپیوتر و تجهیزات جانبی",
      subCategory: "monitor",
      subCategory2: "مانیتور",
      discount: 0,
      discount2: 0
    },
    {
      name: "مانیتور ال جی مدل 24MP400-B سایز 23.8 اینچ",
      price: 4899000,
      number: 3,
      image: monitor3,
      mainCategory: "computerParts", 
      mainCategory2: "کامپیوتر و تجهیزات جانبی",
      subCategory: "monitor",
      subCategory2: "مانیتور",
      discount: 0,
      discount2: 0
    },
    {
      name: "مانيتور مخصوص بازی جی پلاس مدل GGM-K327QN سايز 32 اينچ",
      price: 10250000,
      number: 12,
      image: monitor4,
      mainCategory: "computerParts", 
      mainCategory2: "کامپیوتر و تجهیزات جانبی",
      subCategory: "monitor",
      subCategory2: "مانیتور",
      discount: 0,
      discount2: 0
    },
    {
      name: "مانيتور مخصوص بازی جی پلاس مدل GGM-L276FN سايز 27 اينچ",
      price: 7900000,
      number: 13,
      image: monitor5,
      mainCategory: "computerParts", 
      mainCategory2: "کامپیوتر و تجهیزات جانبی",
      subCategory: "monitor",
      subCategory2: "مانیتور",
      discount: 0,
      discount2: 0
    },
    {
      name: "مانیتور صنعتی ال جی مدل 86BH5C سایز 86 اینچ",
      price: 79000000,
      number: 11,
      image: monitor6,
      mainCategory: "computerParts", 
      mainCategory2: "کامپیوتر و تجهیزات جانبی",
      subCategory: "monitor",
      subCategory2: "مانیتور",
      discount: 0,
      discount2: 0
    },
    {
      name: "مانیتور جی پلاس مدل GDM-225JN سایز 22 اینچ",
      price: 4750000,
      number: 8,
      image: monitor7,
      mainCategory: "computerParts", 
      mainCategory2: "کامپیوتر و تجهیزات جانبی",
      subCategory: "monitor",
      subCategory2: "مانیتور",
      discount: 0.03,
      discount2: "3%"
    },
  ];
  const vehicleProducts =[
    {
      name: "کفپوش سه بعدی ( پلی اورتان ) خودرو مناسب برای پژو 405 ، پژو پارس و سمند",
      price: 100280,
      number: 7,
      image: carAccessory1,
      mainCategory: "car-accessory-parts", 
      mainCategory2: "لوازم جانبی خودرو و موتورسیکلت",
      subCategory: "carAccessory",
      subCategory2: "لوازم تزیینی",
      discount: 0,
      discount2: 0,
    },
    {
      name: "روکش صندلی خودرو مدل 4004 مناسب برای پراید",
      price: 325000,
      number: 10,
      image: carAccessory2,
      mainCategory: "car-accessory-parts", 
      mainCategory2: "لوازم جانبی خودرو و موتورسیکلت",
      subCategory: "carAccessory",
      subCategory2: "لوازم تزیینی",
      discount: 0,
      discount2: 0,
    },
    {
      name: "کفپوش سه بعدی خودرو مناسب برای پراید",
      price: 98000,
      number: 12,
      image: carAccessory3,
      mainCategory: "car-accessory-parts", 
      mainCategory2: "لوازم جانبی خودرو و موتورسیکلت",
      subCategory: "carAccessory",
      subCategory2: "لوازم تزیینی",
      discount: 0,
      discount2: 0,
    },
    {
      name: "روکش صندلی خودرو مدل 2002 مناسب برای پراید صبا",
      price: 209000,
      number: 5,
      image: carAccessory4,
      mainCategory: "car-accessory-parts", 
      mainCategory2: "لوازم جانبی خودرو و موتورسیکلت",
      subCategory: "carAccessory",
      subCategory2: "لوازم تزیینی",
      discount: 0,
      discount2: 0,
    },
    {
      name: "کفپوش سه بعدی خودرو ماهوت مدل اکو مناسب برای پراید تیبا ساینا",
      price: 120000,
      number: 24,
      image: carAccessory5,
      mainCategory: "car-accessory-parts", 
      mainCategory2: "لوازم جانبی خودرو و موتورسیکلت",
      subCategory: "carAccessory",
      subCategory2: "لوازم تزیینی",
      discount: 0.07,
      discount2: "7%",
    },
    {
      name: "سر اگزوز مدل 01",
      price: 54800,
      number: 36,
      image: carAccessory6,
      mainCategory: "car-accessory-parts", 
      mainCategory2: "لوازم جانبی خودرو و موتورسیکلت",
      subCategory: "carAccessory",
      subCategory2: "لوازم تزیینی",
      discount: 0,
      discount2: 0,
    },
    {
      name: "جعبه نظم دهنده صندوق عقب خودرو نیازشاپ مدل NPR891",
      price: 265000,
      number: 19,
      image: carAccessory7,
      mainCategory: "car-accessory-parts", 
      mainCategory2: "لوازم جانبی خودرو و موتورسیکلت",
      subCategory: "carAccessory",
      subCategory2: "لوازم تزیینی",
      discount: 0.49,
      discount2: "49%",
    },
    {
      name: "جای دستمال کاغذی خودرو آیلین کد 9101131",
      price: 30650,
      number: 8,
      image: carAccessory8,
      mainCategory: "car-accessory-parts", 
      mainCategory2: "لوازم جانبی خودرو و موتورسیکلت",
      subCategory: "carAccessory",
      subCategory2: "لوازم تزیینی",
      discount: 0,
      discount2: 0,
    },
    {
      name: "روکش صندلی خودرو مدل 205 مناسب برای پراید 131",
      price: 219000,
      number: 11,
      image: carAccessory9,
      mainCategory: "car-accessory-parts", 
      mainCategory2: "لوازم جانبی خودرو و موتورسیکلت",
      subCategory: "carAccessory",
      subCategory2: "لوازم تزیینی",
      discount: 0,
      discount2: 0,
    },
    {
      name: "کارواش رونیکس مدل RP-U100",
      price: 2389000,
      number: 23,
      image: carCleaning1,
      mainCategory: "car-accessory-parts", 
      mainCategory2: "لوازم جانبی خودرو و موتورسیکلت",
      subCategory: "car-cleaning",
      subCategory2: "نظافت و نگهداری خودرو",
      discount: 0,
      discount2: 0,
    },
    {
      name: "کارواش ایزی جت مدل 1001",
      price: 108000,
      number: 56,
      image: carCleaning2,
      mainCategory: "car-accessory-parts", 
      mainCategory2: "لوازم جانبی خودرو و موتورسیکلت",
      subCategory: "car-cleaning",
      subCategory2: "نظافت و نگهداری خودرو",
      discount: 0,
      discount2: 0,
    },
    {
      name: "خوشبو کننده ماشین کد Br01",
      price: 10700,
      number: 40,
      image: carCleaning3,
      mainCategory: "car-accessory-parts", 
      mainCategory2: "لوازم جانبی خودرو و موتورسیکلت",
      subCategory: "car-cleaning",
      subCategory2: "نظافت و نگهداری خودرو",
      discount: 0,
      discount2: 0,
    },
    {
      name: "پولیش بدنه خودرو جلاسنج مدل نرم حجم 170 گرم",
      price: 27990,
      number: 34,
      image: carCleaning4,
      mainCategory: "car-accessory-parts", 
      mainCategory2: "لوازم جانبی خودرو و موتورسیکلت",
      subCategory: "car-cleaning",
      subCategory2: "نظافت و نگهداری خودرو",
      discount: 0,
      discount2: 0,
    },
    {
      name: "کارواش القایی ادون مدل ED-PT180",
      price: 2050000,
      number: 28,
      image: carCleaning5,
      mainCategory: "car-accessory-parts", 
      mainCategory2: "لوازم جانبی خودرو و موتورسیکلت",
      subCategory: "car-cleaning",
      subCategory2: "نظافت و نگهداری خودرو",
      discount: 0,
      discount2: 0,
    },
    {
      name: "اسپری تمیز کننده داخل خودرو سیواکس مدل CW-500ml حجم 500 میلی لیتر",
      price: 30000,
      number: 12,
      image: carCleaning6,
      mainCategory: "car-accessory-parts", 
      mainCategory2: "لوازم جانبی خودرو و موتورسیکلت",
      subCategory: "car-cleaning",
      subCategory2: "نظافت و نگهداری خودرو",
      discount: 0.04,
      discount2: "4%",
    },
    {
      name: "دستمال تمیز کننده نانو وورث مدل 899900106",
      price: 36500,
      number: 8,
      image: carCleaning7,
      mainCategory: "car-accessory-parts", 
      mainCategory2: "لوازم جانبی خودرو و موتورسیکلت",
      subCategory: "car-cleaning",
      subCategory2: "نظافت و نگهداری خودرو",
      discount: 0,
      discount2: 0,
    },
    {
      name: "کارواش آنووی ریوربری مدل HOT 2021N",
      price: 194250000,
      number: 49,
      image: carCleaning8,
      mainCategory: "car-accessory-parts", 
      mainCategory2: "لوازم جانبی خودرو و موتورسیکلت",
      subCategory: "car-cleaning",
      subCategory2: "نظافت و نگهداری خودرو",
      discount: 0,
      discount2: 0,
    },
    {
      name: "اسپری نانو واکس فوری بدنه ی خودرو تام کلین مدل TC-480blsw حجم 480 میلی لیتر",
      price: 48900,
      number: 15,
      image: carCleaning9,
      mainCategory: "car-accessory-parts", 
      mainCategory2: "لوازم جانبی خودرو و موتورسیکلت",
      subCategory: "car-cleaning",
      subCategory2: "نظافت و نگهداری خودرو",
      discount: 0.15,
      discount2: "15%",
    },
    {
      name: "چراغ جلو خودرو مدل pr-9910 مناسب برای پراید بسته 2 عددی",
      price: 745000,
      number: 6,
      image: automotiveLighting1,
      mainCategory: "car-spare-parts", 
      mainCategory2: "لوازم یدکی خودرو و موتورسیکلت",
      subCategory: "automotiveLighting",
      subCategory2: "چراغ خودرو",
      discount: 0,
      discount2: 0,
    },
    {
      name: "چراغ جلو خودرو مدل JT123 MP مناسب برای پراید 131 بسته 2 عددی",
      price: 442000,
      number: 5,
      image: automotiveLighting2,
      mainCategory: "car-spare-parts", 
      mainCategory2: "لوازم یدکی خودرو و موتورسیکلت",
      subCategory: "automotiveLighting",
      subCategory2: "چراغ خودرو",
      discount: 0,
      discount2: 0,
    },
    {
      name: "چراغ جلو نگین مدل 03-206 مناسب برای پژو 206 بسته 2 عددی",
      price: 900000,
      number: 4,
      image: automotiveLighting3,
      mainCategory: "car-spare-parts", 
      mainCategory2: "لوازم یدکی خودرو و موتورسیکلت",
      subCategory: "automotiveLighting",
      subCategory2: "چراغ خودرو",
      discount: 0,
      discount2: 0,
    },
    {
      name: "چراغ جلو کروز مدل 401-501 مناسب برای پژو 206 بسته دو عددی",
      price: 888440,
      number: 15,
      image: automotiveLighting4,
      mainCategory: "car-spare-parts", 
      mainCategory2: "لوازم یدکی خودرو و موتورسیکلت",
      subCategory: "automotiveLighting",
      subCategory2: "چراغ خودرو",
      discount: 0,
      discount2: 0,
    },
    {
      name: "چراغ جلو خودرو مدل pr-010 مناسب برای پژو 405 بسته 2 عددی",
      price: 748000,
      number: 14,
      image: automotiveLighting5,
      mainCategory: "car-spare-parts", 
      mainCategory2: "لوازم یدکی خودرو و موتورسیکلت",
      subCategory: "automotiveLighting",
      subCategory2: "چراغ خودرو",
      discount: 0,
      discount2: 0,
    },
    {
      name: "چراغ جلو فن آوران پرتو الوند مدل 131 مناسب برای پراید 131 بسته 2عددی",
      price: 449000,
      number: 19,
      image: automotiveLighting6,
      mainCategory: "car-spare-parts", 
      mainCategory2: "لوازم یدکی خودرو و موتورسیکلت",
      subCategory: "automotiveLighting",
      subCategory2: "چراغ خودرو",
      discount: 0,
      discount2: 0,
    },
  ] 
  const electronicCategory = [
    {
      mainCategory: "لوازم جانبی گوشی",
      subCategories: ["کیف و کاور گوشی", "پایه نگهدارنده گوشی", "پاور بانک (شارژر همراه)"]
    },
    {
      mainCategory: "گوشی موبایل",
      subCategories: ["سامسونگ", "اپل", "هوآوی", "آنر", "نوکیا", "شیائومی"]
    },
    {
      mainCategory: "واقعیت مجازی",
      subCategories: []
    },
    {
      mainCategory: "هدفون،‌ هدست، هندزفری",
      subCategories: []
    },
    {
      mainCategory: "اسپیکر بلوتوث و با سیم",
      subCategories: []
    },
    {
      mainCategory: "هارد، فلش و SSD",
      subCategories: []
    },
    {
      mainCategory: "دوربین",
      subCategories: ["دوربین عکاسی دیجیتال", "دوربین ورزشی و فیلمبرداری", "دوربین چاپ سریع"]
    },
    {
      mainCategory: "لوازم جانبی دوربین",
      subCategories: ["لنز", "کیف", "کارت حافظه", "کاغذ جاپ عکس"]
    },
    {
      mainCategory: "تلسکوپ",
      subCategories: []
    },
    {
      mainCategory: "پلی استیشن، ایکس باکس و بازی",
      subCategories: []
    },
    {
      mainCategory: "کامپیوتر و تجهیزات جانبی",
      subCategories: ["تجهیزات مخصوص بازی", "مانیتور", "کیس های اسمبل شده", "قطعات داخلی کامپیوتر", "ماوس", "کیبورد"]
    },
    {
      mainCategory: "لپ تاپ",
      subCategories: []
    },
    {
      mainCategory: "لوازم جانبی لپ تاپ",
      subCategories: ["کیف، کوله و کاور"]
    },
    {
      mainCategory: "تبلت",
      subCategories: []
    },
    {
      mainCategory: "شارژر تبلت و موبایل",
      subCategories: []
    },
    {
      mainCategory: "کیف، کاور، لوازم جانبی تبلت",
      subCategories: []
    },
    {
      mainCategory: "باتری",
      subCategories: []
    },
    {
      mainCategory: "دوربین های تحت شبکه",
      subCategories: []
    },
    {
      mainCategory: "مودم و تجهیزات شبکه",
      subCategories: []
    },
    {
      mainCategory: "ماشین های اداری",
      subCategories: ["تلفن، بی سیم و سانترال", "فكس", "پرينتر", "لوازم جانبی اداری"]
    },
    {
      mainCategory: "کتابخوان فیدیبوک",
      subCategories: []
    },
  ];
  const vehicleCategory = [
    {
      mainCategory: "خودردهای ایرانی و خارجی",
      subCategories: [] 
    },
    {
      mainCategory: "موتور سیکلت",
      subCategories: [] 
    },
    {
      mainCategory: "لوازم جانبی خودرو و موتورسیکلت",
      subCategories: ["لوازم تزیینی", "سیستم صوتی و تصویری", "نظافت و نگهداری خودرو", "کلاه کاسکت و لوازم جانبی موتور"] 
    },
    {
      mainCategory: "لوازم یدکی خودرو و موتورسیکلت",
      subCategories: ["دیسک و صحفه کلاچ", "جلوبندی و تعلیق", "چراغ خودرو", "تسمه خودرو"] 
    },
    {
      mainCategory: "لوازم مصرفی خودرو و موتور سیکلت",
      subCategories: ["لاستیک و تایر", "لنت ترمز", "روغن موتور و ضد یخ", "مکمل سوخت و روغن و انواع فیلتر"] 
    },
    {
      mainCategory: "ابزار برقی",
      subCategories: ["دریل، پیچ کوشتی برقی و شارژی", "فرز و سنگ رومیزی", "موتور برق", "مکنده و دمنده", "کارواش", "کمپرسور و جک خودرو"] 
    },
    {
      mainCategory: "ابزار غیر برقی",
      subCategories: ["ابزار دستی", "مجموعه ابزار", "نردبان", "پیچ گوشتی و فازمتر", "نظم دهنده ابزار", "متر، تراز، اندازه گیری دقیق", "لوازم روانکاری", "چسب صنعتی"] 
    },
    {
      mainCategory: "لوازم و یراق آلات ساختمانی",
      subCategories: ["شیرآلات", "رنگ"] 
    },
    {
      mainCategory: "لوازم باغبانی",
      subCategories: ["قیچی، چاقو و ابزار باغبانی", "بذر و تخم گیاهان", "تبر،‌ بیل و کلنگ", "خاک، کود و آفت کش"] 
    },
    {
      mainCategory: "نور و روشنایی",
      subCategories: ["لوستر و آباژور", "لامپ", "چندراهی برق و محافظ ولتاژ"] 
    },
    {
      mainCategory: "تجهیزات ایمنی و کار",
      subCategories: ["کفش ایمنی"] 
    },
    {
      mainCategory: "حفاظتی و امنیت",
      subCategories: [] 
    },
  ]
  const apparelCategory = [
    {
      mainCategory: "مردانه",
      subCategories: [] 
    },
    {
      mainCategory: "لباس مردانه",
      subCategories: ["تی شرت و پولوشرت", "پیراهن", "شلوار", "لباس زیر"] 
    },
    {
      mainCategory: "کفش مردانه",
      subCategories: ["کفش روزمره", "کفش رسمی"] 
    },
    {
      mainCategory: "اکسسوری مردانه",
      subCategories: ["ساعت", "کیف"] 
    },
    {
      mainCategory: "زنانه",
      subCategories: [] 
    },
    {
      mainCategory: "لباس زنانه",
      subCategories: ["پوشش اسلامی و مانتو", "بلوز و شومیز", "تی شرت و پولوشرت", "شلوار و سرهمی", "لباس زیر"] 
    },
    {
      mainCategory: "کفش زنانه",
      subCategories: ["کفش روزمره", "کفش تخت"] 
    },
    {
      mainCategory: "اکسسوری زنانه",
      subCategories: ["ساعت", "شال و روسری"] 
    },
    {
      mainCategory: "زیورآلات زنانه",
      subCategories: ["دستبند", "گوشواره", "گردنبند"] 
    },
    {
      mainCategory: "زیورآلات طلا زنانه",
      subCategories: ["دستبند", "گوشواره", "آویز", "گردنبند"] 
    },
    {
      mainCategory: "زیورآلات نقره زنانه",
      subCategories: [] 
    },
    {
      mainCategory: "عینک آفتابی زنانه",
      subCategories: [] 
    },
    {
      mainCategory: "پوشاک ورزشی مردانه",
      subCategories: [] 
    },
    {
      mainCategory: "پوشاک ورزشی زنانه",
      subCategories: [] 
    },
    {
      mainCategory: "کفش ورزشی مردانه",
      subCategories: [] 
    },
    {
      mainCategory: "کفش ورزشی زنانه",
      subCategories: [] 
    },
    {
      mainCategory: "پوشاک ورزشی پسرانه",
      subCategories: [] 
    },
    {
      mainCategory: "پوشاک ورزشی دخترانه",
      subCategories: [] 
    },
    {
      mainCategory: "کفش ورزشی پسرانه",
      subCategories: [] 
    },
    {
      mainCategory: "کفش ورزشی دخترانه",
      subCategories: [] 
    },
    {
      mainCategory: "کوله پشتی مردانه",
      subCategories: [] 
    },
    {
      mainCategory: "بچه گانه",
      subCategories: ["نوزاد", "پسرانه"] 
    },
  ]
  const motherAndChildCategory = [
    {
      mainCategory: "بهداشت و حمام کودک و نوزاد",
      subCategories: ["پوشک", "دستمال مرطوب", "حوله", "وان حمام نوزاد", "مینی واش", "شامپو کودک نوزاد"]
    },
    {
      mainCategory: "پوشاک و کفش کودک و نوزاد",
      subCategories: ["لباس کودک و لباس نوزادی", "کفش", "کفش ورزشی", "جوراب و پاپوش کودک و نوزاد"]
    },
    {
      mainCategory: "تبلت",
      subCategories: []
    },
    {
      mainCategory: "XBox, PS4 و بازی",
      subCategories: []
    },
    {
      mainCategory: "اسباب بازی",
      subCategories: ["فکری و آموزشی", "پازل، لگو و ساختنی", "عروسک و فیگور", "اسپینر، ابزار شوخی و سرگرمی", "تفنگ، تیر و لوازم بازی جنگی"]
    },
    {
      mainCategory: "بازی و سرگرمی کودک",
      subCategories: ["ماشین بازی، موتور، سه چرخه", "دوچرخه", "تشک بازی و پارک بازی"]
    },
    {
      mainCategory: "سلامت، ایمنی و مراقبت",
      subCategories: ["تصفیه هوا", "ترازو", "دوربین و پیجر اتاق کودک", "تب سنج و دماسنج", "محافظ و ابزار ایمنی"]
    },
    {
      mainCategory: "خواب کودک",
      subCategories: ["مبلمان اتاق کودک", "چراغ خواب کودک", "تشک کودک", "سرویس خواب", "پتو"]
    },
    {
      mainCategory: "ملزومات گردش و سفر",
      subCategories: ["کالسکه و کریر", "صندلی خودرو کودک و نوزاد", "ساک لوازم نوزاد", "لوازم جانبی گردش و سفر", "آغوشی"]
    },
    {
      mainCategory: "لوازم شخصی",
      subCategories: ["پستانک و ملزومات", "شیردوش", "شورت آموزشی"]
    },
    {
      mainCategory: "غذاخوری",
      subCategories: ["صندلی غذاخوری"]
    },
  ]
  const foodCategory = [
    {
      mainCategory: "کالای اساسی و خوار و بار",
      subCategories: ["نان", "برنج", "روغن", "قند", "شکر", "سس", "رب و کنسرو گوجه", "خیارشور و ترشیجات", "آبلیمو، آبغوره و سرکه", "ماکارونی، پاستا و رشته", "زعفران، زرشک و تزیینات غذا"]
    },
    {
      mainCategory: "صبحانه",
      subCategories: ["مربا", "عسل", "حلواشکری، ارده و کنجد"]
    },
    {
      mainCategory: "مواد پروتئینی",
      subCategories: ["سوسیس و کالباس", "گوشت گوسفندی", "گوشت مرغ", "تخم مرغ", "گوشت گاو و گوساله", "میگو", "ماهی"]
    },
    {
      mainCategory: "لبنیات",
      subCategories: ["شیر", "ماست", "پنیر", "خامه"]
    },
    {
      mainCategory: "نوشیدنی ها",
      subCategories: ["چای", "دمنوش", "قهوه", "آب و آب معدنی", "ماءالشعیر", "نوشابه"]
    },
    {
      mainCategory: "میوه و سبزی",
      subCategories: []
    },
    {
      mainCategory: "غذای آماده و نودل",
      subCategories: []
    },
    {
      mainCategory: "فرآورده‌های منجمد",
      subCategories: []
    },
    {
      mainCategory: "کنسرو و کمپوت",
      subCategories: []
    },
    {
      mainCategory: "تنقلات",
      subCategories: ["شکلات، تافی و آبنبات", "بیسکویت و ویفر", "مغز طعم‌دار خشکبار", "کیک و کلوچه", "چیپس و پاپ کورن", "پفک و اسنک", "آدامس و خوشبوکننده"]
    },
  ]

  const [isMain, setIsMain] = useState(null)
  
  const [offerCounter, setOfferCounter] = useState(0)

  const [productCategory, setProductCategory] = useState("")

  const [productArray, setProductArray] = useState([])

  const [productName, setProductName] = useState("")

  const [productImage, setProductImage] = useState("")

  return <Context.Provider value={{digitalProduct, vehicleProducts, electronicCategory, vehicleCategory, apparelCategory, motherAndChildCategory, foodCategory, isMain, setIsMain, offerCounter, setOfferCounter, productCategory, setProductCategory, productArray, setProductArray, productName, setProductName, productImage, setProductImage}}>{props.children}</Context.Provider>;
};
