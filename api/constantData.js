import bannerImageButtom1 from '~/assets/images/banner-f-1.webp';
import bannerImage from '~/assets/images/banner-img.webp';
import benifitSectionImg from '~/assets/images/benifit-section-img.webp';
import bonousImg1 from '~/assets/images/bonousImg1.webp';
import bonousImg2 from '~/assets/images/bonousImg2.webp';
import customerReviewImg from '~/assets/images/customer-review.webp';
import product2 from '~/assets/images/prodcut2.webp';
import product3 from '~/assets/images/product3.webp';
import product1 from '~/assets/images/products1.webp';
import reviewImg1 from '~/assets/images/review-img-1.webp';
import reviewImg2 from '~/assets/images/review-img-2.webp';
import reviewImg3 from '~/assets/images/review-img-3.webp';
import reviewImg4 from '~/assets/images/review-img-4.webp';
import reviewImg6 from '~/assets/images/review-img-6.webp';
import reviewImg7 from '~/assets/images/review-img-7.webp';
import reviewImg5 from '~/assets/images/review=img-5.webp';
import satisfactionImg from '~/assets/images/satisfactionImg.webp';
import sugarDefenderImg from '~/assets/images/sugar-defender.webp';


export const bannerSectionData = {
  HEADLINE: 'Sugar Defender: The #1 Rated Blood Sugar Formula',
  DESCRIPTION: "Step into a new era of well-being with Sugar Defender—a revolutionary blood sugar support formula. This unique blend not only maintains healthy glucose levels but also conducts a calming symphony, improving blood circulation, curbing junk food temptations, and ensuring blissful nights of rest.",
  BANNERIMAGE: bannerImage,
  BANNERFOOTERIMG: bannerImageButtom1,
  REGPRICE: "Regular Price",
  REGPRICEVALUE: "$179 For Each Bottle",
  TODAYOFFER: "Today Special Offer - $49 For Each Bottle",
  BUTTONTOPTEXT: "Order Sugar Defender Now",
  BUTTONBOTTOMTEXT: "[Official Wesbite + $780 Off + 2 Bonuses]"
}

export const reviewSectionData = {
  TITLE: "Sugar Defender Customer Reviews",
  IMAGES: [reviewImg1, reviewImg2, reviewImg3, reviewImg4],
  REVIEWS: [
    {
      id: 1,
      img: reviewImg5,
      description: "“I give this supplement 5 stars. It does everything it claims to do! My sugar is down from 200's plus to 123 to 140 I have lost 6 pounds without even really trying or changing my diet! Now, If I watch my diet and sugar, I see myself possibly lowering my sugar enough to get off prescription sugar meds... I have been taking this supplement for a little over a month. I love it! I have tried so many supplements and they did not work. This one does!!!”",
      name: "Sabine G. ",
      address: "Texas, USA",
      verify: "Verified Purchased",
      rating: 5
    },
    {
      id: 2,
      img: reviewImg6,
      description: "“I really like this product! I've been taking another blood sugar support product for several years that is much more expensive and I thought I'd give this a try. Works just as well as the more expensive but yes, for less cost!! Thank you!”",
      name: "Jack S.",
      address: "Arizona, USA",
      verify: "Verified Purchased",
      rating: 3
    },
    {
      id: 3,
      img: reviewImg7,
      description: "“Very happy with the results. My blood sugar is stable and I have more energy. Product is great. Looked up helpful plants, vitamins and minerals and started buying them separately, but found this product and all were included!”",
      name: "Sean B.",
      address: "North Carolina, USA",
      verify: "Verified Purchased",
      rating: 5
    },
  ]
}

export const sugerDefenderData = {
    IMAGE: sugarDefenderImg,
    TITLE: "What is Sugar Defender?",
    DESCRIPTION1: "Sugar Defender stands as a beacon of natural, side-effect-free blood sugar support. Crafted from a blend of pure, plant-based ingredients, this formula not only helps regulate blood sugar levels but also empowers you on your journey to weight loss, increased vitality, and overall life improvement.",
    DESCRIPTION2: "Backed by thorough research, Sugar Defender is ideal for individuals grappling with high blood sugar levels, offering reliable support for healthy fat-burning. The ingredients, carefully selected for their natural purity, culminate in a unique blend encapsulated in Sugar Defender—a safe and effective solution suitable for individuals of any age.",
    DESCRIPTION3: "Processed with the utmost care in a clean, GMP-certified facility, Sugar Defender adheres to the safest and most sterile standards. Free from harmful chemicals, this supplement aims to restore your body's natural ability to maintain healthy blood sugar levels effectively, ensuring your well-being with every capsule."
}

export const productData = {
  TITLE: "Take advantage of this limited offer to stock up on Sugar Defender while supplies last!",
  REVIEWIMG: customerReviewImg,
  PRODUCTS: [ 
    {
      id: 1,
      img: product1,
      link: '#'
    },
    {
      id: 2,
      img: product2,
      link: '#'
    },
    {
      id: 3,
      img: product3,
      link: '#'
    }
  ]
}

