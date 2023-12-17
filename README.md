# Number Systems Calculator
A number systems calculator that allows a user to input a number and select a base (Binary, Octal, Decimal, or Hexadecimal) from which the number is to be converted.

When the user submits the form, an HTTP GET request is made to a server running on `localhost:8000`. The server uses Django to convert the number from the selected base to all other bases and return the results.

## Run Django Server
1. In a new terminal, navigate to the `numbersystemscalculator` directory.
2. Once in the correct directory, run `python manage.py migrate`.
3. Then, run `python manage.py runserver`.
4. The server should now be running on `localhost:8000`.

## Run React App
1. In another new terminal, navigate to the `number-systems-calculator` directory.
2. Once in the directory, run `npm start`.
