DROP TABLE IF EXISTS Users;

CREATE TABLE IF NOT EXISTS Users (
  UserId INTEGER PRIMARY KEY,
  UserName TEXT,
  Email TEXT,
  HashedPassword TEXT,
  Salt TEXT,
  CreatedAt TEXT,
  ModifiedAt TEXT
);

INSERT INTO Users (UserId, UserName, Email, CreatedAt, ModifiedAt) VALUES (1, 'jsmith', 'john.smith@test.com', strftime('%s', 'now'), strftime('%s', 'now'));