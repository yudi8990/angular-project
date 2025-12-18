import { MenuItem } from './menuItems';
export const MENU: MenuItem[] = [
  {
    label: 'Dashboard', route: 'dashboard', icon: 'ki-chart-pie-3',
  },
  {
    label: 'Transactions',  icon: 'ki-directbox-default',
    children: [
      {
        label: 'Cash/Journal Vouchers',
        children: [
          { label: 'Voucher Transaction', route: '/transactions/voucher-transaction' },
          { label: 'Pass Bank Transactions', route: '' },
          { label: 'Adjustment of Account Balance', route: '' },
          { label: 'Sales Register', route: '' },
          { label: 'Detail of Transactions', route: '' },
          { label: 'Sales/Purchase Voucher Control File', route: '' },

          {
            label: 'T.D.S. ',
            children: [
              { label: 'T.D.S. Form', route: '' },
              { label: 'Define Deposit of TDS', route: '' },
              { label: 'TDS Register', route: '' }
              // {
              //   label: 'Advanced',
              //   children: [
              //     { label: 'Compressed', route: '' },
              //     { label: 'Encrypted', route: '' },
              //   ],
              // },
            ],
          },
          { label: 'Stock Adjustment - Amount wise', route: '' },
          { label: 'Voucher Query', route: '' },
          { label: 'Update Cash Sale', route: '' },
          { label: 'Import Bank Excel Sheet to Saark', route: '' },
          { label: 'Import B2B Excel Sheet into Saark', route: '' },
          { label: 'Import GSTR-4 Excel Sheet into Saark', route: '' },
        ],
      },
      { label: 'Cash-In-hand Detail', route: '' },
      {
        label: 'Daily Deposits',
        children: [
          { label: 'Daily Deposits Transactions', route: 'common/receipts' },
          { label: 'Receipt Register', route: '' },
          { label: 'Missing Receipts', route: '' },
          { label: 'Zone-Wise Receipt Stm', route: '' },
          { label: 'Send and Receive Data from Hand Held Machine', route: '' },
          { label: 'Delete DDS Transactions', route: '' },

        ],

        // children: [{ label: 'Daily Deposits Transactions', route: 'common/receipts' }],
      },
      {
        label: 'Fixed Deposit Transactions',
        children: [
          { label: 'Fixed Deposit Transactions', route: '' },
          { label: 'Due Date Diary Fixed Deposit', route: '' },
          { label: 'Close of FDR', route: '' },
          { label: 'Fixed Deposit Register', route: '' },
          { label: 'Renew FDR', route: '' },

        ],
      },
      {
        label: 'FDR With Bank Transactions',
        children: [
          { label: 'F.D.R. With Bank Transactions', route: '' },
          { label: 'F.D.R. With Bank Register', route: '' },
          { label: 'F.D.R. With Bank Due for Maturity', route: '' },
          { label: 'Bank Gurantee Register', route: '' },
          { label: 'Renewal of Bank Gurantee', route: '' },


        ],
      },


      {
        label: 'Purchase Bills',
        children: [
          { label: 'Purchase Bills', route: 'common/purchase-bill' },
          { label: 'Purchase Register', route: '' },
          { label: 'Purchase Statement', route: '' },
          { label: 'S.T.Catagory-Wise Statement', route: '' },
          { label: 'Market Fee Register', route: '' },
          { label: 'State Wise Purchase', route: '' },
          { label: 'Purchase Register Qty Wise', route: '' },
          { label: 'Broker Wise Purchase', route: '' },
          { label: 'Purchase Account Wise Purchase', route: '' },
          { label: 'P.D.S. Stock Statement', route: '' },
          { label: 'TCS Register', route: '' },
          { label: 'Item/Vendor Wise Profit Ratio', route: '' },

        ],
      },
      {
        label: 'Vehicle Purchase',
        children: [
          { label: 'Vehicle Purchase', route: '/transactions/vehicle-purchase' },
          { label: 'Vehicle Purchase Register', route: '' },

        ],
      },
      {
        label: 'Vehicle Sale and Stock',
        children: [
          { label: 'Vehicle Sale', route: '/transactions/vehicle-sale' },

        ],
      },

      {
        label: 'Advance Supply',
        children: [
          { label: 'Advance Supply Transactions', route: '' },
          { label: 'Advance Supply Register', route: '' },
          { label: 'Advance Supply Summary', route: '' },
          { label: 'Confirm Advance Supply', route: '' },
        ],
      },
      {
        label: 'Production Entry',
        children: [
          { label: 'Production Entry', route: '' },
          { label: 'Production Register', route: '' },
          { label: 'Finished Goods Statement', route: '' },
        ],
      },
      {
        label: 'Branch Transfer',
        children: [
          { label: 'Branch Transfer Transactions', route: '' },
          { label: 'Branch Transfer Register', route: '' },
          { label: 'Branch-Wise Stock Statement', route: '' },
          { label: 'Branch Wise Stock Ledger', route: '' },
          { label: 'Stock Status', route: '' },
          { label: 'Update Blank Branch Code', route: '' },

        ],
      },
      {
        label: 'Credit Note Transactions',
        children: [
          { label: 'Credit Note Transactions', route: '' },
          { label: 'Credit Note Register', route: '' },
        ],
      },
      // {
      //   label: 'Ready Stock Transactions',
      //   children: [
      //     { label: 'Cut', route: '' },
      //     { label: 'Copy', route: '' },
      //     { label: 'Paste', route: '' },
      //   ],
      // },
      // { label: 'B.O.M. Transactions', route: '' },
      {
        label: 'Purchase Order',
        children: [
          { label: 'Purchase Order', route: '' },
        ],
      },
      {
        label: 'Estimate Transactions',
        children: [
          { label: 'Estimate', route: '' },
          { label: 'Estimate Stock Status', route: '' },
        ],
      },
      {
        label: 'Customer Orders',
        children: [
          { label: 'Customer Orders', route: '' },
          { label: 'Pending Orders', route: '' },
          { label: 'Order Register', route: '' },
          { label: 'Transfer Order Opening from Previous Year', route: '' },

        ],
      },

      {
        label: 'G R Transactions',
        children: [
          { label: 'G R Transactions', route: '' },
          { label: 'Payment Transactions', route: '' },
          { label: 'Statement of Accounts', route: '' },
        ],
      },

      {
        label: 'Stock Transfer',
        children: [
          { label: 'Stock Transfer Transactions', route: '' },
          { label: 'E-Way Bill', route: '' },
          { label: 'Stock Transfer Register', route: '' },
        ],
      },
      {
        label: 'Insurance Transactions',
        children: [
          { label: 'Insurance Transactions', route: '' },
          { label: 'Insurance Register', route: '' },
          { label: 'Due for Insurance', route: '' },
        ],
      },

      { label: 'Vehicle Transaction', route: '' },
      { label: 'Form Transactions', route: '' },

      {
        label: 'G.R.N. Transactions',
        children: [
          { label: 'G.R.N. Transactions', route: '' },
          { label: 'Destination Wise Rate', route: '' },
        ],
      },

      {
        label: 'Debit Note',
        children: [
          { label: 'Debit Note', route: '' },
          { label: 'E-Way Bill', route: '' },
          { label: 'Debit Note Setting', route: '' },
        ],
      },


      { label: 'Credit Note - Expiry Goods', route: '' },
    ],
  },
  {
    label: 'Masters', icon: 'ki-color-swatch', 
    children: [
      {
        label: 'Ledger Masters',
        children: [
          { label: 'Ledger Master', route: 'masters/ledger-master' },
          { label: 'Ledger Master Control', route: 'masters/ledger-master-control' },
          { label: 'Define Opening Balance', route: '' },
          { label: 'Transfer Opening Balance from Last Year', route: '' },
          { label: 'Ledger Index', route: '' },
          { label: 'Birth Day Reminder Chart', route: '' },
          { label: 'Merge Accounts', route: '' },
          { label: 'Merge of Accounts with Date Range', route: '' },
          { label: 'Define Group - Trading A/c', route: '' },
          { label: 'Ledger with Bank A/c Detail', route: '' },
          { label: 'Balance Sheet Control Master', route: 'masters/balance-sheet-control-master' },
          { label: 'Close Account', route: '' },
          { label: 'Party Query', route: '' },
          { label: 'Send E-Mail/SMS', route: '' },
          { label: 'Change GSTIN', route: '' },
          { label: 'FSSAI No Query', route: '' },
        ],
      },
      {
        label: 'Product Master',
        children: [
          { label: 'Product Master', route: 'masters/product-master' },
          { label: 'Product Group Master', route: '' },
          { label: 'Define Opening Balance', route: '' },
          { label: 'Product Book', route: '' },
          { label: 'Define DIr Margin', route: '' },
          { label: 'Define S.T. Catagory for Product', route: '' },
          { label: 'Update Price List', route: '' },
          { label: 'Merge Tax Catagory', route: '' },
          { label: 'Merge of Items', route: '' },
          { label: 'Merge HSN Code', route: '' },
          { label: 'GST Slab Master', route: '' },
          { label: 'Define Sale Rate', route: '' },
          { label: 'Hide/Un-Hide Items', route: '' },
          { label: 'Price Tag', route: '' },
          { label: 'Update Last Purchase Rate', route: '' },
          {
            label: 'Monthly Subscription Transactions',
            children: [
              { label: 'Monthly Subscription Rate Master', route: '' },
              { label: 'Prepare Monthly Bill', route: '' },
            ],
          },
        ],
      },



      { label: 'Vehicle Item Master',
            children: [
              { label: 'Vehicle Master', route: 'masters/vehicle-masters' },
              { label: 'Vehicle Product Control Master (GST)',
                children: [
                  { label: 'Product Master Control File (GST)', route: '' },
                  { label: 'Convert Vehicles from Old VAT/GST Rates to New GST Rates', route: '' },
                ],
              },
              { label: 'Color Wise Rate Master', route: '' },
              { label: 'Carriage Master', route: '' },


            ],
       },
     
      { label: 'Category Master', route: 'masters/category-master' },
      { label: 'State Master', route: 'masters/state-master' },      
      { label :'Define Item-Wise Rate', route : ''},
      { label :'Discount Master', route : ''},
      { label :'Unit Master', route : ''},
      { label :'Free Quantity Master', route : ''},
      { label :'Distt Master', route : ''},

      { label :'Branch Master', route : ''},
      { label :'Company Information', route : ''},
      { label :'Year Master', route : ''},
      { label :'Bill Type Header', route : ''},
      { label :'Tax Master', route : ''},
      { label :'Form Master', route : ''},
      { label :'T.D.S. Master', route : ''},
      { label :'Bank Masters', route : ''},
 


      { label: 'Vehicle Regn. Master',
            children: [
              { label: 'Vehicle Regn. Master', route: '' },
              { label: 'Insurance Due Statement'},
              { label: 'Merge of Vehicles', route: '' },
              { label: 'Vehicle Certificate', route: '' },
            ],
       },




      { label :'Model Master', route : ''},
      { label :'Machinery Master', route : ''},
      { label :'Narration Master', route : ''},
 
      { label :'T.C.S. Master', route : ''},
      { label :'Tank Master', route : ''},
      { label :'Pump Master', route : ''},
      { label :'HRTC Rate Master', route : ''},
      { label :'W.I.P. Transactions', route : ''},
      { label :'Destination Wise Rates', route : ''},
      { label :'Bill Reference', route : ''},
      { label :'Consultant Master', route : ''},
      { label :'Bill Term and Conditions ', route : ''},

      { label :'Driver Master', route : ''},
      { label :'Employee Master', route : ''},
      { label :'Staff Commission Master ', route : ''},
      { label :'Special Discount Master', route : ''},
      { label :'Party Wise Scheme Master ', route : ''},
      { label :'Standing Instruction Master', route : ''},



      // { label: 'Product Master', route: '' },
      // {
      //   label: 'Tax Settings',
      //   children: [
      //     { label: 'GST Rates', route: '' },
      //     { label: 'TDS Rates', route: '' },
      //   ],
      // },
    ],
  },

  {
    label: 'Reports', icon: 'ki-filter-tablet',
    children: [
      
        { label :'Day Book', route : 'reports/day-book'},
        { label :'Statement of Accounts', route : 'reports/statement-of-accounts'},
        { label :'Trial Balance', route : 'reports/trail-balance'},  
        { label :'Daily Cash Position', route : 'reports/daily-cash-position'},
        { label :'Transaction Summary', route : ''},
 

        { label: 'Bank Reports',
              children: [
              { label :'Weekly Statement', route : ''},
              { label :'Kisatbandi Ledger', route : ''},
              { label :'Kisatbandi Trial', route : ''},
              { label :'R.D.Statement', route : ''},
              { label :'Overdue Balance Statenment', route : ''},
              { label :'Reminder for Over Due Payment', route : ''},
              { label :'List of Advancement', route : ''},
              { label :'Agent-wise Collection Statement', route : ''},
              { label :'O.D.Reserve Transactions.', route : ''},
              { label :'Accounts due for Maturity', route : ''},
              { label :'Consolidated Accounts Statement', route : ''},
              { label :'Daily Accounts Summary', route : ''},
              { label :'Station-wise Share Holders', route : ''},
              { label :'Branch-wise Cash-in-Hand', route : ''},
              { label :'Branch-v/s-Head Office Balances', route : ''},
              { label :'Print Schedule-3', route : ''},
              { label :'Loan/Recovery Statement', route : ''},
              { label :'List of New Accounts Created', route : ''},
              { label :'List of Share Holders', route : ''},
              { label :'Partially Refund/Closed A/c Stm', route : ''},
              { label :'Lien With Accounts', route : ''},
              { label :'MIS Reports', route : ''},

              ],
        },



 
        { label: 'Aging Analysis',
              children: [

            { label :'Aging Analysis', route : ''},
            { label :'Date-Wise Pending Payment ', route : ''},
            { label :'Payment Vs Receipt Statement ', route : ''},
            { label :'Days-wise Payment Summary ', route : ''},
            { label :'Bill-wise Payment Reminder ', route : ''},
            { label :'Zone-Wise Payment Schedule ', route : ''},
            { label :'Days-wise Recovery Statement ', route : ''},
            { label :'List of Parties Over Dr Limit ', route : ''},
            { label :'Bill Wise Pending Payment ', route : ''},
            { label :'Aging Analysis With Lifting', route : ''},
            { label :'SalesMan Wise Aging', route : ''},
            { label :'Update Blank Sales Man', route : ''},
            { label :'Merge Sales Man', route : ''},
            { label :'Pending Wise Payment With Last Trn Date', route : ''},
            { label :'Update Opening for Aging Analysis', route : ''},


              ],
        },




        { label :'Sale Comparision Statement', route : ''},
        { label :'S.T.Catagory-wise Sale', route : ''},
   
        { label: 'Quarterly/Monthly VAT Return',
              children: [
                { label :'Vat Return', route : ''},
                { label :'Purchase Bill List', route : ''},
                { label :'Sale Bill List', route : ''},
                { label :'Yearly Abstract', route : ''},

                { label: 'Tax Exemption',
                      children: [
                        { label: 'Certificate', route: '' },
                        { label: 'Register'},
                      ],
                },


                { label :'Quarterly Sale Comprision', route : ''},
                { label :'Vat Difference CheckList', route : ''},
                { label :'Input Tax Calculation', route : ''},
                { label :'C-Form Request', route : ''},
                { label :'Mark Accounts for VAT', route : ''},
                { label :'C-Form Reminders', route : ''},
                
                { label: 'Form-D',
                  children: [
                    { label: 'Certificate', route: '' },
                    { label: 'Form-D Register'},
                ],
                },
                
                { label: 'Form ST XXV',
                  children: [
                    { label: 'Certificate', route: '' },
                    { label: 'Register'},
                ],
                },

                { label :'S.T.%age Wise List of Sale', route : ''},

              ],
        },


 
        { label: 'Sale/Purchase/Expenses Aalysis',
               children: [
                 { label: 'Financial Analysis', route: '' },
                 { label: 'Qty Wise Analysis'},
             ],
        },


        { label :'Budget Statement', route : ''},
        { label :'Sale/Purchase/Expenses Comparison', route : ''},
        { label :'Balance Confirmation', route : ''},
        { label :'Financial Reports', route : ''},
        { label :'Combine Statement of Accounts', route : ''},

        { label: 'Daily/Monthly Reports',
               children: [
                { label :'Daily Sale Statement', route : ''},
                { label :'Daily Production Statement', route : ''},
                { label :'Daily Stock Statement', route : ''},
                { label :'Monthly Sale Report', route : ''},
                { label :'Monthly Production Report Daily Fin/Stock Statement', route : ''},


             ],
        },



 
        { label: 'Bank Reconsilation',
               children: [
                { label :'Bank Reconsilation Printing', route : ''},
                { label :'Average Balance Statement', route : ''},

             ],
        },



        { label :'Branch Wise Profit', route : ''},
        { label :'Branch Wise Transaction Detail', route : ''},

        { label: 'Automobile Reports',
               children: [

                { label :'Warranty/Free Service Register', route : ''},
                { label :'Vehicle History', route : ''},
                { label :'Vehicle History - Detailed', route : ''},

             ],
        },

        { label :'Sub Ledger Wise Month Wise Trn Statement', route : ''},

    
    ],
  },


  {
    label: 'Tools',   icon: 'ki-briefcase',
    children: [
      // {

      //   label: 'Configure Masters',
      //   children: [
      //     { label: 'Account Master', route: 'tools/configure-masters/account-master' },
      //     { label: 'Product Master', route: 'tools/configure-masters/product-master' },
      //     { label: 'Purchase Bill', route: 'tools/configure-masters/purchase-bill-master' },
      //     { label: 'Sale Bill', route: 'tools/configure-masters/sale-bill-master' },
      //   ],
      // },
      { label: 'Configure Master', route: 'tools/configure-master' },
      { label :'System Contols', route : ''},
      { label :'General Settings', route : ''},
      { label :'User maintenance', route : ''},
      { label :'Recalculate Balances', route : ''},
      { label :'Renumbering', route : ''},
      { label :'Update', route : ''},
      { label :'Delete Temporary Files', route : ''},
      { label :'Show Clock', route : ''},
      { label :'Configure Masters', route : ''},

      { label :'Basic Windows Functions', route : ''},
      { label :'Lock Keyboard', route : ''},
      { label :'Letter Head', route : ''},
      { label :'Sale Bill Logo', route : ''},
      { label :'Sale Bill QR Code', route : ''},
      { label :'Backup', route : ''},
      { label :'Restore', route : ''},
      { label :'Start New Year', route : ''},
      { label :'Change Financial Period', route : ''},
      { label :'Payment Reminder Letter', route : ''},
      { label :'Day-End Process', route : ''},

    ],
  },
  {
    label: 'Stock/Inventory',  icon: 'ki-graph-up',
    children: [

      { label :'Stock Statement', route : ''},
      { label :'Stock Status', route : ''},
      { label :'Multi Columner Stock Status', route : ''},
      { label :'Stock Summary', route : ''},
      { label :'Stock Statement for Bank', route : ''},
      { label :'Stock Statement With Sale Value', route : ''},
      { label :'Stock Ledger', route : ''},
      { label :'Main Catagory Wise Stock Statement', route : ''},
      { label :'Mall Khata Ledger', route : ''},
      { label :'Item/Vender Wise Purchase', route : ''},
      { label :'Cylinders Reports', route : ''},
      { label :'Tank Wise Stock', route : ''},
      { label :'Stock Statement Finished Goods', route : ''},
      { label :'Bin Register', route : ''},
      { label :'Hassion Bag Register', route : ''},
      { label :'Monthy Stock Statement', route : ''},
      { label :'Batch Wise Stock Status', route : ''},
      { label :'Batch Wise Stock Statement', route : ''},
      { label :'Item Due for Expiry', route : ''},
      { label :'Group Wise Sale/Purchase', route : ''},


    ]
  },
  {
    label: 'Invoicing', icon: 'ki-tablet-text-up',
    children: [
        { label :'Sale Bill', route : ''},
        { label :'DIP Transaction', route : ''},
 
      {

        label: 'E-Invoice',
        children: [
          { label: 'Prepare E-Invoice', route: '' },
          { label: 'E-Invoice Register', route: '' },
        ],
      },


        { label :'e-Way Bill', route : ''},
        { label :'Gate Pass Printing', route : ''},
        { label :'ST-XXVI', route : ''},
        { label :'Print Invoice', route : ''},
        { label :'Sale Invoice - Contractor', route : ''},
        { label :'Challan Printing', route : ''},

        {

          label: 'Weekly Bill',
          children: [
            { label: 'Weekly Bill', route: '' },
            { label: 'Bill with Account Statement', route: '' },
            { label: 'Re-Generate Weekly Bill', route: '' },
          ],
        },

        
        { label :'Slip Master', route : ''},
        { label :'Company/Category Wise Bill Printing', route : ''},
        { label :'TCS Register', route : ''},
        { label :'Party Wise Bill Printing', route : ''},
        { label :'Daily Sale Statement', route : ''},
        { label :'Sale Register', route : ''},
        { label :'Sales Register - Company/Catg Wise', route : ''},
        { label :'Sales Register - Item Wise', route : ''},
        { label :'Sale Register-Sale Account Wise', route : ''},
        { label :'Sales Man Wise Sale', route : ''},
        { label :'Destination Wise Despatch', route : ''},
        { label :'Labour Register', route : ''},
        { label :'Broker-wise Sale', route : ''},
        { label :'Daily ST-Wise Sale Stm', route : ''},
        { label :'Date Wise Rate Diff', route : ''},
        { label :'Dispencer-Wise Sale', route : ''},
        { label :'P.G. Register', route : ''},
        { label :'Rate History', route : ''},
        { label :'Vehicle-Wise Sale', route : ''},
        { label :'Party Wise Sale Summary', route : ''},
        { label :'ST Catg Wise Sale Register', route : ''},
        { label :'Missing Sale Bils', route : ''},
        { label :'Cash Statement Party/Item Wise', route : ''},
        { label :'Daily Sale Sheet', route : ''},
        { label :'Date and Bill Wise Sale Statement', route : ''},
        { label :'Search of Serial No', route : ''},
        { label :'List of Items with Nill Sale Rate', route : ''},
        { label :'Job Wise Sale Detail', route : ''},
        { label :'List of Items with Nill Purchase Rate', route : ''},
        { label :'Sale Statement Party/Item Wise with Balance', route : ''},
        { label :'Not Operated Debtors', route : ''},
        { label :'Non Operative Items', route : ''},
        { label :'Rebate Discount Statement', route : ''},
        { label :'Despatch Register', route : ''},
        
        {

          label: 'State Wise Sale',
          children: [
            { label: 'Item Wise Sale', route: '' },
            { label: 'State/Month Wise Sale', route: '' },
            { label: 'Item Wise State+Qty+Tax Wise Detail', route: '' },
          ],
        },



        { label :'Update Bill Type', route : ''},



    ]
  },
  {
    label: 'GST', icon: 'ki-book-square',
    children: [
      { label :'G.S.T. Product Control Master', route : ''},
      { label :'H.S.N. Code Master', route : ''},
      { label :'GST Share Master', route : ''},
      { label :'Cess Master', route : ''},
      { label :'Revserse Charges Master', route : ''},
      { label :'GST Returns', route : ''},
      { label :'UnRegister Dealer Purchase Register', route : ''},
      { label :'Reserve Charges Tmn Register', route : ''},
      { label :'GSTR-1 Register', route : ''},
      { label :'GSTR-2 Register', route : ''},
      { label :'View Json File', route : ''},
      { label :'Define Missing HSN Code', route : ''},
      { label :'View HSN Wise Sale and Purchase', route : ''},
      { label :'Duplicate Purchase Bills', route : ''},
      { label :'GST Bill Diff List', route : ''},
      { label :'Purchase A/C Wise Purchase Register', route : ''},


      {

        label: 'Annual Return',
        children: [
          { label: 'Gstr-1 Reconsile', route: '' },
          { label: 'Form Gstr-9', route: '' },
          { label: 'GSTR-9A', route: '' },
          { label: 'GSTR-9C', route: '' },
          { label: 'GSTR-4', route: '' },                    
        ],
      },


      { label :'GSTR-2 Reconsile (%age Wise)', route : ''},
      { label :'GSTR-2 Reconsile (Consolidated)', route : ''},
      { label :'GST Portal', route : ''},
      { label :'Duplicate GSTIN', route : ''},
      { label :'GSTIN Status of Parties', route : ''},
      { label :'Reflection Date wise Input Statement', route : ''},
      { label :'MIN Rate Wise Tax Summary', route : ''},
      { label :'Sales Return of Registered Dealer', route : ''},

    ]
  },
  {
    label: 'Final Reports', icon: 'ki-file-added',
    children: [
      { label :'Balance Sheet', route : ''},
      { label :'Profit and Loss Account', route : ''},
      { label :'Trading Account', route : ''},
      { label :'Income and Expenditure Statement', route : ''},
      { label :'Fixed Assets Schedule', route : ''},
      { label :'Schedules', route : ''},
      { label :'Sundry Debtors/Creditors Schedule', route : ''},
      { label :'Partner/proprietor Capital Schedule', route : ''},
      { label :'Vehicle-Wise Expesnes and Income Summary', route : ''},
      { label :'Year-wise Comparision', route : ''},
      { label :'Registration Wise Exp. Detail', route : ''},
      { label :'Cash Flow Statement', route : ''},
      { label :'Fund Flow Statement', route : ''},
      { label :'Month-wise Sale/Purchase/Expenses Statement', route : ''},
      { label :'Define Depr Ratio', route : ''},
      { label :'Define Capital A/c Ratio', route : ''},
 
      {

        label: 'Manufacturing A/c',
        children: [
          { label: 'Define Group of Manufacturing A/c', route: '' },
          { label: 'Maint Closing Stock File (Manufacturing A/c)', route: '' },
        ],
      },




      { label :'Depot Wise Trading Account', route : ''},
      { label :'Depot/Account Head Wise Trading A/c', route : ''},
      { label :'Maint Closing Stock File', route : ''},
      { label :'Balance Sheet Header', route : ''},
      { label :'Performance Report', route : ''},
  

      {

        label: 'Company Wise Balance Sheet',
        children: [
          { label: 'Company Wise Balance Sheet', route: '' },
          { label: 'Group Master - Company Wise Balance Sheet', route: '' },
          { label: 'Company Wise Balance Sheet - Sub Group', route: '' },
          { label: 'Define balance Sheet Group', route: '' },

        ],
      },



    ]
  },
  {
    label: 'Sales Reports', icon: 'ki-tablet-book',
    children: [
        { label :'Zone-Wise Sale Statement', route : ''},
        { label :'', route : ''},
        { label :'Day-wise Sale Statement', route : ''},
        { label :'Product Catagory Wise Sale', route : ''},
        { label :'I.D.C. Report', route : ''},
        { label :'Prod-wise Year-to-Date Sale', route : ''},
        { label :'Prod-wise Monthly Sale', route : ''},
        { label :'YTD Sale Statement', route : ''},
        { label :'Item-Wise Sale', route : ''},
        { label :'Date/Item-wise Sale', route : ''},
        { label :'Beat-wise Sale Statement', route : ''},
        { label :'Party/Company Wise Sale', route : ''},
        { label :'Print Scheme Register', route : ''},
        { label :'Item-wise Scheme Statement', route : ''},
        { label :'Scheme Recoverable Statement', route : ''},
        { label :'Party-wise/Bill-wise Detail', route : ''},
        { label :'Item-Wise Challan Register Day-Wise Bill-List', route : ''},
        { label :'Item/Party-wise Comperision', route : ''},
        { label :'Item-wise Profit', route : ''},
        { label :'Goods Return Transactions', route : ''},
        { label :'Remove All Invoice', route : ''},
        { label :'Trade Discount Statement', route : ''},
        { label :'Zone Wise/Month Wise Sale Statement', route : ''},
        { label :'Party/Item Wise Claim Register', route : ''},
        { label :'Search Mobile NO Wise Sale', route : ''},
        { label :'Vehicle Wise Sale', route : ''},
        { label :'Discount Register', route : ''},
        { label :'Date Wise Sale Analysis', route : ''},
        { label :'Customer Performance', route : ''},
        { label :'Zone Wise/Product Category Wise Sale Compr', route : ''},
        { label :'Prod Category Wise/Year Wise Sale Compr', route : ''},


    ]
  },
  {
    label: 'User Reports', icon: 'ki-document',
    children: [
      { label :'E.M.I. Calculator', route : ''},
      { label :'Deposit Maturity Calculator', route : ''},
      { label :'Create Query to Import Data', route : ''},
      { label :'Import Data from TATA', route : ''},
      { label :'Management Diary Staff Performance', route : ''},
      { label :'SMS Template Settings', route : ''},
      { label :'Import Data from MARG', route : ''},
      { label :'Update Price List - Relaxo', route : ''},
      { label :'Export data to DC Format', route : ''},
      { label :'Change Company Location', route : ''},
      { label :'Import Data from SAMNA', route : ''},
      { label :'Import Data from LOGIC', route : ''},
      { label :'Import Data from Unify', route : ''},


    ]
  },

  {
    label: 'Quick Links', icon: 'ki-briefcase',
    children: [
      { label: 'Receipts', route: 'common/receipts' },
      { label: 'Purchase Bills', route: 'common/purchase-bill' },
    ]
  },
];

