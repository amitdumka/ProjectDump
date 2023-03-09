const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let storeSchema = new Schema({
  storeId :{ type:Number ,default:1},
  storeCode: {type: String ,required: true},
  storeName: {type: String,required: true},
  address: {type: String,required:false},
  city:{type:String},
  openingDate:{type:Date},
  pinCode :{ type: String ,required:false},
  phoneNo :{ type: String ,required:false},
  storeManagerName :{ type: String,required:false },
  storeManagerPhoneNo :{ type: String,required:false },
  panNo :{ type: String,required:false },
  gstNo :{ type: String ,required:false},
  noOfEmployees :{ type: Number,default:0 ,required:false},
  closingDate :{ type: Date ,required:false},
  status :{ type: Boolean,default:true ,required:false},    
  createdAt:{ type: Date,default:new Date()}

}, {
    collection: 'stores'
  })

module.exports = mongoose.model('Store', storeSchema)

      //   [Key]
      //   [Display(Name = "Code")]
      //   public string StoreCode { get; set; }

      //   [Display(Name = "Store")]
      //   public string StoreName { get; set; }

      //   public string Address { get; set; }
      //   public string City { get; set; }

      //   [Display(Name = "Pin Code")]
      //   public string PinCode { get; set; }

      //   [Display(Name = "Contact")]
      //   public string PhoneNo { get; set; }

      //   [Display(Name = "Store Manager")]
      //   public string StoreManagerName { get; set; }

      //   [Display(Name = "SM Contact No")]
      //   public string StoreManagerPhoneNo { get; set; }

      //   [Display(Name = "PAN No")]
      //   public string PanNo { get; set; }

      //   [Display(Name = "GSTIN ")]
      //   public string GSTNO { get; set; }

      //   [Display(Name = "Employees Count")]
      //   public int NoOfEmployees { get; set; }

      //   [DataType(DataType.Date), DisplayFormat(DataFormatString = "{0:yyyy-MM-dd}", ApplyFormatInEditMode = true)]
      //   [Display(Name = "Opening Date")]
      //   public DateTime OpeningDate { get; set; }

      //   [DataType(DataType.Date), DisplayFormat(DataFormatString = "{0:yyyy-MM-dd}", ApplyFormatInEditMode = true)]
      //   [Display(Name = "Closing Date")]
      //   public DateTime? ClosingDate { get; set; }

      //   [Display(Name = "Operative")]
      //   public bool Status { get; set; }

      //  // public int? CompanyId { get; set; }
      //  // public virtual Company Company { get; set; 



       