import { useState } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Footer from "./commponents/common/footer";
import Header from "./commponents/common/header";
import Home from "./pages/home";
import DealsOnSale from "./pages/DealsOnSale";
import ExploreByCategories from "./pages/ExploreByCategories";
import ProductFilter from "./pages/productFilter";
import Overlay from "./contextfils/overlay";
import NewArrivals from "./pages/newArrivals";
import ProductDetail from "./pages/productDetail";
import Mycart from "./pages/mycart";
import Wishlist from "./pages/wishlist";
import Paymentpolicy from "./pages/paymentpolicy";
import Privacypolicy from "./pages/privacypolicy";
import Returnpolicy from "./pages/returnpolicy";
import Shippingpolicy from "./pages/shippingpolicy";
import Termsandconditions from "./pages/termsandconditions";
import Warrantypolicy from "./pages/warrantypolicy";
import Aboutus from "./pages/aboutus";
import Blogpost from "./pages/blogpost";
import Career from "./pages/career";
import Contact from "./pages/contact";
import Customersupport from "./pages/customersupport";
import LeadManager from "./pages/LeadManager";
import Jobapply from "./pages/jobapply";
import Jobform from "./pages/jobform";
import Products from "./contextfils/product";
import BlogDetails from "./pages/blogDetails";
import Login from "./pages/login";
import Register from "./pages/register";
import Otp from "./pages/otp";
import ResetPassword from "./pages/ResetPassword";
import ForgetPassword from "./pages/forgetPassword";
function App() {
  let location = useLocation();
  const [overlaypage, setoverlay] = useState(false);

  const productsdata = [
    {
      id: 1,
      name: "Sweater Cardigan Crop top Clothin... ",
      description: "Apple Watch Series 6",
      image: "image-1708166772599-94655850-product21.png",
      active: false,
      Featured: true,
      sellingproducts: false,
      topbrands: false,
      ArrivalsProducts: false,
      price: "$ 20.00",
      brandsId: 1,
      subcategoryId: 9,
      categoryId: 1,
      colors:
        '[{"id" : 1,"color" : "red","color_code": "FF0000","color_status":true},{"id" : 2,"color" : "blue","color_code": "0000FF","color_status":true}]',
      product_color_image: [
        {
          id: 1,
          productId: 1,
          color: {
            color_code: "FF0000",
            color: "Red",
          },
          image: "image-1708166818731-171466371-camra.png",
          price: "200",
        },
      ],
      brands: {
        brand_name: "apply",
        brand_description: "high cost",
      },
      category: {
        name: "Watches",
      },
      subcategory: {
        subcategory_name: "Men's Watches",
      },
      Produsts_Review: [
        {
          id: 1,
          rating: "14.89",
          comment:
            "A mauris amet, et molestie urna ut. Felis, eros varius molestie amet, quisque potenti pharetra aenean. Habitant morbi vehicula cras urna et sit hendrerit nunc aenean. In arcu, egestas tincidunt sem vitae suscipit nisl interdum. Aliquet sed in sit tellus lacus eu dolor vitae sed.",
          createdAt: "2024-02-20T17:49:39.433Z",
          user: {
            name: "manish",
            profile: null,
          },
        },
      ],
      ProductDetails: [
        {
          id: 1,
          details:
            "Take calls and reply to texts. Id aliquam felis a egestas mi diam erat eu habitasse. Suscipit tincidunt sodales mauris ac, sed. Tempus lacus, consectetur neque, et. Vitae sapien, suspendisse eget maecenas sit pulvinar lectus. Tristique leo sit velit interdum vel. Donec non vitae quam est consequat tortor etiam in in.Elementum condimentum dis tortor ipsum duis amet, non. A mauris amet et molestie urna ut. Felis, eros varius molestie amet, quisque potenti pharetra aenean. Habitant morbi vehicula cras urna et sit hendrerit nunc aenean. In arcu, egestas tincidunt sem vitae suscipit nisl interdum.Aliquet sed in sit tellus lacus eu dolor vitae sed. Phasellus morbi aliquam sit in nulla consequat. Ut pretium sed nam rutrum cursus nisi felis cursus vestibulum. Sagittis platea venenatis at nibh tellus purus urna. Ultricies mauris scelerisque dictum diam aliquet urna elementum. Aliquam tortor egestas nisi placerat odio aliquet amet, rhoncus. Pellentesque magna vestibulum vivamus pulvinar consectetur diam libero ornare.",
          productId: 1,
        },
      ],
      productsinfo: [
        {
          id: 1,
          image: "image-1708509949121-23010798-image 27.png",
          Special_feature: "Email, GPS, Notifications",
          Item_weight: "30 Grams",
          Compatible_Devices: "Smartphone",
          productId: 1,
        },
      ],
      Faq: [
        {
          id: 1,
          question: "Sed eu, fames at accumsan vitae in tristique turpis.",
          answer:
            "Consectetur adipiscing elit. Amet mauris eget vestibulum tempor, maecenas. Mattis egestas augue vitae in sed ut. Nec donec massa, at scelerisque tempor, elit vitae aliquam. Donec pulvinar sollicitudin feugiat diam iaculis pulvinar faucibus suspendisse tincidunt.",
          productId: 1,
        },
        {
          id: 2,
          question: "Sed eu, fames at accumsan vitae in tristique turpis.",
          answer:
            "Consectetur adipiscing elit. Amet mauris eget vestibulum tempor, maecenas. Mattis egestas augue vitae in sed ut. Nec donec massa, at scelerisque tempor, elit vitae aliquam. Donec pulvinar sollicitudin feugiat diam iaculis pulvinar faucibus suspendisse tincidunt.",
          productId: 1,
        },
      ],
      sizeproducts: [
        {
          id: 1,
          size: '[{"id":1,"size":41},{"id":2,"size":44}]',
          productId: 1,
        },
      ],
    },
    {
      id: 2,
      name: "Sweater Cardigan Crop top Clothin... ",
      description: "Apple Watch Series 6",
      image: "image-1708166772599-94655850-product21.png",
      active: false,
      Featured: true,
      sellingproducts: false,
      topbrands: false,
      ArrivalsProducts: false,
      price: "$ 20.00",
      brandsId: 1,
      subcategoryId: 9,
      categoryId: 1,
      colors:
        '[{"id" : 1,"color" : "red","color_code": "FF0000","color_status":true},{"id" : 2,"color" : "blue","color_code": "0000FF","color_status":true}]',
      product_color_image: [
        {
          id: 1,
          productId: 1,
          color: {
            color_code: "FF0000",
            color: "Red",
          },
          image: "image-1708166818731-171466371-camra.png",
          price: "200",
        },
      ],
      brands: {
        brand_name: "apply",
        brand_description: "high cost",
      },
      category: {
        name: "Watches",
      },
      subcategory: {
        subcategory_name: "Men's Watches",
      },
      Produsts_Review: [
        {
          id: 1,
          rating: "14.89",
          comment:
            "A mauris amet, et molestie urna ut. Felis, eros varius molestie amet, quisque potenti pharetra aenean. Habitant morbi vehicula cras urna et sit hendrerit nunc aenean. In arcu, egestas tincidunt sem vitae suscipit nisl interdum. Aliquet sed in sit tellus lacus eu dolor vitae sed.",
          createdAt: "2024-02-20T17:49:39.433Z",
          user: {
            name: "manish",
            profile: null,
          },
        },
      ],
      ProductDetails: [
        {
          id: 1,
          details:
            "Take calls and reply to texts. Id aliquam felis a egestas mi diam erat eu habitasse. Suscipit tincidunt sodales mauris ac, sed. Tempus lacus, consectetur neque, et. Vitae sapien, suspendisse eget maecenas sit pulvinar lectus. Tristique leo sit velit interdum vel. Donec non vitae quam est consequat tortor etiam in in.Elementum condimentum dis tortor ipsum duis amet, non. A mauris amet et molestie urna ut. Felis, eros varius molestie amet, quisque potenti pharetra aenean. Habitant morbi vehicula cras urna et sit hendrerit nunc aenean. In arcu, egestas tincidunt sem vitae suscipit nisl interdum.Aliquet sed in sit tellus lacus eu dolor vitae sed. Phasellus morbi aliquam sit in nulla consequat. Ut pretium sed nam rutrum cursus nisi felis cursus vestibulum. Sagittis platea venenatis at nibh tellus purus urna. Ultricies mauris scelerisque dictum diam aliquet urna elementum. Aliquam tortor egestas nisi placerat odio aliquet amet, rhoncus. Pellentesque magna vestibulum vivamus pulvinar consectetur diam libero ornare.",
          productId: 1,
        },
      ],
      productsinfo: [
        {
          id: 1,
          image: "image-1708509949121-23010798-image 27.png",
          Special_feature: "Email, GPS, Notifications",
          Item_weight: "30 Grams",
          Compatible_Devices: "Smartphone",
          productId: 1,
        },
      ],
      Faq: [
        {
          id: 1,
          question: "Sed eu, fames at accumsan vitae in tristique turpis.",
          answer:
            "Consectetur adipiscing elit. Amet mauris eget vestibulum tempor, maecenas. Mattis egestas augue vitae in sed ut. Nec donec massa, at scelerisque tempor, elit vitae aliquam. Donec pulvinar sollicitudin feugiat diam iaculis pulvinar faucibus suspendisse tincidunt.",
          productId: 1,
        },
        {
          id: 2,
          question: "Sed eu, fames at accumsan vitae in tristique turpis.",
          answer:
            "Consectetur adipiscing elit. Amet mauris eget vestibulum tempor, maecenas. Mattis egestas augue vitae in sed ut. Nec donec massa, at scelerisque tempor, elit vitae aliquam. Donec pulvinar sollicitudin feugiat diam iaculis pulvinar faucibus suspendisse tincidunt.",
          productId: 1,
        },
      ],
      sizeproducts: [
        {
          id: 1,
          size: '[{"id":1,"size":41},{"id":2,"size":44}]',
          productId: 1,
        },
      ],
    },
    {
      id: 3,
      name: "Sweater Cardigan Crop top Clothin... ",
      description: "Apple Watch Series 6",
      image: "image-1708166772599-94655850-product21.png",
      active: false,
      Featured: true,
      sellingproducts: false,
      topbrands: false,
      ArrivalsProducts: false,
      price: "$ 20.00",
      brandsId: 1,
      subcategoryId: 9,
      categoryId: 1,
      colors:
        '[{"id" : 1,"color" : "red","color_code": "FF0000","color_status":true},{"id" : 2,"color" : "blue","color_code": "0000FF","color_status":true}]',
      product_color_image: [
        {
          id: 1,
          productId: 1,
          color: {
            color_code: "FF0000",
            color: "Red",
          },
          image: "image-1708166818731-171466371-camra.png",
          price: "200",
        },
      ],
      brands: {
        brand_name: "apply",
        brand_description: "high cost",
      },
      category: {
        name: "Watches",
      },
      subcategory: {
        subcategory_name: "Men's Watches",
      },
      Produsts_Review: [
        {
          id: 1,
          rating: "14.89",
          comment:
            "A mauris amet, et molestie urna ut. Felis, eros varius molestie amet, quisque potenti pharetra aenean. Habitant morbi vehicula cras urna et sit hendrerit nunc aenean. In arcu, egestas tincidunt sem vitae suscipit nisl interdum. Aliquet sed in sit tellus lacus eu dolor vitae sed.",
          createdAt: "2024-02-20T17:49:39.433Z",
          user: {
            name: "manish",
            profile: null,
          },
        },
      ],
      ProductDetails: [
        {
          id: 1,
          details:
            "Take calls and reply to texts. Id aliquam felis a egestas mi diam erat eu habitasse. Suscipit tincidunt sodales mauris ac, sed. Tempus lacus, consectetur neque, et. Vitae sapien, suspendisse eget maecenas sit pulvinar lectus. Tristique leo sit velit interdum vel. Donec non vitae quam est consequat tortor etiam in in.Elementum condimentum dis tortor ipsum duis amet, non. A mauris amet et molestie urna ut. Felis, eros varius molestie amet, quisque potenti pharetra aenean. Habitant morbi vehicula cras urna et sit hendrerit nunc aenean. In arcu, egestas tincidunt sem vitae suscipit nisl interdum.Aliquet sed in sit tellus lacus eu dolor vitae sed. Phasellus morbi aliquam sit in nulla consequat. Ut pretium sed nam rutrum cursus nisi felis cursus vestibulum. Sagittis platea venenatis at nibh tellus purus urna. Ultricies mauris scelerisque dictum diam aliquet urna elementum. Aliquam tortor egestas nisi placerat odio aliquet amet, rhoncus. Pellentesque magna vestibulum vivamus pulvinar consectetur diam libero ornare.",
          productId: 1,
        },
      ],
      productsinfo: [
        {
          id: 1,
          image: "image-1708509949121-23010798-image 27.png",
          Special_feature: "Email, GPS, Notifications",
          Item_weight: "30 Grams",
          Compatible_Devices: "Smartphone",
          productId: 1,
        },
      ],
      Faq: [
        {
          id: 1,
          question: "Sed eu, fames at accumsan vitae in tristique turpis.",
          answer:
            "Consectetur adipiscing elit. Amet mauris eget vestibulum tempor, maecenas. Mattis egestas augue vitae in sed ut. Nec donec massa, at scelerisque tempor, elit vitae aliquam. Donec pulvinar sollicitudin feugiat diam iaculis pulvinar faucibus suspendisse tincidunt.",
          productId: 1,
        },
        {
          id: 2,
          question: "Sed eu, fames at accumsan vitae in tristique turpis.",
          answer:
            "Consectetur adipiscing elit. Amet mauris eget vestibulum tempor, maecenas. Mattis egestas augue vitae in sed ut. Nec donec massa, at scelerisque tempor, elit vitae aliquam. Donec pulvinar sollicitudin feugiat diam iaculis pulvinar faucibus suspendisse tincidunt.",
          productId: 1,
        },
      ],
      sizeproducts: [
        {
          id: 1,
          size: '[{"id":1,"size":41},{"id":2,"size":44}]',
          productId: 1,
        },
      ],
    },
    {
      id: 4,
      name: "Sweater Cardigan Crop top Clothin... ",
      description: "Apple Watch Series 6",
      image: "image-1708166772599-94655850-product21.png",
      active: false,
      Featured: true,
      sellingproducts: false,
      topbrands: false,
      ArrivalsProducts: false,
      price: "$ 20.00",
      brandsId: 1,
      subcategoryId: 9,
      categoryId: 1,
      colors:
        '[{"id" : 1,"color" : "red","color_code": "FF0000","color_status":true},{"id" : 2,"color" : "blue","color_code": "0000FF","color_status":true}]',
      product_color_image: [
        {
          id: 1,
          productId: 1,
          color: {
            color_code: "FF0000",
            color: "Red",
          },
          image: "image-1708166818731-171466371-camra.png",
          price: "200",
        },
      ],
      brands: {
        brand_name: "apply",
        brand_description: "high cost",
      },
      category: {
        name: "Watches",
      },
      subcategory: {
        subcategory_name: "Men's Watches",
      },
      Produsts_Review: [
        {
          id: 1,
          rating: "14.89",
          comment:
            "A mauris amet, et molestie urna ut. Felis, eros varius molestie amet, quisque potenti pharetra aenean. Habitant morbi vehicula cras urna et sit hendrerit nunc aenean. In arcu, egestas tincidunt sem vitae suscipit nisl interdum. Aliquet sed in sit tellus lacus eu dolor vitae sed.",
          createdAt: "2024-02-20T17:49:39.433Z",
          user: {
            name: "manish",
            profile: null,
          },
        },
      ],
      ProductDetails: [
        {
          id: 1,
          details:
            "Take calls and reply to texts. Id aliquam felis a egestas mi diam erat eu habitasse. Suscipit tincidunt sodales mauris ac, sed. Tempus lacus, consectetur neque, et. Vitae sapien, suspendisse eget maecenas sit pulvinar lectus. Tristique leo sit velit interdum vel. Donec non vitae quam est consequat tortor etiam in in.Elementum condimentum dis tortor ipsum duis amet, non. A mauris amet et molestie urna ut. Felis, eros varius molestie amet, quisque potenti pharetra aenean. Habitant morbi vehicula cras urna et sit hendrerit nunc aenean. In arcu, egestas tincidunt sem vitae suscipit nisl interdum.Aliquet sed in sit tellus lacus eu dolor vitae sed. Phasellus morbi aliquam sit in nulla consequat. Ut pretium sed nam rutrum cursus nisi felis cursus vestibulum. Sagittis platea venenatis at nibh tellus purus urna. Ultricies mauris scelerisque dictum diam aliquet urna elementum. Aliquam tortor egestas nisi placerat odio aliquet amet, rhoncus. Pellentesque magna vestibulum vivamus pulvinar consectetur diam libero ornare.",
          productId: 1,
        },
      ],
      productsinfo: [
        {
          id: 1,
          image: "image-1708509949121-23010798-image 27.png",
          Special_feature: "Email, GPS, Notifications",
          Item_weight: "30 Grams",
          Compatible_Devices: "Smartphone",
          productId: 1,
        },
      ],
      Faq: [
        {
          id: 1,
          question: "Sed eu, fames at accumsan vitae in tristique turpis.",
          answer:
            "Consectetur adipiscing elit. Amet mauris eget vestibulum tempor, maecenas. Mattis egestas augue vitae in sed ut. Nec donec massa, at scelerisque tempor, elit vitae aliquam. Donec pulvinar sollicitudin feugiat diam iaculis pulvinar faucibus suspendisse tincidunt.",
          productId: 1,
        },
        {
          id: 2,
          question: "Sed eu, fames at accumsan vitae in tristique turpis.",
          answer:
            "Consectetur adipiscing elit. Amet mauris eget vestibulum tempor, maecenas. Mattis egestas augue vitae in sed ut. Nec donec massa, at scelerisque tempor, elit vitae aliquam. Donec pulvinar sollicitudin feugiat diam iaculis pulvinar faucibus suspendisse tincidunt.",
          productId: 1,
        },
      ],
      sizeproducts: [
        {
          id: 1,
          size: '[{"id":1,"size":41},{"id":2,"size":44}]',
          productId: 1,
        },
      ],
    },
    {
      id: 5,
      name: "Sweater Cardigan Crop top Clothin... ",
      description: "Apple Watch Series 6",
      image: "image-1708166772599-94655850-product21.png",
      active: false,
      Featured: true,
      sellingproducts: false,
      topbrands: false,
      ArrivalsProducts: false,
      price: "$ 20.00",
      brandsId: 1,
      subcategoryId: 9,
      categoryId: 1,
      colors:
        '[{"id" : 1,"color" : "red","color_code": "FF0000","color_status":true},{"id" : 2,"color" : "blue","color_code": "0000FF","color_status":true}]',
      product_color_image: [
        {
          id: 1,
          productId: 1,
          color: {
            color_code: "FF0000",
            color: "Red",
          },
          image: "image-1708166818731-171466371-camra.png",
          price: "200",
        },
      ],
      brands: {
        brand_name: "apply",
        brand_description: "high cost",
      },
      category: {
        name: "Watches",
      },
      subcategory: {
        subcategory_name: "Men's Watches",
      },
      Produsts_Review: [
        {
          id: 1,
          rating: "14.89",
          comment:
            "A mauris amet, et molestie urna ut. Felis, eros varius molestie amet, quisque potenti pharetra aenean. Habitant morbi vehicula cras urna et sit hendrerit nunc aenean. In arcu, egestas tincidunt sem vitae suscipit nisl interdum. Aliquet sed in sit tellus lacus eu dolor vitae sed.",
          createdAt: "2024-02-20T17:49:39.433Z",
          user: {
            name: "manish",
            profile: null,
          },
        },
      ],
      ProductDetails: [
        {
          id: 1,
          details:
            "Take calls and reply to texts. Id aliquam felis a egestas mi diam erat eu habitasse. Suscipit tincidunt sodales mauris ac, sed. Tempus lacus, consectetur neque, et. Vitae sapien, suspendisse eget maecenas sit pulvinar lectus. Tristique leo sit velit interdum vel. Donec non vitae quam est consequat tortor etiam in in.Elementum condimentum dis tortor ipsum duis amet, non. A mauris amet et molestie urna ut. Felis, eros varius molestie amet, quisque potenti pharetra aenean. Habitant morbi vehicula cras urna et sit hendrerit nunc aenean. In arcu, egestas tincidunt sem vitae suscipit nisl interdum.Aliquet sed in sit tellus lacus eu dolor vitae sed. Phasellus morbi aliquam sit in nulla consequat. Ut pretium sed nam rutrum cursus nisi felis cursus vestibulum. Sagittis platea venenatis at nibh tellus purus urna. Ultricies mauris scelerisque dictum diam aliquet urna elementum. Aliquam tortor egestas nisi placerat odio aliquet amet, rhoncus. Pellentesque magna vestibulum vivamus pulvinar consectetur diam libero ornare.",
          productId: 1,
        },
      ],
      productsinfo: [
        {
          id: 1,
          image: "image-1708509949121-23010798-image 27.png",
          Special_feature: "Email, GPS, Notifications",
          Item_weight: "30 Grams",
          Compatible_Devices: "Smartphone",
          productId: 1,
        },
      ],
      Faq: [
        {
          id: 1,
          question: "Sed eu, fames at accumsan vitae in tristique turpis.",
          answer:
            "Consectetur adipiscing elit. Amet mauris eget vestibulum tempor, maecenas. Mattis egestas augue vitae in sed ut. Nec donec massa, at scelerisque tempor, elit vitae aliquam. Donec pulvinar sollicitudin feugiat diam iaculis pulvinar faucibus suspendisse tincidunt.",
          productId: 1,
        },
        {
          id: 2,
          question: "Sed eu, fames at accumsan vitae in tristique turpis.",
          answer:
            "Consectetur adipiscing elit. Amet mauris eget vestibulum tempor, maecenas. Mattis egestas augue vitae in sed ut. Nec donec massa, at scelerisque tempor, elit vitae aliquam. Donec pulvinar sollicitudin feugiat diam iaculis pulvinar faucibus suspendisse tincidunt.",
          productId: 1,
        },
      ],
      sizeproducts: [
        {
          id: 1,
          size: '[{"id":1,"size":41},{"id":2,"size":44}]',
          productId: 1,
        },
      ],
    },
    {
      id: 6,
      name: "Sweater Cardigan Crop top Clothin... ",
      description: "Apple Watch Series 6",
      image: "image-1708166772599-94655850-product21.png",
      active: false,
      Featured: true,
      sellingproducts: false,
      topbrands: false,
      ArrivalsProducts: false,
      price: "$ 20.00",
      brandsId: 1,
      subcategoryId: 9,
      categoryId: 1,
      colors:
        '[{"id" : 1,"color" : "red","color_code": "FF0000","color_status":true},{"id" : 2,"color" : "blue","color_code": "0000FF","color_status":true}]',
      product_color_image: [
        {
          id: 1,
          productId: 1,
          color: {
            color_code: "FF0000",
            color: "Red",
          },
          image: "image-1708166818731-171466371-camra.png",
          price: "200",
        },
      ],
      brands: {
        brand_name: "apply",
        brand_description: "high cost",
      },
      category: {
        name: "Watches",
      },
      subcategory: {
        subcategory_name: "Men's Watches",
      },
      Produsts_Review: [
        {
          id: 1,
          rating: "14.89",
          comment:
            "A mauris amet, et molestie urna ut. Felis, eros varius molestie amet, quisque potenti pharetra aenean. Habitant morbi vehicula cras urna et sit hendrerit nunc aenean. In arcu, egestas tincidunt sem vitae suscipit nisl interdum. Aliquet sed in sit tellus lacus eu dolor vitae sed.",
          createdAt: "2024-02-20T17:49:39.433Z",
          user: {
            name: "manish",
            profile: null,
          },
        },
      ],
      ProductDetails: [
        {
          id: 1,
          details:
            "Take calls and reply to texts. Id aliquam felis a egestas mi diam erat eu habitasse. Suscipit tincidunt sodales mauris ac, sed. Tempus lacus, consectetur neque, et. Vitae sapien, suspendisse eget maecenas sit pulvinar lectus. Tristique leo sit velit interdum vel. Donec non vitae quam est consequat tortor etiam in in.Elementum condimentum dis tortor ipsum duis amet, non. A mauris amet et molestie urna ut. Felis, eros varius molestie amet, quisque potenti pharetra aenean. Habitant morbi vehicula cras urna et sit hendrerit nunc aenean. In arcu, egestas tincidunt sem vitae suscipit nisl interdum.Aliquet sed in sit tellus lacus eu dolor vitae sed. Phasellus morbi aliquam sit in nulla consequat. Ut pretium sed nam rutrum cursus nisi felis cursus vestibulum. Sagittis platea venenatis at nibh tellus purus urna. Ultricies mauris scelerisque dictum diam aliquet urna elementum. Aliquam tortor egestas nisi placerat odio aliquet amet, rhoncus. Pellentesque magna vestibulum vivamus pulvinar consectetur diam libero ornare.",
          productId: 1,
        },
      ],
      productsinfo: [
        {
          id: 1,
          image: "image-1708509949121-23010798-image 27.png",
          Special_feature: "Email, GPS, Notifications",
          Item_weight: "30 Grams",
          Compatible_Devices: "Smartphone",
          productId: 1,
        },
      ],
      Faq: [
        {
          id: 1,
          question: "Sed eu, fames at accumsan vitae in tristique turpis.",
          answer:
            "Consectetur adipiscing elit. Amet mauris eget vestibulum tempor, maecenas. Mattis egestas augue vitae in sed ut. Nec donec massa, at scelerisque tempor, elit vitae aliquam. Donec pulvinar sollicitudin feugiat diam iaculis pulvinar faucibus suspendisse tincidunt.",
          productId: 1,
        },
        {
          id: 2,
          question: "Sed eu, fames at accumsan vitae in tristique turpis.",
          answer:
            "Consectetur adipiscing elit. Amet mauris eget vestibulum tempor, maecenas. Mattis egestas augue vitae in sed ut. Nec donec massa, at scelerisque tempor, elit vitae aliquam. Donec pulvinar sollicitudin feugiat diam iaculis pulvinar faucibus suspendisse tincidunt.",
          productId: 1,
        },
      ],
      sizeproducts: [
        {
          id: 1,
          size: '[{"id":1,"size":41},{"id":2,"size":44}]',
          productId: 1,
        },
      ],
    },
    {
      id: 7,
      name: "Sweater Cardigan Crop top Clothin... ",
      description: "Apple Watch Series 6",
      image: "image-1708166772599-94655850-product21.png",
      active: false,
      Featured: true,
      sellingproducts: false,
      topbrands: false,
      ArrivalsProducts: false,
      price: "$ 20.00",
      brandsId: 1,
      subcategoryId: 9,
      categoryId: 1,
      colors:
        '[{"id" : 1,"color" : "red","color_code": "FF0000","color_status":true},{"id" : 2,"color" : "blue","color_code": "0000FF","color_status":true}]',
      product_color_image: [
        {
          id: 1,
          productId: 1,
          color: {
            color_code: "FF0000",
            color: "Red",
          },
          image: "image-1708166818731-171466371-camra.png",
          price: "200",
        },
      ],
      brands: {
        brand_name: "apply",
        brand_description: "high cost",
      },
      category: {
        name: "Watches",
      },
      subcategory: {
        subcategory_name: "Men's Watches",
      },
      Produsts_Review: [
        {
          id: 1,
          rating: "14.89",
          comment:
            "A mauris amet, et molestie urna ut. Felis, eros varius molestie amet, quisque potenti pharetra aenean. Habitant morbi vehicula cras urna et sit hendrerit nunc aenean. In arcu, egestas tincidunt sem vitae suscipit nisl interdum. Aliquet sed in sit tellus lacus eu dolor vitae sed.",
          createdAt: "2024-02-20T17:49:39.433Z",
          user: {
            name: "manish",
            profile: null,
          },
        },
      ],
      ProductDetails: [
        {
          id: 1,
          details:
            "Take calls and reply to texts. Id aliquam felis a egestas mi diam erat eu habitasse. Suscipit tincidunt sodales mauris ac, sed. Tempus lacus, consectetur neque, et. Vitae sapien, suspendisse eget maecenas sit pulvinar lectus. Tristique leo sit velit interdum vel. Donec non vitae quam est consequat tortor etiam in in.Elementum condimentum dis tortor ipsum duis amet, non. A mauris amet et molestie urna ut. Felis, eros varius molestie amet, quisque potenti pharetra aenean. Habitant morbi vehicula cras urna et sit hendrerit nunc aenean. In arcu, egestas tincidunt sem vitae suscipit nisl interdum.Aliquet sed in sit tellus lacus eu dolor vitae sed. Phasellus morbi aliquam sit in nulla consequat. Ut pretium sed nam rutrum cursus nisi felis cursus vestibulum. Sagittis platea venenatis at nibh tellus purus urna. Ultricies mauris scelerisque dictum diam aliquet urna elementum. Aliquam tortor egestas nisi placerat odio aliquet amet, rhoncus. Pellentesque magna vestibulum vivamus pulvinar consectetur diam libero ornare.",
          productId: 1,
        },
      ],
      productsinfo: [
        {
          id: 1,
          image: "image-1708509949121-23010798-image 27.png",
          Special_feature: "Email, GPS, Notifications",
          Item_weight: "30 Grams",
          Compatible_Devices: "Smartphone",
          productId: 1,
        },
      ],
      Faq: [
        {
          id: 1,
          question: "Sed eu, fames at accumsan vitae in tristique turpis.",
          answer:
            "Consectetur adipiscing elit. Amet mauris eget vestibulum tempor, maecenas. Mattis egestas augue vitae in sed ut. Nec donec massa, at scelerisque tempor, elit vitae aliquam. Donec pulvinar sollicitudin feugiat diam iaculis pulvinar faucibus suspendisse tincidunt.",
          productId: 1,
        },
        {
          id: 2,
          question: "Sed eu, fames at accumsan vitae in tristique turpis.",
          answer:
            "Consectetur adipiscing elit. Amet mauris eget vestibulum tempor, maecenas. Mattis egestas augue vitae in sed ut. Nec donec massa, at scelerisque tempor, elit vitae aliquam. Donec pulvinar sollicitudin feugiat diam iaculis pulvinar faucibus suspendisse tincidunt.",
          productId: 1,
        },
      ],
      sizeproducts: [
        {
          id: 1,
          size: '[{"id":1,"size":41},{"id":2,"size":44}]',
          productId: 1,
        },
      ],
    },
    {
      id: 8,
      name: "Sweater Cardigan Crop top Clothin... ",
      description: "Apple Watch Series 6",
      image: "image-1708166772599-94655850-product21.png",
      active: false,
      Featured: true,
      sellingproducts: false,
      topbrands: false,
      ArrivalsProducts: false,
      price: "$ 20.00",
      brandsId: 1,
      subcategoryId: 9,
      categoryId: 1,
      colors:
        '[{"id" : 1,"color" : "red","color_code": "FF0000","color_status":true},{"id" : 2,"color" : "blue","color_code": "0000FF","color_status":true}]',
      product_color_image: [
        {
          id: 1,
          productId: 1,
          color: {
            color_code: "FF0000",
            color: "Red",
          },
          image: "image-1708166818731-171466371-camra.png",
          price: "200",
        },
      ],
      brands: {
        brand_name: "apply",
        brand_description: "high cost",
      },
      category: {
        name: "Watches",
      },
      subcategory: {
        subcategory_name: "Men's Watches",
      },
      Produsts_Review: [
        {
          id: 1,
          rating: "14.89",
          comment:
            "A mauris amet, et molestie urna ut. Felis, eros varius molestie amet, quisque potenti pharetra aenean. Habitant morbi vehicula cras urna et sit hendrerit nunc aenean. In arcu, egestas tincidunt sem vitae suscipit nisl interdum. Aliquet sed in sit tellus lacus eu dolor vitae sed.",
          createdAt: "2024-02-20T17:49:39.433Z",
          user: {
            name: "manish",
            profile: null,
          },
        },
      ],
      ProductDetails: [
        {
          id: 1,
          details:
            "Take calls and reply to texts. Id aliquam felis a egestas mi diam erat eu habitasse. Suscipit tincidunt sodales mauris ac, sed. Tempus lacus, consectetur neque, et. Vitae sapien, suspendisse eget maecenas sit pulvinar lectus. Tristique leo sit velit interdum vel. Donec non vitae quam est consequat tortor etiam in in.Elementum condimentum dis tortor ipsum duis amet, non. A mauris amet et molestie urna ut. Felis, eros varius molestie amet, quisque potenti pharetra aenean. Habitant morbi vehicula cras urna et sit hendrerit nunc aenean. In arcu, egestas tincidunt sem vitae suscipit nisl interdum.Aliquet sed in sit tellus lacus eu dolor vitae sed. Phasellus morbi aliquam sit in nulla consequat. Ut pretium sed nam rutrum cursus nisi felis cursus vestibulum. Sagittis platea venenatis at nibh tellus purus urna. Ultricies mauris scelerisque dictum diam aliquet urna elementum. Aliquam tortor egestas nisi placerat odio aliquet amet, rhoncus. Pellentesque magna vestibulum vivamus pulvinar consectetur diam libero ornare.",
          productId: 1,
        },
      ],
      productsinfo: [
        {
          id: 1,
          image: "image-1708509949121-23010798-image 27.png",
          Special_feature: "Email, GPS, Notifications",
          Item_weight: "30 Grams",
          Compatible_Devices: "Smartphone",
          productId: 1,
        },
      ],
      Faq: [
        {
          id: 1,
          question: "Sed eu, fames at accumsan vitae in tristique turpis.",
          answer:
            "Consectetur adipiscing elit. Amet mauris eget vestibulum tempor, maecenas. Mattis egestas augue vitae in sed ut. Nec donec massa, at scelerisque tempor, elit vitae aliquam. Donec pulvinar sollicitudin feugiat diam iaculis pulvinar faucibus suspendisse tincidunt.",
          productId: 1,
        },
        {
          id: 2,
          question: "Sed eu, fames at accumsan vitae in tristique turpis.",
          answer:
            "Consectetur adipiscing elit. Amet mauris eget vestibulum tempor, maecenas. Mattis egestas augue vitae in sed ut. Nec donec massa, at scelerisque tempor, elit vitae aliquam. Donec pulvinar sollicitudin feugiat diam iaculis pulvinar faucibus suspendisse tincidunt.",
          productId: 1,
        },
      ],
      sizeproducts: [
        {
          id: 1,
          size: '[{"id":1,"size":41},{"id":2,"size":44}]',
          productId: 1,
        },
      ],
    },
  ];

  const postcarddata = [
    {
      id: 1,
      image: "postcardimage2.png",
      date: "20 September. 2022",
      description: "FashionCart Launches Best Quality - Certified Brands",
    },
    {
      id: 2,
      image: "postcardimage2.png",
      date: "20 September. 2022",
      description: "FashionCart Launches Best Quality - Certified Brands",
    },
    {
      id: 3,
      image: "postcardimage2.png",
      date: "20 September. 2022",
      description: "FashionCart Launches Best Quality - Certified Brands",
    },
    {
      id: 4,
      image: "postcardimage2.png",
      date: "20 September. 2022",
      description: "FashionCart Launches Best Quality - Certified Brands",
    },
    {
      id: 5,
      image: "postcardimage2.png",
      date: "20 September. 2022",
      description: "FashionCart Launches Best Quality - Certified Brands",
    },
    {
      id: 6,
      image: "postcardimage2.png",
      date: "20 September. 2022",
      description: "FashionCart Launches Best Quality - Certified Brands",
    },
    {
      id: 7,
      image: "postcardimage2.png",
      date: "20 September. 2022",
      description: "FashionCart Launches Best Quality - Certified Brands",
    },
    {
      id: 8,
      image: "postcardimage2.png",
      date: "20 September. 2022",
      description: "FashionCart Launches Best Quality - Certified Brands",
    },
    {
      id: 9,
      image: "postcardimage2.png",
      date: "20 September. 2022",
      description: "FashionCart Launches Best Quality - Certified Brands",
    },
    {
      id: 10,
      image: "postcardimage2.png",
      date: "20 September. 2022",
      description: "FashionCart Launches Best Quality - Certified Brands",
    },
  ];

  const userthoughtdata = [
    {
      id: 1,
      heading: "Lorem ipsum is not simply random text.",
      description:
        "“ It has survived not only five centuries, also the leap into electronic typesetting remaining essentially unchanged. It was popularised in the 1960s with release of Letraset sheets containing Lorem Ipsum passages.",
      username: "Alexander Watts",
      location: "New York, USA",
    },
    {
      id: 2,
      heading: "Lorem ipsum is not simply random text.",
      description:
        "“ It has survived not only five centuries, also the leap into electronic typesetting remaining essentially unchanged. It was popularised in the 1960s with release of Letraset sheets containing Lorem Ipsum passages.",
      username: "Alexander Watts",
      location: "New York, USA",
    },
    {
      id: 3,
      heading: "Lorem ipsum is not simply random text.",
      description:
        "“ It has survived not only five centuries, also the leap into electronic typesetting remaining essentially unchanged. It was popularised in the 1960s with release of Letraset sheets containing Lorem Ipsum passages.",
      username: "Alexander Watts",
      location: "New York, USA",
    },
    {
      id: 4,
      heading: "Lorem ipsum is not simply random text.",
      description:
        "“ It has survived not only five centuries, also the leap into electronic typesetting remaining essentially unchanged. It was popularised in the 1960s with release of Letraset sheets containing Lorem Ipsum passages.",
      username: "Alexander Watts",
      location: "New York, USA",
    },
  ];

  const biggestsalecard = [
    {
      id: 1,
      discount: "  Grab Upto 50% Off",
      subcategoryinfo: "Bigest Sale On Men's Wear Fashion",
      image: "biggestswipercard.png",
    },
    {
      id: 2,
      discount: "  Grab Upto 50% Off",
      subcategoryinfo: "Bigest Sale On Women's Wear Fashion",
      image: "biggestswipercard.png",
    },
    {
      id: 3,
      discount: "  Grab Upto 50% Off",
      subcategoryinfo: "Bigest Sale On Men's Wear Fashion",
      image: "biggestswipercard.png",
    },
    {
      id: 5,
      discount: "  Grab Upto 50% Off",
      subcategoryinfo: "Bigest Sale On Men's Wear Fashion",
      image: "biggestswipercard.png",
    },
  ];

  const similarproducts = [
    {
      id: 1,
      image: "productimg.png",
      productsname: "Denim Jeans",
      discount: "40-60% Off",
    },
    {
      id: 2,
      image: "productimg.png",
      productsname: "Denim Jeans",
      discount: "40-60% Off",
    },
    {
      id: 3,
      image: "productimg.png",
      productsname: "Denim Jeans",
      discount: "40-60% Off",
    },
    {
      id: 4,
      image: "productimg.png",
      productsname: "Denim Jeans",
      discount: "40-60% Off",
    },
  ];

  return (
    <>
      <Overlay.Provider value={{ setoverlay, overlaypage }}>
        <Products.Provider
          value={{
            productsdata,
            postcarddata,
            userthoughtdata,
            biggestsalecard,
            similarproducts,
          }}
        >
          {location.pathname !== "/login" &&
            location.pathname !== "/register" &&
            location.pathname !== "/otp" &&
            location.pathname !== "/reset-password" &&
            location.pathname !== "/forget-password" ? (
            <Header
              className={
                location.pathname !== "/" &&
                  location.pathname !== "/new-arrivals" &&
                  location.pathname !== "/dealonsale" &&
                  location.pathname !== "/career" &&
                  location.pathname !== "/about-us"
                  ? "md:block"
                  : "screen:block"
              }
            />
          ) : null}
          <Routes>
            <Route element={<Home />} path="/" />
            <Route element={<DealsOnSale />} path="/dealonsale" />
            <Route
              element={<ExploreByCategories />}
              path="/exploreByCategories"
            />
            <Route element={<ProductFilter />} path="/product-filter" />
            <Route element={<NewArrivals />} path="/new-arrivals" />
            <Route element={<ProductDetail />} path="/product-detail/:id" />
            <Route element={<Mycart />} path="/cart" />
            <Route element={<Wishlist />} path="/wishlist" />
            <Route element={<Aboutus />} path="/about-us" />
            <Route element={<Termsandconditions />} path="/terms-policy" />
            <Route element={<Paymentpolicy />} path="/payment-policy" />
            <Route element={<Privacypolicy />} path="/privacy-policy" />
            <Route element={<Shippingpolicy />} path="/shipping-policy" />
            <Route element={<Warrantypolicy />} path="/warranty-policy" />
            <Route element={<Returnpolicy />} path="/return-policy" />
            <Route element={<Jobapply />} path="/job-apply" />
            <Route element={<Jobform />} path="/job-form" />
            <Route element={<Customersupport />} path="/customer-support" />
            <Route element={<Blogpost />} path="/blog-post" />
            <Route element={<Career />} path="/career" />
            <Route element={<LeadManager />} path="/lead-manager" />
            <Route element={<Contact />} path="/contact" />
            <Route element={<BlogDetails />} path="/blog-details" />
            <Route element={<Login />} path="/login" />
            <Route element={<Register />} path="/register" />
            <Route element={<Otp />} path="/otp" />
            <Route element={<ResetPassword />} path="/reset-password" />
            <Route element={<ForgetPassword />} path="/forget-password" />
          </Routes>
          {location.pathname !== "/login" &&
            location.pathname !== "/register" &&
            location.pathname !== "/otp" &&
            location.pathname !== "/reset-password" &&
            location.pathname !== "/forget-password" ? (
            <Footer />
          ) : null}

          <div
            className={`${overlaypage === true
              ? "fixed top-0 left-0 right-0 w-full h-full flex items-center justify-center z-50 opacity-15 bg-black  "
              : ""
              }`}
          ></div>
        </Products.Provider>
      </Overlay.Provider>
      {/* commit */}
    </>
  );
}

export default App;
