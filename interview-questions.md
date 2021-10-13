# ASSESSMENT 5: Interview Practice Questions
Answer the following questions.

First, without external resources. Challenge yourself to answer from memory.

Then, research the question to expand on your answer. Even if you feel you have answered the question completely on your own, there is always something more to learn. Write your researched answer in your OWN WORDS.

1. Are (most) Ruby methods accessors or mutators?

  Your answer: Most Ruby methods are accessors. They save time from re-writing the methods repeatedly and keep the code more organized. I was easily able to access my instance variables in a t-shirt order app. Using the attr_accessor I could set values from outside of the class, rather than changing the code in each method. I could simply input the desired store, style and order number from outside of the class OrderApp.

  Researched answer:
  Methods in Ruby are accessors by default. Accessor method is an instance method that gets (getter method) or sets (setter method) the value of a property of an object. It's a method of getting the instance variable from outside of the class. The variable can now be referenced as behavior only once, rather than many times throughout the coding. This makes the code is reusable and flexible because you only need to make the change in one place (accessor method) rather than in many. Accessor methods have other methods that fall under them such as attribute_reader, attribute_writer and attribute_accessor.



2. What is a block in Ruby?

  Your answer:
  A block in Ruby refers to a block of code that can be executed. When creating a block of code, I begin with the keyword 'do', add the keyword 'end' after the last line of code, and wrap the code in curly braces {}. Each and map methods are widely used methods to invoke a block.

  Researched answer:
  A block includes chunks of code. Blocks are anonymous functions that can be passed into a method and can have multiple parameters.  



3. What is a gem?

  Your answer: A library of code that you can use to run Ruby on your computer. From what I understand, there are developers that still don't fully understand how gems work, even after being in the industry for some time. I hope to dive deeper into this topic as I begin my journey in learning how to develop Rails applications, where gem knowledge becomes critical.

  Researched answer: Gem is a library or snippet of code functionality. Gems are a package manager that standardized the format for sharing Ruby programs and libraries. It is a way to easily share code.



4. What is a relational database? Are there other kinds of databases?

  Your answer: A relational database contains many tables (that have their data stored in rows and columns) that are linked to each other. Excel acts as a relational database. I used Excel for many years when I was a financial analyst and senior consultant. I was able to create columns and rows in Excel that housed all my data, from which I could extrapolate information to feed into my graphs, charts and scenario planning models. Whenever the data changed within those cells, my graphs, charts and scenario models would also adjust accordingly.

  Researched answer: A relational database contains tables made of rows and columns, and these tables have relationships to each other. Each row represents an instance of a class and the columns represent the instance variables. Excel and Google Sheets are examples of relational databases. Relational databases work well with structured data. Relational databases are also called SQL (structured query language) databases. Object-relational model is another kind of database. PostgreSQL is an example of this type of model. Non-relational databases include document-orientated databases, key-value stores, wide-column stores and graph stores. These are becoming more popular since not all data fits into a structured column/row set-up, and needs more flexibility.



5. What are primary keys? Why are they important?

  Your answer: Primary keys are a way to identify each row in a table. The key is unique for that instance of the class. There may be two Lillian (first name) McGillivray (last name) in a table, however Lillian McGillivray that lives in San Diego (city) will have a unique primary key that is different than Lillian McGillivray that lives in Austin (city). There would be no confusion regarding which Lillian we are referring to thanks to the primary key.

  Researched answer: There is only one primary key allowed per row in a database. This is to ensure uniqueness. It allows you to quickly pull out data within a table. A customer number is an example of a primary key that is assigned to different customers.



## Looking Ahead: Terms for Next Week
Research and define the following terms to the best of your ability.

1. RESTful routes: It is a naming pattern in Rails that uses a set of standards in different languages to create re-usable routes.

2. JSON: JSON stands for Javascript Object Notation and is a format for storing and transporting data, most often when data is being sent from a server to a web page. JSON syntax is identical to code for JavaScript objects (name/value pairs), but the JSON format is text only.

3. ERB: ERM stands for Embedded Ruby. It is a template engine that Ruby embeds into HTML so that the Ruby language can be used with all its features inside of HTML code. Rails uses ERB to render views. The ERB files use the .html.erb extension for Rails.

4. Params: Params is short for the word parameter, which is a key-value pair inside a HTTP request. There are user supplied params, routing params, and default params.

5. API: API stands for Application Programming Interface. It is a software intermediary that allows two applications to talk to each other. The API is a messenger that delivers your request to the provider that you're requesting it from and then delivers the request back to you. You are using an API when you use the weather app, Instagram or Facebook.
