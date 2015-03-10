var fs=require('fs')
var Docxtemplater = require('docxtemplater');

doc=new Docxtemplater(content);

var data = {
  sellerName: '周星星'
  , sellerProvince: '福建'
  , sellerCity: '厦门'
  , sellerArea: '集美'
  , sellerShopName: '演技派专卖店'
  , sellerAddress: '集美学府SOHO820'
  , sellerPhone: '18650180000'
  , buyerId: '臣信宏'
  , buyerPhone: '15659820000'
  , buyerAddress: '某个便利商店'
  , buyerName: '臣信宏'
  , buyerProvince: '台湾'
  , buyerCity: '台北'
  , buyerArea: ''
};

doc.setData(data);

doc.render();

var buf = doc.getZip().generate({type:"nodebuffer"});

fs.writeFileSync(__dirname+"/output.docx",buf);

console.log('快递单生成成功');