Tools:

- Node.js – Run time
- Express - API
- Psql – Database
- Prisma – Database ORM
- AWS for hosting

Database design:

1. Users table:

- id (integer): primary key, unique identifier for the user.
- first\_name (string): first name of the user.
- last\_name (string): last name of the user.
- email (string): email address of the user, unique.
- password (string): hashed password of the user.
- phone\_number (string): phone number of the user.
- created\_at (timestamp): timestamp for when the user was created.
- updated\_at (timestamp): timestamp for when the user was last updated.

1. Jobs table:

- id (integer): primary key, unique identifier for the job.
- client\_id (integer): foreign key, refers to the id in the Users table, indicating the client who created the job.
- title (string): title of the job.
- description (text): description of the job.
- clothing\_type (string): type of clothing for the job (e.g., Dress, Ethnic Wear - Sari / Blouse).
- location (string): location of the job.
- budget (decimal, nullable): optional budget for the job.
- created\_at (timestamp): timestamp for when the job was created.
- updated\_at (timestamp): timestamp for when the job was last updated.

1. Quotations table:

- id (integer): primary key, unique identifier for the quotation.
- job\_id (integer): foreign key, refers to the id in the Jobs table, indicating the job the quotation is for.
- maker\_id (integer): foreign key, refers to the id in the Users table, indicating the maker who sent the quotation.
- price (decimal): price proposed by the maker for the job.
- comments (text, nullable): optional comments from the maker about the quotation.
- created\_at (timestamp): timestamp for when the quotation was created.
- updated\_at (timestamp): timestamp for when the quotation was last updated.