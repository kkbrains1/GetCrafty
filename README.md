
://source.unsplash.com/

 GetCrafty
  CraftFixe
   
    
     Example Wireframe for mobile e-commerce
      
       https://www.behance.net/gallery/7360127/E-Commerce-wireframe-Concept-design
        
	 
	  
	   Product knowledge
	    
	     https://www.brewdog.com/uk/community/diy-dog & https://punkapi.com/ 
	      https://cervejaartesanalportuguesa.pt/cervejas/
	       https://loja.cervejamusa.com/
	        https://www.facebook.com/Sputnik-Craft-Beer-Bar-Lisbon-112049310161465/?ref=page_internal & https://untappd.com/v/sputnik-craft-beer/9345553
		 https://www.facebook.com/artesanalisbottleshop/?ref=page_internal
		  https://www.gourmetgiftbaskets.com/Beer-Gift-Baskets.asp
		   https://www.businessinsider.com/best-craft-beer-food-pairings-summer-2018-6
		    
		     REACT
		      
		       NavBar : 
		        - Sign In / Sign Up / Sign Out (My Account)
			 - Shopping Cart
			  -Home 
			   [wishlist: Hamburger Menu  /  Language Options for En/Pt / Social Login]
			    
			     Footer: 
			      - Contact
			       - FAQ (Shipping Costs, Returns Policy)
			        - Link to FB / Twitter / Insta
				 - Partners (Musa, AMO ...)
				  
				   Views:
				    - Home / Landing Page : title + brief intro to our webshop
				     - Craft Beers: List View
				      - Food to pair: List View
				       - Brewing kit: List View
				        (could be just 1 List View and create components to filter on product type for diff views)
					 - Single Item View (link each item to suggested items: craft beer to matched food pairing to brewing ingredients) » component= 
					  - Shopping Basket
					   - Checkout View / Payment
					    - Authenticaton sign-up
					     - Authenticaton sign-in
					      - MyAccount
					       - Past Orders List View
					        - Search Bar View
						 - Error
						   
						    » think about components / helpers / services 
						     
						      [Wish List:
						       - About Us Page
						        - Random Beer page]
							 
							  
							  Models: (MONGO)
							  User (customer and business / admin profile?)
							  Orders
							  Products
							  [Craft Beer / Food / Brewing Kit / (Gift Baskets)]

							  Routes (REST API):
							  "/api" +

							  Products:

							  GET "/product/list"
							  [GET "craftbeer/list" / GET "food/list" / GET "brewingkit/list" ]
							  GET "product/:id"

							  Orders:

							  POST - "/order" 
							  GET - "/order/list"

							  Authentication:
							   
							   POST - "/authentication/sign-in" 
							   POST - "/authentication/sign-up" 
							   POST - "/authentication/sign-out"

							   GET - "/authentication/me" 


							   APIs:
							   Stripe for payments
							   Cloudinary / Multer for file uploads
							   Brewdog for prototype beer/food pairing? » https://www.npmjs.com/package/punkapi-javascript-wrapper#getrandom

							   CRUD > still need edit + delete options


							   touch punkapi.json && curl https://punkapi.com/api/v2/beers -u c4ae17fcb0f44fccb93f5c8494732b72 >> punkapi.json && mongoimport --db brewdog --collection beers --jsonArray --file ./punkapi.json && rm ./punkapi.json


							   TO DO LIST:
							   2 user roles : buyer & seller
							   seller has access to add new products & edit / delete existing ones
							   buyer can only edit their user profile
							   ttps://source.unsplash.com/

 GetCrafty
 CraftFixe
 
 
 Example Wireframe for mobile e-commerce
 
 https://www.behance.net/gallery/7360127/E-Commerce-wireframe-Concept-design
 
 
 
 Product knowledge
 
 https://www.brewdog.com/uk/community/diy-dog & https://punkapi.com/ 
 https://cervejaartesanalportuguesa.pt/cervejas/
 https://loja.cervejamusa.com/
 https://www.facebook.com/Sputnik-Craft-Beer-Bar-Lisbon-112049310161465/?ref=page_internal & https://untappd.com/v/sputnik-craft-beer/9345553
 https://www.facebook.com/artesanalisbottleshop/?ref=page_internal
 https://www.gourmetgiftbaskets.com/Beer-Gift-Baskets.asp
 https://www.businessinsider.com/best-craft-beer-food-pairings-summer-2018-6
 
 REACT
 
 NavBar : 
 - Sign In / Sign Up / Sign Out (My Account)
 - Shopping Cart
 -Home 
 [wishlist: Hamburger Menu  /  Language Options for En/Pt / Social Login]
 
 Footer: 
 - Contact
 - FAQ (Shipping Costs, Returns Policy)
 - Link to FB / Twitter / Insta
 - Partners (Musa, AMO ...)
 
 Views:
 - Home / Landing Page : title + brief intro to our webshop
 - Craft Beers: List View
 - Food to pair: List View
 - Brewing kit: List View
 (could be just 1 List View and create components to filter on product type for diff views)
 - Single Item View (link each item to suggested items: craft beer to matched food pairing to brewing ingredients) » component= 
 - Shopping Basket
 - Checkout View / Payment
 - Authenticaton sign-up
 - Authenticaton sign-in
 - MyAccount
 - Past Orders List View
 - Search Bar View
 - Error
  
 » think about components / helpers / services 
 
 [Wish List:
 - About Us Page
 - Random Beer page]
 
 
Models: (MONGO)
User (customer and business / admin profile?)
Orders
Products
[Craft Beer / Food / Brewing Kit / (Gift Baskets)]

Routes (REST API):
"/api" +

Products:

GET "/product/list"
[GET "craftbeer/list" / GET "food/list" / GET "brewingkit/list" ]
GET "product/:id"

Orders:

POST - "/order" 
GET - "/order/list"

Authentication:
 
POST - "/authentication/sign-in" 
POST - "/authentication/sign-up" 
POST - "/authentication/sign-out"

GET - "/authentication/me" 


APIs:
Stripe for payments
Cloudinary / Multer for file uploads
Brewdog for prototype beer/food pairing? » https://www.npmjs.com/package/punkapi-javascript-wrapper#getrandom

CRUD > still need edit + delete options


touch punkapi.json && curl https://punkapi.com/api/v2/beers -u c4ae17fcb0f44fccb93f5c8494732b72 >> punkapi.json && mongoimport --db brewdog --collection beers --jsonArray --file ./punkapi.json && rm ./punkapi.json


TO DO LIST:
2 user roles : buyer & seller
seller has access to add new products & edit / delete existing ones
buyer can only edit their user profile
