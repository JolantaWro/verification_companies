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

CREATE TABLE companys(
  company_id SERIAL,
  user_id UUID,
  company_name VARCHAR(255) NOT NULL,
  company_nip bigint NOT NULL UNIQUE,
  company_krs bigint NOT NULL UNIQUE,
  PRIMARY KEY (company_id),
  FOREIGN KEY (user_id) REFERENCES users(user_id)
);

--false user

insert into users (user_name, user_email, user_password) values ('jolanta', 'jolanta@gmail.com', 'jolanta');
insert into companys (user_id, company_name, company_nip, company_krs) values ('1fd37309-282f-4c82-9198-b0c616e182e4', 'Nestle Polska S.A.', 5270203968, 0000025166);