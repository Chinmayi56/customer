var e=(e,t,n)=>()=>{if(n)throw n[0];try{return e&&(t=e(e=0)),t}catch(e){throw n=[e],e}},t=(e,t)=>()=>(t||(e((t={exports:{}}).exports,t),e=null),t.exports);(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),t.credentials=e.crossOrigin===`use-credentials`?`include`:e.crossOrigin===`anonymous`?`omit`:`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();function n(e){return o.find(t=>t.slug===e)||null}function r(e){return o.find(t=>t.id===e)||null}var i,a,o,s,c,l,u=e((()=>{i=[{id:`transferring`,name:`Grain Transferring`,icon:`move-horizontal`,img:`assets/products/pipe-coil-1.jpeg`},{id:`collecting`,name:`Grain Collecting`,icon:`circle-dot`,img:`assets/products/collector-field.jpeg`},{id:`bagging`,name:`Grain Bagging`,icon:`package`,img:`assets/products/collector-bags.jpeg`},{id:`handling`,name:`Grain Handling Equipment`,icon:`warehouse`,img:`assets/products/pipe-frame.jpeg`},{id:`machinery`,name:`Agricultural Machinery`,icon:`tractor`,img:`assets/products/collector-diagram.jpeg`},{id:`accessories`,name:`Pipes & Accessories`,icon:`cable`,img:`assets/products/pipe-mounted-2.jpeg`}],a=[{icon:`gauge`,value:`18 Tons/Hour`,label:`High Transfer Capacity`},{icon:`ruler`,value:`30–500 Feet`,label:`Pipe Length Options`},{icon:`move-vertical`,value:`20 Feet`,label:`Transfer Height`},{icon:`zap`,value:`5 HP–16 HP`,label:`Motor Options`},{icon:`package-check`,value:`90 Bags/Hour`,label:`Bagging Capacity`}],o=[{id:`p1`,name:`Grain Transferring Pipe`,slug:`grain-transferring-pipe`,category:`transferring`,description:`Heavy-duty grain transferring solution designed for efficient transfer of grains and powders across long distances.`,images:[`assets/products/pipe-coil-2.jpeg`,`assets/products/pipe-mounted-1.jpeg`,`assets/products/pipe-studio-1.jpeg`],price:null,discountPrice:null,stock:24,stockStatus:`In Stock`,specifications:[{label:`Length`,value:`30 ft – 500 ft`},{label:`Height`,value:`20 ft`},{label:`Capacity`,value:`18 tons/hour`},{label:`Screw`,value:`SS (Stainless Steel)`},{label:`Pipe`,value:`HDPE`},{label:`Motor`,value:`5 HP – 16 HP`}],features:[`Heavy-duty industrial design`,`Long-distance grain transfer`,`Suitable for all types of grains`,`Suitable for powders`,`Multiple length configurations`,`Multiple motor configurations`,`Built for agricultural and industrial use`],applications:[`Rice`,`Wheat`,`Corn`,`Soybean`,`Feed`,`Powders`],rating:4.7,reviews:38},{id:`p2`,name:`Grain Collecting & Bagging Machine`,slug:`grain-collecting-bagging-machine`,category:`bagging`,description:`A powerful, portable machine designed for collecting grains and powders from the ground and efficiently filling bags.`,images:[`assets/products/collector-bags.jpeg`,`assets/products/collector-field.jpeg`,`assets/products/collector-diagram.jpeg`],price:null,discountPrice:null,stock:15,stockStatus:`In Stock`,specifications:[{label:`Motor`,value:`5 HP single phase`},{label:`Capacity`,value:`90 bags/hour`},{label:`Used For`,value:`Collecting grains & powders into bags`},{label:`Suitable For`,value:`All kinds of grains and powders`}],features:[`5 HP single-phase motor`,`90 bags/hour capacity`,`Efficient ground-level grain collection`,`Direct bag-filling support`,`Suitable for various grains`,`Suitable for powders`,`Designed for agricultural operations`],applications:[`Rice`,`Corn`,`Wheat`,`Soybean`,`Side crops`,`Feed`],rating:4.8,reviews:52},{id:`p3`,name:`Portable Grain Transfer Machine`,slug:`portable-grain-transfer-machine`,category:`transferring`,description:`A compact, wheeled grain transfer unit built for quick relocation between trucks, stores and threshing yards.`,images:[`assets/products/pipe-mounted-2.jpeg`,`assets/products/pipe-frame.jpeg`,`assets/products/pipe-coil-1.jpeg`],price:null,discountPrice:null,stock:19,stockStatus:`In Stock`,specifications:[{label:`Motor`,value:`5 HP – 16 HP`},{label:`Capacity`,value:`Up to 18 tons/hour (config. dependent)`},{label:`Mobility`,value:`Wheeled frame`},{label:`Pipe`,value:`HDPE, coilable`}],features:[`Wheeled frame for fast repositioning`,`Coilable pipe for easy storage`,`Configurable motor output`,`Low-maintenance build`],applications:[`Rice`,`Corn`,`Wheat`,`Bean`,`Soybean`,`Feed`,`Other grains and powders`],rating:4.6,reviews:21},{id:`p4`,name:`Track-Mounted Grain Collector`,slug:`track-mounted-grain-collector`,category:`collecting`,description:`Rubber track-mounted collector that moves smoothly across grain heaps, feeding an inclined elevator into waiting bags.`,images:[`assets/products/collector-field.jpeg`,`assets/products/collector-bags.jpeg`,`assets/products/collector-diagram.jpeg`],price:null,discountPrice:null,stock:9,stockStatus:`Low Stock`,specifications:[{label:`Drive`,value:`Petrol engine, track-mounted`},{label:`Elevator Angle`,value:`Adjustable incline`},{label:`Capacity`,value:`Up to 90 bags/hour`},{label:`Terrain`,value:`Loose grain heaps, threshing floors`}],features:[`Rubber tracks for stable movement on grain`,`Adjustable incline elevator`,`Petrol-powered for off-grid use`,`Reinforced intake auger`],applications:[`Rice`,`Corn`,`Wheat`,`Side crops`,`Soybean`],rating:4.5,reviews:17},{id:`p5`,name:`Heavy Duty Grain Auger Conveyor`,slug:`heavy-duty-grain-auger-conveyor`,category:`handling`,description:`A robust auger conveyor for moving high volumes of grain between storage, transport and processing points.`,images:[`assets/products/pipe-frame.jpeg`,`assets/products/pipe-coil-2.jpeg`,`assets/products/pipe-mounted-1.jpeg`],price:null,discountPrice:null,stock:12,stockStatus:`In Stock`,specifications:[{label:`Frame`,value:`Powder-coated steel`},{label:`Capacity`,value:`18 tons/hour`},{label:`Motor`,value:`5 HP – 16 HP`},{label:`Mounting`,value:`Fixed frame with stabilizer legs`}],features:[`Stabilizer legs for safe fixed operation`,`Powder-coated frame resists corrosion`,`High-volume continuous operation`,`Compatible with multiple grain types`],applications:[`Rice`,`Wheat`,`Corn`,`Feed`],rating:4.6,reviews:29},{id:`p6`,name:`Coilable HDPE Transfer Pipe (100ft)`,slug:`coilable-hdpe-transfer-pipe-100ft`,category:`accessories`,description:`A flexible, food-grade HDPE pipe section built to pair with any Farm Craft transfer motor unit.`,images:[`assets/products/pipe-coil-1.jpeg`,`assets/products/pipe-studio-1.jpeg`,`assets/products/pipe-coil-2.jpeg`],price:null,discountPrice:null,stock:40,stockStatus:`In Stock`,specifications:[{label:`Length`,value:`100 ft (custom lengths available)`},{label:`Material`,value:`Food-grade HDPE`},{label:`Diameter`,value:`Standard fit`},{label:`Coil Weight`,value:`Light, one-person handling`}],features:[`Food-grade material safe for grain contact`,`Tight-coil storage`,`Abrasion-resistant outer layer`,`Compatible with standard Farm Craft motor heads`],applications:[`Rice`,`Wheat`,`Corn`,`Soybean`,`Powders`],rating:4.4,reviews:11},{id:`p7`,name:`Compact Bench-Frame Transfer Unit`,slug:`compact-bench-frame-transfer-unit`,category:`machinery`,description:`A stationary, bench-frame mounted transfer unit suited to smaller stores and mill loading bays.`,images:[`assets/products/pipe-frame.jpeg`,`assets/products/pipe-mounted-2.jpeg`,`assets/products/pipe-coil-2.jpeg`],price:null,discountPrice:null,stock:7,stockStatus:`Low Stock`,specifications:[{label:`Frame`,value:`Welded steel bench frame`},{label:`Motor`,value:`5 HP`},{label:`Capacity`,value:`Up to 10 tons/hour`},{label:`Footprint`,value:`Compact, fixed placement`}],features:[`Small footprint for tight loading bays`,`Simple single-point installation`,`Low power draw`],applications:[`Rice`,`Wheat`,`Feed`],rating:4.3,reviews:8},{id:`p8`,name:`Industrial Grain Handling System`,slug:`industrial-grain-handling-system`,category:`handling`,description:`A complete multi-stage system combining collection, transfer and bagging for high-throughput operations.`,images:[`assets/products/collector-diagram.jpeg`,`assets/products/collector-field.jpeg`,`assets/products/pipe-mounted-1.jpeg`],price:null,discountPrice:null,stock:4,stockStatus:`Low Stock`,specifications:[{label:`Stages`,value:`Collect → Transfer → Bag`},{label:`Combined Capacity`,value:`Up to 18 tons/hour`},{label:`Motor Total`,value:`16 HP+ (multi-unit)`},{label:`Setup`,value:`Modular, site-configured`}],features:[`End-to-end grain handling in one system`,`Modular units configured to site layout`,`Suited to mills and large agricultural businesses`,`Reduced manual handling across stages`],applications:[`Rice`,`Corn`,`Wheat`,`Soybean`,`Feed`,`Powders`],rating:4.9,reviews:14},{id:`p9`,name:`Grain Transfer Motor Head (16 HP)`,slug:`grain-transfer-motor-head-16hp`,category:`accessories`,description:`A high-output 16 HP motor head unit for maximum-capacity transfer runs and longer pipe lengths.`,images:[`assets/products/pipe-studio-1.jpeg`,`assets/products/pipe-coil-1.jpeg`,`assets/products/pipe-frame.jpeg`],price:null,discountPrice:null,stock:10,stockStatus:`In Stock`,specifications:[{label:`Motor`,value:`16 HP`},{label:`Screw`,value:`SS (Stainless Steel)`},{label:`Compatible Pipe`,value:`30 ft – 500 ft HDPE`},{label:`Phase`,value:`Three phase`}],features:[`Maximum-capacity motor for long-distance runs`,`Stainless steel screw for durability`,`Compatible with the full Farm Craft pipe range`],applications:[`Rice`,`Wheat`,`Corn`,`Soybean`,`Powders`],rating:4.7,reviews:19},{id:`p10`,name:`Single-Phase Bagging Attachment`,slug:`single-phase-bagging-attachment`,category:`bagging`,description:`A dedicated bag-filling attachment that pairs with Farm Craft collectors for consistent, fast bag loading.`,images:[`assets/products/collector-bags.jpeg`,`assets/products/collector-diagram.jpeg`,`assets/products/collector-field.jpeg`],price:null,discountPrice:null,stock:22,stockStatus:`In Stock`,specifications:[{label:`Motor`,value:`5 HP single phase`},{label:`Capacity`,value:`90 bags/hour`},{label:`Bag Compatibility`,value:`Standard 50kg woven bags`}],features:[`Consistent fill weight across bags`,`Fast-swap bag mounting`,`Pairs with any Farm Craft collector unit`],applications:[`Rice`,`Corn`,`Wheat`,`Soybean`,`Feed`],rating:4.5,reviews:25}],s={name:`Farm Craft`,gstin:`37AQXPV3001H1ZG`,logo:`assets/logo.jpeg`,email:`contact@farmcraft.demo`,phone:`+91 90000 00000`,whatsapp:`919000000000`,address:`Farm Craft Works, Industrial Road, Andhra Pradesh, India`,addressNote:`Demo placeholder — actual company address to be confirmed.`},c=[{id:`grain-transferring`,title:`Grain Transferring Solutions`,icon:`move-horizontal`,image:`assets/products/pipe-mounted-1.jpeg`,tagline:`Move grain fast, over long distances, with far less manual handling.`,description:`We supply and support flexible, motor-driven grain transferring systems that move rice, wheat, corn, soybean and powders between trucks, stores and processing points — sized to fit daily farm and mill use.`,benefits:[`Transfer capacity up to 18 tons/hour`,`Pipe lengths from 30 ft to 500 ft`,`Motor options from 5 HP to 16 HP`,`Cuts down manual loading and labour time`],process:[`Share your site layout and daily grain volume with our team`,`We recommend a pipe length and motor configuration`,`Get a purchase code and confirm delivery details`,`On-site setup guidance provided on request`],categoryId:`transferring`},{id:`grain-collecting`,title:`Grain Collecting & Field Recovery`,icon:`circle-dot`,image:`assets/products/collector-field.jpeg`,tagline:`Recover loose grain from threshing floors and open yards efficiently.`,description:`Track-mounted and wheeled collectors gather loose grain from the ground and feed it into an inclined elevator, cutting manual scooping and speeding up cleanup after threshing.`,benefits:[`Handles rice, corn, wheat, soybean and side crops`,`Adjustable-incline elevator`,`Stable movement across loose grain heaps`,`Faster yard and threshing-floor cleanup after harvest`],process:[`Tell us your terrain and typical heap size`,`We match a collector unit to your operation`,`Purchase code and delivery are arranged`,`Live demonstration available on request`],categoryId:`collecting`},{id:`grain-bagging`,title:`Grain Bagging & Packaging`,icon:`package`,image:`assets/products/collector-bags.jpeg`,tagline:`Consistent, fast bag-filling for grains and powders.`,description:`Bagging attachments and collecting-and-bagging machines pair with your existing setup for consistent fill weight and quick bag changeovers, so filled bags are ready to stack and move.`,benefits:[`Up to 90 bags/hour`,`Standard 50 kg woven bag compatibility`,`Consistent fill weight across bags`,`Pairs with any Farm Craft collector unit`],process:[`Confirm your bag size and target throughput`,`We recommend the right bagging attachment`,`Get a purchase code and delivery schedule`,`Optional on-site setup walkthrough`],categoryId:`bagging`},{id:`custom-configuration`,title:`Custom Machinery Configuration`,icon:`settings-2`,image:`assets/products/collector-diagram.jpeg`,tagline:`Motor, pipe and mounting options matched to your operation, not the other way around.`,description:`Every farm, mill and store is different. We help you choose motor output, pipe length, mounting style and accessories so the machinery fits your daily volume and available space.`,benefits:[`Configurations from 5 HP to 16 HP motors`,`Fixed, wheeled or track-mounted builds`,`Sized to your grain type and daily volume`,`One point of contact for the full setup`],process:[`Describe your operation — grain type, volume, space`,`We propose one or two configurations to compare`,`Choose a configuration inside the Get a Code flow`,`Confirm your order and track it under My Orders`],categoryId:`machinery`},{id:`installation-support`,title:`On-Site Installation & Setup Guidance`,icon:`wrench`,image:`assets/products/pipe-frame.jpeg`,tagline:`Get your machinery running correctly from day one.`,description:`Once your order is confirmed, our team can walk you through safe setup, pipe routing and first-run checks so your machine is working correctly from the very start.`,benefits:[`Guided first-time setup`,`Safety and operating checks`,`Pipe routing and mounting guidance`,`Fewer early breakdowns caused by incorrect setup`],process:[`Confirm delivery and your preferred setup date`,`Our team shares a simple setup checklist`,`Guided walkthrough, in person or by phone`,`Sign-off once the machine is running smoothly`],categoryId:`handling`},{id:`after-sales-support`,title:`After-Sales Support & Maintenance`,icon:`headphones`,image:`assets/products/pipe-coil-2.jpeg`,tagline:`We stay reachable after the sale, not just before it.`,description:`From spare pipe sections to troubleshooting help, our team supports Farm Craft machinery for the long run — reach out any time using your order ID or purchase code.`,benefits:[`Spare parts and pipe sections available`,`Troubleshooting support by phone or WhatsApp`,`Guidance on routine maintenance`,`Support tied directly to your order and purchase code`],process:[`Reach out with your purchase code or order ID`,`Describe the issue or the part you need`,`Our team advises the next steps`,`We follow up with you until it is resolved`],categoryId:`accessories`}],l={email:`customer@farmcraft.com`,password:`customer123`,name:`Ravi Kumar`,mobile:`+91 98765 43210`}}));function d(e,t){try{let n=localStorage.getItem(e);return n?JSON.parse(n):t}catch{return t}}function f(e,t){localStorage.setItem(e,JSON.stringify(t))}function ee(){let e=d(m.orderSeq,10024)+1;return f(m.orderSeq,e),`FC-${e}`}function te(){let e=e=>Array.from({length:e},()=>`ABCDEFGHJKLMNPQRSTUVWXYZ23456789`[Math.floor(Math.random()*32)]).join(``);return`FC-${e(4)}-${e(4)}`}function ne(){return b||(b=fetch(s.logo).then(e=>{if(!e.ok)throw Error(`logo fetch failed`);return e.blob()}).then(e=>new Promise((t,n)=>{let r=new FileReader;r.onload=()=>t(r.result),r.onerror=n,r.readAsDataURL(e)})).catch(()=>y),b)}function p(e){return`INV-${e.orderId}`}var m,h,g,_,v,y,b,x,S=e((()=>{u(),m={auth:`fc_auth_session`,orders:`fc_orders`,wishlist:`fc_wishlist`,addresses:`fc_addresses`,orderSeq:`fc_order_seq`},h={login(e,t){if(e===l.email&&t===l.password){let t={email:e,name:l.name,mobile:l.mobile,loggedInAt:Date.now()};return f(m.auth,t),{ok:!0,session:t}}return{ok:!1,error:`Invalid email or password. Try the demo credentials below.`}},loginAsDemo(){let e={email:l.email,name:l.name,mobile:l.mobile,loggedInAt:Date.now()};return f(m.auth,e),e},logout(){localStorage.removeItem(m.auth)},getSession(){return d(m.auth,null)},isLoggedIn(){return!!d(m.auth,null)}},g={list(){return o},search(e,{category:t,minMotor:n,availability:r}={}){let i=(e||``).trim().toLowerCase();return o.filter(e=>t&&e.category!==t||r===`in-stock`&&e.stockStatus!==`In Stock`||r===`low-stock`&&e.stockStatus!==`Low Stock`?!1:!i||[e.name,e.description,e.category,...(e.specifications||[]).map(e=>`${e.label} ${e.value}`),...e.applications||[],...e.features||[]].join(` `).toLowerCase().includes(i))},bySlug(e){return o.find(t=>t.slug===e)||null}},_={getProfile(){let e=h.getSession();return e?{...e,addresses:d(m.addresses,[])}:null},saveAddress(e){let t=d(m.addresses,[]);return t.unshift({id:`addr_`+Date.now(),...e}),f(m.addresses,t),t},getAddresses(){return d(m.addresses,[])},toggleWishlist(e){let t=d(m.wishlist,[]),n=t.indexOf(e);return n>=0?t.splice(n,1):t.unshift(e),f(m.wishlist,t),t},getWishlist(){return d(m.wishlist,[])}},v={create(e){let t={orderId:ee(),purchaseCode:te(),customerName:e.customer.name,email:e.customer.email,mobile:e.customer.mobile,address:e.address,product:e.product,quantity:e.quantity,configuration:e.configuration||``,price:e.total,paymentMethod:e.paymentMethod,date:new Date().toISOString(),status:`Pending`},n=d(m.orders,[]);return n.unshift(t),f(m.orders,n),t},list(){let e=h.getSession(),t=d(m.orders,[]);return e?t.filter(t=>t.email===e.email):[]},listAll(){return d(m.orders,[])},byId(e){return d(m.orders,[]).find(t=>t.orderId===e)||null}},y=`data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2264%22%20height%3D%2264%22%20viewBox%3D%220%200%2064%2064%22%3E%0A%20%20%20%20%20%3Crect%20width%3D%2264%22%20height%3D%2264%22%20rx%3D%2212%22%20fill%3D%22%231E7A3D%22%2F%3E%0A%20%20%20%20%20%3Cpath%20d%3D%22M32%2014%20C20%2014%2014%2024%2014%2034%20C14%2044%2022%2050%2032%2050%20C42%2050%2050%2044%2050%2034%20C50%2024%2044%2014%2032%2014%20Z%22%0A%20%20%20%20%20%20%20%20%20%20%20fill%3D%22none%22%20stroke%3D%22%23ffffff%22%20stroke-width%3D%222.4%22%2F%3E%0A%20%20%20%20%20%3Cpath%20d%3D%22M32%2020%20V44%20M32%2044%20L24%2036%20M32%2038%20L40%2030%22%20fill%3D%22none%22%20stroke%3D%22%23ffffff%22%20stroke-width%3D%222.2%22%20stroke-linecap%3D%22round%22%2F%3E%0A%20%20%20%3C%2Fsvg%3E`,b=null,x={async buildInvoiceHtml(e){let t=await ne(),n=e.price!=null&&e.price!==``,r=n?Number(e.price)/Math.max(1,e.quantity):null,i=n?`₹${Number(e.price).toLocaleString(`en-IN`)}`:`Contact for Price`,a=n?`₹${r.toLocaleString(`en-IN`,{maximumFractionDigits:2})}`:`—`,o=i,c=new Date(e.date);return`
    <div style="font-family: 'Inter', Arial, sans-serif; color:#2A2E29; max-width:720px; margin:0 auto; background:#FCFBF8;">

      <div style="display:flex; justify-content:space-between; align-items:flex-start; gap:24px; padding:36px 40px 24px; border-bottom:4px solid #1E7A3D;">
        <div style="display:flex; align-items:center; gap:14px;">
          <img src="${t}" alt="Farm Craft logo" width="56" height="56" style="width:56px; height:56px; border-radius:12px; object-fit:cover; display:block;" />
          <div>
            <div style="font-size:22px; font-weight:700; letter-spacing:0.5px; color:#134A26;">FARM CRAFT</div>
            <div style="font-size:11px; color:#666; margin-top:2px;">Agricultural Machinery &amp; Grain Handling Equipment</div>
            <div style="font-size:11px; color:#666; margin-top:2px;">GSTIN: ${s.gstin}</div>
          </div>
        </div>
        <div style="text-align:right;">
          <div style="font-size:20px; font-weight:700; color:#1E7A3D; letter-spacing:1px;">INVOICE</div>
          <div style="font-size:12px; color:#666; margin-top:6px;">Invoice No: <strong style="color:#2A2E29;">${p(e)}</strong></div>
          <div style="font-size:12px; color:#666;">Order ID: <strong style="color:#2A2E29;">${e.orderId}</strong></div>
          <div style="font-size:12px; color:#666;">Date: <strong style="color:#2A2E29;">${c.toLocaleDateString(`en-IN`,{day:`2-digit`,month:`short`,year:`numeric`})}</strong></div>
        </div>
      </div>

      <div style="padding:24px 40px 0;">
        <div style="background:#134A26; color:#fff; border-radius:14px; padding:16px 20px; display:flex; justify-content:space-between; align-items:center; margin-bottom:24px;">
          <div>
            <div style="font-size:10px; text-transform:uppercase; letter-spacing:1px; color:rgba(255,255,255,0.6);">Purchase Code</div>
            <div style="font-size:20px; font-weight:700; letter-spacing:2px; margin-top:2px;">${e.purchaseCode}</div>
          </div>
          <div style="text-align:right;">
            <div style="font-size:10px; text-transform:uppercase; letter-spacing:1px; color:rgba(255,255,255,0.6);">Status</div>
            <div style="font-size:13px; font-weight:600; margin-top:2px;">${e.status}</div>
          </div>
        </div>

        <div style="display:flex; gap:32px; margin-bottom:24px;">
          <div style="flex:1;">
            <div style="font-size:11px; text-transform:uppercase; letter-spacing:0.5px; color:#888; margin-bottom:6px; font-weight:600;">Billed To</div>
            <div style="font-size:13px; line-height:1.6;">
              <div style="font-weight:600;">${e.customerName||``}</div>
              <div>${e.email||``}</div>
              <div>${e.mobile||``}</div>
            </div>
          </div>
          <div style="flex:1;">
            <div style="font-size:11px; text-transform:uppercase; letter-spacing:0.5px; color:#888; margin-bottom:6px; font-weight:600;">Delivery Address</div>
            <div style="font-size:13px; line-height:1.6;">
              <div>${e.address?.line1||`—`}</div>
              <div>${[e.address?.city,e.address?.state,e.address?.pincode].filter(Boolean).join(`, `)||``}</div>
            </div>
          </div>
          <div style="flex:1;">
            <div style="font-size:11px; text-transform:uppercase; letter-spacing:0.5px; color:#888; margin-bottom:6px; font-weight:600;">From</div>
            <div style="font-size:13px; line-height:1.6;">
              <div style="font-weight:600;">${s.name}</div>
              <div>${s.email}</div>
              <div>${s.phone}</div>
            </div>
          </div>
        </div>

        <table style="width:100%; border-collapse:collapse; margin-bottom:4px;">
          <thead>
            <tr style="background:#E8F3EC; text-align:left;">
              <th style="padding:10px 12px; font-size:11px; text-transform:uppercase; letter-spacing:0.5px; color:#134A26; border-radius:8px 0 0 8px;">Product</th>
              <th style="padding:10px 12px; font-size:11px; text-transform:uppercase; letter-spacing:0.5px; color:#134A26;">Configuration</th>
              <th style="padding:10px 12px; font-size:11px; text-transform:uppercase; letter-spacing:0.5px; color:#134A26; text-align:center;">Qty</th>
              <th style="padding:10px 12px; font-size:11px; text-transform:uppercase; letter-spacing:0.5px; color:#134A26; text-align:right;">Unit Price</th>
              <th style="padding:10px 12px; font-size:11px; text-transform:uppercase; letter-spacing:0.5px; color:#134A26; text-align:right; border-radius:0 8px 8px 0;">Amount</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style="padding:12px; border-bottom:1px solid #E4E2D9; font-size:13px; font-weight:600;">${e.product?.name||``}</td>
              <td style="padding:12px; border-bottom:1px solid #E4E2D9; font-size:12px; color:#666;">${e.configuration||`—`}</td>
              <td style="padding:12px; border-bottom:1px solid #E4E2D9; font-size:13px; text-align:center;">${e.quantity}</td>
              <td style="padding:12px; border-bottom:1px solid #E4E2D9; font-size:13px; text-align:right;">${a}</td>
              <td style="padding:12px; border-bottom:1px solid #E4E2D9; font-size:13px; text-align:right; font-weight:600;">${i}</td>
            </tr>
          </tbody>
        </table>

        <div style="display:flex; justify-content:flex-end; margin-bottom:28px;">
          <div style="width:260px;">
            <div style="display:flex; justify-content:space-between; padding:8px 12px; font-size:13px; color:#666;">
              <span>Subtotal</span><span>${o}</span>
            </div>
            <div style="display:flex; justify-content:space-between; padding:8px 12px; font-size:13px; color:#666;">
              <span>Taxes</span><span>${n?`Included`:`—`}</span>
            </div>
            <div style="display:flex; justify-content:space-between; padding:12px; background:#E8F3EC; border-radius:10px; font-size:15px; font-weight:700; color:#134A26; margin-top:4px;">
              <span>Total</span><span>${o}</span>
            </div>
          </div>
        </div>

        <div style="display:flex; gap:32px; margin-bottom:28px; font-size:12px; color:#666;">
          <div><span style="color:#888;">Payment Method:</span> <strong style="color:#2A2E29;">${e.paymentMethod||`—`}</strong></div>
          <div><span style="color:#888;">Order Date:</span> <strong style="color:#2A2E29;">${c.toLocaleDateString(`en-IN`)}</strong></div>
        </div>
      </div>

      <div style="border-top:1px solid #E4E2D9; padding:20px 40px 32px; font-size:11px; color:#999; text-align:center; line-height:1.7;">
        Thank you for choosing Farm Craft. Our team will contact you regarding order confirmation and delivery.<br />
        This is a demo invoice generated for preview purposes — no real payment has been processed.<br />
        Farm Craft &middot; ${s.address} &middot; ${s.email} &middot; ${s.phone}
      </div>
    </div>
    `},async downloadInvoice(e){let t=await this.buildInvoiceHtml(e),n=`<!DOCTYPE html><html><head><meta charset="utf-8" />
      <title>Invoice ${p(e)} — Farm Craft</title>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <style>
        body { margin:0; padding:32px 16px; background:#F1EFE7; font-family: Inter, Arial, sans-serif; }
        @media print { body { background:#fff; padding:0; } }
        table { width:100%; }
      </style>
      </head><body>${t}</body></html>`,r=new Blob([n],{type:`text/html`}),i=URL.createObjectURL(r),a=document.createElement(`a`);a.href=i,a.download=`FarmCraft-Invoice-${e.orderId}.html`,document.body.appendChild(a),a.click(),a.remove(),URL.revokeObjectURL(i)}}}));function C(){window.lucide&&window.lucide.createIcons()}function w(e,t={}){let n=document.getElementById(`toast-root`),r=document.createElement(`div`),i=t.type===`error`;r.className=`toast-enter flex items-center gap-2 px-4 py-3 rounded-xl shadow-soft text-sm font-medium ${i?`bg-fc-charcoal text-white`:`bg-fc-green text-white`}`,r.innerHTML=`<i data-lucide="${i?`alert-circle`:`check-circle-2`}" class="w-4 h-4 shrink-0"></i><span>${e}</span>`,n.appendChild(r),C(),setTimeout(()=>{r.style.transition=`opacity .3s ease, transform .3s ease`,r.style.opacity=`0`,r.style.transform=`translateY(-6px)`,setTimeout(()=>r.remove(),300)},2600)}function T(e){return e.price?`₹${Number(e.price).toLocaleString(`en-IN`)}`:`Contact for Price`}function E(e,t,n=``){return`<img src="${e}" alt="${t}" class="${n}" loading="lazy"
    onerror="this.onerror=null;this.src='${N}';this.className='${n} object-contain p-10 bg-fc-greenlight';" />`}function D(e){return`<span class="inline-flex items-center gap-1 text-xs font-medium px-2 py-1 rounded-full ${{"In Stock":`bg-fc-greenlight text-fc-green`,"Low Stock":`bg-amber-50 text-amber-700`,"Out of Stock":`bg-red-50 text-red-600`}[e]||`bg-gray-100 text-gray-600`}">
    <span class="w-1.5 h-1.5 rounded-full ${e===`In Stock`?`bg-fc-green`:e===`Low Stock`?`bg-amber-500`:`bg-red-500`}"></span>
    ${e}
  </span>`}function O(e){let t=_.getWishlist().includes(e.id);return`
  <article class="group bg-white rounded-2xl border border-fc-line shadow-card hover:shadow-soft transition-shadow duration-300 overflow-hidden flex flex-col">
    <a href="#/product/${e.slug}" class="zoom-wrap block relative aspect-[4/3] bg-fc-greenlight">
      ${E(e.images[0],e.name,`w-full h-full object-cover`)}
      <button data-wishlist="${e.id}" aria-label="Toggle wishlist" aria-pressed="${t}"
        class="absolute top-3 right-3 w-9 h-9 rounded-full bg-white/90 backdrop-blur flex items-center justify-center shadow-card hover:scale-105 transition-transform">
        <i data-lucide="heart" class="w-4 h-4 ${t?`text-fc-wheat fill-fc-wheat`:`text-fc-charcoal`}"></i>
      </button>
    </a>
    <div class="p-4 flex flex-col gap-2 flex-1">
      <div class="flex items-center justify-between gap-2">
        <span class="text-[11px] uppercase tracking-wide text-fc-green font-semibold">${e.category.replace(/-/g,` `)}</span>
        ${D(e.stockStatus)}
      </div>
      <a href="#/product/${e.slug}" class="font-display font-semibold text-base leading-snug hover:text-fc-green transition-colors">${e.name}</a>
      <p class="text-sm text-fc-slate/80 clamp-2">${e.description}</p>
      <div class="text-xs text-fc-slate/70">${e.specifications[0]?.label}: <strong class="text-fc-charcoal">${e.specifications[0]?.value}</strong></div>
      <div class="mt-auto pt-3 flex items-center justify-between">
        <span class="font-display font-semibold text-fc-charcoal">${T(e)}</span>
      </div>
      <div class="flex gap-2 pt-1">
        <a href="#/product/${e.slug}" class="flex-1 text-center text-sm font-medium border border-fc-line rounded-xl py-2 hover:border-fc-green hover:text-fc-green transition-colors">View Details</a>
        <button data-getcode="${e.id}" class="flex-1 text-sm font-medium bg-fc-green text-white rounded-xl py-2 hover:bg-fc-greendark transition-colors">Get a Code</button>
      </div>
    </div>
  </article>`}function re(){let e=h.getSession(),t=_.getWishlist().length;return`
  <header id="site-header" class="sticky top-0 z-50 hdr-blur bg-white/80 border-b border-fc-line transition-shadow">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="h-16 flex items-center justify-between gap-4">
        <a href="#/" class="flex items-center gap-2 shrink-0">
          <img src="${s.logo}" alt="Farm Craft" class="h-9 w-9 rounded-lg object-cover" />
          <span class="font-display font-bold text-lg tracking-tight hidden sm:block">FARM CRAFT</span>
        </a>

        <nav class="hidden lg:flex items-center gap-7 text-sm font-medium text-fc-slate">
          <a href="#/" class="hover:text-fc-green transition-colors">Home</a>
          <a href="#/shop" class="hover:text-fc-green transition-colors">Products</a>
          <a href="#/about" class="hover:text-fc-green transition-colors">About Us</a>
          <a href="#/services" class="hover:text-fc-green transition-colors">Services</a>
          <a href="#/contact" class="hover:text-fc-green transition-colors">Contact</a>
        </nav>

        <form id="header-search" class="hidden md:flex items-center flex-1 max-w-xs bg-fc-offwhite border border-fc-line rounded-full px-3 py-2 focus-within:border-fc-green transition-colors">
          <i data-lucide="search" class="w-4 h-4 text-fc-slate/60 shrink-0"></i>
          <input name="q" type="search" placeholder="Search grain machinery…" class="bg-transparent outline-none text-sm px-2 w-full placeholder:text-fc-slate/50" />
        </form>

        <div class="flex items-center gap-1 sm:gap-2">
          <a href="#/wishlist" class="relative w-10 h-10 rounded-full hover:bg-fc-greenlight flex items-center justify-center transition-colors" aria-label="Wishlist">
            <i data-lucide="heart" class="w-5 h-5"></i>
            <span id="wishlist-count-badge" class="absolute -top-0.5 -right-0.5 bg-fc-wheat text-white text-[10px] font-bold rounded-full w-4 h-4 flex items-center justify-center ${t?``:`hidden`}">${t}</span>
          </a>
          <a href="#/${e?`profile`:`login`}" class="hidden sm:flex w-10 h-10 rounded-full hover:bg-fc-greenlight items-center justify-center transition-colors" aria-label="Account">
            <i data-lucide="user" class="w-5 h-5"></i>
          </a>
          <a href="#/shop" class="hidden md:inline-flex ml-1 bg-fc-green text-white text-sm font-medium px-4 py-2.5 rounded-full hover:bg-fc-greendark transition-colors">
            Explore Products
          </a>
          <button id="mobile-menu-btn" class="lg:hidden w-10 h-10 rounded-full hover:bg-fc-greenlight flex items-center justify-center" aria-label="Open menu">
            <i data-lucide="menu" class="w-5 h-5"></i>
          </button>
        </div>
      </div>

      <form id="header-search-mobile" class="md:hidden pb-3 flex items-center bg-fc-offwhite border border-fc-line rounded-full px-3 py-2">
        <i data-lucide="search" class="w-4 h-4 text-fc-slate/60 shrink-0"></i>
        <input name="q" type="search" placeholder="Search grain machinery…" class="bg-transparent outline-none text-sm px-2 w-full placeholder:text-fc-slate/50" />
      </form>
    </div>

    <div id="mobile-menu" class="hidden lg:hidden border-t border-fc-line bg-white">
      <nav class="max-w-7xl mx-auto px-4 py-3 flex flex-col text-sm font-medium text-fc-slate">
        <a href="#/" class="py-2.5 border-b border-fc-line/70">Home</a>
        <a href="#/shop" class="py-2.5 border-b border-fc-line/70">Products</a>
        <a href="#/about" class="py-2.5 border-b border-fc-line/70">About Us</a>
        <a href="#/services" class="py-2.5 border-b border-fc-line/70">Services</a>
        <a href="#/contact" class="py-2.5 border-b border-fc-line/70">Contact</a>
        <a href="#/wishlist" class="py-2.5 border-b border-fc-line/70">Wishlist</a>
        <a href="#/${e?`profile`:`login`}" class="py-2.5 border-b border-fc-line/70">${e?`My Profile`:`Login`}</a>
        <a href="#/orders" class="py-2.5">My Orders</a>
      </nav>
    </div>
  </header>`}function k(){let e=_.getWishlist().length;return`
  <nav class="lg:hidden fixed bottom-0 inset-x-0 z-40 bg-white border-t border-fc-line grid grid-cols-5 pb-[env(safe-area-inset-bottom)]">
    <a href="#/" class="flex flex-col items-center justify-center gap-0.5 py-2.5 text-fc-slate">
      <i data-lucide="home" class="w-5 h-5"></i><span class="text-[11px]">Home</span>
    </a>
    <a href="#/shop" class="flex flex-col items-center justify-center gap-0.5 py-2.5 text-fc-slate">
      <i data-lucide="layout-grid" class="w-5 h-5"></i><span class="text-[11px]">Shop</span>
    </a>
    <a href="#/wishlist" class="relative flex flex-col items-center justify-center gap-0.5 py-2.5 text-fc-slate">
      <i data-lucide="heart" class="w-5 h-5"></i><span class="text-[11px]">Wishlist</span>
      ${e?`<span class="absolute top-1 right-[calc(50%-18px)] bg-fc-wheat text-white text-[9px] font-bold rounded-full w-3.5 h-3.5 flex items-center justify-center">${e}</span>`:``}
    </a>
    <a href="#/orders" class="flex flex-col items-center justify-center gap-0.5 py-2.5 text-fc-slate">
      <i data-lucide="receipt" class="w-5 h-5"></i><span class="text-[11px]">Orders</span>
    </a>
    <a href="#/profile" class="flex flex-col items-center justify-center gap-0.5 py-2.5 text-fc-slate">
      <i data-lucide="user" class="w-5 h-5"></i><span class="text-[11px]">Profile</span>
    </a>
  </nav>`}function A(){return`
  <footer class="bg-fc-charcoal text-white/90 mt-24 pb-20 lg:pb-0">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 grid grid-cols-2 lg:grid-cols-5 gap-10">
      <div class="col-span-2 lg:col-span-2">
        <div class="flex items-center gap-2 mb-4">
          <img src="${s.logo}" alt="Farm Craft" class="h-9 w-9 rounded-lg object-cover" />
          <span class="font-display font-bold text-lg">FARM CRAFT</span>
        </div>
        <p class="text-sm text-white/60 max-w-xs leading-relaxed">Agricultural machinery and grain handling equipment engineered for farms, mills and agri-businesses.</p>
        <div class="flex gap-3 mt-5">
          ${[`facebook`,`instagram`,`twitter`,`youtube`].map(e=>`
            <span class="w-9 h-9 rounded-full border border-white/15 flex items-center justify-center text-white/50 hover:text-white hover:border-white/40 transition-colors cursor-default">
              <i data-lucide="${e}" class="w-4 h-4"></i>
            </span>`).join(``)}
        </div>
      </div>
      <div>
        <h4 class="font-display font-semibold mb-4 text-sm">Quick Links</h4>
        <ul class="space-y-2.5 text-sm text-white/60">
          <li><a href="#/" class="hover:text-white transition-colors">Home</a></li>
          <li><a href="#/shop" class="hover:text-white transition-colors">Products</a></li>
          <li><a href="#/services" class="hover:text-white transition-colors">Services</a></li>
          <li><a href="#/about" class="hover:text-white transition-colors">About</a></li>
          <li><a href="#/contact" class="hover:text-white transition-colors">Contact</a></li>
        </ul>
      </div>
      <div>
        <h4 class="font-display font-semibold mb-4 text-sm">Products</h4>
        <ul class="space-y-2.5 text-sm text-white/60">
          ${i.slice(0,4).map(e=>`<li><a href="#/shop?category=${e.id}" class="hover:text-white transition-colors">${e.name}</a></li>`).join(``)}
        </ul>
      </div>
      <div>
        <h4 class="font-display font-semibold mb-4 text-sm">Customer</h4>
        <ul class="space-y-2.5 text-sm text-white/60">
          <li><a href="#/profile" class="hover:text-white transition-colors">My Account</a></li>
          <li><a href="#/orders" class="hover:text-white transition-colors">My Orders</a></li>
          <li><a href="#/orders" class="hover:text-white transition-colors">Purchase Codes</a></li>
        </ul>
      </div>
    </div>
    <div class="border-t border-white/10">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row gap-2 items-center justify-between text-xs text-white/45">
        <span>© ${new Date().getFullYear()} Farm Craft. Demo storefront — no real transactions.</span>
        <span>GSTIN: ${s.gstin}</span>
      </div>
    </div>
  </footer>`}function j({icon:e=`inbox`,title:t,body:n,actionHref:r,actionLabel:i}){return`
  <div class="flex flex-col items-center justify-center text-center py-20 px-4">
    <div class="w-16 h-16 rounded-2xl bg-fc-greenlight flex items-center justify-center mb-5">
      <i data-lucide="${e}" class="w-7 h-7 text-fc-green"></i>
    </div>
    <h3 class="font-display font-semibold text-lg mb-1.5">${t}</h3>
    <p class="text-sm text-fc-slate/70 max-w-sm mb-6">${n}</p>
    ${r?`<a href="${r}" class="bg-fc-green text-white text-sm font-medium px-5 py-2.5 rounded-full hover:bg-fc-greendark transition-colors">${i}</a>`:``}
  </div>`}function M(){let e=document.querySelectorAll(`.reveal`);if(!(`IntersectionObserver`in window)){e.forEach(e=>e.classList.add(`in`));return}let t=new IntersectionObserver(e=>{e.forEach(e=>{e.isIntersecting&&(e.target.classList.add(`in`),t.unobserve(e.target))})},{threshold:.12});e.forEach(e=>t.observe(e))}function ie(e){let t=document.getElementById(`mobile-menu-btn`),n=document.getElementById(`mobile-menu`);t&&n&&t.addEventListener(`click`,()=>n.classList.toggle(`hidden`)),[`header-search`,`header-search-mobile`].forEach(e=>{let t=document.getElementById(e);t&&t.addEventListener(`submit`,e=>{e.preventDefault();let n=new FormData(t).get(`q`);window.location.hash=`#/shop?q=${encodeURIComponent(n||``)}`})})}var N,P=e((()=>{S(),u(),N=`data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22400%22%20height%3D%22300%22%20viewBox%3D%220%200%20400%20300%22%3E%0A%20%20%20%20%20%3Crect%20width%3D%22400%22%20height%3D%22300%22%20fill%3D%22%23E8F3EC%22%2F%3E%0A%20%20%20%20%20%3Cg%20fill%3D%22none%22%20stroke%3D%22%231E7A3D%22%20stroke-width%3D%226%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%20opacity%3D%220.55%22%3E%0A%20%20%20%20%20%20%20%3Crect%20x%3D%22130%22%20y%3D%22108%22%20width%3D%22140%22%20height%3D%22100%22%20rx%3D%2210%22%2F%3E%0A%20%20%20%20%20%20%20%3Cpath%20d%3D%22M130%20150%20L170%20108%20L230%20108%20L270%20150%22%2F%3E%0A%20%20%20%20%20%20%20%3Ccircle%20cx%3D%22200%22%20cy%3D%22172%22%20r%3D%2216%22%2F%3E%0A%20%20%20%20%20%3C%2Fg%3E%0A%20%20%20%3C%2Fsvg%3E`}));function ae(){return`
  <div class="min-h-[calc(100vh-64px)] grid lg:grid-cols-2">
    <div class="hidden lg:block relative bg-fc-charcoal">
      <img src="assets/products/collector-field.jpeg" class="absolute inset-0 w-full h-full object-cover opacity-70" alt="Farm Craft machinery in a field" />
      <div class="absolute inset-0 bg-gradient-to-t from-fc-charcoal via-fc-charcoal/30 to-transparent"></div>
      <div class="relative h-full flex flex-col justify-end p-12 text-white">
        <span class="text-xs uppercase tracking-wide text-fc-wheat font-semibold mb-3">Grain Handling, Engineered</span>
        <h2 class="font-display text-3xl font-semibold leading-tight max-w-md">Built for the fields, trusted by farms and mills.</h2>
      </div>
    </div>

    <div class="flex items-center justify-center px-6 py-14 sm:py-20">
      <div class="w-full max-w-sm">
        <img src="${s.logo}" alt="Farm Craft" class="h-14 w-14 rounded-xl object-cover mb-6" />
        <h1 class="font-display text-2xl font-semibold mb-1.5">Welcome to Farm Craft</h1>
        <p class="text-sm text-fc-slate/70 mb-7">Explore powerful agricultural machinery built for efficient grain handling.</p>

        <form id="login-form" class="space-y-4" novalidate>
          <div>
            <label for="login-email" class="block text-sm font-medium mb-1.5">Email</label>
            <input id="login-email" name="email" type="email" required autocomplete="email"
              class="w-full border border-fc-line rounded-xl px-4 py-2.5 text-sm outline-none focus:border-fc-green transition-colors" placeholder="you@example.com" />
            <p class="text-xs text-red-500 mt-1 hidden" data-error-for="email">Enter a valid email address.</p>
          </div>
          <div>
            <label for="login-password" class="block text-sm font-medium mb-1.5">Password</label>
            <div class="relative">
              <input id="login-password" name="password" type="password" required autocomplete="current-password"
                class="w-full border border-fc-line rounded-xl px-4 py-2.5 text-sm outline-none focus:border-fc-green transition-colors pr-11" placeholder="••••••••" />
              <button type="button" id="toggle-password" aria-label="Show password"
                class="absolute right-3 top-1/2 -translate-y-1/2 text-fc-slate/60 hover:text-fc-charcoal">
                <i data-lucide="eye" class="w-4 h-4"></i>
              </button>
            </div>
            <p class="text-xs text-red-500 mt-1 hidden" data-error-for="password">Password is required.</p>
          </div>
          <button type="submit" class="w-full bg-fc-green text-white font-medium py-2.5 rounded-xl hover:bg-fc-greendark transition-colors">
            Login
          </button>
        </form>

        <div class="mt-7 rounded-2xl border border-fc-wheat/40 bg-amber-50/50 p-4">
          <div class="flex items-center gap-2 mb-2.5">
            <i data-lucide="sparkles" class="w-4 h-4 text-fc-wheat"></i>
            <span class="text-sm font-semibold">Demo Login</span>
          </div>
          <p class="text-xs text-fc-slate/70 mb-3">Use these demo credentials to explore the store — no real account needed.</p>
          <div class="text-xs bg-white rounded-lg border border-fc-line p-3 mb-3 space-y-1 font-mono">
            <div>Email: <strong>${l.email}</strong></div>
            <div>Password: <strong>${l.password}</strong></div>
          </div>
          <div class="flex flex-col sm:flex-row gap-2">
            <button id="use-demo" type="button" class="flex-1 text-sm font-medium border border-fc-line bg-white rounded-xl py-2 hover:border-fc-green hover:text-fc-green transition-colors">
              Use Demo Credentials
            </button>
            <button id="login-as-demo" type="button" class="flex-1 text-sm font-medium bg-fc-charcoal text-white rounded-xl py-2 hover:bg-black transition-colors">
              Login as Customer
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>`}function oe(e){let t=document.getElementById(`login-form`),n=document.getElementById(`toggle-password`),r=document.getElementById(`login-password`);n?.addEventListener(`click`,()=>{let e=r.type===`password`;r.type=e?`text`:`password`,n.setAttribute(`aria-label`,e?`Hide password`:`Show password`),n.innerHTML=`<i data-lucide="${e?`eye-off`:`eye`}" class="w-4 h-4"></i>`,window.lucide?.createIcons()}),document.getElementById(`use-demo`)?.addEventListener(`click`,()=>{document.getElementById(`login-email`).value=l.email,document.getElementById(`login-password`).value=l.password,w(`Demo credentials filled in`)}),document.getElementById(`login-as-demo`)?.addEventListener(`click`,()=>{h.loginAsDemo(),w(`Logged in as Demo Customer`),window.location.hash=`#/`}),t?.addEventListener(`submit`,e=>{e.preventDefault();let n=new FormData(t),r=String(n.get(`email`)||``).trim(),i=String(n.get(`password`)||``),a=!0,o=t.querySelector(`[data-error-for="email"]`),s=t.querySelector(`[data-error-for="password"]`);if(/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(r)?o.classList.add(`hidden`):(o.classList.remove(`hidden`),a=!1),i?s.classList.add(`hidden`):(s.classList.remove(`hidden`),a=!1),!a)return;let c=h.login(r,i);c.ok?(w(`Welcome back!`),window.location.hash=`#/`):w(c.error,{type:`error`})})}function se(){let e=o.slice(0,8);return`
  <section class="relative overflow-hidden bg-fc-charcoal text-white">
    <div class="absolute inset-0">
      <img src="assets/products/collector-field.jpeg" class="w-full h-full object-cover opacity-40" alt="" />
      <div class="absolute inset-0 bg-gradient-to-r from-fc-charcoal via-fc-charcoal/85 to-fc-charcoal/40"></div>
    </div>
    <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-32 grid lg:grid-cols-2 gap-12 items-center">
      <div>
        <span class="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wide text-fc-wheat mb-5">
          <i data-lucide="leaf" class="w-3.5 h-3.5"></i> Agricultural Machinery
        </span>
        <h1 class="font-display text-4xl sm:text-5xl lg:text-[3.4rem] font-semibold leading-[1.08] mb-6">
          Powering Smarter<br class="hidden sm:block" /> Grain Handling
        </h1>
        <p class="text-white/70 text-base sm:text-lg max-w-lg mb-9 leading-relaxed">
          Reliable grain transferring, collecting and bagging solutions engineered for farms, mills and agricultural businesses.
        </p>
        <div class="flex flex-wrap gap-3">
          <a href="#/shop" class="bg-fc-green hover:bg-fc-greendark transition-colors text-white font-medium px-6 py-3 rounded-full">Explore Products</a>
          <a href="#/contact" class="border border-white/25 hover:border-white/60 transition-colors text-white font-medium px-6 py-3 rounded-full">Get in Touch</a>
        </div>
      </div>
      <div class="hidden lg:block reveal">
        <div class="relative rounded-3xl overflow-hidden shadow-soft border border-white/10">
          <img src="assets/products/pipe-studio-1.jpeg" alt="Farm Craft grain transfer machine" class="w-full h-[420px] object-cover" />
        </div>
      </div>
    </div>
  </section>

  <section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-10 sm:-mt-14 relative z-10">
    <div class="bg-white rounded-2xl shadow-soft border border-fc-line grid grid-cols-2 md:grid-cols-5 divide-x divide-y md:divide-y-0 divide-fc-line overflow-hidden">
      ${a.map(e=>`
        <div class="p-5 sm:p-6 flex flex-col items-start gap-2">
          <div class="w-9 h-9 rounded-lg bg-fc-greenlight flex items-center justify-center">
            <i data-lucide="${e.icon}" class="w-4.5 h-4.5 text-fc-green"></i>
          </div>
          <div class="font-display font-semibold text-lg">${e.value}</div>
          <div class="text-xs text-fc-slate/60 leading-snug">${e.label}</div>
        </div>`).join(``)}
    </div>
  </section>

  <section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-24">
    <div class="flex items-end justify-between mb-10">
      <div>
        <span class="text-xs uppercase tracking-wide text-fc-green font-semibold">Browse by category</span>
        <h2 class="font-display text-2xl sm:text-3xl font-semibold mt-2">What are you looking for?</h2>
      </div>
    </div>
    <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
      ${i.map(e=>`
        <a href="#/shop?category=${e.id}" class="reveal group relative rounded-2xl overflow-hidden aspect-square border border-fc-line">
          <img src="${e.img}" alt="${e.name}" class="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
          <div class="absolute inset-0 bg-gradient-to-t from-fc-charcoal/85 via-fc-charcoal/10 to-transparent"></div>
          <div class="absolute bottom-0 p-3 sm:p-4">
            <span class="text-white text-sm font-medium leading-tight block">${e.name}</span>
          </div>
        </a>`).join(``)}
    </div>
  </section>

  <section class="bg-fc-greenlight/60 py-20 sm:py-24">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex items-end justify-between mb-10">
        <div>
          <span class="text-xs uppercase tracking-wide text-fc-green font-semibold">Featured</span>
          <h2 class="font-display text-2xl sm:text-3xl font-semibold mt-2">Popular grain machinery</h2>
        </div>
        <a href="#/shop" class="hidden sm:inline-flex text-sm font-medium text-fc-green hover:text-fc-greendark items-center gap-1">
          View all <i data-lucide="arrow-right" class="w-4 h-4"></i>
        </a>
      </div>
      <div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
        ${e.map(e=>O(e)).join(``)}
      </div>
    </div>
  </section>

  <section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-24 grid lg:grid-cols-2 gap-12 items-center">
    <div class="reveal order-2 lg:order-1 rounded-3xl overflow-hidden border border-fc-line shadow-card">
      <img src="assets/products/pipe-mounted-1.jpeg" alt="Farm Craft machine in use" class="w-full h-[380px] object-cover" />
    </div>
    <div class="order-1 lg:order-2">
      <span class="text-xs uppercase tracking-wide text-fc-green font-semibold">About Farm Craft</span>
      <h2 class="font-display text-2xl sm:text-3xl font-semibold mt-2 mb-5">Built for Better Grain Handling</h2>
      <p class="text-fc-slate/75 leading-relaxed mb-7">
        Farm Craft designs agricultural machinery and grain handling equipment for farms, mills and agri-businesses that need
        dependable performance in the field, not just on a spec sheet.
      </p>
      <ul class="space-y-3.5 mb-8">
        ${[`Quality components built for daily use`,`Reliable performance across grain types`,`Efficient handling from field to store`,`Practical solutions sized to your operation`,`Support you can reach when it matters`].map(e=>`<li class="flex items-start gap-3 text-sm text-fc-slate/85">
            <i data-lucide="check" class="w-4 h-4 text-fc-green mt-0.5 shrink-0"></i>${e}
          </li>`).join(``)}
      </ul>
      <a href="#/about" class="inline-flex items-center gap-2 text-sm font-medium text-fc-green hover:text-fc-greendark">
        Learn more about us <i data-lucide="arrow-right" class="w-4 h-4"></i>
      </a>
    </div>
  </section>

  <section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
    <div class="rounded-3xl bg-fc-charcoal text-white px-6 sm:px-14 py-14 sm:py-16 grid lg:grid-cols-2 gap-8 items-center overflow-hidden relative">
      <div class="absolute -right-16 -bottom-16 w-72 h-72 rounded-full bg-fc-green/20 blur-2xl"></div>
      <div class="relative">
        <h2 class="font-display text-2xl sm:text-3xl font-semibold mb-3">Want to see our machinery in action?</h2>
        <p class="text-white/65 max-w-md">Visit Farm Craft to see the range up close before you decide.</p>
      </div>
      <div class="relative flex lg:justify-end">
        <a href="#/about" class="bg-fc-wheat hover:brightness-95 transition-all text-fc-charcoal font-semibold px-6 py-3 rounded-full">Visit Our Company</a>
      </div>
    </div>
  </section>`}function ce({q:e=``,category:t=``,availability:n=``}={}){let r=g.search(e,{category:t,availability:n});return`
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14">
    <div class="mb-8">
      <h1 class="font-display text-2xl sm:text-3xl font-semibold">Products</h1>
      <p class="text-sm text-fc-slate/60 mt-1">${r.length} result${r.length===1?``:`s`}${e?` for "${e}"`:``}</p>
    </div>

    <div class="flex gap-8">
      <aside class="hidden lg:block w-64 shrink-0">
        ${F({category:t,availability:n})}
      </aside>

      <div class="flex-1 min-w-0">
        <div class="flex lg:hidden items-center gap-3 mb-5">
          <button id="open-filters" class="flex-1 flex items-center justify-center gap-2 border border-fc-line rounded-xl py-2.5 text-sm font-medium">
            <i data-lucide="sliders-horizontal" class="w-4 h-4"></i> Filters
          </button>
        </div>

        <div id="results-grid" class="grid sm:grid-cols-2 xl:grid-cols-3 gap-5">
          ${r.length?r.map(e=>O(e)).join(``):``}
        </div>
        ${r.length?``:j({icon:`search-x`,title:`No matching products`,body:`Try a different search term or clear your filters to see the full catalog.`,actionHref:`#/shop`,actionLabel:`Clear filters`})}
      </div>
    </div>
  </div>

  <div id="filter-drawer" class="hidden fixed inset-0 z-50 lg:hidden">
    <div class="absolute inset-0 bg-black/40 modal-backdrop" data-close-drawer></div>
    <div class="sheet-enter absolute bottom-0 inset-x-0 bg-white rounded-t-3xl p-5 max-h-[80vh] overflow-y-auto thin-scroll">
      <div class="flex items-center justify-between mb-4">
        <h3 class="font-display font-semibold text-lg">Filters</h3>
        <button data-close-drawer aria-label="Close filters" class="w-8 h-8 flex items-center justify-center rounded-full hover:bg-fc-offwhite">
          <i data-lucide="x" class="w-5 h-5"></i>
        </button>
      </div>
      ${F({category:t,availability:n})}
    </div>
  </div>`}function F({category:e,availability:t}){return`
  <form id="filter-form" class="space-y-7">
    <div>
      <h4 class="text-sm font-semibold mb-3">Category</h4>
      <div class="space-y-2">
        <label class="flex items-center gap-2 text-sm text-fc-slate/80 cursor-pointer">
          <input type="radio" name="category" value="" class="accent-fc-green" ${e?``:`checked`} /> All categories
        </label>
        ${i.map(t=>`
          <label class="flex items-center gap-2 text-sm text-fc-slate/80 cursor-pointer">
            <input type="radio" name="category" value="${t.id}" class="accent-fc-green" ${e===t.id?`checked`:``} /> ${t.name}
          </label>`).join(``)}
      </div>
    </div>
    <div>
      <h4 class="text-sm font-semibold mb-3">Availability</h4>
      <div class="space-y-2">
        <label class="flex items-center gap-2 text-sm text-fc-slate/80 cursor-pointer">
          <input type="radio" name="availability" value="" class="accent-fc-green" ${t?``:`checked`} /> Any
        </label>
        <label class="flex items-center gap-2 text-sm text-fc-slate/80 cursor-pointer">
          <input type="radio" name="availability" value="in-stock" class="accent-fc-green" ${t===`in-stock`?`checked`:``} /> In Stock
        </label>
        <label class="flex items-center gap-2 text-sm text-fc-slate/80 cursor-pointer">
          <input type="radio" name="availability" value="low-stock" class="accent-fc-green" ${t===`low-stock`?`checked`:``} /> Low Stock
        </label>
      </div>
    </div>
    <div>
      <h4 class="text-sm font-semibold mb-3">Capacity &amp; Motor</h4>
      <p class="text-xs text-fc-slate/60 leading-relaxed">5 HP – 16 HP motor range · up to 18 tons/hour transfer capacity across the range.</p>
    </div>
    <button type="submit" class="w-full bg-fc-green text-white text-sm font-medium py-2.5 rounded-xl hover:bg-fc-greendark transition-colors">Apply Filters</button>
  </form>`}function le(e){let t=document.getElementById(`open-filters`),n=document.getElementById(`filter-drawer`);t?.addEventListener(`click`,()=>n.classList.remove(`hidden`)),n?.querySelectorAll(`[data-close-drawer]`).forEach(e=>e.addEventListener(`click`,()=>n.classList.add(`hidden`))),document.querySelectorAll(`#filter-form`).forEach(t=>{t.addEventListener(`submit`,n=>{n.preventDefault();let r=new FormData(t),i=new URLSearchParams;e.q&&i.set(`q`,e.q);let a=r.get(`category`),o=r.get(`availability`);a&&i.set(`category`,a),o&&i.set(`availability`,o),window.location.hash=`#/shop?${i.toString()}`})})}function ue(e){let t=n(e);if(!t)return`<div class="max-w-3xl mx-auto px-4 py-24">${j({icon:`package-x`,title:`Product not found`,body:`This product may have been removed or the link is incorrect.`,actionHref:`#/shop`,actionLabel:`Back to Products`})}</div>`;let r=_.getWishlist().includes(t.id),i=t.price?`₹${Number(t.price).toLocaleString(`en-IN`)}`:`Contact for Price`;return`
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
    <nav class="text-xs text-fc-slate/60 mb-6 flex items-center gap-1.5">
      <a href="#/shop" class="hover:text-fc-green">Products</a> <span>/</span> <span class="text-fc-charcoal">${t.name}</span>
    </nav>

    <div class="grid lg:grid-cols-2 gap-10 mb-16">
      <div>
        <div class="zoom-wrap rounded-2xl overflow-hidden border border-fc-line aspect-[4/3] bg-fc-greenlight mb-3" id="gallery-main">
          ${E(t.images[0],t.name,`w-full h-full object-cover`).replace(`<img `,`<img data-gallery-image `)}
        </div>
        <div class="grid grid-cols-3 gap-3">
          ${t.images.map((e,n)=>`
            <button data-thumb="${e}" class="rounded-xl overflow-hidden border-2 ${n===0?`border-fc-green`:`border-transparent`} aspect-square bg-fc-greenlight">
              ${E(e,`${t.name} view ${n+1}`,`w-full h-full object-cover`)}
            </button>`).join(``)}
        </div>
      </div>

      <div>
        <span class="text-xs uppercase tracking-wide text-fc-green font-semibold">${t.category.replace(/-/g,` `)}</span>
        <h1 class="font-display text-2xl sm:text-3xl font-semibold mt-2 mb-3">${t.name}</h1>
        <div class="flex items-center gap-3 mb-4">
          <div class="flex items-center gap-1 text-fc-wheat">
            ${Array.from({length:5}).map((e,n)=>`<i data-lucide="star" class="w-4 h-4 ${n<Math.round(t.rating)?`fill-fc-wheat`:``}"></i>`).join(``)}
          </div>
          <span class="text-sm text-fc-slate/60">${t.rating} (${t.reviews} reviews)</span>
        </div>
        <p class="text-fc-slate/75 leading-relaxed mb-5">${t.description}</p>

        <div class="flex items-center gap-3 mb-6">
          ${D(t.stockStatus)}
          <span class="font-display text-2xl font-semibold">${i}</span>
        </div>

        <div class="flex flex-col sm:flex-row gap-3 mb-6">
          <button data-getcode="${t.id}" class="flex-1 bg-fc-green text-white font-medium py-3 rounded-xl hover:bg-fc-greendark transition-colors">Get a Code</button>
          <a href="#/contact" class="flex-1 text-center border border-fc-line font-medium py-3 rounded-xl hover:border-fc-green hover:text-fc-green transition-colors">Contact Farm Craft</a>
          <button data-wishlist="${t.id}" aria-pressed="${r}" class="w-12 h-12 shrink-0 self-center sm:self-auto border border-fc-line rounded-xl flex items-center justify-center hover:border-fc-wheat transition-colors">
            <i data-lucide="heart" class="w-5 h-5 ${r?`text-fc-wheat fill-fc-wheat`:``}"></i>
          </button>
        </div>

        <div class="grid grid-cols-2 gap-3">
          ${t.specifications.slice(0,4).map(e=>`
            <div class="rounded-xl border border-fc-line p-3.5">
              <div class="text-[11px] text-fc-slate/55 uppercase tracking-wide mb-1">${e.label}</div>
              <div class="text-sm font-medium">${e.value}</div>
            </div>`).join(``)}
        </div>
      </div>
    </div>

    <div class="grid lg:grid-cols-3 gap-10">
      <div class="lg:col-span-2 space-y-10">
        <section>
          <h2 class="font-display text-xl font-semibold mb-3">Product Overview</h2>
          <p class="text-fc-slate/75 leading-relaxed">${t.description} Designed for consistent, dependable operation across daily agricultural and industrial workloads.</p>
        </section>
        <section>
          <h2 class="font-display text-xl font-semibold mb-4">Technical Specifications</h2>
          <div class="grid sm:grid-cols-2 gap-3">
            ${t.specifications.map(e=>`
              <div class="flex items-center justify-between rounded-xl bg-fc-offwhite px-4 py-3 text-sm">
                <span class="text-fc-slate/60">${e.label}</span><span class="font-medium">${e.value}</span>
              </div>`).join(``)}
          </div>
        </section>
        <section>
          <h2 class="font-display text-xl font-semibold mb-4">Features</h2>
          <ul class="grid sm:grid-cols-2 gap-3">
            ${t.features.map(e=>`<li class="flex items-start gap-2.5 text-sm text-fc-slate/80"><i data-lucide="check" class="w-4 h-4 text-fc-green mt-0.5 shrink-0"></i>${e}</li>`).join(``)}
          </ul>
        </section>
        <section>
          <h2 class="font-display text-xl font-semibold mb-4">Applications</h2>
          <div class="flex flex-wrap gap-2">
            ${t.applications.map(e=>`<span class="text-sm bg-fc-greenlight text-fc-green font-medium px-3.5 py-1.5 rounded-full">${e}</span>`).join(``)}
          </div>
        </section>
      </div>

      <aside>
        <div class="rounded-2xl border border-fc-line p-5 sticky top-24">
          <h3 class="font-display font-semibold mb-3">Need help choosing?</h3>
          <p class="text-sm text-fc-slate/70 mb-4">Talk to Farm Craft about the right configuration for your farm or mill.</p>
          <a href="#/contact" class="block text-center border border-fc-line font-medium py-2.5 rounded-xl hover:border-fc-green hover:text-fc-green transition-colors">Contact Farm Craft</a>
        </div>
      </aside>
    </div>
  </div>`}function de(){let e=document.querySelector(`#gallery-main img`);document.querySelectorAll(`[data-thumb]`).forEach(t=>{t.addEventListener(`click`,()=>{e.src=t.getAttribute(`data-thumb`),document.querySelectorAll(`[data-thumb]`).forEach(e=>e.classList.remove(`border-fc-green`)),document.querySelectorAll(`[data-thumb]`).forEach(e=>e.classList.add(`border-transparent`)),t.classList.remove(`border-transparent`),t.classList.add(`border-fc-green`)})})}function fe(){let e=_.getWishlist(),t=o.filter(t=>e.includes(t.id));return`
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14">
    <h1 class="font-display text-2xl sm:text-3xl font-semibold mb-8">Wishlist</h1>
    ${t.length?`<div class="grid sm:grid-cols-2 xl:grid-cols-3 gap-5">${t.map(e=>O(e)).join(``)}</div>`:j({icon:`heart`,title:`Your wishlist is empty`,body:`Save products you like and find them here later.`,actionHref:`#/shop`,actionLabel:`Browse Products`})}
  </div>`}function pe(){if(!h.isLoggedIn())return L(`view your orders`);let e=v.list();return`
  <div class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14">
    <h1 class="font-display text-2xl sm:text-3xl font-semibold mb-8">My Orders</h1>
    ${e.length?`
      <div class="space-y-4">
        ${e.map(e=>`
          <a href="#/order/${e.orderId}" class="block bg-white border border-fc-line rounded-2xl p-5 hover:border-fc-green transition-colors">
            <div class="flex flex-wrap items-center justify-between gap-3 mb-3">
              <div>
                <div class="font-display font-semibold">${e.product.name}</div>
                <div class="text-xs text-fc-slate/55">Order ${e.orderId} · ${new Date(e.date).toLocaleDateString(`en-IN`)}</div>
              </div>
              <span class="text-xs font-medium px-2.5 py-1 rounded-full ${V[e.status]||`bg-gray-100`}">${e.status}</span>
            </div>
            <div class="flex flex-wrap items-center gap-x-6 gap-y-1 text-sm text-fc-slate/70">
              <span>Code: <strong class="text-fc-charcoal font-mono">${e.purchaseCode}</strong></span>
              <span>Qty: ${e.quantity}</span>
              <span>${e.paymentMethod}</span>
              <span>${e.price?`₹`+Number(e.price).toLocaleString(`en-IN`):`Contact for Price`}</span>
            </div>
          </a>`).join(``)}
      </div>`:j({icon:`receipt`,title:`No orders yet`,body:`Once you get a purchase code, your orders will show up here.`,actionHref:`#/shop`,actionLabel:`Browse Products`})}
  </div>`}function I(e){let t=v.byId(e);return t?R(t,{compact:!0}):`<div class="max-w-3xl mx-auto px-4 py-24">${j({icon:`file-question`,title:`Order not found`,body:`We could not find this order.`,actionHref:`#/orders`,actionLabel:`Back to Orders`})}</div>`}function L(e){return`<div class="max-w-3xl mx-auto px-4 py-24">${j({icon:`lock`,title:`Please log in`,body:`Log in to ${e}.`,actionHref:`#/login`,actionLabel:`Go to Login`})}</div>`}function R(e,{compact:t=!1}={}){return`
  <div class="max-w-2xl mx-auto px-4 sm:px-6 py-10 sm:py-16">
    ${t?``:`
      <div class="text-center mb-8">
        <div class="w-16 h-16 rounded-full bg-fc-greenlight flex items-center justify-center mx-auto mb-4">
          <i data-lucide="check" class="w-8 h-8 text-fc-green"></i>
        </div>
        <h1 class="font-display text-2xl font-semibold mb-1.5">Purchase Request Submitted</h1>
        <p class="text-sm text-fc-slate/65">Your Farm Craft purchase request has been successfully submitted.</p>
      </div>`}

    <div class="bg-fc-charcoal text-white rounded-2xl p-6 mb-5 text-center">
      <div class="text-xs uppercase tracking-wide text-white/50 mb-2">Your Farm Craft Purchase Code</div>
      <div class="font-display text-3xl font-bold tracking-wider">${e.purchaseCode}</div>
    </div>

    <div class="bg-white border border-fc-line rounded-2xl p-6 mb-5 space-y-4">
      <div class="grid grid-cols-2 gap-4 text-sm">
        <div><div class="text-fc-slate/50 text-xs mb-0.5">Order ID</div><div class="font-medium">${e.orderId}</div></div>
        <div><div class="text-fc-slate/50 text-xs mb-0.5">Status</div><span class="text-xs font-medium px-2 py-0.5 rounded-full ${V[e.status]||`bg-gray-100`}">${e.status}</span></div>
        <div><div class="text-fc-slate/50 text-xs mb-0.5">Customer</div><div class="font-medium">${e.customerName}</div></div>
        <div><div class="text-fc-slate/50 text-xs mb-0.5">Product</div><div class="font-medium">${e.product.name}</div></div>
        <div><div class="text-fc-slate/50 text-xs mb-0.5">Quantity</div><div class="font-medium">${e.quantity}</div></div>
        <div><div class="text-fc-slate/50 text-xs mb-0.5">Payment Method</div><div class="font-medium">${e.paymentMethod}</div></div>
        <div><div class="text-fc-slate/50 text-xs mb-0.5">Date</div><div class="font-medium">${new Date(e.date).toLocaleDateString(`en-IN`)}</div></div>
        <div><div class="text-fc-slate/50 text-xs mb-0.5">Address</div><div class="font-medium">${e.address?.city||``}, ${e.address?.state||``}</div></div>
      </div>
      <p class="text-sm text-fc-slate/60 pt-2 border-t border-fc-line">Our team will contact you regarding the order and delivery.</p>
    </div>

    <div class="flex flex-col sm:flex-row gap-3">
      <button id="download-invoice" data-order="${e.orderId}" class="flex-1 border border-fc-line font-medium py-2.5 rounded-xl hover:border-fc-green hover:text-fc-green transition-colors flex items-center justify-center gap-2">
        <i data-lucide="download" class="w-4 h-4"></i> Download Invoice
      </button>
      <a href="#/order/${e.orderId}" class="flex-1 text-center border border-fc-line font-medium py-2.5 rounded-xl hover:border-fc-green hover:text-fc-green transition-colors">View Order</a>
      <a href="#/shop" class="flex-1 text-center bg-fc-green text-white font-medium py-2.5 rounded-xl hover:bg-fc-greendark transition-colors">Continue Shopping</a>
    </div>
  </div>`}function z(){let e=document.getElementById(`download-invoice`);e?.addEventListener(`click`,async t=>{let n=t.currentTarget.getAttribute(`data-order`),r=v.byId(n);if(!r){w(`Order not found`,{type:`error`});return}let i=e.innerHTML;e.disabled=!0,e.innerHTML=`<i data-lucide="loader-2" class="w-4 h-4 animate-spin"></i> Preparing invoice…`,C();try{await x.downloadInvoice(r),w(`Invoice downloaded`)}catch{w(`Could not generate the invoice — please try again`,{type:`error`})}finally{e.disabled=!1,e.innerHTML=i,C()}})}function B(){if(!h.isLoggedIn())return L(`view your profile`);let e=_.getProfile(),t=v.list();return`
  <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14">
    <div class="flex items-center gap-4 mb-10">
      <div class="w-16 h-16 rounded-full bg-fc-green text-white flex items-center justify-center font-display text-xl font-semibold shrink-0">
        ${e.name.split(` `).map(e=>e[0]).join(``).slice(0,2)}
      </div>
      <div>
        <h1 class="font-display text-xl sm:text-2xl font-semibold">${e.name}</h1>
        <p class="text-sm text-fc-slate/60">${e.email}</p>
      </div>
    </div>

    <div class="grid sm:grid-cols-2 gap-5 mb-8">
      <div class="bg-white border border-fc-line rounded-2xl p-5">
        <h3 class="font-display font-semibold mb-4 flex items-center gap-2"><i data-lucide="id-card" class="w-4 h-4 text-fc-green"></i> Personal Information</h3>
        <dl class="space-y-2.5 text-sm">
          <div class="flex justify-between"><dt class="text-fc-slate/55">Name</dt><dd class="font-medium">${e.name}</dd></div>
          <div class="flex justify-between"><dt class="text-fc-slate/55">Email</dt><dd class="font-medium">${e.email}</dd></div>
          <div class="flex justify-between"><dt class="text-fc-slate/55">Mobile</dt><dd class="font-medium">${e.mobile}</dd></div>
        </dl>
      </div>
      <div class="bg-white border border-fc-line rounded-2xl p-5">
        <h3 class="font-display font-semibold mb-4 flex items-center gap-2"><i data-lucide="map-pin" class="w-4 h-4 text-fc-green"></i> Saved Addresses</h3>
        ${e.addresses.length?`
          <ul class="space-y-3 text-sm">
            ${e.addresses.map(e=>`<li class="border-b border-fc-line/70 pb-2.5 last:border-0 last:pb-0">${e.line1}, ${e.city}, ${e.state} ${e.pincode}</li>`).join(``)}
          </ul>`:`<p class="text-sm text-fc-slate/55">No saved addresses yet — one is saved automatically the first time you get a purchase code.</p>`}
      </div>
    </div>

    <div class="grid sm:grid-cols-2 gap-5 mb-8">
      <a href="#/orders" class="bg-white border border-fc-line rounded-2xl p-5 flex items-center justify-between hover:border-fc-green transition-colors">
        <div>
          <h3 class="font-display font-semibold mb-1">Order History</h3>
          <p class="text-sm text-fc-slate/55">${t.length} order${t.length===1?``:`s`}</p>
        </div>
        <i data-lucide="arrow-right" class="w-5 h-5 text-fc-slate/40"></i>
      </a>
      <a href="#/orders" class="bg-white border border-fc-line rounded-2xl p-5 flex items-center justify-between hover:border-fc-green transition-colors">
        <div>
          <h3 class="font-display font-semibold mb-1">Purchase Codes</h3>
          <p class="text-sm text-fc-slate/55">View all generated codes</p>
        </div>
        <i data-lucide="arrow-right" class="w-5 h-5 text-fc-slate/40"></i>
      </a>
    </div>

    <button id="logout-btn" class="text-sm font-medium text-red-600 hover:text-red-700 flex items-center gap-2">
      <i data-lucide="log-out" class="w-4 h-4"></i> Logout
    </button>
  </div>`}function me(){document.getElementById(`logout-btn`)?.addEventListener(`click`,()=>{h.logout(),w(`Logged out`),window.location.hash=`#/`})}function he(){return`
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-20">
    <div class="grid lg:grid-cols-2 gap-12 items-center mb-20">
      <div>
        <span class="text-xs uppercase tracking-wide text-fc-green font-semibold">About Farm Craft</span>
        <h1 class="font-display text-3xl sm:text-4xl font-semibold mt-2 mb-5">Built for Better Grain Handling</h1>
        <p class="text-fc-slate/75 leading-relaxed mb-4">
          Farm Craft focuses on one thing: agricultural machinery and grain handling solutions that hold up to real, daily
          farm and mill use. Every product is built around practical performance — capacity, motor options and pipe lengths
          sized to fit different operations.
        </p>
        <p class="text-fc-slate/75 leading-relaxed">
          From transferring and collecting to bagging, our range covers the full grain handling chain, engineered for
          efficiency and durability.
        </p>
      </div>
      <div class="rounded-3xl overflow-hidden border border-fc-line shadow-card">
        <img src="assets/products/collector-diagram.jpeg" alt="Farm Craft applications across grain types" class="w-full h-[380px] object-cover" />
      </div>
    </div>

    <div class="grid sm:grid-cols-2 lg:grid-cols-5 gap-5 mb-20">
      ${[[`shield-check`,`Quality`,`Components and builds chosen for daily agricultural use.`],[`gauge`,`Reliability`,`Consistent performance across grain types and conditions.`],[`move-horizontal`,`Efficient Handling`,`From field and truck to store, with less manual effort.`],[`settings-2`,`Practical Solutions`,`Configurations sized to your farm, mill or business.`],[`headphones`,`Customer Support`,`Our team is reachable when you need guidance.`]].map(([e,t,n])=>`
        <div class="bg-white border border-fc-line rounded-2xl p-5">
          <div class="w-10 h-10 rounded-lg bg-fc-greenlight flex items-center justify-center mb-3">
            <i data-lucide="${e}" class="w-5 h-5 text-fc-green"></i>
          </div>
          <h3 class="font-display font-semibold mb-1.5">${t}</h3>
          <p class="text-sm text-fc-slate/65 leading-relaxed">${n}</p>
        </div>`).join(``)}
    </div>

    <div class="rounded-3xl bg-fc-charcoal text-white px-6 sm:px-14 py-14 grid lg:grid-cols-2 gap-8 items-center">
      <div>
        <h2 class="font-display text-2xl font-semibold mb-3">Want to see our machinery in action?</h2>
        <p class="text-white/65 max-w-md mb-1">Prefer to visit us? Our team is happy to walk you through the range in person.</p>
        <p class="text-xs text-white/40 mt-4">${s.addressNote}</p>
        <p class="text-sm text-white/70 mt-1">${s.address}</p>
      </div>
      <div class="flex lg:justify-end">
        <a href="#/contact" class="bg-fc-wheat hover:brightness-95 transition-all text-fc-charcoal font-semibold px-6 py-3 rounded-full">Visit Our Company</a>
      </div>
    </div>
  </div>`}function ge(){return`
  <div class="pb-4">
    <section class="relative overflow-hidden bg-fc-charcoal text-white">
      <div class="absolute inset-0">
        ${E(`assets/products/pipe-frame.jpeg`,`Farm Craft machinery service`,`w-full h-full object-cover opacity-35`)}
        <div class="absolute inset-0 bg-gradient-to-r from-fc-charcoal via-fc-charcoal/85 to-fc-charcoal/50"></div>
      </div>
      <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <span class="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wide text-fc-wheat mb-4">
          <i data-lucide="wrench" class="w-3.5 h-3.5"></i> What We Offer
        </span>
        <h1 class="font-display text-3xl sm:text-4xl lg:text-5xl font-semibold leading-tight max-w-2xl mb-4">Services built around your grain handling operation</h1>
        <p class="text-white/70 max-w-xl leading-relaxed">From choosing the right configuration to on-site setup and after-sales support, Farm Craft stays involved well beyond the purchase.</p>
      </div>
    </section>

    <section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8 sm:-mt-10 relative z-10 mb-4">
      <div class="bg-white rounded-2xl shadow-soft border border-fc-line grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 divide-x divide-y md:divide-y-0 divide-fc-line overflow-hidden">
        ${c.map(e=>`
          <a href="#service-${e.id}" class="p-4 sm:p-5 flex flex-col items-center text-center gap-2 hover:bg-fc-greenlight/40 transition-colors">
            <div class="w-9 h-9 rounded-lg bg-fc-greenlight flex items-center justify-center">
              <i data-lucide="${e.icon}" class="w-4.5 h-4.5 text-fc-green"></i>
            </div>
            <span class="text-xs font-medium leading-snug">${e.title}</span>
          </a>`).join(``)}
      </div>
    </section>

    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16 space-y-16 sm:space-y-20">
      ${c.map((e,t)=>_e(e,t)).join(``)}
    </div>

    <section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
      <div class="rounded-3xl bg-fc-charcoal text-white px-6 sm:px-14 py-14 grid lg:grid-cols-2 gap-8 items-center overflow-hidden relative">
        <div class="absolute -right-16 -bottom-16 w-72 h-72 rounded-full bg-fc-green/20 blur-2xl"></div>
        <div class="relative">
          <h2 class="font-display text-2xl sm:text-3xl font-semibold mb-3">Not sure which service you need?</h2>
          <p class="text-white/65 max-w-md">Tell our team about your farm, mill or store and we'll point you to the right products and services.</p>
        </div>
        <div class="relative flex flex-wrap gap-3 lg:justify-end">
          <a href="#/contact" class="bg-fc-wheat hover:brightness-95 transition-all text-fc-charcoal font-semibold px-6 py-3 rounded-full">Contact Farm Craft</a>
          <a href="#/shop" class="border border-white/25 hover:border-white/60 transition-colors text-white font-medium px-6 py-3 rounded-full">Browse Products</a>
        </div>
      </div>
    </section>
  </div>`}function _e(e,t){let n=t%2==1;return`
  <section id="service-${e.id}" class="reveal grid lg:grid-cols-2 gap-10 items-center scroll-mt-24">
    <div class="rounded-3xl overflow-hidden border border-fc-line shadow-card aspect-[4/3] bg-fc-greenlight ${n?`lg:order-2`:``}">
      ${E(e.image,e.title,`w-full h-full object-cover`)}
    </div>
    <div class="${n?`lg:order-1`:``}">
      <div class="flex items-center gap-2.5 mb-3">
        <div class="w-9 h-9 rounded-lg bg-fc-greenlight flex items-center justify-center shrink-0">
          <i data-lucide="${e.icon}" class="w-4.5 h-4.5 text-fc-green"></i>
        </div>
        <span class="text-xs uppercase tracking-wide text-fc-green font-semibold">Farm Craft Service</span>
      </div>
      <h2 class="font-display text-2xl sm:text-3xl font-semibold mb-2.5">${e.title}</h2>
      <p class="text-sm text-fc-wheat font-medium mb-4">${e.tagline}</p>
      <p class="text-fc-slate/75 leading-relaxed mb-6">${e.description}</p>

      <div class="grid sm:grid-cols-2 gap-6 mb-7">
        <div>
          <h3 class="text-xs uppercase tracking-wide font-semibold text-fc-slate/60 mb-3">Key Benefits</h3>
          <ul class="space-y-2.5">
            ${e.benefits.map(e=>`<li class="flex items-start gap-2.5 text-sm text-fc-slate/85">
              <i data-lucide="check" class="w-4 h-4 text-fc-green mt-0.5 shrink-0"></i>${e}
            </li>`).join(``)}
          </ul>
        </div>
        <div>
          <h3 class="text-xs uppercase tracking-wide font-semibold text-fc-slate/60 mb-3">How It Works</h3>
          <ol class="space-y-2.5">
            ${e.process.map((e,t)=>`<li class="flex items-start gap-2.5 text-sm text-fc-slate/85">
              <span class="w-5 h-5 rounded-full bg-fc-greenlight text-fc-green text-[11px] font-bold flex items-center justify-center shrink-0 mt-0.5">${t+1}</span>${e}
            </li>`).join(``)}
          </ol>
        </div>
      </div>

      <div class="flex flex-wrap gap-3">
        <a href="#/shop?category=${e.categoryId}" class="bg-fc-green text-white text-sm font-medium px-5 py-2.5 rounded-full hover:bg-fc-greendark transition-colors">Explore Related Products</a>
        <a href="#/contact" class="border border-fc-line text-sm font-medium px-5 py-2.5 rounded-full hover:border-fc-green hover:text-fc-green transition-colors">Contact for This Service</a>
      </div>
    </div>
  </section>`}function ve(){return`
  <div class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-20">
    <div class="text-center max-w-xl mx-auto mb-12">
      <h1 class="font-display text-3xl font-semibold mb-3">Get in Touch</h1>
      <p class="text-fc-slate/70">Questions about a product or configuration? Send an enquiry and our team will reach out.</p>
    </div>

    <div class="grid lg:grid-cols-5 gap-10">
      <form id="contact-form" class="lg:col-span-3 bg-white border border-fc-line rounded-2xl p-6 space-y-4" novalidate>
        <div class="grid sm:grid-cols-2 gap-4">
          <div>
            <label class="block text-sm font-medium mb-1.5" for="c-name">Name</label>
            <input id="c-name" name="name" required class="w-full border border-fc-line rounded-xl px-4 py-2.5 text-sm outline-none focus:border-fc-green" />
          </div>
          <div>
            <label class="block text-sm font-medium mb-1.5" for="c-mobile">Mobile</label>
            <input id="c-mobile" name="mobile" required class="w-full border border-fc-line rounded-xl px-4 py-2.5 text-sm outline-none focus:border-fc-green" />
          </div>
        </div>
        <div>
          <label class="block text-sm font-medium mb-1.5" for="c-email">Email</label>
          <input id="c-email" name="email" type="email" required class="w-full border border-fc-line rounded-xl px-4 py-2.5 text-sm outline-none focus:border-fc-green" />
        </div>
        <div>
          <label class="block text-sm font-medium mb-1.5" for="c-message">Message</label>
          <textarea id="c-message" name="message" rows="4" required class="w-full border border-fc-line rounded-xl px-4 py-2.5 text-sm outline-none focus:border-fc-green resize-none"></textarea>
        </div>
        <button type="submit" class="bg-fc-green text-white font-medium px-6 py-2.5 rounded-xl hover:bg-fc-greendark transition-colors">Send Enquiry</button>
      </form>

      <div class="lg:col-span-2 space-y-4">
        <div class="bg-fc-charcoal text-white rounded-2xl p-6">
          <div class="flex items-center gap-2 mb-4">
            <img src="${s.logo}" class="h-8 w-8 rounded object-cover" alt="Farm Craft" />
            <span class="font-display font-semibold">FARM CRAFT</span>
          </div>
          <div class="space-y-3 text-sm text-white/75">
            <div class="flex items-start gap-2.5"><i data-lucide="mail" class="w-4 h-4 mt-0.5 shrink-0"></i>${s.email}</div>
            <div class="flex items-start gap-2.5"><i data-lucide="phone" class="w-4 h-4 mt-0.5 shrink-0"></i>${s.phone}</div>
            <div class="flex items-start gap-2.5"><i data-lucide="map-pin" class="w-4 h-4 mt-0.5 shrink-0"></i>${s.address}</div>
          </div>
          <p class="text-xs text-white/40 mt-4 pt-4 border-t border-white/10">${s.addressNote} Phone and email are demo placeholders.</p>
        </div>
        <div class="border border-fc-line rounded-2xl p-6">
          <div class="text-xs text-fc-slate/55 mb-1">GSTIN</div>
          <div class="font-mono font-medium">${s.gstin}</div>
        </div>
      </div>
    </div>
  </div>`}function ye(){let e=document.getElementById(`contact-form`);e?.addEventListener(`submit`,t=>{t.preventDefault(),e.reset(),w(`Your enquiry has been sent — we’ll be in touch shortly.`)})}var V,be=e((()=>{u(),S(),P(),V={Pending:`bg-amber-50 text-amber-700`,Confirmed:`bg-blue-50 text-blue-700`,Processing:`bg-indigo-50 text-indigo-700`,Dispatched:`bg-purple-50 text-purple-700`,Delivered:`bg-fc-greenlight text-fc-green`,Cancelled:`bg-red-50 text-red-600`}}));function xe(e){let t=h.getSession(),n=_.getAddresses()[0]||{};return{product:e,step:1,customer:{name:t?.name||``,email:t?.email||``,mobile:t?.mobile||``},address:{line1:n.line1||``,city:n.city||``,state:n.state||``,pincode:n.pincode||``},quantity:1,configuration:e.specifications?.[0]?`${e.specifications[0].label}: ${e.specifications[0].value}`:``,paymentMethod:``,paymentStage:`select`}}function Se(e){if(!h.isLoggedIn()){w(`Please log in to get a purchase code`,{type:`error`}),window.location.hash=`#/login`;return}let t=r(e);t&&(W=xe(t),U())}function H(){let e=document.getElementById(`getcode-modal-root`);e&&e.remove(),W=null}function Ce(e){return[`Customer Details`,`Delivery Address`,`Product`,`Payment Method`][e-1]}function we(){return`
  <div class="flex items-center gap-2 mb-6">
    ${[1,2,3,4].map(e=>`
      <div class="flex-1 flex items-center gap-2">
        <div class="w-7 h-7 rounded-full flex items-center justify-center text-xs font-semibold shrink-0 ${e<W.step||e===W.step?`bg-fc-green text-white`:`bg-fc-offwhite text-fc-slate/50 border border-fc-line`}">${e<W.step?`<i data-lucide="check" class="w-3.5 h-3.5"></i>`:e}</div>
        ${e<4?`<div class="h-0.5 flex-1 ${e<W.step?`bg-fc-green`:`bg-fc-line`}"></div>`:``}
      </div>`).join(``)}
  </div>
  <p class="text-xs uppercase tracking-wide text-fc-green font-semibold mb-4">Step ${W.step} of 4 &middot; ${Ce(W.step)}</p>`}function Te(){let e=W.customer;return`
  <div class="space-y-4">
    <div>
      <label class="block text-sm font-medium mb-1.5">Name</label>
      <input data-field="name" value="${e.name}" class="w-full border border-fc-line rounded-xl px-4 py-2.5 text-sm outline-none focus:border-fc-green" />
    </div>
    <div>
      <label class="block text-sm font-medium mb-1.5">Email</label>
      <input data-field="email" type="email" value="${e.email}" class="w-full border border-fc-line rounded-xl px-4 py-2.5 text-sm outline-none focus:border-fc-green" />
    </div>
    <div>
      <label class="block text-sm font-medium mb-1.5">Mobile Number</label>
      <input data-field="mobile" value="${e.mobile}" class="w-full border border-fc-line rounded-xl px-4 py-2.5 text-sm outline-none focus:border-fc-green" />
    </div>
  </div>`}function Ee(){let e=W.address;return`
  <div class="space-y-4">
    <div>
      <label class="block text-sm font-medium mb-1.5">Address</label>
      <textarea data-field="line1" rows="2" class="w-full border border-fc-line rounded-xl px-4 py-2.5 text-sm outline-none focus:border-fc-green resize-none">${e.line1}</textarea>
    </div>
    <div class="grid grid-cols-2 gap-4">
      <div>
        <label class="block text-sm font-medium mb-1.5">City</label>
        <input data-field="city" value="${e.city}" class="w-full border border-fc-line rounded-xl px-4 py-2.5 text-sm outline-none focus:border-fc-green" />
      </div>
      <div>
        <label class="block text-sm font-medium mb-1.5">State</label>
        <input data-field="state" value="${e.state}" class="w-full border border-fc-line rounded-xl px-4 py-2.5 text-sm outline-none focus:border-fc-green" />
      </div>
    </div>
    <div>
      <label class="block text-sm font-medium mb-1.5">Pincode</label>
      <input data-field="pincode" value="${e.pincode}" class="w-full border border-fc-line rounded-xl px-4 py-2.5 text-sm outline-none focus:border-fc-green" />
    </div>
  </div>`}function De(){let e=W.product,t=e.price?`₹${Number(e.price).toLocaleString(`en-IN`)}`:`Contact for Price`;return`
  <div class="flex gap-4 mb-5">
    <img src="${e.images[0]}" class="w-20 h-20 rounded-xl object-cover border border-fc-line shrink-0" alt="${e.name}" />
    <div>
      <div class="font-display font-semibold">${e.name}</div>
      <div class="text-sm text-fc-slate/60">${t}</div>
    </div>
  </div>
  <div class="space-y-4">
    <div>
      <label class="block text-sm font-medium mb-1.5">Quantity</label>
      <div class="flex items-center gap-3">
        <button data-qty="dec" type="button" class="w-9 h-9 rounded-lg border border-fc-line flex items-center justify-center hover:border-fc-green">−</button>
        <span class="w-8 text-center font-medium" id="qty-value">${W.quantity}</span>
        <button data-qty="inc" type="button" class="w-9 h-9 rounded-lg border border-fc-line flex items-center justify-center hover:border-fc-green">+</button>
      </div>
    </div>
    <div>
      <label class="block text-sm font-medium mb-1.5">Selected Configuration</label>
      <select data-field="configuration" class="w-full border border-fc-line rounded-xl px-4 py-2.5 text-sm outline-none focus:border-fc-green">
        ${e.specifications.map(e=>`<option value="${e.label}: ${e.value}" ${W.configuration===`${e.label}: ${e.value}`?`selected`:``}>${e.label}: ${e.value}</option>`).join(``)}
      </select>
    </div>
  </div>`}function Oe(){return W.paymentStage===`demo-processing`?`
    <div class="flex flex-col items-center justify-center py-10 text-center">
      <div class="w-10 h-10 border-4 border-fc-green/20 border-t-fc-green rounded-full animate-spin mb-4"></div>
      <p class="text-sm text-fc-slate/60">Processing demo payment…</p>
    </div>`:W.paymentStage===`demo-done`?`
    <div class="flex flex-col items-center justify-center py-6 text-center">
      <div class="w-14 h-14 rounded-full bg-fc-greenlight flex items-center justify-center mb-4">
        <i data-lucide="check" class="w-7 h-7 text-fc-green"></i>
      </div>
      <p class="font-display font-semibold mb-1">Demo Payment Complete</p>
      <p class="text-sm text-fc-slate/60">This is a simulated payment — no real transaction has occurred.</p>
    </div>`:W.paymentStage===`visit`?`
    <div class="text-center py-6">
      <div class="w-14 h-14 rounded-full bg-fc-greenlight flex items-center justify-center mx-auto mb-4">
        <i data-lucide="map-pin" class="w-7 h-7 text-fc-green"></i>
      </div>
      <p class="font-display font-semibold mb-1">Prefer to visit us?</p>
      <p class="text-sm text-fc-slate/60 mb-4">We'll hold your purchase code and confirm details when you visit.</p>
      <a href="#/about" class="inline-block text-sm font-medium border border-fc-line rounded-xl px-4 py-2 hover:border-fc-green hover:text-fc-green">View Company Details</a>
    </div>`:`
  <div class="space-y-3">
    ${[{id:`Cash on Delivery`,icon:`banknote`,desc:`Pay when your product is delivered.`},{id:`Online Payment`,icon:`credit-card`,desc:`Secure online payment.`},{id:`Visit the Company`,icon:`map-pin`,desc:`Prefer to visit us?`}].map(e=>`
      <button type="button" data-payment="${e.id}" class="w-full text-left flex items-center gap-4 border rounded-xl p-4 transition-colors ${W.paymentMethod===e.id?`border-fc-green bg-fc-greenlight/50`:`border-fc-line hover:border-fc-green/50`}">
        <div class="w-10 h-10 rounded-lg bg-white border border-fc-line flex items-center justify-center shrink-0">
          <i data-lucide="${e.icon}" class="w-5 h-5 text-fc-green"></i>
        </div>
        <div class="flex-1">
          <div class="font-medium text-sm">${e.id}</div>
          <div class="text-xs text-fc-slate/60">${e.desc}</div>
        </div>
        <div class="w-5 h-5 rounded-full border-2 ${W.paymentMethod===e.id?`border-fc-green bg-fc-green`:`border-fc-line`} flex items-center justify-center shrink-0">
          ${W.paymentMethod===e.id?`<div class="w-2 h-2 rounded-full bg-white"></div>`:``}
        </div>
      </button>`).join(``)}
  </div>`}function ke(){return W.step===4&&W.paymentMethod===`Online Payment`&&W.paymentStage===`select`?`
    <button data-action="back" class="flex-1 border border-fc-line font-medium py-2.5 rounded-xl hover:border-fc-green">Back</button>
    <button data-action="pay-demo" class="flex-1 bg-fc-green text-white font-medium py-2.5 rounded-xl hover:bg-fc-greendark">Complete Demo Payment</button>`:W.step===4&&(W.paymentStage===`demo-done`||W.paymentMethod&&W.paymentMethod!==`Online Payment`)?`
    <button data-action="back" class="flex-1 border border-fc-line font-medium py-2.5 rounded-xl hover:border-fc-green">Back</button>
    <button data-action="confirm" class="flex-1 bg-fc-green text-white font-medium py-2.5 rounded-xl hover:bg-fc-greendark">Confirm Purchase</button>`:W.step===4?`
    <button data-action="back" class="flex-1 border border-fc-line font-medium py-2.5 rounded-xl hover:border-fc-green">Back</button>
    <button data-action="next" disabled class="flex-1 bg-fc-green/40 cursor-not-allowed text-white font-medium py-2.5 rounded-xl">Select a payment method</button>`:`
    ${W.step>1?`<button data-action="back" class="flex-1 border border-fc-line font-medium py-2.5 rounded-xl hover:border-fc-green">Back</button>`:`<div class="flex-1"></div>`}
    <button data-action="next" class="flex-1 bg-fc-green text-white font-medium py-2.5 rounded-xl hover:bg-fc-greendark">Continue</button>`}function U(){let e=document.getElementById(`getcode-modal-root`);e||(e=document.createElement(`div`),e.id=`getcode-modal-root`,document.body.appendChild(e));let t=W.step===1?Te():W.step===2?Ee():W.step===3?De():Oe();e.innerHTML=`
  <div class="fixed inset-0 z-[70] flex items-end sm:items-center justify-center">
    <div class="absolute inset-0 bg-black/50 modal-backdrop" data-close></div>
    <div class="modal-panel relative bg-white w-full sm:max-w-md sm:rounded-2xl rounded-t-3xl max-h-[92vh] overflow-y-auto thin-scroll">
      <div class="sticky top-0 bg-white border-b border-fc-line px-6 pt-5 pb-4 flex items-center justify-between">
        <h2 class="font-display font-semibold text-lg">Get Your Farm Craft Purchase Code</h2>
        <button data-close aria-label="Close" class="w-8 h-8 rounded-full hover:bg-fc-offwhite flex items-center justify-center">
          <i data-lucide="x" class="w-5 h-5"></i>
        </button>
      </div>
      <div class="px-6 pt-5">
        ${we()}
        ${t}
      </div>
      <div class="px-6 py-5 flex gap-3 mt-2">
        ${ke()}
      </div>
    </div>
  </div>`,C(),Me(e)}function Ae(e){e.querySelectorAll(`[data-field]`).forEach(e=>{let t=e.getAttribute(`data-field`);W.step===1&&(W.customer[t]=e.value),W.step===2&&(W.address[t]=e.value),W.step===3&&t===`configuration`&&(W.configuration=e.value)})}function je(){if(W.step===1){let{name:e,email:t,mobile:n}=W.customer;if(!e.trim()||!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(t)||!n.trim())return w(`Please fill in all customer details correctly`,{type:`error`}),!1}if(W.step===2){let{line1:e,city:t,state:n,pincode:r}=W.address;if(!e.trim()||!t.trim()||!n.trim()||!r.trim())return w(`Please complete the delivery address`,{type:`error`}),!1}return!0}function Me(e){e.querySelectorAll(`[data-close]`).forEach(e=>e.addEventListener(`click`,H)),e.querySelectorAll(`[data-qty]`).forEach(t=>{t.addEventListener(`click`,()=>{let n=t.getAttribute(`data-qty`);W.quantity=Math.max(1,W.quantity+(n===`inc`?1:-1)),e.querySelector(`#qty-value`).textContent=W.quantity})}),e.querySelectorAll(`[data-payment]`).forEach(e=>{e.addEventListener(`click`,()=>{W.paymentMethod=e.getAttribute(`data-payment`),W.paymentStage=W.paymentMethod===`Visit the Company`?`visit`:`select`,U()})}),e.querySelector(`[data-action="back"]`)?.addEventListener(`click`,()=>{if(W.step===4&&W.paymentStage!==`select`){W.paymentStage=`select`,W.paymentMethod=``,U();return}W.step=Math.max(1,W.step-1),U()}),e.querySelector(`[data-action="next"]`)?.addEventListener(`click`,()=>{Ae(e.querySelector(`.modal-panel`)),je()&&(W.step=Math.min(4,W.step+1),U())}),e.querySelector(`[data-action="pay-demo"]`)?.addEventListener(`click`,()=>{W.paymentStage=`demo-processing`,U(),setTimeout(()=>{W.paymentStage=`demo-done`,U()},1100)}),e.querySelector(`[data-action="confirm"]`)?.addEventListener(`click`,()=>{_.saveAddress(W.address);let e=v.create({customer:W.customer,address:W.address,product:{id:W.product.id,name:W.product.name,slug:W.product.slug},quantity:W.quantity,configuration:W.configuration,paymentMethod:W.paymentMethod,total:W.product.price?W.product.price*W.quantity:null});H(),w(`Purchase code generated!`),window.location.hash=`#/success/${e.orderId}`})}var W,Ne=e((()=>{u(),S(),P(),W=null}));function Pe(e){let t=encodeURIComponent(e||`Hi Farm Craft, I have a question about your products.`);return`https://wa.me/${s.whatsapp}?text=${t}`}function Fe(e){let t=e.toLowerCase();for(let e of Q)if(e.keywords.some(e=>t.includes(e)))return e.reply;return $}function Ie(e){let t=e.role===`user`;return`
  <div class="flex ${t?`justify-end`:`justify-start`}">
    <div class="max-w-[82%] px-3.5 py-2.5 rounded-2xl text-sm leading-relaxed ${t?`bg-fc-green text-white rounded-br-md`:`bg-fc-offwhite text-fc-charcoal rounded-bl-md border border-fc-line`}">${e.text}</div>
  </div>`}function Le(){return`
  <div class="flex justify-start" id="help-typing">
    <div class="bg-fc-offwhite border border-fc-line rounded-2xl rounded-bl-md px-4 py-3 flex items-center gap-1.5">
      <span class="help-dot"></span><span class="help-dot"></span><span class="help-dot"></span>
    </div>
  </div>`}function Re(){return`
  <div id="help-panel" class="fixed z-[90] bg-white shadow-soft border border-fc-line flex flex-col
    inset-0 sm:inset-auto sm:bottom-24 sm:right-6 sm:w-[380px] sm:h-[560px] sm:rounded-3xl help-panel-enter overflow-hidden">
    <div class="shrink-0 bg-fc-charcoal text-white px-5 py-4 flex items-center justify-between">
      <div class="flex items-center gap-3">
        <div class="w-9 h-9 rounded-full bg-fc-green flex items-center justify-center shrink-0">
          <i data-lucide="sparkles" class="w-4.5 h-4.5"></i>
        </div>
        <div>
          <div class="font-display font-semibold text-sm leading-tight">Farm Craft Copilot</div>
          <div class="text-[11px] text-white/55 flex items-center gap-1.5"><span class="w-1.5 h-1.5 rounded-full bg-fc-green inline-block"></span>Instant answers, frontend demo</div>
        </div>
      </div>
      <button id="help-close" aria-label="Close help" class="w-8 h-8 rounded-full hover:bg-white/10 flex items-center justify-center shrink-0">
        <i data-lucide="x" class="w-5 h-5"></i>
      </button>
    </div>

    <div id="help-messages" class="flex-1 overflow-y-auto thin-scroll px-4 py-4 space-y-3 bg-fc-paper">
      ${J.map(Ie).join(``)}
      ${X?Le():``}
    </div>

    <div class="shrink-0 border-t border-fc-line px-4 py-3 bg-white">
      <div class="flex gap-2 overflow-x-auto pb-3 -mx-1 px-1 thin-scroll">
        ${Z.map(e=>`<button data-quick="${e.query.replace(/"/g,`&quot;`)}" class="shrink-0 text-xs font-medium border border-fc-line rounded-full px-3 py-1.5 hover:border-fc-green hover:text-fc-green transition-colors whitespace-nowrap">${e.label}</button>`).join(``)}
      </div>
      <form id="help-form" class="flex items-center gap-2 mb-2.5">
        <input id="help-input" type="text" placeholder="Ask about products, orders, delivery…"
          class="flex-1 bg-fc-offwhite border border-fc-line rounded-full px-4 py-2.5 text-sm outline-none focus:border-fc-green transition-colors" autocomplete="off" />
        <button type="submit" aria-label="Send" class="w-10 h-10 shrink-0 rounded-full bg-fc-green text-white flex items-center justify-center hover:bg-fc-greendark transition-colors">
          <i data-lucide="send" class="w-4 h-4"></i>
        </button>
      </form>
      <a href="${Pe()}" target="_blank" rel="noopener noreferrer"
        class="flex items-center justify-center gap-2 w-full text-sm font-medium py-2.5 rounded-xl text-white transition-colors" style="background:#25D366;">
        <i data-lucide="message-circle" class="w-4 h-4"></i> Chat on WhatsApp
      </a>
    </div>
  </div>`}function ze(){return`
  <button id="help-fab" aria-label="Open Help / AI Copilot"
    class="fixed z-[90] right-5 bottom-24 lg:bottom-6 w-14 h-14 rounded-full bg-fc-green text-white shadow-soft flex items-center justify-center hover:bg-fc-greendark transition-colors help-fab-pulse">
    <i data-lucide="help-circle" class="w-6 h-6"></i>
  </button>`}function Be(){window.lucide&&window.lucide.createIcons()}function Ve(){let e=document.getElementById(`help-messages`);e&&(e.scrollTop=e.scrollHeight)}function G(){let e=document.getElementById(`help-widget-root`);e&&(e.innerHTML=`${Y?Re():``}${ze()}`,Be(),Ue(e),Y&&Ve())}function K(e){let t=e.trim();if(!t)return;J.push({role:`user`,text:He(t)}),X=!0,G();let n=500+Math.random()*400;setTimeout(()=>{X=!1,J.push({role:`assistant`,text:Fe(t)}),G()},n)}function He(e){let t=document.createElement(`div`);return t.textContent=e,t.innerHTML}function Ue(e){e.querySelector(`#help-fab`)?.addEventListener(`click`,()=>{Y=!0,G()}),e.querySelector(`#help-close`)?.addEventListener(`click`,()=>{Y=!1,G()}),e.querySelectorAll(`[data-quick]`).forEach(e=>{e.addEventListener(`click`,()=>K(e.getAttribute(`data-quick`)))});let t=e.querySelector(`#help-form`),n=e.querySelector(`#help-input`);t?.addEventListener(`submit`,e=>{e.preventDefault(),n.value.trim()&&(K(n.value),n.value=``)}),e.querySelectorAll(`#help-messages a[href^="#/"]`).forEach(e=>{e.addEventListener(`click`,()=>{Y=!1,G()})})}function q(){if(document.getElementById(`help-widget-root`))return;let e=document.createElement(`div`);e.id=`help-widget-root`,document.body.appendChild(e),J=[{role:`assistant`,text:`Hi! I'm the Farm Craft Copilot 👋 Ask me about products, orders, delivery, payments or returns — or use the quick options below.`}],G()}var J,Y,X,Z,Q,$,We=e((()=>{u(),J=[],Y=!1,X=!1,Z=[{label:`Our products`,query:`What products do you sell?`},{label:`Track my order`,query:`How do I track my order?`},{label:`Delivery info`,query:`How does delivery work?`},{label:`Payment options`,query:`What payment methods do you accept?`},{label:`Returns & support`,query:`What is your return policy?`}],Q=[{keywords:[`product`,`catalog`,`machine`,`machinery`,`what do you sell`,`range`,`sell`,`grain`],reply:`Farm Craft's range covers the full grain handling chain: Grain Transferring pipes &amp; motor heads, Grain Collecting machines, Grain Bagging attachments, Grain Handling systems, Agricultural Machinery and Pipes &amp; Accessories. Open the <a href="#/shop" class="text-fc-green underline font-medium">Products</a> page to browse by category, or the <a href="#/services" class="text-fc-green underline font-medium">Services</a> page to see how we help you configure the right setup.`},{keywords:[`order`,`purchase code`,`my order`,`track`,`status`,`where is my`],reply:`You can see every order and its purchase code under <a href="#/orders" class="text-fc-green underline font-medium">My Orders</a> (login required). Each order shows its status, quantity, payment method and a downloadable invoice.`},{keywords:[`deliver`,`delivery`,`shipping`,`how long`,`dispatch`,`arrive`],reply:`After you get a purchase code, our team confirms delivery details directly with you based on your address and the product's configuration. You can track the order status any time under My Orders.`},{keywords:[`pay`,`payment`,`cod`,`cash`,`online payment`,`upi`,`card`],reply:`We support three payment options during "Get a Code": Cash on Delivery, Online Payment (demo), and Visit the Company to pay in person. You'll pick one in the last step of the purchase flow.`},{keywords:[`return`,`refund`,`warranty`,`replace`,`exchange`,`cancel`],reply:`For returns, replacements or warranty questions, please share your purchase code or order ID with our team on WhatsApp or by phone — we'll sort out next steps directly with you.`},{keywords:[`wishlist`,`favorite`,`favourite`,`heart`,`save product`,`saved`],reply:`Tap the heart icon on any product to save it — it'll show up on your <a href="#/wishlist" class="text-fc-green underline font-medium">Wishlist</a> page and stays saved as you browse.`},{keywords:[`invoice`,`bill`,`receipt`,`download invoice`],reply:`Every order has a downloadable invoice with our logo, your order details and totals — find the "Download Invoice" button on the order success page or any order's detail page under My Orders.`},{keywords:[`service`,`installation`,`setup`,`configure`,`configuration`,`maintenance`,`support`,`after sales`],reply:`Our <a href="#/services" class="text-fc-green underline font-medium">Services</a> page covers installation guidance, custom machinery configuration and after-sales support — take a look, or message us on WhatsApp with your requirement.`},{keywords:[`price`,`cost`,`how much`,`quote`],reply:`Pricing depends on configuration (motor size, pipe length, etc.), so many listings show "Contact for Price." Start the "Get a Code" flow on a product, or message us on WhatsApp for a quick quote.`},{keywords:[`contact`,`call`,`phone`,`email`,`human`,`agent`,`talk to someone`,`representative`],reply:`You can reach Farm Craft at ${s.phone} or ${s.email}, or use the WhatsApp button below for the fastest response. Our <a href="#/contact" class="text-fc-green underline font-medium">Contact</a> page also has an enquiry form.`},{keywords:[`login`,`log in`,`sign in`,`account`,`demo credential`],reply:`Use the demo credentials shown on the <a href="#/login" class="text-fc-green underline font-medium">Login</a> page, or tap "Login as Customer" to jump straight in — no real account needed for this demo storefront.`},{keywords:[`hi`,`hello`,`hey`,`good morning`,`good evening`],reply:`Hello! I'm the Farm Craft Copilot. I can help with products, orders, delivery, payments, returns and more — what would you like to know?`},{keywords:[`thank`,`thanks`,`thank you`],reply:`You're welcome! Anything else I can help with?`}],$=`I don't have a ready answer for that yet, but our team can help directly — tap "Chat on WhatsApp" below, or visit the <a href="#/contact" class="text-fc-green underline font-medium">Contact</a> page.`}));t((()=>{P(),be(),S(),Ne(),We();var e=document.getElementById(`app`);function t(){let[e,t]=(window.location.hash.replace(/^#/,``)||`/`).split(`?`),n=Object.fromEntries(new URLSearchParams(t||``));return{path:e.replace(/\/$/,``)||`/`,params:n}}var n=new Set([`/login`]);function r(e,{chrome:t=!0}={}){return t?`${re()}<main class="min-h-[60vh]">${e}</main>${A()}${k()}`:e}function i({resetScroll:o=!0}={}){let{path:s,params:c}=t();o&&window.scrollTo({top:0,behavior:`instant`in document.documentElement.style?`instant`:`auto`});let l=``,u=null,d=!n.has(s);if(s===`/login`)l=ae(),u=()=>oe(i);else if(s===`/`)l=se(),u=()=>M();else if(s===`/shop`)l=ce(c),u=()=>le(c);else if(s.startsWith(`/product/`))l=ue(s.replace(`/product/`,``)),u=()=>de();else if(s===`/wishlist`)l=fe();else if(s===`/orders`)l=pe(),u=()=>z();else if(s.startsWith(`/order/`))l=I(s.replace(`/order/`,``)),u=()=>z();else if(s.startsWith(`/success/`)){let e=s.replace(`/success/`,``),t=v.byId(e);l=t?R(t):`<div class="max-w-xl mx-auto px-4 py-24 text-center">Order not found.</div>`,u=()=>z()}else s===`/profile`?(l=B(),u=()=>me()):s===`/about`?l=he():s===`/services`?(l=ge(),u=()=>M()):s===`/contact`?(l=ve(),u=()=>ye()):l=`<div class="max-w-xl mx-auto px-4 py-32 text-center">
      <h1 class="font-display text-2xl font-semibold mb-2">Page not found</h1>
      <a href="#/" class="text-fc-green font-medium">Back to Home</a>
    </div>`;e.innerHTML=r(l,{chrome:d}),C(),d&&ie(i),u&&u(),a()}function a(){e.querySelectorAll(`[data-getcode]`).forEach(e=>{e.addEventListener(`click`,t=>{t.preventDefault(),Se(e.getAttribute(`data-getcode`))})}),e.querySelectorAll(`[data-wishlist]`).forEach(e=>{e.addEventListener(`click`,t=>{t.preventDefault(),t.stopPropagation();let n=e.getAttribute(`data-wishlist`);w(_.toggleWishlist(n).includes(n)?`Added to wishlist`:`Removed from wishlist`),i({resetScroll:!1})})})}window.addEventListener(`hashchange`,()=>i()),window.addEventListener(`DOMContentLoaded`,()=>i()),i(),q()}))();