import bannerImageButtom1 from '~/assets/images/banner-f-1.webp';
import bannerImage from '~/assets/images/banner-img.webp';
import reviewImg1 from '~/assets/images/review-img-1.webp';
import reviewImg2 from '~/assets/images/review-img-2.webp';
import reviewImg3 from '~/assets/images/review-img-3.webp';
import reviewImg4 from '~/assets/images/review-img-4.webp';
import reviewImg6 from '~/assets/images/review-img-6.webp';
import reviewImg7 from '~/assets/images/review-img-7.webp';
import reviewImg5 from '~/assets/images/review=img-5.webp';


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