export const benifitSectionData = {
  TITLE: "Sugar Defender Benefits:",
  IMAGE: benifitSectionImg,
  DESCRIPTION1: [
    "✅ Optimize Blood Sugar Levels Naturally: Sugar Defender's organic compounds work to stabilize and normalize blood sugar levels, preventing potential health complications like blindness, renal failure, and heart disease. Consistent management of blood sugar below a certain threshold is crucial for long-term well-being, making Sugar Defender an effective solution for maintaining optimal blood sugar levels.",
   "✅ Effective Weight Management with Sugar Defender: The unique blend of nutrients in Sugar Defender supports the body's repair processes and regulates the stress hormone cortisol, curbing overeating tendencies that contribute to weight gain. This specialized mix enhances the efficient burning of fat and carbohydrates, promoting a healthier immune system and overall metabolism for effective weight management.",
  ],
  DESCRIPTION2: [
    "✅ Boost Insulin Production Safely: Sugar Defender neutralizes inflammation and combats harmful free radicals, facilitating the pancreas in efficient insulin production. Insulin plays a pivotal role in digestion, breaking down carbohydrates and lipids to maintain stable blood sugar levels. Elevating insulin production is vital for overall metabolic health, and Sugar Defender supports this process naturally.",
    "✅ Enhance Blood Pressure and Circulation with Sugar Defender: Improve circulation and ensure the body receives essential nutrients, oxygen, and blood flow with Sugar Defender. This enhancement promotes intestinal health, melanin synthesis, a radiant complexion, and overall well-being. Sugar Defender's contribution to improved blood pressure and circulation supports immune function and vitality for holistic health.",
    "✅ Invest in Your Well-Being with Sugar Defender: Experience the benefits of Sugar Defender's natural approach to blood sugar support, weight management, insulin production, and overall circulatory health. Elevate your well-being with this SEO-friendly solution for a healthier, more balanced lifestyle."
  ]
}

export const bonusSectionData = {
  TITLE: "Order 6 Bottles Or 3 Bottles And Get 2 Free Bonuses !",
  BONOUSITEMS: [
    {
      id: 1,
      img: bonousImg1,
      title:"Free Bonus #1",
      description: "Learn How to Manage Type II Diabetes",
      download: "(instant download)"
    },
    {
      id: 2,
      img: bonousImg2,
      title:"Free Bonus #2",
      description: "The Ultimate Tea Remedies",
      download: "(instant download)"
    }
  ]
}

export const defenderSectionData ={
  TITLE: "Sugar Defender Ingredients",
  SUB_TITLE: "Explore the Essential Ingredients in Sugar Defender for Optimal Health:",
  DESCRIPTION: [
    { 
      id: 1,
      title: "🌴 Eleuthero - Natural Energizer:",
      description: "Eleuthero stands as a natural energizer, renowned for boosting energy levels and combating fatigue. This adaptogen not only enhances stamina but also aids in stress management, a crucial factor in blood sugar fluctuations."
    },
    {
      id: 2,
      title: "🌴 Coleus - Metabolic Support:",
      description: "A key ingredient in Sugar Defender, Coleus, is recognized for its potential in improving blood sugar levels and insulin sensitivity. Supporting fundamental metabolic functions, Coleus contributes to the efficacy of this supplement, promoting fat burning for overall metabolic balance."
    },
    { 
      id: 3,
      title: "🌴 Maca Root - Nutrient-Rich Performance Booster:",
      description: "Maca Root, a potent nutrient-rich ingredient, is utilized to enhance energy, performance, and overall vitality. Abundant in vitamin C, copper, iron, potassium, and other nutrients, Maca Root supports muscle building, strength, fertility, and cognitive function."
    },
    {
      id: 4,
      title: "🌴 African Mango - Weight Management and Blood Glucose Support:",
      description: "Sugar Defender includes African Mango, a historically used medicinal ingredient in Africa. Recognized for promoting overall weight loss, improving blood glucose levels, and offering digestive benefits, African Mango's antioxidants contribute to maintaining healthy blood sugar levels."
    },
    {
      id: 5,
      title: "🌴 Guarana - Regulator of Blood Sugar and Energy Levels:",
      description: "A potent ingredient in Sugar Defender, Guarana, plays a vital role in regulating blood sugar levels. With natural properties that enhance insulin sensitivity, Guarana supports sugar metabolism, boosts energy levels, and potentially reduces inflammation, making it a valuable addition to managing diabetes and promoting overall metabolic health."
    },
    {
      id: 6,
      title: "🌴 Gymnema Sylvestre - Balancer of Blood Sugar Levels:",
      description: "Gymnema Sylvestre, rich in gymnemic acids, balances blood sugar levels and reduces sugar absorption. Suppressing sweet cravings, Gymnema aids in weight loss efforts and complements the holistic approach of Sugar Defender."
    },
    {
      id: 7,
      title: "🌴 Ginseng (Panax Ginseng) - Adaptogen for Vitality and Sugar Modulation:",
      description: "Panax Ginseng, a revered adaptogen, contributes to overall vitality and fat management. Linked to sugar level modulation, Panax Ginseng assists the body's mechanisms for maintaining glycogen metabolism and enhances endurance, beneficial for active lifestyles and diabetes management."
    },
    {
      id: 8,
      title: "🌴 Chromium - Insulin Sensitivity Support:",
      description: "Chromium assists insulin action and glucose metabolism, playing a crucial role in effective blood sugar management. Promoting general metabolic health, Chromium facilitates the smooth transfer of glucose into cells, making it a necessary component for individuals monitoring their blood sugar levels."
    },
    {
      id: 9,
      description: " Experience the synergistic effects of these carefully selected ingredients in Sugar Defender for your journey towards optimal health and balanced blood sugar levels."
    },
  ]
}

export const satisfactionSectionData = {
  IMAGE: satisfactionImg,
  TITLE: [
    "100% Satisfaction",
    "60-Days Money Back Guarantee"
  ],
  DESCRIPTION: [
    "Your contentment is our utmost priority. Sugar Defender is backed by an exceptional 60-day money-back guarantee from your original purchase date. If the product doesn't meet your expectations or you're dissatisfied within this period, contact us via phone or email, and we'll ensure a full refund within 48 hours upon receiving your returned product.",
    "Feel free to return the product, even if the bottle is empty, within 60 days. We offer a no-questions-asked full refund, excluding shipping and handling charges."
]
} 