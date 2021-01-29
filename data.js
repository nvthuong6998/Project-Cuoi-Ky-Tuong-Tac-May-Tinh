// import faker from 'faker'
// import nicecolors from 'react-native-color-palette'
// import { color } from 'react-native-reanimated';
// faker.seed(1);

// export const ORANGE = "#FB9B06";

// const data = [
//     {
//         type: 'Phone',
//         image: 'https://www.xtmobile.vn/vnt_upload/product/08_2019/thumbs/(600x600)_crop_600_iphone_11_xanh_xtmobile_2.jpg'
//     },
//     {
//         type: 'Phone',
//         image: 'https://www.xtmobile.vn/vnt_upload/product/08_2019/thumbs/(600x600)_crop_600_iphone_11_xanh_xtmobile_2.jpg'
//     },
//     {
//         type: 'Phone',
//         image: 'https://www.xtmobile.vn/vnt_upload/product/08_2019/thumbs/(600x600)_crop_600_iphone_11_xanh_xtmobile_2.jpg'
//     },
//     {
//         type: 'Phone',
//         image: 'https://www.xtmobile.vn/vnt_upload/product/08_2019/thumbs/(600x600)_crop_600_iphone_11_xanh_xtmobile_2.jpg'
//     },
// ];

// const colors = nicecolors[1];

// export const tabs = [
//     'Phone',
//     'LapTop',
//     'Phone',
//     'OK',
// ];

// export default data.map((item, index) =>({
//     ...item,
//     key: faker.random.uuid(),
//     subType: faker.commerce.productName(),
//     color: `${colors[index % colors.length]}66`,
//     fullColor: colors[index % colors.length],
//     description:[...Array(2).keys()]
//         .map(faker.commerce.productDescription)
//         .join('. '),
//     price: `$${(faker.random.number(200) + 50) /100}`,
//     subcategories: faker.helpers.shuffle(data).slice(0,3),
// }));

// export const popularPhone = faker.helpers.shuffle(data).map((item) = ({
//     ...item,
//     key: faker.random.uuid(),
//     rating: (faker.random.number(30) + 20) / 10,
//     price: `$${(faker.random.number(200) + 50)/ 100}`,
// }));