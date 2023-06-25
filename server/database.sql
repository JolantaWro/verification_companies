CREATE DATABASE dbcompany;

--users

CREATE TABLE users(
  user_id UUID DEFAULT uuid_generate_v4(),
  user_name VARCHAR(255) NOT NULL,
  user_email VARCHAR(255) NOT NULL UNIQUE,
  user_password VARCHAR(255) NOT NULL,
  PRIMARY KEY (user_id)
);

--company 
--fix relation in table

CREATE TABLE companytable(
  company_id SERIAL,
  user_id UUID,
  company_name VARCHAR(255) NOT NULL,
  company_nip bigint NOT NULL,
  company_krs bigint NOT NULL,
  PRIMARY KEY (company_id),
  FOREIGN KEY (user_id) REFERENCES users(user_id)
);

--false user
8f1479ed-d81b-4c1c-86ab-3086466d754b
insert into users (user_name, user_email, user_password) values ('jolanta', 'jolanta@gmail.com', 'jolanta');
insert into companytable (user_id, company_name, company_nip, company_krs) values ('1fd37309-282f-4c82-9198-b0c616e182e4', 'Nestle Polska S.A.', 5270203968, 0000025166);
insert into companytable (user_id, company_name, company_nip, company_krs) values ('8f1479ed-d81b-4c1c-86ab-3086466d754b', 'Nestle Polska S.A.', 5270203968, 0000025166);
insert into companytable (user_id, company_name, company_nip, company_krs) values ('8f1479ed-d81b-4c1c-86ab-3086466d754b', 'EEEE S.A.', 0000000001, 0000025102);
SELECT u.user_name, c.company_name FROM users AS u LEFT JOIN companys AS c ON u.user_id = c.user_id WHERE u.user_id = '8f1479ed-d81b-4c1c-86ab-3086466d754b';