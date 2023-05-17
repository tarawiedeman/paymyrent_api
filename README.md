###Welcome to PayMyRent! 

This application allows renters to pay their individual portion of rent and utilities each month using credit card. This prevents renters that share accomodation from having to aggregate rent amongst a group; it also eliminates the need to use outdated payment methods like bank drafts, cheques or even e-transfers. Landlords using PayMyRent get the benefit of having a centralized place for their rent payments, as well as automated receipting for their tenants. 

I created PayMyRent as my capstone project for BrainStation's Software Development bootcamp. In two weeks we needed to develop a full-stack application utilizing the various technologies we learned through our studies. PayMyRent's front-end was developed with React and styled with SaSS; it also leverages axios. The back-end runs an Express server on Node and uses Knex to create and connect to a database. The transactions facilitated on this site are done through stripe. Stripe handles the transaction itself and ensures security and privacy of transaction information, which is never sent or transmitted to or through this application. 

This application is fully responsive from mobile to desktop viewports with dynamic data generation, and the back-end runs Express on top of NodeJS supporting database CRUD operations. Sample data has been prepopulated within the datebase for various properties, suites, tenants and rent amounts. The login functionality of the application is fully operational and any tenant in the tenant table can be created as a user (via create account); this will add the user to the users table, and allow for successful authentication.

Creating this project was fun and a great way to utilize the skills I learned to develop a fully functioning full-stack application.

Thanks for checking out my work! 


##Tech stack used: 
-React, SaSS, Axios (front-end)
-Node, Express, Knex, Stripe API (back-end)

##API references
I used Stripe's API to allow the PayMyRent application to facilitate transactions. The npm package is installed by npm install stripe --save https://www.npmjs.com/package/stripe. 

This API allowed me to create a Stripe checkout session and redirect the user to a stripe checkoutpage. 

##Lessons learned & next steps

Next I would try to build a utilities table in my database (again) so I could bring in utilities data per tenant dynamically. I did actually do this successfully but when I dropped the table to adjust a column name, the entire knex migration process was corrupted and I didn't have time to drop my entire database and start over. 

I would also try to replace stripe with another payment provider that was better suited to the needs of this product. Stripe is built for retail businesses with products that have set prices. Ideally I want to have tenants set up recurring rent payments via credit card; the only option that could support this was Stripe Subscriptions, but this would mean that any tenant could see multiple suscription options / rental prices for other suites and this is not what a landlord would want. In short, in future iterations I'd switch to a payment provider that could support the admin creating subscription packages and assigning them to specific users only, and then having the user/customer subscibe to their package. 


###Usage instructions: 

Please ensure you have Node.js and npm installed to run this application. Follow these steps to run a local instance of PayMyRent:

1. Download or clone these repositories and save them to a new parent folder: 

[PayMyRent](https://github.com/tarawiedeman/paymyrent) AND [PayMyRentAPI](https://github.com/tarawiedeman/paymyrent_api)

 
2. Server side folder and setup. Install the required dependencies: 
`cd ./server`
`npm install`

3. Set up envionrment variables. 
These are included in the .env.sample file and can be copied to a new .env file. 

4. Create the database and import content into it. In the server folder you need to first create the property_management database using the SQL CLI in your code editor. After authenticating into MySQL Workbench via the CLI, run the command `CREATE DATABASE property_management`. Check your MySQL Workbench application to see the database is present. Next you'll need to run the migration file and seed file to create the relevant tables in the database and seed them with data. Use the commands `npm run migrate` and `npm run seed`.

5. Run the server on http://localhost:8000/ using the command `node server.js`.

6. Client side folder and setup. Install the required dependencies: 
`cd ./server`
`npm install`

7. Start the React application using `npm start`. The front-end application runs on http://localhost:3000/


8. Have fun exploring the site! Note that the Stripe payment pages are linked to a test account that can facilitate test transactions. If you'd like to try a test transaction you can refer to this page for more info on test card data to use: https://stripe.com/docs/testing. 





