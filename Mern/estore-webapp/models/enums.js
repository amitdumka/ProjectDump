module.exports=  EntryStatus=Object.freeze({Added:0, Approved:1, Rejected:2, Updated:3, Deleted:4, DeleteApproved:5});
module.exports=  CRUD=Object.freeze({Create:0, Update:0, Delete:0, Invalid:0});
module.exports=  ArvindAccount=Object.freeze({ArvindLimited:0, ALBL:0, AFL:0, Others:0});
module.exports=  ConnectionType=Object.freeze({Commercial:0, Domestic:0, HighTension:0});
module.exports=  RentType=Object.freeze({WorkShop:0, Shop:0, Goods:0, Office:0, House:0, Others:0});

module.exports=  Gender=Object.freeze({Male:0, Female:0, TransGender:0});
module.exports=  Unit=Object.freeze({Meters:0, Nos:0, Pcs:0, Packets:0, NoUnit:0});

//module.exports=  SalePayMode=Object.freeze({Cash:0, Card:0, Mix:0});//TODO: check update based on data present
module.exports=  Size=Object.freeze({S:0, M:0, L:0, XL:0, XXL:0, XXXL:0, T28:0, T30:0, T32:0, T34:0, T36:0, T38:0, T40:0, T41:0, T42:0, T44:0, T46:0, T48:0,FreeSize:0,NS:0, NOTVALID:0});
module.exports=  ProductCategory=Object.freeze({Fabric:0, ReadyMade:0, Accessiories:0, Tailoring:0, Trims:0, PromoItems:0, Coupons:0, GiftVouchers:0, Others:0});
module.exports=  CardMode=Object.freeze({DebitCard:0, CreditCard:0, AmexCard:0});
module.exports=  CardType=Object.freeze({Visa:0, MasterCard:0, Mastro:0, Amex:0, Dinners:0, Rupay:0});
module.exports=  LedgerCategory=Object.freeze({Credit:0, Debit:0, Income:0, Expenses:0, Assests:0, Bank:0, Loan:0, Purchase:0, Sale:0, Vendor:0, Customer:0});
module.exports=  VPayMode=Object.freeze({CA:0, DC:0, CC:0, Mix:0, Wal:0, CRD:0, OTH:0});

// Aprajita Retails Context
module.exports=  WalletType=Object.freeze({PayTm:0, GooglePay:0, PhonePay:0,AirtelPay:0,BhimPay:0,Others:0});
module.exports=  PayMode    =Object.freeze({Cash:0, Card:0, RTGS:0, NEFT:0, IMPS:0, Wallets:0, Cheques:0, DemandDraft:0, Points:0, Others:0, Coupons:0, MixPayments:0, UPI:0});;
module.exports=  PaymentMode=Object.freeze({Cash:0, Card:0, RTGS:0, NEFT:0, IMPS:0, Wallets:0, Cheques:0, DemandDraft:0, Others:0, UPI:0});;
module.exports=  AttUnit=Object.freeze({Present:0, Absent:0, HalfDay:0, Sunday:0, Holiday:0, StoreClosed:0, SundayHoliday:0, SickLeave:0, PaidLeave:0, CasualLeave:0, OnLeave:0});;
module.exports=  SalaryComponet=Object.freeze({NetSalary:0, LastPcs:0, WOWBill:0, SundaySalary:0, Incentive:0, Others:0, Advance:0, PaidLeave:0, SickLeave:0});
module.exports=  BankPayMode=Object.freeze({Cash:0, Card:0, Cheques:0, RTGS:0, NEFT:0, IMPS:0, Wallets:0, Others:0});

module.exports=  EmpType=Object.freeze({Salesman:0, StoreManager:0, HouseKeeping:0, Owner:0, Accounts:0, TailorMaster:0, Tailors:0, TailoringAssistance:0, Others:0});
module.exports=  TaxType=Object.freeze({GST:0, SGST:0, CGST:0, IGST:0, VAT:0, CST:0});
module.exports=  MixPaymentMode=Object.freeze({Card:0, Coupon:0, PointRedeemed:0, Others:0});

module.exports=  SalePayMode=Object.freeze({Cash:0, Card:0, Mix:0, SR:0});//TODO: check update based on data present
module.exports=  LoginRole=Object.freeze({Admin:0, StoreManager:0, Salesman:0, Accountant:0, RemoteAccountant:0, Member:0, PowerUser:0});;
module.exports=  LedgerEntryType=Object.freeze({Expenses:0, Payment:0, Reciept:0, Salary:0, AdvacePayment:0, AdvaceReciept:0, ArvindLimited:0, Others:0});
module.exports=  AccountType=Object.freeze({Saving:0, Current:0, CashCredit:0, OverDraft:0, Others:0, Loan:0, CF:0});
module.exports=  VoucherType=Object.freeze({Payment:0, Reciept:0, Contra:0, DebitNote:0, CreditNote:0, JV:0});

module.exports=  LedgerTo=Object.freeze({CashSales:0, POSSale:0, Cash:0, TailorBook:0, Suspense:0});
module.exports=  Head=Object.freeze({Sale:0, HDFCCA:0, TailorBook:0, BikashPatwari:0, Sanjeev:0, Zafar:0, Suspense:0, IDBICA:0, ICICIBankCA:0, BandhanCA:0, SBIOD:0, SBICC:0, AmitKumar:0, Others:0});
module.exports=  LedgerBy=Object.freeze({AmitKumar:0, Cash:0, BandhanCA:0, BHARATQR:0, EDCBandhan:0, EDCEASYTAP:0, EDCHDFC:0, EDCICICI:0, EDCSBI:0, EXPUNDEF:0, HDFCCA:0, ICICIBankCA:0, IDBICA:0, Others:0, SBICC:0, Suspense:0, Zafar:0});
module.exports=  Remark=Object.freeze({Uploaded:0, Payment:0, Reciept:0, Expenses:0, BankDeposit:0, BankWithdrawal:0, Others:0});

module.exports=  UploadType=Object.freeze({Purchase:0, SaleRegister:0, SaleItemWise:0, InWard:0, Customer:0, Attendance:0, Search:0});
module.exports=  UploadReturn=Object.freeze({Success:0, Error:0, FileNotFound:0, NotExcelType:0, ImportNotSupported:0, OKGen:0});
module.exports=  HolidayReason=Object.freeze({GovertmentHoliday:0, Bandha:0, Festivals:0, WeeklyOff:0, ApproveHoliday:0, Other:0});

