CREATE DATABASE onboarding;

CREATE TABLE users(
    user_id uuid PRIMARY KEY DEFAULT uuid_generate_v4(),
    user_name VARCHAR(200),
    user_password VARCHAR(200),
    user_email VARCHAR(200),
    user_first VARCHAR(200),
    user_last VARCHAR(200),
    user_telephone VARCHAR(,
    user_street VARCHAR(200),
    user_city VARCHAR(200),
    user_state VARCHAR(200),
    user_zip VARCHAR(50)
);

 * Form1 will collect username, password, and e-mail address.
  * Form2 will collect first name, last name, and telephone number.
  * Form3 will collect address (street address, city, state, zip).