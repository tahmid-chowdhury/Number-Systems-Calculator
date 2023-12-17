# Number Systems Calculator
A number systems calculator that allows a user to input a number and select a base (Binary, Octal, Decimal, or Hexadecimal) from which the number is to be converted.

When the user submits the form, an HTTP GET request is made to a server running on `localhost:8000`. The server uses Django to convert the number from the selected base to all other bases and return the results.
